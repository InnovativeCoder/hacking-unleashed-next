import React, { useContext, useEffect } from 'react';
import Banner from "../components/Banner";
import Counter from "../components/Counter";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Info from "../components/Info";
import { userContext } from "../components/UserContext/UserContext";


export default function Home() {
  const {user, setUser} = useContext(userContext)

  useEffect(() => {
    console.log("new is", user)
  }, [])
  
  return (
   <>
      <Banner />
      <div className="bg-black">
        <div className="lg:mt-80 lg:pt-10">
          <Info />
          <Counter className="count" end={300} suffix="+ People bought the book and are satified with the quality " />
          <CTA />
          <FAQ />
        </div>
      </div>
   </>
  )
}
