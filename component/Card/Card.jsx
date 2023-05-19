import styles from "./Card.module.css"
import Image from "next/image"
export default function Card(props) {
    const data = props.data
    //title
    //imgURL
    //googleURL
    return(
        <div className={styles.card_container}>
            <div className={styles.card}>
                <div className={styles.img}>
                    <Image
                    src={data.imgURL}
                    alt={data.title}
                    priority
                    fill
                    className={styles.pic}
                    />
                </div>
                <div className={styles.text}>
                    <h4>{data.title}</h4>
                    <a href={data.googleURL} target="_blank">Google</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consectetur, eos dicta facilis aperiam dolores adipisci, similique, nihil libero ut in iste harum! Deserunt, numquam hic magnam aliquid ut ea.</p>
                </div>
            </div>
        </div>
    )
}