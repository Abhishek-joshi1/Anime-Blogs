import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4 flex flex-col items-center min-h-[300px]">
        <div className="absolute left-6 top-6">
          <Logo width="100px" />
        </div>
        <div className="flex flex-row items-start w-1/2 mt-8 mr-[-40%]">
          <div className="flex flex-col items-center w-1/3">
            <h3 className="tracking-px mb-2 text-xs font-semibold uppercase text-gray-500">COMPANY</h3>
            <ul className="flex flex-col items-center gap-2">
              <li><Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">Features</Link></li>
              <li><Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">Pricing</Link></li>
              <li><Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">Affiliate Program</Link></li>
              <li><Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">Press Kit</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-center w-1/3">
            <h3 className="tracking-px mb-2 text-xs font-semibold uppercase text-gray-500">SUPPORT</h3>
            <ul className="flex flex-col items-center gap-2">
              <li><Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">Account</Link></li>
              <li><Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">Help</Link></li>
              <li><Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">Contact Us</Link></li>
              <li><Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">Customer Support</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-center w-1/3">
            <h3 className="tracking-px mb-2 text-xs font-semibold uppercase text-gray-500">LEGALS</h3>
            <ul className="flex flex-col items-center gap-2">
              <li><Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">Terms &amp; Conditions</Link></li>
              <li><Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">Privacy Policy</Link></li>
              <li><Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">Licensing</Link></li>
            </ul>
          </div>
        </div>
        <p className="absolute left-6 bottom-4 text-sm text-gray-600">&copy; Copyright 2023. All Rights Reserved by DevUI.</p>
      </div>
    </section>
  )
}

export default Footer