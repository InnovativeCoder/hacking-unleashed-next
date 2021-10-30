// import { Link } from "next/link"
import React from 'react'

export default function CTA() {
    return (
        <div className="mx-10">
            <div className="bg-black">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-6 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    <span className="block">Ready to become a Hacker?</span>
                    <span className="block text-gray-300">Start your journey today.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                    {/* <Link to="/checkout" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400"> */}
                        Get the Book
                    {/* </Link> */}
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <a href="https://bit.ly/innosoc" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-600 bg-white hover:bg-indigo-50">
                        Join the FREE newsletter
                        </a>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
