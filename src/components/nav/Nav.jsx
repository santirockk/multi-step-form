import { useSelector } from "react-redux";
import { getActivePage } from "../../redux/selectors";
import styles from "./Nav.module.css";

export const NavMobile = () => {
    const active = useSelector(getActivePage)

    return(
        <header className={styles.header_mobile}>
            <p className={`${styles.p} ${active === 1 ? styles.active : ''}`}>1</p>
            <p className={`${styles.p} ${active === 2 ? styles.active : ''}`}>2</p>
            <p className={`${styles.p} ${active === 3 ? styles.active : ''}`}>3</p>
            <p className={`${styles.p} ${active === 4 ? styles.active : ''}`}>4</p>
        </header>
    )
}


export const Nav = () => {
    const active = useSelector(getActivePage)

    return(
        <div className={styles.nav_container}>
            <div className={styles.item_container}>
                <p className={`${styles.p} ${active === 1 ? styles.active : ''}`}>1</p>
                <div className={styles.info}>
                    <p className={styles.step}>STEP 1</p>
                    <p className={styles.text}>YOUR INFO</p>
                </div>
            </div>
            <div className={styles.item_container}>
                <p className={`${styles.p} ${active === 2 ? styles.active : ''}`}>2</p>
                <div className={styles.info}>
                    <p className={styles.step}>STEP 2</p>
                    <p className={styles.text}>SELECT PLAN</p>
                </div>
            </div>
            <div className={styles.item_container}>
                <p className={`${styles.p} ${active === 3 ? styles.active : ''}`}>3</p>
                <div className={styles.info}>
                    <p className={styles.step}>STEP 3</p>
                    <p className={styles.text}>ADD-ONS</p>
                </div>
            </div>
            <div className={styles.item_container}>
                <p className={`${styles.p} ${active === 4 ? styles.active : ''}`}>4</p>
                <div className={styles.info}>
                    <p className={styles.step}>STEP 4</p>
                    <p className={styles.text}>SUMMARY</p>
                </div>
            </div>
        </div>
    )
} 





