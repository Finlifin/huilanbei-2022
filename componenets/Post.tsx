import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/cpnstyles/Post.module.css'
import DecorationLine from "./Atoms/DecorationLine";

function Post(props: { to: string, h: string, img: string, intro: string }) {
    let mainVariant = {
        hidden: {
            y: "5vw",
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
        },
        transition: {
            duration: .4,
            type: 'tween'
        }
    }
    return (
        <motion.div
            variants={mainVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.2, type: 'tween' }}
            viewport={{ once: true }}
            className={styles.container}>
            <motion.div
                // whileHover={{ scale: 1.1 }}
                // transition={{ type: 'tween', duration: .4, ease: 'easeOut' }}
                className={styles.img}
            ><Image src={props.img} layout='responsive' width={910} height={1250} quality={100} alt="" /></motion.div>
            <motion.div className={styles.right}>
                <motion.h1><Link href={props.to}>{props.h}</Link></motion.h1>
                <DecorationLine width={'60%'} delay={.3} />
                <motion.p>{props.intro}</motion.p>
            </motion.div>
        </motion.div>
    )
}

export default Post