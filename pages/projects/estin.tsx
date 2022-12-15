import styles from '../../styles/pagestyles/Olomi.module.css'
import { motion } from 'framer-motion'
import Footer from '../../componenets/Footer';
import Image from 'next/image';
import { useEffect } from 'react';

const BoardOne = () => {
    return (
        <motion.div className={styles.boardone}>
            <div className={styles.boardone__up}>Estin</div>
            <div className="separate"></div>
            <div className={styles.boardone__down}>
                <p>Meet the powerful graphics API for Olomi OS</p>
                <p className={styles.boardone__down__box}>cross-platform</p>
                <p className={styles.boardone__down__box}>fast</p>
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
                <AppleButton text='View the overall analyzation of Estin' />
                <AppleButton text='Estin Releasing Guide' />
                <AppleButton text='News' />
                <AppleButton text='Estin reference' />
            </div>
        </div>
    )
}

function Estin() {

    useEffect(() => {
        document.title = "Elear | Estin";
    }, []);
    return (
        <motion.div className={styles.container}>
            <div className={styles.background}>
                <Image src={'/estin/background'} width={1777} height={1080} layout='responsive' alt='' quality={100} />
            </div>
            <BoardOne />


            <div className="separate"></div>
            <motion.div className='normalPara' style={{ textAlign: 'end', paddingRight: '4vmin', marginLeft: '38vmin' }}>Estin powers hardware-accelerated graphics on Olomi platforms by providing a low-overhead API, rich shading language, tight integration between graphics and compute, and an unparalleled suite of GPU profiling and debugging tools. Estin 1.6 introduces powerful features that help your games and pro apps tap into the full potential of AMD GPUs. Now you can render high-resolution graphics in less time, load resources faster, train machine learning networks with the GPU, and more.</motion.div>
            <div className='separate'></div>
            <div
                style={{ textAlign: 'center', fontSize: '8vw', fontFamily: 'Poppins', padding: '12vmin' }}
            >Can I process by other graphics API?</div>

            <div className='normalPara' style={{ textAlign: 'end', paddingRight: '4vmin' }}>
                Of course! Vulkan is also welcome in Olomi OS since it is extremely fast and holds nice cross-platfrom ability ,yet it is too complex to build lite utils and games. And WGPU is also ready for Olomi OS ,which is very develop-friendly. But it cannot against Vulkan and Estin on speed.So, choose the most appropricate one to develop.
            </div>


            <div className='separate'></div>
            <Foo />
            <Footer height={'60'} onManatain={'none'} />
        </motion.div>
    )
}

export default Estin;