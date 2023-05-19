import styles from "./Navigation.module.css"
import Link from "next/link"
const routes = [
    {name:"HOME",path:"/"},
    {name:"ABOUT",path:"/About"}
] 
export default function Navigation(){
    return(
        <>
        <div className={styles.container}>
            <div className={styles.nav}>
                <Link href='/'>
                    <div className={styles.logo}>
                        <h1>AllT</h1>
                    </div>
                </Link>
                <ul className={styles.nav_list}>
                    {routes.map(routes =>(
                        <li key = {routes.name}>
                            <Link href={routes.path}>{routes.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}