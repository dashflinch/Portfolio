import React from 'react'
import { useEffect, useRef } from 'react';
import back2 from '../assets/image/back2.jpg';

const About = () => {
    const box1Ref = useRef(null);
    const box2Ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.3 }
        );
        if (box1Ref.current) observer.observe(box1Ref.current);
        if (box2Ref.current) observer.observe(box2Ref.current);

        return () => {
            if (box1Ref.current) observer.unobserve(box1Ref.current);
            if (box2Ref.current) observer.unobserve(box2Ref.current);
        };
    }, []);

    return (
        <section id="about">
            <div className=''>

                <div className="relative  bg-sky-950">
                    <img
                        src={back2}
                        alt="About Background"
                        className="w-full h-full object-cover rounded-3xl opacity-60"
                    />

                    <h1 className=" absolute top-10 left-1/2 transform -translate-x-1/2
                bg-clip-text text-transparent bg-gradient-to-r from-gray-50 to-gray-300 drop-shadow-lg
                text-6xl md:text-7xl font-bold font-Urbanist
                transition duration-500 hover:scale-105 hover:drop-shadow-lg animate-slideUp">
                        ABOUT
                    </h1>
                    <div className=" border-transparent-2 bg-sky-950 p- gap-x-20 flex justify-center items-center">

                        <div ref={box1Ref} className="absolute top-100 left-10 bg-opacity-50 z-10 w-1/3 rounded-2xl p-6 border-transparent-2 bg-sky-900 scroll-slide-up ">
                            <h1 className='text-xl text-cyan-400 font-PlusJakarta'>"Clean structure. Clear purpose. Consistent design."</h1>
                            <br />
                            <p className='font-SyneMono text-sm text-sky-500'>From smooth animations to responsive layouts, I bring both logic and creativity to the frontend. If you're looking for someone who treats pixels like poetry and performance like priority.</p>
                        </div>

                        <div ref={box2Ref} className="absolute top-60 right-10 bg-opacity-50 z-10 w-1/3 rounded-2xl p-5 border-transparent-2 bg-sky-900 scroll-slide-up">
                            <h1 className='text-xl text-cyan-400 font-PlusJakarta'>"You + Me = Awesome Web"</h1>
                            <br />
                            <p className='font-SyneMono text-sm text-sky-500'>I'm currently open to exciting opportunities where I can contribute, learn, and grow as a frontend developer — whether it's a full-time role, freelance project, or internship. If you’re looking for someone who’s passionate about clean code and creative design, let’s connect!</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
