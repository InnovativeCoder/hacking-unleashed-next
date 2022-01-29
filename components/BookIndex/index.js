import React from 'react';

export default function index() {
     return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9 my-10">
               <div className="lg:flex">
                    <div>
                         <img className="mx-auto  rounded-xl lg:w-1/3 shadow-xl shadow-pink-500/70" src="IndexPage.png" alt="Index of the Book" />
                    </div>
                    <div className='hidden'>
                         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                         </svg>
                         <p></p>
                    </div>
               </div>
          </div>
     )
}
