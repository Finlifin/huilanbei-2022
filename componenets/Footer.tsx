import styles from '../styles/cpnstyles/Footer.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link';

function Footer(props: { height: string, onManatain: string }) {
    return (
        <div className={styles.container} style={{ height: props.height, scrollSnapAlign: props.onManatain }}>
            <div className={styles.sub}>


                <div className={styles.subscribe}>
                    <div className={styles.behold}>Subscibe us</div>
                    <div className={styles.note}>*choose a approach to subscribe us*</div>
                    <div className={styles.inputtype}>
                        <input type={'text'} className={styles.input} placeholder='Email' />
                        <button className={styles.submit}>submit</button>
                    </div>
                    <div className={styles.inputtype}>
                        <input type={'text'} className={styles.input} placeholder='Apple ID' />
                        <button className={styles.submit}>submit</button>
                    </div>
                    <div className={styles.inputtype}>
                        <input type={'text'} className={styles.input} placeholder='Phone' />
                        <button className={styles.submit}>submit</button>
                    </div>
                </div>


                <div className={styles.to}>
                    <h3 >GET HELP</h3>
                    <div><Link href={'https://github.com/Finlifin'} >Wikis</Link></div>
                    <div><Link href={'/'} >Reference</Link></div>
                    <div><Link href={'github.com/Finlifin'} >RomenaLibrary</Link></div>
                    <div><Link href={'github.com/Finlifin'} >OpenCourse</Link></div>
                    <div><Link href={'github.com/Finlifin'} > ... </Link></div>
                </div>
                <div className={styles.to}>
                    <h3 >ACTIVITIS</h3>
                    <div><Link href={'github.com/Finlifin'} >Volunteer</Link></div>
                    <div><Link href={'github.com/Finlifin'} >Summer Cap</Link></div>
                    <div><Link href={'github.com/Finlifin'} >Student Links</Link></div>
                    <div><Link href={'github.com/Finlifin'} >Database</Link></div>
                    <div><Link href={'github.com/Finlifin'} >...</Link></div>
                </div>
                <div className={styles.to}>
                    <h3 >FELLOWS</h3>
                    <div><Link href={'https://kurzgesagt.org/'} >Kurzgesagt</Link></div>
                    <div><Link href={'github.com/Finlifin'} >kernel.org</Link></div>
                    <div><Link href={'github.com/Finlifin'} >Morzila</Link></div>
                    <div><Link href={'github.com/Finlifin'} >FSF</Link></div>
                    <div><Link href={'github.com/Finlifin'} > ... </Link></div>
                </div>


            </div>
            <div className={styles.copyright}>Copyright@Eleartech Corporation</div>
        </div>
    )
}


export default Footer;