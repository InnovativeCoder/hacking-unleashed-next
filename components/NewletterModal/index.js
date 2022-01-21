// import { Link } from ""
import React from 'react'

export default function Index() {
    return (
        // <!-- This example requires Tailwind CSS v2.0+ -->
    <div className="fixed z-100 inset-0 overflow-y-auto" style={{zIndex:"100"}}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* <!--
            Background overlay, show/hide based on modal state.

            Entering: "ease-out duration-300"
                From: "opacity-0"
                To: "opacity-100"
            Leaving: "ease-in duration-200"
                From: "opacity-100"
                To: "opacity-0"
            --> */}
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            {/* <!--
            Modal panel, show/hide based on modal state.

            Entering: "ease-out duration-300"
                From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
                From: "opacity-100 translate-y-0 sm:scale-100"
                To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            --> */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    {/* <!-- Heroicon name: exclamation --> */}
                    <svg id="Capa_1" enable-background="new 0 0 512 512" height="25" viewBox="0 0 512 512" width="25" xmlns="http://www.w3.org/2000/svg"><path d="m512 199.723-228.866 189.93c-15.734 13.057-38.535 13.057-54.269 0l-228.865-189.93 228.866-189.93c15.734-13.057 38.535-13.057 54.269 0z" fill="#ff9e21"/><path d="m283.134 9.793c-7.866-6.529-17.5-9.793-27.134-9.793v399.445c9.634 0 19.268-3.264 27.134-9.793l228.866-189.929z" fill="#ff8f00"/><path d="m466 248.746v-143.726c0-11.046-8.954-20-20-20h-380c-11.046 0-20 8.954-20 20v143.726l184.397 153.618c14.832 12.357 36.373 12.357 51.206 0z" fill="#ecf9fb"/><path d="m446 85.02h-190v326.612c9.093 0 18.187-3.089 25.603-9.267l184.397-153.619v-143.726c0-11.046-8.954-20-20-20z" fill="#b1d5f1"/><path d="m512 199.723-228.866 189.93c-15.734 13.057-38.535 13.057-54.269 0l-228.865-189.93v269.787c0 23.467 19.023 42.49 42.49 42.49h427.02c23.466 0 42.49-19.023 42.49-42.49z" fill="#ffc278"/><path d="m283.134 389.653c-7.867 6.528-17.501 9.793-27.134 9.793v112.554h213.51c23.466 0 42.49-19.023 42.49-42.49v-269.787z" fill="#ffb554"/><path d="m283.134 389.653c-15.734 13.057-38.535 13.057-54.269 0l-24.065-19.972-191.168 131.006c7.578 7.018 17.714 11.313 28.858 11.313h427.02c11.143 0 21.279-4.295 28.857-11.313l-191.167-131.006z" fill="#ffe0ba"/><path d="m498.368 500.687-191.168-131.006-24.066 19.971c-7.867 6.528-17.501 9.793-27.134 9.793v112.555h213.51c11.144 0 21.28-4.295 28.858-11.313z" fill="#ffd396"/><path d="m288.5 180h-142c-8.284 0-15-6.716-15-15s6.716-15 15-15h142c8.284 0 15 6.716 15 15s-6.716 15-15 15z" fill="#5e6b75"/><path d="m365.5 240h-219c-8.284 0-15-6.716-15-15s6.716-15 15-15h219c8.284 0 15 6.716 15 15s-6.716 15-15 15z" fill="#5e6b75"/><g fill="#4f5961"><path d="m303.5 165c0-8.284-6.716-15-15-15h-32.5v30h32.5c8.284 0 15-6.716 15-15z"/><path d="m365.5 210h-109.5v30h109.5c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/></g></svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                    Join Our Army
                    </h3>
                    <div className="mt-2">
                    <p className="text-sm text-gray-500">
                        Subscribe to our weekly newsletter for tips & tricks if you want to learn some serious stuff.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <a href="https://bit.ly/innosoc">
                    <button type="button" style={{"background": `linear-gradient(90deg, #00C27F 0%, #00D2D1 100%)`}} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                        JOIN NOW
                    </button>
                </a>
            </div>
        </div>
    </div>
    </div>
    )
}
