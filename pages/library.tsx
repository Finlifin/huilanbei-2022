import Footer from "../componenets/Footer"
import Image from "next/image"
import styles from "../styles/pagestyles/Library.module.css"
import Searchline from "../componenets/Searchline"
import { motion } from "framer-motion"
import { useEffect } from "react"

function Flyleaf(props: { title: string, intro: string }) {
    return (
        <motion.div
            transition={{ duration: .01, ease: 'easeOut', type: 'tween' }}
            whileHover={{ y: -10 }}
            className={styles.flyleaf__container}>
            <p>{props.title}</p>
            <div>{props.intro}</div>
        </motion.div>
    )
}

export default function Library() {

    useEffect(() => {
        document.title = "Elear | Library";
    }, []);
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <Image src={'/library/background'} height={1080} width={1777} alt="" layout="responsive" />
            </div>

            <div className={styles.search}>
                <Searchline holder="Look for books, magazings, news ,articals" />
            </div>

            <div className={styles.contents} style={{ flexDirection: 'column' }}>
                <div className={styles.contents}>
                    <Flyleaf title={" Borrow, Renew and Return Library Materials"}
                        intro={"Connect with the library materials you need to get your work done."} />
                    <Flyleaf title={"Electronic Resources "}
                        intro={"We're constantly working to increase the number of resources available to alumni, so check back for updates."} />
                    <Flyleaf title={"Open Course"}
                        intro={"When you give to OC, you support the joy of learning and the possibilities of where new knowledge can lead."} />
                </div>
                <div className={styles.contents}>
                    <Flyleaf title={"Google Scholar"}
                        intro={" A powerful index of scholarly literature across disciplines, languages, time periods and publishing formats."} />
                    <Flyleaf title={"CURIOSity, digital collections gallery"}
                        intro={"Curated views and specialized search options for Harvard's digital collections. "} />
                    <Flyleaf title={"MIT Horizon "}
                        intro={"Enterprise level digital content library covering emerging technology topics."} />
                </div>
            </div>
            <Footer height={'60vh'} onManatain={'none'} />
        </div>
    )
}