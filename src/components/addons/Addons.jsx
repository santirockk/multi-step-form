import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOptions, getActivePage, getAddons } from "../../redux/selectors";
import { setActivePage} from "../../redux/pageSlice";
import { addAddons, deleteAddons } from "../../redux/planSlice";
import { Container } from "../container/Container";
import { Btn } from "../btn/Btn";
import styles from "./Addons.module.css";

const Addonss = ({id}) => {

  const options = useSelector(getOptions);
  const addons = useSelector(getAddons);
  const activePage = useSelector(getActivePage);
  const dispatch = useDispatch();

  const checkHandler = e => {
    const { name, checked } = e.target;
    if (checked) {
      dispatch(addAddons(name))
    } else {
      dispatch(deleteAddons(name))
    }
  }

  const formHandler = e => {
    e.preventDefault();
    dispatch(setActivePage(activePage + 1));
  }

  

  return (
    <form className={styles.form} id={id} onSubmit={formHandler}>
      <label className={`${styles.label} ${addons.service ? styles.label_checked : ''}`}>
        <input
          className={styles.input}
          type="checkbox"
          name="service"
          checked={addons.service ? true : false}
          onChange={checkHandler}
        />
        <span className={styles.custom_checkbox}>
            <img className={styles.check} src="./images/icon-checkmark.svg" alt="checkmark"/>
        </span>
        <div className={styles.div}>
          <h3>Online service</h3>
          <p className={styles.p}>Access to multiplayer games</p>
        </div>
        <p className={styles.price}>+${options.addons.service.price}/{options.short}</p>
      </label>

      <label className={`${styles.label} ${addons.storage ? styles.label_checked : ''}`}>
        <input
          className={styles.input}
          type="checkbox"
          name="storage"
          checked={addons.storage ? true : false}
          onChange={checkHandler}
        />
        <span className={styles.custom_checkbox}>
            <img className={styles.check} src="./images/icon-checkmark.svg" alt="checkmark"/>
        </span>
        <div className={styles.div}>
          <h3>Larger storage</h3>
          <p className={styles.p}>Extra 1TB of cloud save</p>
        </div>
        <p className={styles.price}>+${options.addons.storage.price}/{options.short}</p>
      </label>

      <label className={`${styles.label} ${addons.profile ? styles.label_checked : ''}`}>
        <input
          className={styles.input}
          type="checkbox"
          name="profile"
          checked={addons.profile ? true : false}
          onChange={checkHandler}
        />
        <span className={styles.custom_checkbox}>
            <img className={styles.check} src="./images/icon-checkmark.svg" alt="checkmark"/>
        </span>
        <div className={styles.div}>
          <h3>Customizable profile</h3>
          <p className={styles.p}>Custom theme on your profile</p>
        </div>
        <p className={styles.price}>+${options.addons.profile.price}/{options.short}</p>
      </label>
    </form>
  );
};

export const Addons = () => {
  return (
    <>
      <Container>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <Addonss id="addons"/>
      </Container>
      <Btn cm={styles.btn_btn} form="addons"/>
    </>
  );
};


export const AddonsDesktop = () => {

  return (
    <div className={styles.desktop_ctn}>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <Addonss id="addonss"/>
        <Btn cm={styles.btn_btn} form="addonss"/>
    </div>
  )
};