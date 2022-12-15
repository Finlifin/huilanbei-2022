import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import closeIcon from "../../public/x.svg"
import styles from '../../styles/cpnstyles/Menu.module.css'
import { useState, forwardRef, useImperativeHandle, useEffect, useContext } from 'react'

let Item = (props: { name: string; to: string }) => {
    return (
        <Link href={props.to as string}><div className={styles.item}>{props.name}</div></Link>
    )
}

const Menu = (props: { visible: boolean }) => {
    let [visible, setVisible] = useState(props.visible);

    useEffect(
        ()=>{
         setVisible(props.visible);

        }
    ,[])

    return (
        <AnimatePresence>
            {props.visible && <>
                <motion.div
                    initial={{ x: '20vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'tween' }}
                    exit={{ x: '20vw' }}
                    className={styles.container}>
                    <Item name='HOME' to={'/'} />
                    <Item name='FORUM' to={'/forum'} />
                    <Item name='LIBRARY' to={'/docs'} />
                    <Item name='DONATE' to={'/donate'} />
                    <Item name='ABOUT' to={'/about'} />
                    <Image src="/x.svg" width={48} height={48} className={closeIcon} alt="" onClickCapture={() => setVisible(false)} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: .6 }}
                    transition={{ duration: .2 }}
                    className={styles.background} onClickCapture={() => setVisible(false)}></motion.div></>}
        </AnimatePresence>
    )
}


export default Menu