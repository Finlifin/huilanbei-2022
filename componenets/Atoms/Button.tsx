import styles from '../../styles/cpnstyles/Button.module.css'
import { motion } from 'framer-motion'

const Button = () => {

    return (
        <motion.button
            whileTap={{ scale: .8 }}
            className={styles.button} onClick={() => { window.scrollBy(0, 5) }} onDoubleClick={() => scrollTo(0, 0)}>
            <div className={styles.button__inner_1} ></div>
            <motion.div

                className={styles.button__inner_2} ></motion.div>
            <div className={styles.button__horizontal}></div>
            <div className={styles.button__vertical}></div>
        </motion.button >
    )
}

export default Button