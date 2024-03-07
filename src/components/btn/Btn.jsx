import { useSelector, useDispatch } from "react-redux";
import { setActivePage } from "../../redux/pageSlice";
import { getActivePage } from "../../redux/selectors";
import styles from "./Btn.module.css";

export const Btn = ({ cm, form, nxtH }) => {
  const activePage = useSelector(getActivePage);
  const dispatch = useDispatch();

  const nextHandler = (e) => {
    dispatch(setActivePage(activePage + 1));
  };

  const gobackHandler = () => {
    dispatch(setActivePage(activePage - 1));
  };

  return (
    <div className={styles.cont}>
      <div className={`${styles.div} ${cm}`}>
        {activePage !== 1 && (
          <button className={styles.goback} onClick={gobackHandler}>
            Go Back
          </button>
        )}
        {activePage < 4 && (
          <button form={form} className={styles.btn} type="submit">
            Next Step
          </button>
        )}
        {activePage === 4 && (
          <button className={styles.btn_confirm} onClick={nextHandler}>
            Confirm
          </button>
        )}
      </div>
    </div>
  );
};
