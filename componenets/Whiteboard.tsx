import styles from '../styles/cpnstyles/Whiteboard.module.css'
import Postcard from './Atoms/Postcard';
import { motion } from 'framer-motion';

function Whiteboard() {
    return (
        <motion.div

            className={styles.container}>
            <Postcard logo={'/Olomi0.svg'} name={'Olomi'} to={'/projects/olomi'}
                itd={'Your next generation operating system'} />
            <Postcard logo={'/Olomi0.svg'} name={'Vilya'} to={'/projects/vilya'}
                itd={'A powerful functional programming language'} />
            <Postcard logo={'/Olomi0.svg'} name={'Nenya'} to={'/projects/nenya'}
                itd={'Sound and efficient decription language'} />
            <Postcard logo={'/Olomi0.svg'} name={'Narya'} to={'projects/narya'}
                itd={'Etherealize dynamic programming language'} />


            <Postcard logo={'/Olomi0.svg'} name={'Estin'} to={'/projects/estin'}
                itd={'Graphic API for Olomi OS'} />
            <Postcard logo={'/Olomi0.svg'} name={'Egace'} to={'/projects/egace'}
                itd={'Egace desktop environment for the default of Olomi'} />

        </motion.div>
    )
}

export default Whiteboard;