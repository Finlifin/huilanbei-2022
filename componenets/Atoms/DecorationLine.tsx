import styles from '../../styles/cpnstyles/DecorationLine.module.css'
import { motion } from 'framer-motion'

export default function DecorationLine(props: { delay: number, width: String }) {
    return (
        <motion.div
            initial={{ scaleX: .005 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: props.delay, duration: 1.2, type: 'tween' }}
            style={{
                width: props.width,
                backgroundColor: 'white',
                height: '4px',
            }}
        ></motion.div>
    )
}