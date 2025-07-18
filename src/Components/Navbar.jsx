import React from 'react'

const Navbar = () => {
    return (
        <div className='pt-4 px-7 pb-8 flex justify-end gap-8.5 font-bold font-PlusJakarta  text-cyan-600 text-2xl'>
            <a href="#about"
            className=" hover:text-cyan-100 hover:cursor-pointer border-b-2 border-b-transparent hover:border-b-white h">
                About
            </a>
            <a href="#projects"
            className=" hover:text-cyan-100 hover:cursor-pointer border-b-2 border-b-transparent hover:border-b-white h">
                Projects
            </a>
            <a href="#contact"
            className="hover:text-cyan-100 hover:cursor-pointer border-b-2 border-b-transparent hover:border-b-white h">
                Contact
            </a>
        </div >
    )
}

export default Navbar
