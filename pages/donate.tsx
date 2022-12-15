import styles from '../styles/pagestyles/Donate.module.css'
import Image from 'next/image'
import Footer from '../componenets/Footer'
import { useEffect } from 'react'

export default function Donate() {
    
  useEffect(()=>{
    document.title= "Elear | Donate" ;
  },[]);
    return (<>
        <div className={styles.container}>
            <div className={styles.left}>
                <section style={{ padding: '20px' }}><Image src={'/donate/img'} width={100} height={100} layout='responsive' alt="" /></section>
                <p>
                    We are proudly non-profit, non-corporate and non-compromised. Thousands of people like you help us stand up for a healthy internet for all. We rely on donations to carry out our mission to keep the Web open and free. Will you give today?
                </p>
            </div>
            <div className={styles.right}>
                <h2>Donate now</h2>
                <input type='text' placeholder='amout ( $ )' />
                <div style={{
                    paddingTop: '5vh',
                    border: 'none'
                }}>
                    <button >PayPal</button>
                    <button >or Visa</button>

                </div>
                <p>Problems donating? Visit our <span>FAQ</span> for answers to most common questions. Still have problems? <span>Contact us.</span> </p>
            </div>

        </div>
        <Footer onManatain={'none'} height={'60vh'} /></>
    )
}