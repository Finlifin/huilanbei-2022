import { motion } from "framer-motion";
import styles from '../styles/cpnstyles/Navbar_two.module.css'
import { useState, useEffect } from "react";
import { useScroll, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar_two() {
    let [before, setBefore] = useState(0);
    let [visiable, setVisiable] = useState(true);
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
            {visiable &&
                <motion.div
                    initial={{ y: '-8vh' }}
                    animate={{ y: 0 }}
                    transition={{ duration: .4 }}
                    exit={{ y: '-2.5vh', opacity: 0 }}
                    className={styles.container} >

                    <motion.div className={styles.left}>
                        <p>ELEAR</p>
                    </motion.div>
                    <motion.div className={styles.right}>
                        <p><Link href={'/'} >HOME</Link></p>
                        <p><Link href={'/forum'}>FORUM</Link></p>
                        <p><Link href={'/library'}>LIBRARY</Link></p>
                        <p><Link href={'/donate'}>DONATE</Link></p>
                        <p><Link href={'/about'}>ABOUT</Link></p>
                    </motion.div>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1 }}
                        className={styles.line}>
                    </motion.div>
                </motion.div>}
        </AnimatePresence>
    )
}