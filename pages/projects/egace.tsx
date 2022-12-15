import styles from '../../styles/pagestyles/Olomi.module.css'
import { motion } from 'framer-motion'
import Footer from '../../componenets/Footer';
import Image from 'next/image';
import { useEffect } from 'react';

const BoardOne = () => {
    return (
        <motion.div className={styles.boardone}>
            <div className={styles.boardone__up}>Egace DE</div>
            <div className="separate"></div>
            <div className={styles.boardone__down}>
                <p>Powerful desktop environment for Olomi OS</p>
                <p className={styles.boardone__down__box}>fast</p>
                <p className={styles.boardone__down__box}>efficient</p>
                <p className={styles.boardone__down__box}>lite</p>
            </div>
        </motion.div>
    )
}

const AppleButton = (props: { text: String }) => {
    return (
        <motion.div

            initial={{ backgroundColor: '#15152a', color: 'white' }}
            animate={{ backgroundColor: '#15152a', color: 'white' }}
            transition={{ duration: .2 }}
            whileHover={{ backgroundColor: 'white', color: '#15152a', scale: 1.05 }}
            whileTap={{ scale: 1.1 }}
            style={{
                height: '48px',
                borderRadius: '8px',
                textAlign: 'center',
                padding: 'auto',
                letterSpacing: .3,
                border: '1px solid white',
                margin: '2vmin',
                width: '60%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>{props.text}</motion.div>
    )
}

const Foo = () => {
    return (
        <div className={styles.foo__container}>
            <div className={styles.foo__img}>
                <p style={{
                    fontSize: '6vmax',
                    textAlign: 'center'
                }}>Get involed</p>
                <p
                    style={{
                        margin: '10%',
                        maxWidth: '900px',
                    }}
                ><Image src={'/work-together'} width={1619} height={1080} quality={100} alt="" layout='responsive' style={{ borderRadius: '10px' }} /></p>
            </div>
            <div className={styles.foo__left}>
                <AppleButton text='Try Egace DE online' />
                <AppleButton text='Egace User Guide' />
                <AppleButton text='Egace User Manual' />
                <AppleButton text='Egace Community News' />
            </div>
        </div>
    )
}

function Egace() {

  useEffect(()=>{
    document.title= "Elear | Egace";
  },[]);
    return (
        <motion.div className={styles.container}>
            <div className={styles.background}>
                <Image src={'/egace/background'} width={1777} height={1080} layout='responsive' alt='' quality={100} />
            </div>
            <BoardOne />


            <div className="separate"></div>
            <motion.div className='normalPara' style={{ textAlign: 'end', paddingRight: '4vmin', marginLeft: '38vmin' }}>
                Egace is the default desktop environment on Olomi OS, yet not only for Olomi.Actaully you can run it on almost every POSIX system. It's lite and fast,and provide beautiful graphics and efficient interfaces for operaters.
            </motion.div>
            <div className='separate'></div>
            {/* <div
                style={{ textAlign: 'center', fontSize: '8vw', fontFamily: 'Poppins', padding: '12vmin' }}
            ></div> */}


            {/* <div className='separate'></div> */}

            {/* <div className='separate'></div> */}
            <div
                style={{ textAlign: 'center', fontSize: '3vmax', fontFamily: 'Poppins', padding: '6vmin' }}
            >How's It Looks Like?</div>
            <div className='separate'></div>
            <p className='normalPara' style={{ margin: '0 10vmin 0 10vmin' }}>
                <h3>Simple and Easy to Use</h3>
                Every part of Egace DE 1.12 has been designed to make it simple and easy to use. The Activities Overview is a simple way to access all your basic tasks. A press of a button is all it takes to view your open windows, launch applications, or check if you have new messages. Having everything in one convenient place means you don’t have to learn your way around a maze of different technologies.
            </p>
            <div className='separate'></div>
            <p className='normalPara' style={{ margin: '0 10vmin 0 10vmin' }}>
                <h3>Intuitive and Efficient</h3>
                Egace DE 1.12 provides a focused working environment that helps you get things done. It is packed with features that will make you more productive: a powerful search feature that helps you access all your work from one place; side-by-side windows that make it easy to view several documents at the same time; seamless integration with online accounts which allows you to access all your data in one place; and a messaging system that comfortably deals with notifications, letting you quickly respond in place or return to them in a convenient time.
            </p>
            <div className='separate'></div>
            <p className='normalPara' style={{ margin: '0 10vmin 0 10vmin' }}>
                <h3>Finely Crafted</h3>
                Every aspect of Egace DE has been crafted to fit together as a harmonious whole, providing a consistent and integrated experience. Our attention to detail means a smooth and polished product that lets you do the things you want without getting in the way. GNOME 43 is satisfying to use and beautiful to behold.
            </p>
            <div className='separate'></div>
            <Foo />
            <Footer height={'60'} onManatain={'none'} />
        </motion.div>
    )
}

export default Egace;