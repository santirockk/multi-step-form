import { useSelector, useDispatch } from "react-redux";
import { getPlan, getAddons } from "../../redux/selectors";
import { setActivePage } from "../../redux/pageSlice";
import { Container } from "../container/Container";
import { Btn } from "../btn/Btn";
import styles from "./Finishing.module.css";

const Finish = () => {
  const plan = useSelector(getPlan);
  const addons = useSelector(getAddons);
  const dispatch = useDispatch();

  const changeHandler = () => {
    dispatch(setActivePage(2));
  };

  let totalAddons = 0;

  for (let key in addons) {
    if (addons.hasOwnProperty(key)) {
      totalAddons += addons[key].price
    }
  }

  const total = totalAddons + plan.price;

  return (
    <>
      <div>
        <div className={styles.ctn}>
          <div className={styles.plan}>
            <div>
              <h3>
                {plan.plan} ({plan.type})
              </h3>
              <button className={styles.change} onClick={changeHandler}>
                Change
              </button>
            </div>
            <p className={styles.price}>
              ${plan.price}/{plan.short}
            </p>
          </div>
          <ul>

            {Object.values(addons).map(addon => (
              <li key={addon.id}>
                <div className={styles.div}>
                  <p className={styles.p}>{addon.addon}</p>
                  <p className={styles.price}>+${addon.price}/{addon.short}</p>
                </div>
              </li>


            ))}


          </ul>
        </div>
      </div>
      <div className={styles.total_c}>
        <p className={styles.total_t}>Total (per month)</p>
        <p className={styles.total}>+${total}/{plan.short}</p>
      </div>
    </>
  );
};

export const Finishing = () => {
 
  return (
    <>
      <Container>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <Finish />
      </Container>
      <Btn cm={styles.btn_btn} />
    </>
  );
};

export const FinishingDesktop = () => {

  return (
    <div className={styles.desktop}>
       <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <Finish />
        <Btn cm={styles.btn_btn} />
    </div>
  )
}