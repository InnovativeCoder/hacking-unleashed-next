import { Link } from "next/link"
import React from 'react'
// import "./heroRight.css"

export default function index({actualPrice, fakePrice}) {

    const styles={
        colorAnimation: {
            color: `rgba(255,255,255)`,
            background: `linear-gradient(to right,
            rgb(76,217,105),
            rgb(52,170,220),
            rgb(88,86, 217),
            rgb(255, 45, 83),
            rgb(255, 45, 83),
            rgb(88, 86, 217),
            rgb(52, 170, 220),
            rgb(76, 217, 105)
            )`,
            backgroundSize: "600%",
            fontWeight:'700',
            fontSize: "10eml",
            textAlign: "center",
            animation: `sTransition 15s linear infinite`,
    }}
    return (
        <div className="lg:mx-28">
            <div className="lg:absolute lg:right-0 lg:mt-10 px-4  sm:mt-12 sm:px-6 md:mt-16 lg:px-8 lg:text-right xl:mx-28" style={{textAlign:"center"}}>
                <p className="lg:text-right lg:mt-3 italic xl:text-3xl text-sm text-white sm:text-lg  sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    A pragmatic approach towards hacking
                </p>
                <h1 className="lg:text-right text-3xl xl:text-7xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">HACKING UNLEASHED</span>
                </h1>
                {/* <p className=" lg:text-right text-base text-white sm:text-sm sm:text-center sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:mb-20">
                    A book by  Jasneet Sawhney
                </p> */}
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start lg:right-0 lg:absolute lg:px-7 mx-10">
                    <div className="rounded-md shadow">
                    <button style={
                        styles.colorAnimation
                        // {"background": `linear-gradient(90deg, #00C27F 0%, #00D2D1 100%)`}
                    } 
                        className="w-full right-0 lg:flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10"
                        >
                        <Link to="/checkout">
                                Click here to get your Book for a tiny amount {actualPrice} <span className="line-through inline">{" "}{fakePrice}</span>
                        </Link>
                    </button>
                    </div>
                </div>
                <div className="xl:text-right text-center text-xs mt-3 text-gray-600">
                    *Book doesn't promote any harmful practices, only reason to write this book is to provide education*
                </div>
            </div>
        </div>
    )
}
