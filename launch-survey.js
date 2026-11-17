'use strict';
(() => {
 const config=window.FEEDBACK_CONFIG || {};
 const form=document.querySelector('#feedback-form');
 const button=form.querySelector('[type=submit]');
 const status=document.querySelector('#feedback-status');
 const email=document.querySelector('#feedback-email');
 const consent=document.querySelector('#email-consent');
 const endpoint=String(config.endpoint || '').trim();
 const configured=/^https:\/\/formsubmit\.co\/[a-zA-Z0-9@._+-]+$/.test(endpoint);
 const availability=document.querySelector('#survey-availability');
 availability.hidden=false;
 availability.textContent='Your feedback is sent securely through FormSubmit. If it cannot connect, your answers will stay here.';
 if(configured) form.action=endpoint;
 button.disabled=false;
 let inFlight=false,completed=false;
 const backup=document.createElement('div');backup.className='feedback-backup';
 backup.innerHTML='<p>Having trouble submitting?</p><button type="button" class="feedback-copy">Copy my answers</button> <a class="feedback-email-link" href="mailto:19707088279jia@gmail.com">Email my answers</a><p class="backup-help">Opens your email app. Review and send the message yourself; your email address will be visible to us. This does not subscribe you to updates.</p>';
 form.append(backup);
 const answerText=()=>{
  const lines=['Eastern Bowl — Market Research Feedback'];
  form.querySelectorAll('input[type=radio]:checked').forEach(input=>lines.push(input.name+': '+input.closest('label').innerText.trim()));
  lines.push('Suggestions: '+(form.elements.suggestions?.value || ''),'Launch updates consent: '+consent.checked);
  if(consent.checked)lines.push('Email: '+email.value);
  lines.push('Submission ID: '+submissionId,'Client time: '+new Date().toISOString(),'Source parameters: '+JSON.stringify(sources));
  return lines.join('\n');
 };
 backup.querySelector('a').addEventListener('click',event=>{event.currentTarget.href='mailto:19707088279jia@gmail.com?subject='+encodeURIComponent('Eastern Bowl — Market Research Feedback')+'&body='+encodeURIComponent(answerText());});
 backup.querySelector('button').addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText(answerText());notify('Answers copied. Paste them into an email to 19707088279jia@gmail.com. Nothing has been sent automatically.','info');}
  catch{
   let text=backup.querySelector('textarea');
   if(!text){text=document.createElement('textarea');text.readOnly=true;text.setAttribute('aria-label','Answers to copy');backup.append(text);}
   text.value=answerText();text.focus();text.select();
   notify('Select and copy the answers below, then email them to 19707088279jia@gmail.com. Nothing has been sent automatically.','info');
  }
 });
 const submissionId=globalThis.crypto?.randomUUID?.() || `eb-${Date.now()}-${Math.random().toString(36).slice(2)}`;
 const permitted={order_days:['1-2','3-4','5-plus','unsure'],delivery_schedule:['daily','twice-weekly','either'],meal_plan:['standard','personalized','either','too-expensive','neither']};
 const sourceKeys=['utm_source','utm_medium','utm_campaign','utm_content','utm_term','utm_id','gclid','gbraid','wbraid','fbclid','msclkid','ttclid'];
 const params=new URLSearchParams(location.search);
 const sources={};
 sourceKeys.forEach(key=>{if(params.has(key))sources[key]=params.get(key).slice(0,500);});
 const notify=(message,state)=>{status.textContent=message;status.dataset.state=state;};
 consent.addEventListener('change',()=>{email.required=consent.checked;email.setCustomValidity('');});
 email.addEventListener('input',()=>email.setCustomValidity(''));
 form.addEventListener('submit',async event=>{
  event.preventDefault();
  if(inFlight || completed) return;
  if(!configured){notify('Feedback submissions are not open yet. Nothing has been sent or saved. Please check back soon.','error');return;}
  if(!form.reportValidity())return;
  if(location.protocol==='file:'){notify('To submit, open this page through a web server rather than a local file. You can also email your feedback to 19707088279jia@gmail.com. Nothing has been sent.','error');return;}
  if(form.elements._gotcha.value){notify('We could not accept this submission. Please refresh and try again.','error');return;}
  const values=new FormData(form),payload={};
  for(const [key,options] of Object.entries(permitted)){
   const value=values.get(key);
   if(!options.includes(value)){notify('Please select one answer for each of the three questions.','error');return;}
   payload[key]=value;
  }
  if(consent.checked && !email.value.trim()){email.setCustomValidity('Enter an email for launch updates, or uncheck the consent box to submit without one.');email.reportValidity();return;}
  Object.assign(payload,{submission_id:submissionId,form_version:'eastern-bowl-demand-v1',submitted_at_client:new Date().toISOString(),email_consent:consent.checked,consent_version:config.consentVersion || 'launch-updates-v1',consent_text:config.consentText || '',source_parameters:JSON.stringify(sources),page_name:location.pathname.split('/').pop() || 'index.html',_gotcha:''});
  Object.assign(payload,sources);
  payload.suggestions=String(values.get('suggestions') || '').trim().slice(0,2000);
  payload._subject='Eastern Bowl — Market Research Feedback';
  payload._template='table';
  payload._honey='';
  if(consent.checked){payload.email=email.value.trim();payload.consent_recorded_at=new Date().toISOString();}
  inFlight=true;button.disabled=true;button.textContent='Sending…';
  notify('Sending your feedback. This may take up to 15 seconds…','pending');
  const controller=new AbortController();
  const timeout=setTimeout(()=>controller.abort(),15000);
  try {
   const response=await fetch(endpoint.replace('https://formsubmit.co/','https://formsubmit.co/ajax/'),{
    method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},
    body:JSON.stringify(payload),signal:controller.signal
   });
   const result=await response.json();
   if(!response.ok || ![true,'true'].includes(result?.success))throw new Error('unconfirmed');
   if(/activat|confirm.{0,25}email|check.{0,25}inbox/i.test(String(result.message || ''))){
    notify('The form service requires the website owner to activate the receiving email. Delivery is not confirmed. Your answers are still here; please use the email option below.','error');
   }else{
    completed=true;
    notify('The form service accepted your feedback. Thank you! This confirms service acceptance, not delivery to an inbox.','success');
   }
  } catch(error) {
   notify('We could not confirm receipt'+(error.name==='AbortError'?' within 15 seconds':'')+'. Your answers are still here. You can copy them or email them below. Retrying may send a duplicate if the first request was received.','error');
  } finally {
   clearTimeout(timeout);inFlight=false;button.disabled=completed;
   button.textContent=completed?'Feedback Sent':'Submit Feedback';
  }
 });
})();
