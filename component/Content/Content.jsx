import Link from "next/link";
import styles from  "./Content.module.css"
import Image from "next/image";

export default function Content(props) {
    const data = props.data
    const path = props.path
    return(
        <div className={styles.content}>
            <div className={styles.head_content}>
                <h2>{props.header}</h2>
                <Link href={`/${path}`}>--View More--</Link>
            </div>
            <div className={styles.card_container}>
                <ul  className={styles.card_list}>
                    {data.map((element)=>{
                        if(element.id < 7){
                        return(
                            <li key={element.id}>
                                <Link href={`/${path}/${element.id}`}>
                                    <div className={styles.card}>
                                        <Image
                                            src= {element.imageURL}
                                            alt='/https://unsplash.com/t/nature'
                                            fill
                                            priority
                                            className={styles.img}
                                            />
                                    </div>
                                </Link>
                            </li>
                        )}
                    })}
                </ul>
            </div>
        </div>  
    )
}