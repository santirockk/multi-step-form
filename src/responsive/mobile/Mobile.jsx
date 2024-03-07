import { useSelector } from "react-redux";
import { getActivePage } from "../../redux/selectors";
import { InfoMobile } from "../../components/Info/Info";
import { Plans } from "../../components/plan/Plan";
import { Addons } from "../../components/addons/Addons";
import { Finishing } from "../../components/finishing/Finishing";
import { Thanks } from "../../components/thankyou/Thanku";
import { NavMobile } from "../../components/nav/Nav";
import styles from "./Mobile.module.css";

export const Mobile = () => {
  const activePage = useSelector(getActivePage);

  return (
    <div className={styles.mobile}>
      <NavMobile />
      <main>
        {activePage === 1 && <InfoMobile />}
        {activePage === 2 && <Plans />}
        {activePage === 3 && <Addons />}
        {activePage === 4 && <Finishing />}
        {activePage === 5 && <Thanks />}
      </main>
    </div>
  );
};
