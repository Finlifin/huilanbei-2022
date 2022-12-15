import styles from '../../styles/pagestyles/Nenya.module.css'
import { motion } from 'framer-motion'
import Footer from '../../componenets/Footer';
import Image from 'next/image';

const BoardOne = () => {
    return (
        <motion.div className={styles.boardone}>
            <div className={styles.boardone__up}>Nenya</div>
            <div className="separate"></div>
            <div className={styles.boardone__down}>
                <p>Build abundant applications effciently using Nenya</p>
                <p className={styles.boardone__down__box}>ease</p>
                <p className={styles.boardone__down__box}>lush</p>
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
                <AppleButton text='Online play' />
                <AppleButton text='Examples on github' />
                <AppleButton text='Nenya tutorial' />
                <AppleButton text='Nenya reference' />
            </div>
        </div>
    )
}

function Nenya() {
    return (
        <motion.div className={styles.container}>
            <div className={styles.background}>
                <Image src={'/nenya/cars'} width={1777} height={1080} layout='responsive' alt='' quality={100} />
            </div>
            <BoardOne />


            <div className="separate"></div>
            <motion.div className='normalPara' style={{ textAlign: 'end', paddingRight: '4vmin', marginLeft: '38vmin' }}>Nenya is a markup language that defines the structure of your content. Likes HTML it consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear a certain way, or act a certain way.</motion.div>
            <div className='separate'></div>
            <div
                style={{ textAlign: 'center', fontSize: '8vw', fontFamily: 'Poppins', padding: '12vmin' }}
            >Why not HTML?</div>

            <div
                style={{ textAlign: 'center', fontSize: '2.2vh', fontFamily: 'Poppins', padding: '6vmin' }}
            >HTML is the most popular markup language all around the world.But not everybody enjoy the process building applications using HTML since it is too simple to support complex projects.</div>



            <div className='separate'></div>
            <div
                style={{ textAlign: 'center', fontSize: '3vmax', fontFamily: 'Poppins', padding: '6vmin' }}
            >The Need for Something New</div>
            <div className='separate'></div>
            <p className='normalPara' style={{ margin: '0 10vmin 0 10vmin' }}>
                You could get a lot advantages through Nenya:
                <ul>
                    <li>More abundant origin tags then HTMl</li>
                    <li>Higher speed on structure analyzation then HTML</li>
                    <li>Easy to interact with wasm and local language like Rust and Vilya</li>
                    <li>More advanced way to style with css</li>
                    <li>Moderm package manager: Nix</li>
                    <li>Lots of matirials for learning</li>
                    <li>...</li>
                </ul>
            </p>
            <div className='separate'></div>
            <Foo />
            <Footer height={'60'} onManatain={'none'} />
        </motion.div>
    )
}

export default Nenya;