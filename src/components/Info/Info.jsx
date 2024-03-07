import { useSelector, useDispatch } from "react-redux";
import { setActivePage } from "../../redux/pageSlice";
import { setInfo, setName, setEmail, setPhone } from "../../redux/infoSlice";
import { getActivePage, getInfo } from "../../redux/selectors";
import { useState } from "react";
import { Btn } from "../btn/Btn";
import { Container } from "../container/Container";
import styles from "./Info.module.css";

const Info = ( {id} ) => {
  const [nameAdv, setNameAdv] = useState(false);
  const [emailAdv, setEmailAdv] = useState(false);
  const [phoneAdv, setPhoneAdv] = useState(false);

  const activePage = useSelector(getActivePage);
  const info = useSelector(getInfo);
  const dispatch = useDispatch();

  const formHandler = (e) => {
    e.preventDefault();

    if (
      e.target.name.value === "" ||
      e.target.email.value === "" ||
      e.target.phone.value === ""
    ) {
      setNameAdv(() => {
        if (e.target.name.value === "") {
          return true;
        }
        return false;
      });

      setEmailAdv(() => {
        if (e.target.email.value === "") {
          return true;
        }
        return false;
      });

      setPhoneAdv(() => {
        if (e.target.phone.value === "") {
          return true;
        }
        return false;
      });
    } else {
      dispatch(
        setInfo(e.target.name.value, e.target.email.value, e.target.phone.value)
      );
      dispatch(setActivePage(activePage + 1));
    }
  };

  const nameHandler = (e) => {
    dispatch(setName(e.target.value));
  };

  const emailHandler = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const phoneHandler = (e) => {
    dispatch(setPhone(e.target.value));
  };

  return (
    <>
      <h1>Personal info</h1>
      <p className={styles.p}>
        Please provide your name, email address, and phone number.
      </p>
      <form
        id={id}
        name="personal_info"
        autoComplete="on"
        onSubmit={formHandler}
      >
        <label className={styles.label}>
          <div className={styles.label_legend}>
            <p className={styles.legend}>Name</p>
            {nameAdv && <p className={styles.adv}>This field is required</p>}
          </div>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            value={info.name}
            name="name"
            onChange={nameHandler}
            className={`${styles.input} ${nameAdv ? styles.input_adv : ""}`}
            autoFocus
          />
        </label>
        <label className={styles.label}>
          <div className={styles.label_legend}>
            <p className={styles.legend}>Email Address</p>
            {emailAdv && <p className={styles.adv}>This field is required</p>}
          </div>
          <input
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            value={info.email}
            onChange={emailHandler}
            name="email"
            className={`${styles.input} ${emailAdv ? styles.input_adv : ""}`}
          />
        </label>
        <label className={styles.label}>
          <div className={styles.label_legend}>
            <p className={styles.legend}>Phone Number</p>
            {phoneAdv && <p className={styles.adv}>This field is required</p>}
          </div>
          <input
            type="tel"
            placeholder="e.g. +1 234 567 890"
            value={info.phone}
            onChange={phoneHandler}
            name="phone"
            className={`${styles.input} ${styles.input2} ${
              phoneAdv ? styles.input_adv : ""
            }`}
          />
        </label>
      </form>
    </>
  );
};


export const InfoMobile = () => {

  return (
    <>
      <Container>
        <Info id="info" />
      </Container>
      <Btn cm={styles.btn} form="info" />
    </>
  );
};


export const InfoDesktop = () => {
  return (
    <div className={styles.info_ctn}>
    <Info id="infoo" />
    <Btn cm={styles.btn} form="infoo"/>
    </div>
  )
}

///____

/*export const InfoMobile = () => {
  const [nameAdv, setNameAdv] = useState(false);
  const [emailAdv, setEmailAdv] = useState(false);
  const [phoneAdv, setPhoneAdv] = useState(false);

  const activePage = useSelector(getActivePage);
  const info = useSelector(getInfo);
  const dispatch = useDispatch();

  const formHandler = (e) => {
    e.preventDefault();

    if (
      e.target.name.value === "" ||
      e.target.email.value === "" ||
      e.target.phone.value === ""
    ) {
      setNameAdv(() => {
        if (e.target.name.value === "") {
          return true;
        }
        return false;
      });

      setEmailAdv(() => {
        if (e.target.email.value === "") {
          return true;
        }
        return false;
      });

      setPhoneAdv(() => {
        if (e.target.phone.value === "") {
          return true;
        }
        return false;
      });
    } else {
      dispatch(
        setInfo(e.target.name.value, e.target.email.value, e.target.phone.value)
      );
      dispatch(setActivePage(activePage + 1));
    }
  };

  const nameHandler = (e) => {
    dispatch(setName(e.target.value));
  };

  const emailHandler = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const phoneHandler = (e) => {
    dispatch(setPhone(e.target.value));
  };

  return (
    <>
      <Container>
        <h1>Personal info</h1>
        <p className={styles.p}>
          Please provide your name, email address, and phone number.
        </p>
        <form
          id="info"
          name="personal_info"
          autoComplete="on"
          onSubmit={formHandler}
        >
          <label className={styles.label}>
            <div className={styles.label_legend}>
              <p className={styles.legend}>Name</p>
              {nameAdv && <p className={styles.adv}>This field is required</p>}
            </div>
            <input
              type="text"
              placeholder="e.g. Stephen King"
              value={info.name}
              name="name"
              onChange={nameHandler}
              className={`${styles.input} ${nameAdv ? styles.input_adv : ""}`}
              autoFocus
            />
          </label>
          <label className={styles.label}>
            <div className={styles.label_legend}>
              <p className={styles.legend}>Email Address</p>
              {emailAdv && <p className={styles.adv}>This field is required</p>}
            </div>
            <input
              type="email"
              placeholder="e.g. stephenking@lorem.com"
              value={info.email}
              onChange={emailHandler}
              name="email"
              className={`${styles.input} ${emailAdv ? styles.input_adv : ""}`}
            />
          </label>
          <label className={styles.label}>
            <div className={styles.label_legend}>
              <p className={styles.legend}>Phone Number</p>
              {phoneAdv && <p className={styles.adv}>This field is required</p>}
            </div>
            <input
              type="tel"
              placeholder="e.g. +1 234 567 890"
              value={info.phone}
              onChange={phoneHandler}
              name="phone"
              className={`${styles.input} ${styles.input2} ${
                phoneAdv ? styles.input_adv : ""
              }`}
            />
          </label>
        </form>
      </Container>
      <Btn cm={styles.btn} form="info" />
    </>
  );
};*/
