import styles from '../styles/cpnstyles/Navbar.module.css'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import Menu from './Atoms/Menu';
import React from 'react';

export default function Navbar() {

    const theVariant = {
        hidden: {
            opacity: 0,
            y: -40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
            }
        },
        hover: {
            backgroundColor: "#000"
        }
    }
    const M = () => {
        let [before, setBefore] = useState(0);
        let [visiable, setVisiable] = useState(true);
        let [menuVisibility, setMenuVisibility] = useState(false);
        const { scrollY } = useScroll()

        useEffect(() => {
            scrollY.onChange((latest) => {
                if (latest > before) {
                    setVisiable(false);
                } else {
                    setVisiable(true);
                }
                setTimeout(() => {
                    before = latest;
                }, 20);
            })
        }, [])
        return (
                <AnimatePresence>
                    {visiable && <motion.div
                        variants={theVariant}
                        initial='hidden'
                        animate='visible'
                        whileHover='hover'
                        exit='hidden'
                        className={styles.container}>
                        <div>
                            <Image src={'/Olomi.svg'} width={100} height={100} alt="" className={styles.logo} />
                        </div>
                        <div className={styles.sign}>E L E A R</div>
                        <button className={styles.menuButton} onClick={() => {
                            () =>
                                setMenuVisibility(true)
                        }} >M E N U</button>
                        <Menu visible={menuVisibility} />
                    </motion.div>}
                </AnimatePresence>)
    }
    return (
        <M />
    )
}