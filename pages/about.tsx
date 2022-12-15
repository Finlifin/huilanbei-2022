import { motion } from 'framer-motion'
import styles from '../styles/pagestyles/About.module.css'
import Footer from '../componenets/Footer'
import Image from 'next/image'

function Para(props: { text: String, direction: String, textalign: String }) {
    return (
        <motion.div className={styles.para__container} style={{ justifyContent: props.direction }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={styles.para__main} style={{ textAlign: props.textalign }}>{props.text}</motion.div>
        </motion.div>
    )
}


export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <Image src={'/about/background'} height={1777} width={1080} alt="" layout='responsive' />
            </div>

            <p
                style={{
                    fontSize: '7vh',
                    zIndex: ' 10',
                    textAlign: 'center',
                    fontWeight: '700',
                    maxWidth: '760px',
                    justifySelf: 'center',
                    alignSelf: 'center',
                    padding: '48px',
                    backdropFilter: 'blur(12px)',
                    marginTop: '10vh'
                }}
            >
                Elear is a community of artists, engineers and  scientists.
            </p>

            <div>
                <Para text='Corporation. Foundation. Not-for-profit.' direction={'flex-end'} textalign={'end'} />
                <Para text='Pioneers of The Open Web.' direction={'flex-start'} textalign={'start'} />
                <Para text='200 Thousand Registered Members' direction={'flex-end'} textalign={'end'} />
                <p
                    style={{
                        fontSize: '18vh',
                        position: 'relative',
                        zIndex: '10',
                        textAlign: 'center',
                        backdropFilter: 'blur(12px)',
                        boxShadow: '0px 0px 5px 5px #ffffff11',
                        padding: '36px',
                        maxWidth : '1200px',
                        justifySelf: 'center',
                        alignSelf: 'center',
                        fontWeight: '800'

                    }}
                >Family</p>
            </div>
            <Footer height={'60vh'} onManatain={'none'} />
        </div>
    )
}