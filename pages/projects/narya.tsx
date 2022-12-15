import styles from '../../styles/pagestyles/Narya.module.css'
import { motion } from 'framer-motion'
import Footer from '../../componenets/Footer';
import Image from 'next/image';
import { useEffect } from 'react';

const BoardOne = () => {
    return (
        <motion.div className={styles.boardone}>
            <div className={styles.boardone__up}>Narya</div>
            <div className="separate"></div>
            <div className={styles.boardone__down}>
                <p>Finally, a command line shell for the 90s </p>
                <p className={styles.boardone__down__box}>fast</p>
                <p className={styles.boardone__down__box}>friendly</p>
                <p className={styles.boardone__down__box}>lite</p>
            </div>
        </motion.div>
    )
}

const AppleButton = (props: { text: string }) => {
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
                <AppleButton text='Try Narya online' />
                <AppleButton text='Install Narya now' />
                <AppleButton text='The Olomi,Narya and Egace mannual' />
                <AppleButton text='Narya Reference' />
            </div>
        </div>
    )
}

function Olomi() {

    useEffect(() => {
        document.title = "Elear | Narya";
    }, []);
    return (
        <motion.div className={styles.container}>
            <div className={styles.background}>
                <Image src={'/narya/background'} width={1777} height={1080} layout='responsive' alt='' quality={100} />
            </div>
            <BoardOne />

            <div className='separate'></div>
            <p className='normalPara' style={{ margin: '0 10vmin 0 10vmin' }}>
                Narya is a smart and user-friendly command line shell for Linux, macOS, and the rest of the family. Narya was inspired by fish and guile, but it is even faster then dash which faster 4 times then Bash. And is can easily interact with rust ,vilya, c, and other lots of lanuage. It is functional mostly, and you can even use it to declare the structure of your packages and configuration files.
            </p>
            <div className='separate'></div>
            <Foo />
            <Footer height={'60'} onManatain={'none'} />
        </motion.div>
    )
}

export default Olomi;