import styles from '../../styles/cpnstyles/Space.module.css'

export default function Space(props:{s1:string;s2:string;name:string}){
    return(
        <div className={styles.space}>
            <div className={styles.slogan}>{props.s1}</div>
            <div className={styles.slogan}>{props.s2}</div>
            <div className={styles.name}>{props.name}</div>
        </div>
    )
}