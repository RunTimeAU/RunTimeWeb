import emailjs from '@emailjs/browser';


// @ts-ignore
export function sendEmail(psubject, pname, pemail, pmessage) {
  let data = {
    subject : psubject,
    name : pname,
    email : pemail,
    message : pmessage,
  };
  emailjs.init({ publicKey: 'L0u1JCcbIskfD9ORv' });

  return emailjs.send('service_6zocple', 'template_6d9nlop', data);
};
