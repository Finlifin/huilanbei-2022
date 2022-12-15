import { motion } from "framer-motion";
import styles from '../../styles/pagestyles/Vilya.module.css'
import Image from "next/image";
import Button from "../../componenets/Atoms/Button";
import DecorationLine from "../../componenets/Atoms/DecorationLine";
import Footer from "../../componenets/Footer";
import { useEffect } from "react";




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
                width: '90%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.3vmax'
            }}>{props.text}</motion.div>
    )
}




const Page = (props: { img: String, title: String, text: String }) => {
    return (<motion.div className={styles.page__container}>
        <motion.div className={styles.page__left}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href="#" style={{ textDecoration: 'underline' }}>blog</a>
        </motion.div>
        <motion.div className={styles.page__right}>
            <motion.section
                whileHover={{ scale: 1.05 }}
            ><Image src={props.img} width={600} height={600} layout='responsive' alt="" /></motion.section>
        </motion.div>
    </motion.div>)
}

export default function Vilya() {
    const sessionVariant = {};


    useEffect(() => {
        document.title = "Elear | Vilya";
    }, []);
    return (
        <motion.div className={styles.container} style={{ scrollSnapType: 'y mandatory' }}>
            <Button />
            <motion.section className={styles.section} >
                <motion.div className={styles.sudo}>What should a outstanding system-level programming language look like?</motion.div>
                <motion.div className={styles.background} >
                    <Image src={'/svgs/floating.svg'} width={600} height={600} layout="responsive" alt="" />
                </motion.div>
                <DecorationLine width={'60%'} delay={.2} />
            </motion.section>

            <Page img={'/svgs/fast.svg'} title='Fast' text='Vilya is blazingly fast and memory-efficient: with no runtime or garbage collector, it can power performance-critical services, run on embedded devices, and easily integrate with other languages. ' />
            <Page img={'/svgs/safety.svg'} title='Reliable' text=' Vilya"s rich type system and ownership model guarantee memory-safety and thread-safety — enabling you to eliminate many classes of bugs at compile-time. ' />
            <Page img={'/svgs/development-friendly.svg'} title='Friendly' text='Vilya is a programming language that lets you work quickly and integrate systems more effectively' />
            <Page img={'/svgs/close-to-hardware.svg'} title='Freestanding' text='Obviously you need to be freestanding to host the whole system' />
            <Page img={'/svgs/asynchronous.svg'} title='Async' text='Everyone can build asynchronous application through Vilya language' />

            <div className={styles.letsgo}>
                Get Vilya language packages by Vpac easily
                <div><Image src={'/vilya/haskellcode.png'} width={900} height={600} layout='responsive' alt="" /></div>
            </div>

            <div className={styles.letsgo}>
                <h3>Learn more about Vilya</h3>
                <div style={{
                    width: '64vh'
                }}>
                    <AppleButton text={'Vilya playground'} />
                    <AppleButton text={'Why purely functional'} />
                    <AppleButton text={'Vilya tutorial'} />
                    <AppleButton text={'Vpac mannual'} />
                    <AppleButton text={'Vilya web book'} />
                </div>

            </div>

            <Footer height={'100vh'} onManatain={'center'} />
        </motion.div>
    )
}