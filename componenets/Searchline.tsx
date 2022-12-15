import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/cpnstyles/Searchline.module.css"

export default function Searchline(props:{holder:string}) {
    return (
        <motion.div className={styles.container}>
            <input type="text" className={styles.input} placeholder={props.holder} >
            </input>
            {/* <div style={{ height: '100%' }}>
                <Image src={'/svgs/search.svg'} width={64} height={64} layout='responsive' alt="" />
            </div> */}
        </motion.div>
    )
}