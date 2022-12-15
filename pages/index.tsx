import Image from 'next/image'
import styles from '../styles/pagestyles/Home.module.css'
import Space from '../componenets/Atoms/Space'
import Whiteboard from '../componenets/Whiteboard'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Post from '../componenets/Post'
import DecorationLine from '../componenets/Atoms/DecorationLine'
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'

export default function Home() {

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0.7, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'tween', duration: 1 }}
        className={'styles.background'}
      >
        <Image src={'/abstract-light-circle.jpg'} alt="" layout='responsive' width={1777} height={1120} />
      </motion.div>
      <Space
        s1="To accelerate technology development"
        s2="To defend the open source spirit"
        name="ELEAR"
      />
      <div className={styles.para}>What is Elear? </div>
      <Post h="Community of formers" to={'/'} intro="Elear is a garden of scientists,artists and engineers.We work for non-profit project together." img="/workplace" />

      <DecorationLine width={'40vw'} delay={.3} />
      <Post h="Paradise of creativity" to={'/'} intro="We perfer more creative and challenging things all the time. Friendly and creative people are always welcome." img="/background-from.jpg" />

      <DecorationLine width={'40vw'} delay={.3} />
      <Post h="A community of artists" to={'/'} intro="We are always trying to contribute more for the nature and humanity,in many deferent approaches.Join us and see that you make it as well." img="/welcome" />
      <div className={styles.para}>Get to know what we are working on now</div>
      <div className="comment">  *Notice that almost all of them are software engineers,since most of us are familiar with open-source collboraion.It's esae to work together on the Inernet.*</div>
      <Whiteboard />
      <Link href={'/projects'}><div className={styles.viewall} >veiw all projects</div></Link>
      <Footer height={'60vh'} onManatain={'none'} />
    </div>
  )
}
