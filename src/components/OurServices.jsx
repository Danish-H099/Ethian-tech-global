import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function OurServices() {
    useEffect(() => {
            AOS.init({ duration: 1300 });
          });
    return (
        <section className="w-11/12 sm:w-5/6 lg:w-4/5 max-w-screen-lg mx-auto my-12 p-6 md:p-8">
            <div className="container mx-auto px-4">
                <div className='font-sans text-blue-900 text-2xl space-y-1' data-aos="fade-up">
                    <h2 className='tracking-wider'>Better Future</h2>
                    <h2 className='font-bold tracking-wide'>Explore Our Services</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8" data-aos="fade-up">
                    <div className="bg-white p-6 rounded-lg shadow-lg" >
                        <img alt="Illustration of cloud computing services" className="w-full h-40 object-cover rounded-t-lg" height="400" src="https://storage.googleapis.com/a1aa/image/smv91j3E6shuEZP75cs87e-UXUZYaDDBlaOjHpfI7i4.jpg" width="600" />
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">
                            IT Consulting
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Strategic technology guidance to align IT with business goals.
                        </p>
                        <ul className="list-image-[url(bullet.png)] text-gray-600 ms-6 mt-2">
                            <li>IT strategy & roadmap</li>
                            <li>Digital transformation consulting</li>
                            <li>Enterprise architecture solutions</li>
                        </ul>
                        <button type="button" className="bg-pink-500 text-white text-base rounded-md hover:bg-pink-600 active:scale-95 px-3 py-2 mt-3">Get a Free IT Strategy Call!</button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
                        <img alt="Illustration of cybersecurity services" className="w-full h-40 object-cover rounded-t-lg" height="400" src="https://storage.googleapis.com/a1aa/image/YzWiArSy8jY3W2DM4AgsTacxHjXgpYYiV5XSrxn1NGE.jpg" width="600" />
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">
                        Web Development
                        </h3>
                        <p className="text-gray-600 mt-2">
                        High-performing, scalable websites designed
                        for growth.
                        </p>
                        <ul className="list-image-[url(bullet.png)] text-gray-600 ms-6 mt-2">
                            <li>Custom web development</li>
                            <li>E-commerce solutions</li>
                        </ul>
                        <button type="button" className="bg-pink-500 text-white text-base rounded-md hover:bg-pink-600 active:scale-95 px-3 py-2 mt-3">Get your websites</button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
                        <img alt="Illustration of IT consulting services" className="w-full h-40 object-cover rounded-t-lg" height="400" src="https://storage.googleapis.com/a1aa/image/9a2-yoYLl-glPZZUm5yK9xATEm7aqi5WKCu8tvuS4q8.jpg" width="600" />
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">
                        Mobile App Development
                        </h3>
                        <p className="text-gray-600 mt-2">
                        Android & iOS apps built for seamless user experiences.
                        </p>
                        <ul className="list-image-[url(bullet.png)] text-gray-600 ms-6 mt-2">
                            <li>Native & cross-platform apps</li>
                            <li>Enterprise mobility solutions</li>
                            <li>App UI/UX design</li>
                        </ul>
                        <button type="button" className="bg-pink-500 text-white text-base rounded-md hover:bg-pink-600 active:scale-95 px-3 py-2 mt-3">Let&apos;s Create Your App!</button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
                        <img alt="Illustration of software development services" className="w-full h-40 object-cover rounded-t-lg" height="400" src="https://storage.googleapis.com/a1aa/image/RoulZ--n9HTWaP6_XDAY-Zb-C8w7DZL_OxMGj2KJXu0.jpg" width="600" />
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">
                        Generative Al & Machine Learning Solutions
                        </h3>
                        <p className="text-gray-600 mt-2">
                        Leverage Al-driven insights for smarter decision-making.
                        </p>
                        <ul className="list-image-[url(bullet.png)] text-gray-600 ms-6 mt-2">
                            <li>Predictive analytics</li>
                            <li>Al-powered automation</li>
                            <li>NLP & computer vision</li>
                        </ul>
                        <button type="button" className="bg-pink-500 text-white text-base rounded-md hover:bg-pink-600 active:scale-95 px-3 py-2 mt-3">Explore AI solutions!</button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
                        <img alt="Illustration of data analytics services" className="w-full h-40 object-cover rounded-t-lg" height="400" src="https://storage.googleapis.com/a1aa/image/yjb9xrfLnIQE-ZL6L-GDa1d6PmtCxS2_dxnw_AM9E2s.jpg" width="600" />
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">
                        Cloud Migration & Infrastructure Services
                        </h3>
                        <p className="text-gray-600 mt-2">
                        Secure, seamless migration to AWS, Azure, or Google Cloud.
                        </p>
                        <ul className="list-image-[url(bullet.png)] text-gray-600 ms-6 mt-2">
                            <li>Cloud migration & optimization</li>
                            <li>Serverless computing</li>
                            <li>DevOps automation</li>
                        </ul>
                        <button type="button" className="bg-pink-500 text-white text-base rounded-md hover:bg-pink-600 active:scale-95 px-3 py-2 mt-3">Migrate to Cloud Effortlessly!</button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
                        <img alt="Illustration of network management services" className="w-full h-40 object-cover rounded-t-lg" height="400" src="https://storage.googleapis.com/a1aa/image/Vlqilcof0mgRlpt7HZk_9D6sHdbWJh2XXnorLX6TLsQ.jpg" width="600" />
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">
                        DevOps & Infrastructure Management
                        </h3>
                        <p className="text-gray-600 mt-2">
                        Optimize development pipelines with seamless automation.
                        </p>
                        <ul className="list-image-[url(bullet.png)] text-gray-600 ms-6 mt-2">
                            <li>CI/CD pipeline implementation</li>
                            <li>Infrastructure as Code (laC)</li>
                            <li>Kubernetes & containarization</li>
                        </ul>
                        <button type="button" className="bg-pink-500 text-white text-base rounded-md hover:bg-pink-600 active:scale-95 px-3 py-2 mt-3">Accelerate Your DevOps Journey!</button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
                        <img alt="Illustration of network management services" className="w-full h-40 object-cover rounded-t-lg" height="400" src="https://storage.googleapis.com/a1aa/image/Vlqilcof0mgRlpt7HZk_9D6sHdbWJh2XXnorLX6TLsQ.jpg" width="600" />
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">
                        Product Consulting
                        </h3>
                        <p className="text-gray-600 mt-2">
                        From idea to execution, we help you build the right product.
                        </p>
                        <ul className="list-image-[url(bullet.png)] text-gray-600 ms-6 mt-2">
                            <li>Product strategy & roadmap</li>
                            <li>MVP development</li>
                            <li>Market research & feasibility</li>
                        </ul>
                        <button type="button" className="bg-pink-500 text-white text-base rounded-md hover:bg-pink-600 active:scale-95 px-3 py-2 mt-3">Turn Your Idea into Reality!</button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
                        <img alt="Illustration of network management services" className="w-full h-40 object-cover rounded-t-lg" height="400" src="https://storage.googleapis.com/a1aa/image/Vlqilcof0mgRlpt7HZk_9D6sHdbWJh2XXnorLX6TLsQ.jpg" width="600" />
                        <h3 className="text-xl font-semibold text-gray-800 mt-4">
                        UI/UX Design
                        </h3>
                        <p className="text-gray-600 mt-2">
                        Craft intuitive, user-friendly digital experiences.
                        </p>
                        <ul className="list-image-[url(bullet.png)] text-gray-600 ms-6 mt-2">
                            <li>UX research & wireframing</li>
                            <li>UI prototyping & interaction design</li>
                            <li>Design systems & branding</li>
                        </ul>
                        <button type="button" className="bg-pink-500 text-white text-base rounded-md hover:bg-pink-600 active:scale-95 px-3 py-2 mt-3">Design a Stunning experience!</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices
