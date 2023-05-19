import styles from './All.module.css'
import Link from 'next/link'
import Image from 'next/image'
export default function InfoPage(props) {
    const data = props.data
    const path = props.path
    const title = props.title
    return(
        <>
        <div className={styles.content}>
            <div className={styles.head_content}>
                <h2>{title}</h2>
            </div>
            <div className={styles.card_container}>
                <div className={styles.fillter}>
                    
                </div>
                <ul  className={styles.card_list}>
                    {data.map((element)=>{
                        return(
                            <li key={element.id}>
                                <Link href={`/${path}/${element.id}`}>
                                <div className={styles.card}>
                                        <div className={styles.pic}>
                                            <Image
                                            src= {element.imageURL}
                                            alt='/https://unsplash.com/t/nature'
                                            fill
                                            priority
                                            className={styles.img}
                                            /> 
                                        </div>
                                        <div className={styles.text}>
                                            <h1>{element.title}</h1>
                                            <p>{element.description}</p>
                                        </div>
                                        <div className={styles.price}>
                                            <h1>{element.price}฿</h1>
                                        </div>
                                </div>
                                </Link>
                            </li>
                            
                        )
                    })}
                </ul>
            </div>
        </div>  
        </>
    )
}
