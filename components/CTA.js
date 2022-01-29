import Link from "next/link";
import React from 'react';
import Counter from "./Counter";

export default function CTA() {
    return (
        <div className=" mt-10 px-2 md:px-6 lg:px-16 mx-10 " style={{ marginBottom: "10px", marginTop: "50px" }}>
            <div className="pt-10 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 lg:py-6 lg:flex lg:items-center lg:justify-between">
                    <div>
                        <Counter className="count" end={300} suffix="+ People bought the book and are hacking succesfuly now" />
                        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                            <span className="block">Ready to become a Hacker?</span>
                            <span className="block text-gray-300">Start your journey today.</span>
                        </h2>
                    </div>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <Link href="/checkout">
                                <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-400 shadow-2xl shadow-pink-500/70">
                                    Get the Book
                                </button>
                            </Link>
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
