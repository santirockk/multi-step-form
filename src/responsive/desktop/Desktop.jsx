import { useSelector } from "react-redux";
import { getActivePage } from "../../redux/selectors";
import { ContainerDesktop } from "../../components/container/Container";
import { InfoDesktop} from "../../components/Info/Info";
import { PlanDesktop } from "../../components/plan/Plan";
import { AddonsDesktop } from "../../components/addons/Addons";
import { FinishingDesktop } from "../../components/finishing/Finishing";
import { ThanksDesktop } from "../../components/thankyou/Thanku";
import { Nav } from "../../components/nav/Nav";
import styles from "./Desktop.module.css"

export const Desktop = () => {
    const activePage = useSelector(getActivePage);

    return(
        <>
        <header className={styles.header}></header>
        <main className={styles.main}>
            <ContainerDesktop>
                <Nav />
                {activePage === 1 && <InfoDesktop /> }
                {activePage === 2 && <PlanDesktop /> }
                {activePage === 3 && <AddonsDesktop /> }
                {activePage === 4 && <FinishingDesktop /> }
                {activePage === 5 && <ThanksDesktop /> }
            </ContainerDesktop>
        </main>
        </>
    )




}


