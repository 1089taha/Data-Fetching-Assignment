import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-red-800 text-white py-8 mt-16">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-lg font-bold mb-4 text-center md:text-start">Data Fetching Assignment</h3>
      </div>

      <div className='text-center md:text-start'>
        <h3 className="text-lg font-bold mb-4">Links</h3>
        <ul className="text-sm text-gray-300 space-y-2">
          <li>
            <Link href="/" className="hover:underline hover:text-blue-600 ease-in duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/client" className="hover:underline hover:text-blue-600 ease-in duration-300">
              Client Side
            </Link>
          </li>
          <li>
            <Link href="/server" className="hover:underline hover:text-blue-600 ease-in duration-300">
              Server Side
            </Link>
          </li>
        </ul>
      </div>

      <div className='text-center md:text-start'>
        <h3 className="text-lg font-bold mb-4">About This Assignment</h3>
        <p className="text-sm text-gray-300">
        This project highlights innovative Client and Server Side data fetching methods utilizing Next.js and cutting-edge JavaScript.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
