import React from 'react';

const submitHandle = (e) => {
     e.preventDefault()
     // console.log("I was submitted")
}

export default function index() {
     return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9 my-10 lg:mt-10">
               <div className="">
                    <div className="text-center">
                         <h2 className=" text-white  uppercase mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl mb-4">Sneak Peak into the Book</h2>
                         {/* <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
                              30% Theory, 70% Practical
                         </p> */}
                    </div>
                    <div>
                         <img className="mx-auto  rounded-xl lg:w-1/3 shadow-xl shadow-pink-500/70" src="indexPage.png" alt="Index of the Book" />
                    </div>
                    <div className='hidden'>
                         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                         </svg>
                    </div>
                    <div className="text-center mt-10">
                         <h2 className="text-2xl text-white  mt-2 leading-8 font-semibold tracking-wide ">And More ....</h2>
                    </div>
                    <form action="" onSubmit={submitHandle} className="hidden">
                         <input type="email" />
                         <button type="submit" className="bg-white text-red-200" >Submit</button>
                    </form>
               </div>
          </div>
     )
}
