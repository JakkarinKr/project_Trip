import styles from './Footer.module.css'

export default function Footer(){
    return(
        <>
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.about}>
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum recusandae quasi placeat ipsum tenetur expedita dolor quia vel vitae possimus. Sunt quaerat unde aperiam! Accusantium quos nisi quidem temporibus quibusdam?</p>
                </div>
                <div className={styles.project_list}>
                    <h3>Header</h3>
                    <h6>projrct-1</h6>
                    <h6>projrct-2</h6>
                    <h6>projrct-3</h6>
                    <h6>projrct-4</h6>
                </div>
                <div className={styles.project_list}>
                    <h3>Header</h3>
                    <h6>projrct-1</h6>
                    <h6>projrct-2</h6>
                    <h6>projrct-3</h6>
                    <h6>projrct-4</h6>
                </div>
                <div className={styles.project_list}>
                    <h3>Header</h3>
                    <h6>projrct-1</h6>
                    <h6>projrct-2</h6>
                    <h6>projrct-3</h6>
                    <h6>projrct-4</h6>
                </div>
            </div>
            <div className={styles.icon_bar}>
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-square-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>
        </div>
        </>
    )
}