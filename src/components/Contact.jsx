import React from 'react'
import { motion} from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaDribbble, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
   <motion.div
     initial = {{opacity:0, y:50}}
     whileInView={{opacity:1, y:0}}
     transition={{duration: 1, ease: 'easeOut'}}
     viewport={{once:false, amount:0.2}}
     id='contact'
     className='py-20 bg-dark-200'>
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>Get   
                In<span className='text-purple-500'>Touch</span></h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Let's talk!

</p>
<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>


{/* contact form */}
    <div>
        <form action="" className='space-y-6'>
            <div>
                <label htmlFor='name' className='block text-gray-300 mb-2'>Your Name</label>
                <input type="text" 
                className='w-full bg-gray-800 border border-dark-400 rounded-lg px-4 py-3 outline-none'/>
            </div>

            <div>
                <label htmlFor='email' className='block text-gray-300 mb-2'>Email Address</label>
                <input type="email" 
                className='w-full bg-gray-800 border border-dark-400 rounded-lg px-4 py-3 outline-none'/>
            </div>
              <div>
                <label htmlFor='message' className='block text-gray-300 mb-2'>Your Message</label>
                <textarea type="text" 
                className='w-full h-40 bg-gray-800 border border-dark-400 rounded-lg px-4 py-3 outline-none'/>
            </div>
            <button type='submit' className='w-full px-6 py-3 bg-purple-400 rounded-lg font-medium hover:bg-purple-800 transition duration-300 cursor-pointer'>
                Send
            </button>
        </form>
    </div>

    {/* contact information */}
    <div className='space-y-8'>
<div className='flex items-start'>
    <div className='text-purple-500 text-2xl mr-4'>
        < FaMapMarkerAlt/>
    </div>
    <div>
        <h3 className='text-lg font-semibold mb-2'>Location</h3>
        <p className='text-gray-400'>Mumbai Kandivali - East </p>
    </div>
</div>
<div className='flex items-start'>
    <div className='text-purple-500 text-2xl mr-4'>
        < FaEnvelope/>
    </div>
    <div>
        <h3 className='text-lg font-semibold mb-2'>Email</h3>
        <p className='text-gray-400'>poonamgautam802@gmail.com</p>
    </div>
</div>
<div className='flex items-start'>
    <div className='text-purple-500 text-2xl mr-4'>
        < FaPhone/>
    </div>
    <div>
        <h3 className='text-lg font-semibold mb-2'>Contact</h3>
        <p className='text-gray-400'>+91 9699173842</p>
    </div>
</div>

<div className='pt-4'>
    <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
    <div className='flex space-x-4'>
        <a href='#' className='w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-purple-500 hover:text-white  hover:bg-purple-500 transition duration-300'>
            < FaGithub/>
        </a>

         <a href='#' className='w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-orange-400 hover:text-white  hover:bg-orange-400 transition duration-300'>
            < FaLinkedin/>
        </a>

         <a href='#' className='w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-blue-500 hover:text-white  hover:bg-blue-500 transition duration-300'>
            < FaTwitter/>
        </a>

         <a href='#' className='w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-pink-500 hover:text-white  hover:bg-pink-500 transition duration-300'>
            < FaDribbble/>
        </a>

    </div>
</div>

    </div>
</div>


        </div>
      
    </motion.div>
  )
}

export default Contact
