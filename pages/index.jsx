import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Content from '../component/Content/Content'
const ImageURL = "https://images.unsplash.com/photo-1573689705959-7786e029b31e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
// const popular = [
//   {id:1,title:"Koh Samui, Thailand",day:"3day",imgURL:'https://images.unsplash.com/photo-1524658286702-cde4a4ce39d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80'},
//   {id:2,title:"Phi Phi Island,Thailand",day:"4day",imgURL:'https://images.unsplash.com/photo-1532370184535-22cec5ca8480?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'},
//   {id:3,title:"Khao Sok National Park,Thailand",day:"3day",imgURL:'https://images.unsplash.com/photo-1675348081090-f2ec9f02eca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'},
//   {id:4,title:"Phuket,Thailand",day:"3day",imgURL:'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2001&q=80'}
// ]
export async function getStaticProps(){
  const res = await fetch("http://localhost:3000/api/popular")
  const data = await res.json()
  return{
    props:{popular:data}
  }
}
export default function Home({popular}) {
  return (
    <>
      <Head>
        <title>HOME</title>
      </Head>
      <div className={styles.container}> 
        <div className={styles.figure}>
            <Image
                src= {ImageURL}
                alt='/https://unsplash.com/t/nature'
                fill
                priority
                className={styles.home_img}
                />
            <div className={styles.figure_text}>
              <div className={styles.header}>
                <h1>THE TRAVEL.</h1>
              </div>
            </div>
            <div className={styles.search}>
            </div>
        </div>
        <Content header='All Trip' path='popular' data = {popular}/>
      </div>
    </>
  )
}
