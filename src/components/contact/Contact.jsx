import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kttu5es', 'template_08owlui', form.current, 'qsPiC_0rw7HJsqP_I')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>sadabjr047@gmail.com</h5>
              <a href="mailto:sadabjr047@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Sadab Ali</h5>
              <a href="https://www.facebook.com/sadab.ali.1042/" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+919559318323</h5>
              <a href="https://api.whatsapp.com/send?phone=+919559318323" target="_blank">Send a message</a>
          </article>

        </div>
        {/* END OD CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your Full name' required/>
            <input type="email" name="email" placeholder='Your Email' required/>
            <textarea name="message" cols="30" rows="7" placeholder='Your Message' required></textarea>
            <button type='sumbit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact