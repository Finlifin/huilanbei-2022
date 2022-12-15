import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../componenets/Footer'
import { useState, useEffect, useRef } from 'react'
import Navbar_two from '../componenets/Navbar_two'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps }: AppProps) {
  let [isHere, setIsHere] = useState(true);

  const [showChild, setShowChild] = useState(false);

  useEffect(()=>{
    document.title= "Elear";
  },[]);

  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <AnimatePresence>{isHere && <>
        <Navbar_two />
        <Component {...pageProps} />
        </>}
      </AnimatePresence>
    );
  }
}