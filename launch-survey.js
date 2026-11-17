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
 if(configured) form.action=endpoint;
 button.disabled=false;
 let inFlight=false,completed=false;
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
  if(location.protocol==='file:'){notify('To submit, open this page through a web server rather than a local file. You can also email your feedback to 19708088279jia@gmail.com. Nothing has been sent.','error');return;}
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
  // Native POST keeps service CAPTCHA and activation/confirmation screens intact.
  // We never claim email delivery or database storage from a local click.
  const outgoing=document.createElement('form');
  outgoing.method='POST';outgoing.action=endpoint;outgoing.hidden=true;
  for(const [name,value] of Object.entries(payload)){
   const input=document.createElement('input');input.type='hidden';input.name=name;input.value=String(value);outgoing.append(input);
  }
  document.body.append(outgoing);
  notify('Opening the form service. Complete its verification to send your feedback.','pending');
  outgoing.submit();
  outgoing.remove();
 });
})();
