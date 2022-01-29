import axios from "axios";
import Head from 'next/head';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import Banner from "../components/Banner";
import BookIndex from "../components/BookIndex";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import HeroRight from "../components/HeroRight/index";
import Info from "../components/Info";
import ScrollIndicator from "../components/ScrollIndicator";
// import Tools from "../components/Tools";
import { userContext } from "../components/UserContext/UserContext";


export default function Home() {
  const { user, setUser } = useContext(userContext)

  const price = {
    actualPrice: ["INR 299", "$11.95"],
    fakePrice: ["INR 799", "$50"]
  }

  const getGeoInfo = () => {
    axios.get('https://ipapi.co/json/').then((response) => {
      console.log(response.data.country_name)
      if (response.data.country_name === "India") {
        setUser({ ...user, countryName: "India" })
      } else {
        setUser({ ...user, countryName: "other" })
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
      <ScrollIndicator>
        <Head>
          <title>Hacking Unleashed - A pragmatic approach towards hacking</title>
          <meta charSet="utf-8" />
          <link rel="icon" href="favicon.png" />
        </Head>
        <Banner />
        <div className="bg-black">
          <div className="relative z-10 pb-8 bg-black md:pb-20 lg:w-full xl:px-20">
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              {/* <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 lg:py-6 lg:flex lg:items-center lg:justify-between" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <span className="sr-only">Workflow</span>
                    <Link href="/">
                      <span className="font-medium text-gray-600 hover:text-gray-200">Home</span>
                    </Link>
                    <div className="-mr-2 flex items-center md:hidden">
                      <button type="button" className="bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" id="main-menu" aria-haspopup="true">
                        <span className="sr-only">Open main menu</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="lg:absolute lg:right-0 md:block md:ml-10 md:pr-4 md:space-x-8">
                  <Link href="/checkout">
                    <span className="font-medium text-gray-600 hover:text-gray-200">Blogs </span>
                  </Link>
                </div>
              </nav> */}
            </div>
          </div>
          <div className="">
            <div className="">
              <Link href="/checkoutnew">
                <img className="object-contain sm:h-48 md:h-96 drop-shadow-2xl shadow-pink-500/70" style={{ maxWidth: "80%", margin: "auto" }} src="heroimage.png" alt="" />
                {/* <video controls src={IntroVideo}/> */}
                {/* <div className="xl:65 object-contain sm:h-48 md:h-96 lg:w-75 lg:h-96 mt-10" style={{maxWidth:"80%", margin:"50px auto"}}>
                        <iframe allow="autoplay" title="vid" class="video-player-container spotlightr" data-playerid="MTA3ODk4Mw==" allowtransparency="true" style={{maxWidth:"100%"}} name="videoPlayerframe" allowfullscreen="true" src="https://hack.cdn.spotlightr.com/watch/MTA3ODk4Mw==?aspect=1.78" watch-type="" url-params="aspect=1.78" frameborder="0" scrolling="no"> </iframe>
                    </div> */}
              </Link>
            </div>
            {
              user.countryName === "India" ? <HeroRight actualPrice={price.actualPrice[0]} fakePrice={price.fakePrice[0]} /> : <HeroRight actualPrice={price.actualPrice[1]} fakePrice={price.fakePrice[1]} />
            }
          </div>
          <Info />
          {/* <Tools /> */}
          < BookIndex />
          <CTA />
          <FAQ />
          <div className="mt-10">
            <Footer />
          </div>
        </div>
      </ScrollIndicator>
    </>
  )
}
