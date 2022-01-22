import React from 'react'

export default function Info() {
    return (
        <div className="m-10">
            <div className="pt-10 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-white font-semibold tracking-wide uppercase">About the Book</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
                            30% Theory, 70% Practical
                        </p>
                        {/* <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                    </p> */}
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-pink-600 to-purple-600 text-white">
                                        {/* <!-- Heroicon name: outline/globe-alt --> */}
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg leading-6 font-medium text-white">
                                        Understanding the basic terminologies
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-300">
                                        Before we introduce you to the advance concepts, let's make you go through the jargons, terminologies and slang.
                                    </dd>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-pink-600 to-purple-600 text-white">
                                        {/* <!-- Heroicon name: outline/scale --> */}
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg leading-6 font-medium text-white">
                                        Deciphering Kali Linux and it's tools
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-300">
                                        This module will slowly uncover the power of true hacking, the dark areas which will unleash the power of your computer system and make you realise the truth of online world.
                                    </dd>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-pink-600 to-purple-600 text-white">
                                        {/* <!-- Heroicon name: outline/lightning-bolt --> */}
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg leading-6 font-medium text-white">
                                        Tricks and Tips most hackers overlook
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-300">
                                        The one who knows the nuances of a field and can carry out things pretty smartly is the one who masters the art of a perfect hack. Hacking is an art, and your trying to be a scientist, this is where you are going wrong buddy. Let's get you on the correct path.
                                    </dd>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-pink-600 to-purple-600 text-white">
                                        {/* <!-- Heroicon name: outline/annotation --> */}
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg leading-6 font-medium text-white">
                                        Most important: Building the correct mindset for hacking
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-300">
                                        Now you have learnt enough to become a hacker, but what about future? This book not only improves your present, but also helps you build yourself future proof.
                                    </dd>
                                </div>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}
