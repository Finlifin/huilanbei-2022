import { Url } from 'url'
import styles from '../../styles/cpnstyles/Postcard.module.css'
import Image from 'next/image';
import Abutton from './Abutton';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Postcard(props: { logo: String; name: String; itd: String; to: String }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: '30vh', scaleY: 1.4}}
            whileInView={{ opacity: 1, y: 0, scaleY: 1 }}
            viewport={{ once: true }}
            // animate={{ opacity: 1, y: 0 ,scale:1}}
            transition={{ type: 'tween', duration: .6 }}
            className={styles.container}>
            <p>
                <p><Link href={props.to} >{props.name}</Link></p>
                <motion.div
                    whileHover={{ x: 20 }}
                >
                    <Image src={props.logo} width={128} height={128} alt="" className={styles.logo} />
                </motion.div>
                <div className={styles.introduction}>{props.itd}</div>
            </p>
            <div className={styles.right}><Image src={props.logo} width={128} height={128} alt="" className={styles.funny} /></div>

        </motion.div>
    )
}