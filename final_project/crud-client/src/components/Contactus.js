import React from 'react';
import emailjs from 'emailjs-com';
//import './ContactUs.css';


export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('project_email', 'template_u980gnb' ,e.target, 'user_djX6769wqftIdrB2bOT8L')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
     <div>
    <div className="container">
    <form onSubmit={sendEmail}>
            <div className="row pt-4 mx-auto">
                <div className="col-8 pt-3 mx-auto">
                    <button type="submit" className="btn btn-info" value="Send Message">Send Message</button>
                </div>
                <div className="col-8 form-group mx-auto">
                    <input type="text" className="form-control" placeholder="From Name" name="from_name"/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="email" className="form-control" placeholder="From Email" name="from_email"/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="email" className="form-control" placeholder="Reply To Email" name="replay_to"/>
                </div>
                <div className="col-8 form-group mx-auto">
                    <input type="text" className="form-control" placeholder="To Name" name="to_name"/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="email" className="form-control" placeholder="To Email" name="to_email"/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                </div>
            
            </div>
        </form>
    </div>
</div>
  );
}