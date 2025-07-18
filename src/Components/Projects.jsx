import React from 'react'
import amazon from '../assets/image/amazon.jpg';
import med from '../assets/image/med.jpg';
import dem from '../assets/image/dem.jpg';
import back3 from '../assets/image/back3.jpg';


const Projects = () => {
    return (
        <section id="projects">
            <div className=''>
                <div className="relative min-h-screen bg-sky-950">
                    <img
                        src={back3}
                        alt="About Background"
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl opacity-60"
                    />

                    <div className="relative z-10 p-10 gap-x-15 flex flex-col justify-center items-center ">
                        <div className='text-6xl font-bold text-cyan-200  pb-15 font-Urbanist
                    transition-transform duration-500 ease-out hover:scale-125 hover:text-cyan-300 hover:drop-shadow-2xl'>PROJECTS</div>

                        <div className=" z-10 flex flex-col flex-grow items-center gap-10">

                            <div className="w-[1200px] p-8 gap-10 border-2 rounded-tl-3xl rounded-br-10xl flex flex-row bg-slate-900 border-slate-700">
                                <div>
                                    <h1 className="text-2xl text-emerald-300 font-Raleway" >Dil-e-Mughlai</h1>
                                    <br />
                                    <p className='font-Urbanist text-neutral-300 text-xl'>Description: Designed and built the order page for a restaurant website, Dil-e-Mughlai, allowing users to view menu items and place orders smoothly.</p>
                                    <p className='font-Urbanist text-neutral-300 text-xl'>Tech Stack: HTML, CSS</p>
                                    <a className='text-white' href="https://github.com/dashflinch/Dil-E-Mughlai.git" target="_blank" rel="noopener noreferrer" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" /></svg>
                                    </a>
                                </div>
                                <div>
                                    <img className='size-35' src={dem} alt="Dil-e-Mughlai" />
                                </div>
                            </div>

                            <div className="w-[1200px] p-8 gap-10 border-2 rounded-tl-3xl rounded-br-3xl flex flex-row bg-slate-900 border-slate-700">
                                <div>
                                    <h2 className=" text-2xl text-emerald-300 font-Raleway">Amazon Clone</h2>
                                    <br />
                                    <p className='font-Urbanist text-neutral-300 text-xl'>Description: Created a responsive clone of Amazon's homepage, replicating its layout, navigation bar, product cards, and promotional banners.</p>
                                    <p className='font-Urbanist text-neutral-300 text-xl'>Tech Stack: HTML, CSS</p>
                                    <a className='text-white' href="https://github.com/dashflinch/Amazon-Clone.git" target="_blank" rel="noopener noreferrer" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" /></svg>
                                    </a>
                                </div>
                                <div>
                                    <img className='size-35' src={amazon} alt="Amazon" />
                                </div>
                            </div>

                            <div className=" w-[1200px] p-8 gap-10 border-2 rounded-tl-3xl rounded-br-3xl flex flex-row bg-slate-900 border-slate-700">
                                <div>
                                    <h2 className="text-2xl text-emerald-300 font-Raleway">Drug Inventory</h2>
                                    <br />
                                    <p className='font-Urbanist text-neutral-300 text-xl'>Description: Developed interactive support features for a drug inventory management website, including a functional chatbot, feedback form, and help centre page.</p>
                                    <p className='font-Urbanist text-neutral-300 text-xl'>Tech Stack: HTML, CSS, JavaScript</p>
                                    <a className='text-white' href="https://github.com/dashflinch/Drug-Inventory---Supply-Chain.git" target="_blank" rel="noopener noreferrer" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" /></svg>
                                    </a>
                                </div>
                                <div>
                                    <img className='size-35' src={med} alt="Drug inventory" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
