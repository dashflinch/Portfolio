import React from 'react'
import mount from '../assets/image/mount.jpg';

const Contact = () => {
    return (
        <section id="contact">
            <div className="w-full">

                <div className="relative h-[60vh] flex items-center justify-center bg-black text-white">
                    <img
                        src={mount}
                        alt="mountain"
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
                    />
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">CONTACT ME</h1>
                        <p className="text-lg md:text-xl max-w-xl mx-auto">
                            You are more than welcome to leave your contact info and I will be in touch shortly.
                        </p>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10 bg-blue-200 text-center">

                    <div className="space-y-4">
                        <div className="text-orange-500 text-4xl">🏠</div>
                        <h3 className="text-xl font-semibold">VISIT ME</h3>
                        <p className="text-gray-600 text-sm">
                            You're always welcome to visit and meet in person! Let's grab a coffee and talk about how we can bring your ideas to life. Just let me know when you're dropping by.</p>
                        <p className="text-sm font-medium text-gray-800">Odisha, India</p>
                    </div>


                    <div className="space-y-4">
                        <div className="text-orange-500 text-4xl">📞</div>
                        <h3 className="text-xl font-semibold">CALL ME</h3>
                        <p className="text-gray-600 text-sm">
                            Feel free to give me a call if you'd like to talk directly. I’m always happy to discuss ideas, answer your questions, or just connect for a quick chat.</p>
                        <p className="text-sm font-medium text-gray-800">+91 5659461256</p>
                    </div>


                    <div className="space-y-4">
                        <div className="text-orange-500 text-4xl">📧</div>
                        <h3 className="text-xl font-semibold">CONTACT ME</h3>
                        <p className="text-gray-600 text-sm">
                            Whether you have a question, a project in mind, or just want to say hello — I’d love to hear from you. Drop me a message anytime and I’ll get back to you as soon as I can.</p>
                        <a href="https://www.linkedin.com/in/sonali-dash-40b505353" className="text-sm font-medium text-gray-800">https://www.linkedin.com/in/sonali-dash</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
