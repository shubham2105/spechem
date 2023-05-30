import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white-800 py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center justify-center">
        <nav className="flex space-x-4">
          <a href="#" className="text-black hover:text-blue-500">Home</a>
          <a href="#" className="text-black hover:text-blue-500">Privacy Policy</a>
          <a href="#" className="text-black hover:text-blue-500">Disclaimer</a>
          <a href="#" className="text-black hover:text-blue-500">Contact Us </a>
        </nav>
        <p className="text-gray-500  px-5"> © {new Date().getFullYear()} Speciality Chemicals. All rights reserved.</p>
      </div>
    </div>
  </footer>
    
  )
}

export default Footer