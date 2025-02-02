import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Toaster, toast } from 'react-hot-toast'


const ContactSection = () => {
    const [sendingMsg, setSendingMsg] = useState(false);

    const sendMsgToEmail = (e) => {
        e.preventDefault();
        setSendingMsg(true);
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
        })
        .then(() => {
            e.target.reset();
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

  return (
    <>
    <Toaster
  position="top-right"
  reverseOrder={false}
  gutter={8}
  toastOptions={{
    className: 'bg-white border border-gray-300 rounded-md shadow-md mt-24',
    duration: 5000,
    removeDelay: 1000,
    ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
  }}
/>
    <div className='w-11/12 sm:w-5/6 lg:w-4/5 max-w-screen-lg mx-auto my-16'> 
        <div className='font-sans text-blue-900 text-2xl space-y-1 mb-8'>
            <h2 className='tracking-wider'>Contact</h2>
            <h2 className='font-bold tracking-wide'>Lets Connect</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-between space-y-8 pt-4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54940.91133374475!2d77.19886841341966!3d28.685569215412844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfce26ec085ef%3A0x441e32f4fa5002fb!2sRed%20Fort!5e0!3m2!1sen!2sin!4v1738480309821!5m2!1sen!2sin" width="90%" style={{aspectRatio: 4/3}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <h4 className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, cupiditate ipsa placeat non exercitationem odio! Id rem est optio eveniet cumque? Aliquam ipsam voluptas vero expedita, sapiente quisquam iste qui.</h4>
                <div className='space-y-8 mt-8'>
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
                            <img src="facebook.png" alt="Facebook Icon" className='w-12' />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                            <img src="x.png" alt="Twitter Icon" className='w-12' />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                            <img src="linkedin.png" alt="LinkedIn Icon" className='w-12' />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                            <img src="instagram.png" alt="Instagram Icon" className='w-12' />
                        </a>
                    </div>
                </div>
            </div>
            <form onSubmit={sendMsgToEmail} className="flex flex-col justify-center space-y-6 pt-4">
                <div className="flex flex-col items-stretch space-y-3">
                    <label htmlFor="name" className='text-base font-medium'>Name*</label>
                    <input type="text" id="name" name="name" required className='p-2 border border-gray-300 rounded-md focus:outline-2 focus:outline-pink-500' />
                </div>
                <div className="flex flex-col items-stretch space-y-3">
                    <label htmlFor="email" className='text-base font-medium'>Email*</label>
                    <input type="email" id="email" name="email" required className='p-2 border border-gray-300 rounded-md focus:outline-2 focus:outline-pink-500' />
                </div>
                <div className="flex flex-col items-stretch space-y-3">
                    <label htmlFor="phone" className='text-base font-medium'>Phone</label>
                    <input type="tel" id="phone" name="phone" className='p-2 border border-gray-300 rounded-md focus:outline-2 focus:outline-pink-500' />
                </div>
                <div className="flex flex-col items-stretch space-y-3">
                    <label htmlFor="message" className='text-base font-medium'>Message*</label>
                    <textarea id="message" name="message" required className='p-2 border border-gray-300 rounded-md focus:outline-2 focus:outline-pink-500' rows={5} />
                </div>                
                <button type="submit" disabled={sendingMsg} className="self-start bg-pink-500 text-white text-base rounded-md hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-50 py-2 px-8">{sendingMsg ? "Sending..." : "Send Message"}</button>
                {/* Below div is created only to facilitate sending message through emailjs. This will not be displayed in website */}
                <div className="hidden flex flex-col items-stretch space-y-3">
                    <label htmlFor="byName" className='text-base font-medium'>Receiver&apos;s Name</label>
                    <input type="byName" id="byName" name="byName" defaultValue={import.meta.env.VITE_CLIENT_NAME} required className='p-2 border border-gray-300 rounded-md focus:outline-2 focus:outline-pink-500' />
                </div>
            </form>
        </div>
    </div></>
  )
}

export default ContactSection