import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <footer class="bg-[#1A3261] text-white font-sans "> 
        {/* absolute bottom-0 w-full */}
            <div class="container w-[90vw] mx-auto py-10 px-5">
                <div class="flex justify-between gap-8 flex-wrap md:flex-row md:justify-between">
                    <div class=" mb-10 md:mb-0">
                        <div>
                            <NavLink to={"/"}><img className='w-40 sm:text-center' src="logo.png" alt="Error in loading" /></NavLink>
                        </div>
                        <div class="mt-5">
                            <div class="flex items-center md:justify-start mb-2">
                                <i class="fas fa-phone-alt text-2xl mr-3"></i>
                                <span class="text-lg">4461237866</span>
                            </div>
                            <div class="flex items-center md:justify-start">
                                <i class="fas fa-envelope text-2xl mr-3"></i>
                                <a href="mailto:mail@ethiantech.com" class="text-lg underline">mail@ethiantech.com</a>
                            </div>
                        </div>
                    </div>
                    {/* <div class="flex flex-col md:flex-row md:space-x-20"> */}
                    <div class="mb-10 md:mb-0">
                        <h2 class="text-xl font-bold mb-3">Partnerships</h2>
                        <ul class="list-disc list-inside">
                            <li className='cursor-pointer hover:underline'>TCS</li>
                            <li className='cursor-pointer hover:underline'>Accenture</li>
                            <li className='cursor-pointer hover:underline'>LTIMindtree</li>
                        </ul>
                    </div>
                    <div class="mb-10 md:mb-0">
                        <h2 class="text-xl font-bold mb-3">Resources</h2>
                        <ul class="list-disc list-inside">
                            <li className='cursor-pointer hover:underline'>Blogs</li>
                            <li className='cursor-pointer hover:underline'>LTIMindtree</li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="text-xl font-bold mb-3">Enroll</h2>
                        <ul class="list-disc list-inside">
                            <li className='cursor-pointer hover:underline'>TCS</li>
                            <li className='cursor-pointer hover:underline'>Accenture</li>
                            <li className='cursor-pointer hover:underline'>LTIMindtree</li>
                        </ul>
                    </div>
                    {/* </div> */}
                </div>
                <div class="border-t border-gray-400 mt-10 pt-5">
                    <div class="flex flex-col md:flex-row md:justify-between items-center">
                        <div class="text-center md:text-left mb-5 md:mb-0">
                            <a href="#" class="text-sm text-gray-300 mr-5">Privacy Policy</a>
                            <a href="#" class="text-sm text-gray-300">Terms of Service</a>
                        </div>
                        <div class="text-center md:text-left mb-5 md:mb-0">
                            <p class="text-sm text-gray-300">© 2025. Ethiantech Global. Ltd. All rights reserved.</p>
                        </div>
                        <div class="flex space-x-5">
                            <a href="#" class="text-gray-300 text-2xl hover:text-[#D62A91]"><i class="fab fa-facebook "></i></a>
                            <a href="#" class="text-gray-300 text-2xl hover:text-[#D62A91]"><i class="fab fa-youtube"></i></a>
                            <a href="#" class="text-gray-300 text-2xl hover:text-[#D62A91]"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="text-gray-300 text-2xl hover:text-[#D62A91]"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
