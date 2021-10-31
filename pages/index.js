import axios from "axios";
import Head from 'next/head';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import Banner from "../components/Banner";
import Counter from "../components/Counter";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import HeroRight from "../components/HeroRight/index";
import Info from "../components/Info";
import { userContext } from "../components/UserContext/UserContext";


export default function Home() {
  const {user, setUser} = useContext(userContext)
  
  const price = {
    actualPrice: ["INR 299","$11.95"],
    fakePrice: ["INR 799", "$50"]
  }

  const getGeoInfo = () => {
      axios.get('https://ipapi.co/json/').then((response) => {
          if(response.data.country_name==="India"){
              setUser({...user,countryName: "India"})
          }else{
              setUser({...user,countryName: "other"})
          }
      }).catch((error) => {
          console.log(error);
      });
  };

  useEffect(() => {
    console.log("new is", user)
    getGeoInfo()
  }, [])
  
  return (
   <>
    <Head>
      <title>Hacking Unleashed - A pragmatic approach towards hacking</title>
      <meta charset="utf-8" />
      <link rel="icon" href="favicon.png" />
    </Head>
      <Banner />
      <div className="bg-black">
        <div className="relative z-10 pb-8 bg-black md:pb-20 lg:w-full xl:px-20">
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="/">
                          <span className="sr-only">Workflow</span>
                          <Link href="/checkout" className="font-medium text-gray-600 hover:text-gray-200">Home</Link>
                        </a>
                        <div className="-mr-2 flex items-center md:hidden">
                            <button type="button" className="bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" id="main-menu" aria-haspopup="true">
                            <span className="sr-only">Open main menu</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="lg:absolute lg:right-0 md:block md:ml-10 md:pr-4 md:space-x-8">
                    <Link href="/checkout" className="font-medium text-gray-600 hover:text-gray-200">Blogs</Link>
                </div>
              </nav>
            </div>
          </div>
        <div className="xl:px-80">    
            <div className="lg:absolute lg:left-0 xl:absolute xl:left-0">
                <Link href="/checkout">
                    <img className="xl:65 object-contain sm:h-48 md:h-96 lg:w-75 lg:h-96" style={{maxWidth:"80%", margin:"auto"}} src="heroimage.png" alt="" />
                    {/* <video controls src={IntroVideo}/> */}
                    {/* <div className="xl:65 object-contain sm:h-48 md:h-96 lg:w-75 lg:h-96 mt-10" style={{maxWidth:"80%", margin:"50px auto"}}>
                        <iframe allow="autoplay" title="vid" class="video-player-container spotlightr" data-playerid="MTA3ODk4Mw==" allowtransparency="true" style={{maxWidth:"100%"}} name="videoPlayerframe" allowfullscreen="true" src="https://hack.cdn.spotlightr.com/watch/MTA3ODk4Mw==?aspect=1.78" watch-type="" url-params="aspect=1.78" frameborder="0" scrolling="no"> </iframe>
                    </div> */}
                </Link>
            </div>
            {
                user.countryName==="India"?<HeroRight actualPrice={price.actualPrice[0]} fakePrice={price.fakePrice[0]} />:<HeroRight actualPrice={price.actualPrice[1]} fakePrice = {price.fakePrice[1]}/>
            }
        </div>
        <div className="lg:mt-80 lg:pt-10">
          <Info />
          <Counter className="count" end={300} suffix="+ People bought the book and are satified with the quality " />
          <CTA />
          <FAQ />
          {/* Add a footer */}
        </div>
      </div>
   </>
  )
}
