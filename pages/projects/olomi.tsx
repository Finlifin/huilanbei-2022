import styles from '../../styles/pagestyles/Olomi.module.css'
import { motion } from 'framer-motion'
import Footer from '../../componenets/Footer';
import Image from 'next/image';
import { useEffect } from 'react';

const BoardOne = () => {
    return (
        <motion.div className={styles.boardone}>
            <div className={styles.boardone__up}>Olomi OS</div>
            <div className="separate"></div>
            <div className={styles.boardone__down}>
                <p>Meet you next generation operating system</p>
                <p className={styles.boardone__down__box}>fast</p>
                <p className={styles.boardone__down__box}>safe</p>
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
                <AppleButton text='Try Olomi and Egace online VM' />
                <AppleButton text='Install Olomi OS now' />
                <AppleButton text='The Olomi,Narya and Egace mannual' />
                <AppleButton text='Develop Olomi application' />
            </div>
        </div>
    )
}

function Olomi() {

    useEffect(() => {
        document.title = "Elear | Olomi";
    }, []);
    return (
        <motion.div className={styles.container}>
            <div className={styles.background}>
                <Image src={'/olomi/two-book'} width={1777} height={1080} layout='responsive' alt='' quality={100} />
            </div>
            <BoardOne />


            <div className="separate"></div>
            <motion.div className='normalPara' style={{ textAlign: 'end', paddingRight: '4vmin', marginLeft: '38vmin' }}>Olomi is a Unix-like Operating System written in Rust, aiming to bring the innovations of Rust to a modern microkernel and full set of applications. </motion.div>
            <div className='separate'></div>
            <div
                style={{ textAlign: 'center', fontSize: '8vw', fontFamily: 'Poppins', padding: '12vmin' }}
            >Why a new OS?</div>


            <div className='separate'></div>
            <div
                style={{ textAlign: 'center', fontSize: '3vw', fontFamily: 'Poppins', padding: '6vmin' }}
            >Let‘s consider 3 existing projects.</div>
            <ul>
                <li>LINUX
                    <p>Linux runs the world, and boots on everything from high performance servers to tiny embedded devices. Indeed, many Redox community members run Linux as their main workstations. However, Linux is not an ideal platform for new innovation in OS development.</p>
                </li>
                <li>BSD
                    <p>It is no secret that we‘re more in favor of BSD. The BSD community has led the way in many innovations in the past 2 decades. Things like jails and ZFS yield more reliable systems, and other operating systems are still catching up.</p>
                </li>
                <li>MINIX
                    <p>And what about MINIX? Its microkernel design is a big influence on the Redox project, especially for reasons like reliability. MINIX is the most in line with Redox‘s philosophy. It has a similar design, and a similar license.

                    </p>
                </li>
            </ul>

            <div style={{ display: 'flex', gap: "3vmin", padding: '3vmin' }}>
                <Image src={'/olomi/linux.jpg'} layout={'responsive'} width={100} height={65} alt="" style={{ borderRadius: '10px' }}></Image>
                <Image src={'/olomi/minix.jpg'} layout={'responsive'} width={100} height={65} alt="" style={{ borderRadius: '10px' }}></Image>
                <Image src={'/olomi/freebsd.png'} layout={'responsive'} width={100} height={65} alt="" style={{ borderRadius: '10px' }}></Image>
            </div>


            <div className='separate'></div>
            <div
                style={{ textAlign: 'center', fontSize: '3vmax', fontFamily: 'Poppins', padding: '6vmin' }}
            >The Need for Something New</div>
            <div className='separate'></div>
            <p className='normalPara' style={{ margin: '0 10vmin 0 10vmin' }}>
                We have to admit, that we do like the idea of writing something that is our own (Not Invented Here syndrome). There are numerous places in the MINIX 3 source code where we would like to make changes, so many that perhaps a rewrite in Rust makes the most sense.
                <ul>
                    <li>Different VFS model, based on URLs, where a program can control an entire segmented filesystem</li>
                    <li>Different driver model, where drivers interface with filesystems like<code> network: </code> and  <code>audio: </code> to provide features</li>
                    <li>Different file system, RedoxFS, with a TFS implementation in progress</li>
                    <li>User space written mostly in Rust</li>
                    <li>More flexible structure for comliant layers of other platforms</li>
                    <li>Les code to learn</li>
                    <li>...</li>
                </ul>
            </p>
            <div className='separate'></div>
            <Foo />
            <Footer height={'60'} onManatain={'none'} />
        </motion.div>
    )
}

export default Olomi;