import React from 'react';
import ButtonGradient from "../../components/ButtonGradient";
import "../../styles/heroRight.module.css";

export default function HeroRightIndex({ actualPrice, fakePrice }) {

    const styles = {
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
            fontWeight: '700',
            fontSize: "10eml",
            textAlign: "center",
            animation: `sTransition 15s linear infinite`,
        }
    }
    return (
        <div className="">
            <div className=" px-4  sm:mt-12 sm:px-6 mt-16 " style={{ textAlign: "center" }}>
                <p className=" italic xl:text-3xl text-sm text-white sm:text-lg  sm:mx-auto mt-5 md:text-xl ">
                    A pragmatic approach towards hacking
                </p>
                <h1 className="text-3xl xl:text-7xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">HACKING UNLEASHED</span>
                </h1>
                {/* <p className=" lg:text-right text-base text-white sm:text-sm sm:text-center sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:mb-20">
                    A book by  Jasneet Sawhney
                </p> */}
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center  mx-10">
                    <div className="rounded-md shadow">

                        {/* <button style={
                            styles.colorAnimation
                            // {"background": `linear-gradient(90deg, #00C27F 0%, #00D2D1 100%)`}
                        } 
                            className="w-full right-0 lg:flex justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10"
                            id="btn"
                            >
                                    Click here to get your Book for a tiny amount <span className="line-through">{fakePrice}</span> {actualPrice} 
                        </button> */}
                        <ButtonGradient fakePrice={fakePrice} actualPrice={actualPrice} />
                    </div>
                </div>
                <div className=" text-center text-xs mt-3 text-gray-600">
                    *Book doesn't promote any harmful practices, for education purposes only*
                </div>
            </div>
        </div>
    )
}
