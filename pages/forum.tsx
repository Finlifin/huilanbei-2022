import { motion } from "framer-motion";
import Footer from "../componenets/Footer";
import styles from '../styles/pagestyles/Forum.module.css'
import Image from "next/image";
import Searchline from '../componenets/Searchline'
import { AnimatePresence } from "framer-motion";
import { useState ,useEffect} from "react";


const Topic = (props: { title: string, auther: string, date: string }) => {
    let [wrapped, setWrapped] = useState(false);

    return (
        <div className={styles.topic__container}>
            <div>{props.title}<button onClickCapture={() => setWrapped(!wrapped)}>+</button></div>
            {wrapped && <motion.p>
                {props.auther}   {props.date}
            </motion.p>}
        </div>
    )
}

function Forum() {
    function login() { };
    
  useEffect(()=>{
    document.title= "Elear | Forum";
  },[]);
    return (
        <motion.div className={styles.container}>
            <motion.div className={styles.background}>
                <Image src={'/forum/background'} width={1777} height={1080} layout='responsive' alt="" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ y: '-60vh', opacity: 1 }}
                transition={{ type: 'tween', duration: .4 }}
                style={{ width: '100%', height: '64px' }}>
                <Searchline holder="Search for topics, issuse" />
            </motion.div>

            <p className={styles.focus}>
                *Here‘s the forum of the participants of the projects of Elear. If you are not familiar with here, take <span> Elear User Formula</span> and <span>Elear Forum Guide</span> first.*
            </p>

            <div className={styles.nav}>
                <div className={styles.nav__left}>
                    <div className="comment" style={{ fontSize: "1rem", textDecoration: 'underline' }} onClick={() => { login }}>You are not logged in.</div>
                </div>
                <div className={styles.nav__right}>
                    <div className={styles.nav__right__item}>|Synthesis|</div>
                    <div className={styles.nav__right__item}>|Details|</div>
                    <div className={styles.nav__right__item}>|Closed|</div>
                </div>
            </div>

            <div className="separate"></div>
            <div className={styles.content}>
                <Topic title={'Logitec unifying receiver lags every reboot'} auther={'Seaningfish'} date={'-----------9:43 am'} />
            </div>
            <div className={styles.content}>
                <Topic title={'USB suspending issue'} auther={'Fingolfin'} date={'-----------9:29 am'} />
            </div>
            <div className={styles.content}>
                <Topic title={'Intel Arc A770 OpenCL Issues'} auther={'Olometg'} date={'-----------9:12 am'} />
            </div>
            <div className={styles.content}>
                <Topic title={'Arch stuck at boot when replacing nvidia with nvidia-dmks'} auther={'Mukava'} date={'-----------9:01 am'} />
            </div>
            <div className={styles.content}>
                <Topic title={'Get start gaming with steam on Olomi'} auther={'Terve'} date={'-----------8:54 am'} />
            </div>
            <div className={styles.content}>
                <Topic title={'Bootloader panic while cross the hardware authienic '} auther={'Soomir'} date={'-----------8:30 am'} />
            </div>
            <div className={styles.content}>
                <Topic title={'Arch stuck at boot when replacing nvidia with nvidia-dmks'} auther={'Goosyn'} date={'-----------8:12 am'} />
            </div>
            <div className={styles.content}>
                <Topic title={'Arch stuck at boot when replacing nvidia with nvidia-dmks'} auther={'Celeborn'} date={'-----------8:11 am'} />
            </div>
            {/* <div style={{
                width:'100vw',
                display:'flex',
                align-items:'center'}}
                > */}
            <div className={styles.list__foot}>
                <div>Back</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>Fore</div>
            </div>
            {/* </div> */}

            <Footer height={'60vh'} onManatain={'none'} />
        </motion.div >
    )
}

export default Forum;