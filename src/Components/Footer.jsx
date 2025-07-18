import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-sky-950 text-white py-6">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

                <p className="text-sm">
                    📧 Email: <a href="mailto:dash50648@gmail.com" className="text-cyan-400 hover:underline">dash50648@gmail.com</a>
                </p>

                <p className="text-sm">
                    💻 GitHub: <a href="https://github.com/dashflinch" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">github.com/dashflinch</a>
                </p>

                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Sonali Dash. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
