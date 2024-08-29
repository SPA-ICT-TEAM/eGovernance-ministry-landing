import { useState, useEffect, useRef } from "react";
import ReCAPTCHA from 'react-google-recaptcha';
import axios from "axios";

export const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const recaptcha = useRef();

    async function submitForm(event) {
        event.preventDefault();
        const captchaValue = recaptcha.current.getValue();
        if (!captchaValue) {
          alert('Please verify the reCAPTCHA!')
        } else {
            console.log(email, name, phone, message);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 10000); // Reset submitted after 10 seconds
        }
    }

    return (
        <div className="flex flex-col items-center justify-center mt-10"> {/* Centering the form vertically and horizontally */}
            <div className={`w-[50%] h-12 bg-blue-500 text-white rounded-md py-2 text-center ${submitted ? '' : 'hidden'}`}>
                Your Message has been submitted Successfully
            </div>
            <form className="w-[70%] mt-4 space-y-4" onSubmit={submitForm}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" name="name" required placeholder="Enter your name" 
                        className="font-light text-sm border p-2 w-full rounded-md" 
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" name="email" required placeholder="Enter your Email" 
                        className="font-light text-sm border p-2 w-full rounded-md" 
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input 
                        type="tel" name="phone" required placeholder="Enter your Phone Number" 
                        className="font-light text-sm border p-2 w-full rounded-md" 
                        onChange={e => setPhone(e.target.value)}
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea 
                        name="message" required placeholder="Enter Your Message" 
                        className="font-light text-sm border p-2 w-full rounded-md h-32"
                        onChange={e => setMessage(e.target.value)}
                    >
                        
                    </textarea>
                </div>
                <div>
                    <ReCAPTCHA ref={recaptcha} sitekey={import.meta.env.VITE_APP_SITE_KEY} />
                </div>
                <button type="submit" className="bg-green-600 text-white p-2 w-full rounded-md">Submit</button>
            </form>
        </div>
    );
}