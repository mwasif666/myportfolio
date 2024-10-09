import { useState } from "react";
import SimpleReactValidator from "simple-react-validator";


const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    })
    const [validator] = useState(new SimpleReactValidator());
    const handelChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validator.showMessages();
    };
    const handelSubmit = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            console.log('Form submitted successfully!');
        } else {
            validator.showMessages();
        }
    }

    return (
        <form id="contactForm" onSubmit={handelSubmit}>
            <div className="row">
                <div className="col-lg-6 col-12">
                    <input type="text" className="form-control" name="name" placeholder="Your Name*" value={formData.name} onChange={handelChange} />
                    {validator.message('name', formData.name, 'required')}
                </div>
                <div className="col-lg-6 col-12">
                    <input type="text" className="form-control" name="phone" placeholder="Phone" value={formData.phone} onChange={handelChange}/>
                    {validator.message('phone', formData.phone, 'required')}
                </div>
                <div className="col-lg-6 col-12">
                    <input type="email" className="form-control" name="email" placeholder="Email" value={formData.email} onChange={handelChange}/>
                    {validator.message('email', formData.email, 'required')}
                </div>
                <div className="col-lg-6 col-12">
                    <select className="form-control" name="subject" value={formData.subject} onChange={handelChange}>
                        <option value="">Subjects</option>
                        <option value="subject1">Subjects 1</option>
                        <option value="subject2">Subjects 2</option>
                        <option value="subject3">Subjects 3</option>
                    </select>
                    {validator.message('subject', formData.subject, 'required')}
                </div>
                <div className="col-12">
                    <textarea className="form-control" name="message"  placeholder="Message..." value={formData.message} onChange={handelChange}></textarea>
                    {validator.message('message', formData.message, 'required')}
                </div>
                <div className="col-12">
                    <button className="form-btn" type="button" >Send
                        Message</button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm;