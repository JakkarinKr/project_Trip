import styles from './Detail.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
export default function Detail(props) {
    const place = [
        {id:1,day:1,title:"Koh Samui, Thailand",imgURL:'https://images.unsplash.com/photo-1524658286702-cde4a4ce39d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80'},
        {id:2,day:1,title:"Phi Phi Island,Thailand",imgURL:'https://images.unsplash.com/photo-1532370184535-22cec5ca8480?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'},
        {id:3,day:3,title:"Khao Sok National Park,Thailand",imgURL:'https://images.unsplash.com/photo-1675348081090-f2ec9f02eca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'},
        {id:4,day:4,title:"Phuket,Thailand",imgURL:'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2001&q=80'}
    ]
    const data = props.data 
    return(
        <>
        <Head>
            <title>{data.title}</title>
        </Head>
        <div className={styles.container}>
            <div className={styles.head_content}>
                <h2>{data.title}</h2>
            </div>
            <div className={styles.detail_container}>
                <div className={styles.pic}>
                    <Image
                    src= {data.imageURL}
                    alt='/https://unsplash.com/t/nature'
                    fill
                    priority
                    className={styles.img}
                    /> 
                </div>
                <div className={styles.text}>
                    <div>
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        <h4>more.....</h4>
                    </div>
                    <div className={styles.foot}>
                        <h1>{data.price}฿/TRIP</h1>
                    </div>
                </div>                
            </div>
            <div className={styles.dayBar}>
                <h4>Days</h4>
                <div className={styles.dayList}>
                    <ul>
                        {place.map((item)=>{
                            return (
                                <li key={item.id}>
                                    <div className={styles.dayBox}>
                                        <h3>{item.day}</h3>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            {/* {place.filter(place => place.day === 1).map(fillPlaceItem =>(
                <li>{fillPlaceItem.day}</li>
            ))} */}
            <div className={styles.placeList}>
                <ul>
                    {place.map((item)=>{
                        return(
                            <li key={item.id}>
                                <div className={styles.placeItem}>
                                    <div className={styles.placePic}>
                                        <Image
                                        src= {item.imgURL}
                                        alt='/https://unsplash.com/t/nature'
                                        fill
                                        priority
                                        className={styles.img}
                                        /> 
                                    </div>             
                                    <div className={styles.textplace}>
                                        <h3>{item.title}</h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam corporis perspiciatis voluptatem officiis aspernatur illo at eius nihil, iure ipsam ullam adipisci, odio possimus assumenda molestias neque autem quod omnis?</p>
                                        <a href="https://www.google.com/maps/place/%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%88%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B8%9E%E0%B8%B5%E0%B8%9E%E0%B8%B5/@7.7396553,98.7217969,13z/data=!4m10!1m2!2m1!1sPhi+Phi+Island,+Thailand!3m6!1s0x304e20be764e3d0d:0xbf9db8781a549f71!8m2!3d7.740738!4d98.77841!15sChhQaGkgUGhpIElzbGFuZCwgVGhhaWxhbmRaGSIXcGhpIHBoaSBpc2xhbmQgdGhhaWxhbmSSAQZpc2xhbmTgAQA!16zL20vMDJidmYz">
                                        <i class="fa-solid fa-location-dot"></i>
                                        Google Map</a>
                                        <h4>{item.day}</h4>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <Link href='/All_Place'>
                    <div className={styles.addItem}>
                        <i className="fa-solid fa-circle-plus fa-rotate-180 fa-sm"></i>
                        <h1>Add Place</h1>
                    </div>
                </Link>
                
            </div>
                
        </div>
        </>
    )
}