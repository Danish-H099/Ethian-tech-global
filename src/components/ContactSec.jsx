import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'


function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [sendingMsg, setSendingMsg] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleBlur = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const validate = () => {
        let errors = {};
        if (!formData.name) {
            errors.name = 'Name is required';
        }
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Enter a valid email address';
        }
        if (formData.phone && !/^\+?[0-9]{1,3}?[-. ]?[0-9]{1,5}?[-. ]?[0-9]{1,5}$/.test(formData.phone)) {
            errors.phone = 'Enter a valid phone number (e.g., +1 234567890)';
        }
        if (!formData.message) {
            errors.message = 'Message is required';
        }
        return errors;
    };

    const sendMsgToEmail = (e) => {
        e.preventDefault();
        


        setSendingMsg(true);
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
        })
        .then(() => {
        // empty the formData
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
            toast('Message Sent!', {
                style: {color: 'green'},
                icon: '✅',

            });
        })
        .catch(() => {
            toast('Message not sent. Please try again!', {
                style: {color: 'red'},
                icon: '❌',
              });
        })
        .finally(() => {
            setSendingMsg(false);
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            sendMsgToEmail(e);
        }
    };

const nameInputRef = useRef(null);

useEffect(() => {
    nameInputRef.current.focus();
}, []);

return (
        <section className='w-11/12 sm:w-5/6 lg:w-4/5 max-w-screen-lg mx-auto my-16'>
            <div className='font-sans text-blue-900 text-2xl space-y-1 mb-8' data-aos="fade-up">
                <h2 className='tracking-wider'>Contact</h2>
                <h2 className='font-bold tracking-wide'>Lets Connect</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col justify-center gap-4 space-y-8 mt-4" data-aos="fade-up">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57550.21726159035!2d85.17917401081101!3d25.641823244808783!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce1098af7%3A0xd3ab2e3afc171805!2sNational%20Institute%20of%20Technology%20Patna%2C%20Patna%20University%20Campus%2C%20Patna%2C%20Bihar%20800006!5e0!3m2!1sen!2sin!4v1738518880976!5m2!1sen!2sin" height="350px" width="100%" className='md:w-[90%] lg:w-[80%] rounded-lg' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" data-aos="fade-up"></iframe>
                    
                    <div className='space-y-8'>
                        <div className='space-y-4'>
                            <div className='flex items-center space-x-2'>
                                <img src="phone.png" alt="Phone Icon" className='w-6' />
                                <p className='text-base'>+91 1234567890</p>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <img src="gmail.png" alt="Email Icon" className='w-6' />
                                <p className='text-base'>company@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex wrap items-center gap-4'>
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                                <img src="facebook.png" alt="Facebook Icon" className='w-10' />
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                                <img src="youtube.png" alt="Youtube Icon" className='w-10' />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                                <img src="twitter.png" alt="Twitter Icon" className='w-10' />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                                <img src="linkedin.png" alt="LinkedIn Icon" className='w-10' />
                            </a>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center space-y-6 sm:mt-4 md:mt-0" data-aos="fade-up">
                    <div className="flex flex-col items-stretch">
                        <label htmlFor="name" className='text-base font-medium mb-3'>Name*</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} ref={nameInputRef} className='p-2 border border-gray-300 rounded-md focus:outline-2 focus:outline-pink-500' />
                        {errors.name && <p className="text-red-500 text-sm italic">{errors.name}</p>}
                    </div>
                    <div className="flex flex-col items-stretch">
                        <label htmlFor="email" className='text-base font-medium mb-3'>Email*</label>
                        <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className='p-2 border border-gray-300 rounded-md focus:outline-2 focus:outline-pink-500' />
                        {errors.email && <p className="text-red-500 text-sm italic">{errors.email}</p>}
                    </div>
                    <div className="flex flex-col items-stretch">
                        <label htmlFor="phone" className='text-base font-medium mb-3'>Phone</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} onBlur={handleBlur} className='p-2 border border-gray-300 rounded-md focus:outline-2 focus:outline-pink-500' />
                        {errors.phone && <p className="text-red-500 text-sm italic">{errors.phone}</p>}
                    </div>
                    <div className="flex flex-col items-stretch">
                        <label htmlFor="message" className='text-base font-medium mb-3'>Message*</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} className='p-2 border border-gray-300 rounded-md focus:outline-2 focus:outline-pink-500' rows={5} />
                        {errors.message && <p className="text-red-500 text-sm italic">{errors.message}</p>}
                    </div>
                    <button type="submit" disabled={sendingMsg} className="self-start bg-pink-500 text-white text-base rounded-md hover:bg-pink-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 py-2 px-8">{sendingMsg ? "Sending..." : "Send Message"}</button>
                    {/* Below div is created only to facilitate sending message through emailjs. This will not be displayed in website */}
                    <div className="hidden flex-col items-stretch space-y-3">
                        <label htmlFor="cname" className='text-base font-medium'>{import.meta.env.VITE_CLIENT_NAME}</label>
                        <input type="text" id="cname" name="cname" defaultValue={import.meta.env.VITE_CLIENT_NAME} required className='p-2 border border-gray-300 rounded-md focus:outline-2 focus:outline-pink-500' />
                    </div>
                </form>
            </div>
        </section>
)
}

export default ContactSection