import React from 'react';
import { UserProvider } from "../components/UserContext/UserContext";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </>
  )
}

export default MyApp
