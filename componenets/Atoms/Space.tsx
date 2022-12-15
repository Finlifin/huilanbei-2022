import styles from '../../styles/cpnstyles/Space.module.css'

export default function Space(props:{s1:String;s2:String;name:String}){
    return(
        <div className={styles.space}>
            <div className={styles.slogan}>{props.s1}</div>
            <div className={styles.slogan}>{props.s2}</div>
            <div className={styles.name}>{props.name}</div>
        </div>
    )
}