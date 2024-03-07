import { useSelector, useDispatch } from "react-redux";
import { setOption, setOptions, setPlan, setAddons } from "../../redux/planSlice";
import { setActivePage } from "../../redux/pageSlice";
import { getOption, getPlan, getActivePage } from "../../redux/selectors";
import { Container } from "../container/Container";
import { Btn } from "../btn/Btn";
import styles from "./Plan.module.css";

const Monthly = ({id}) => {
  const plan = useSelector(getPlan);
  const activePage = useSelector(getActivePage);
  const dispatch = useDispatch();

  const handleRadio = (e) => {
    dispatch(setPlan(e.target.value));
  };

  const formHandler = e => {
    e.preventDefault();
    dispatch(setActivePage(activePage + 1));
  } 

  return (
    <div className={styles.btn_c}>
      <form
            className={styles.form}
            onSubmit={formHandler}
            id={id}
            name="plan"
      >
        <label
          className={`${styles.btn} ${
            plan.plan === "Arcade" ? styles.btn_checked : ""
          }`}
        >
          <input
            className={styles.input}
            type="radio"
            name="plan"
            value="arcade_mo"
            onChange={handleRadio}
          />
          <img
            src="./images/icon-arcade.svg"
            alt="arcade"
            className={styles.img}
          />
          <span className={styles.span}>
            <h2>Arcade</h2>
            <p className={styles.p}>$9/mo</p>
          </span>
        </label>

        <label
          className={`${styles.btn} ${
            plan.plan === "Advanced" ? styles.btn_checked : ""
          }`}
        >
          <input
            className={styles.input}
            type="radio"
            name="plan"
            value="advanced_mo"
            onChange={handleRadio}
          />
          <img
            src="./images/icon-advanced.svg"
            alt="advanced"
            className={styles.img}
          />
          <span className={styles.span}>
            <h2>Advanced</h2>
            <p className={styles.p}>$12/mo</p>
          </span>
        </label>

        <label
          className={`${styles.btn} ${
            plan.plan === "Pro" ? styles.btn_checked : ""
          }`}
        >
          <input
            className={styles.input}
            type="radio"
            name="plan"
            value="pro_mo"
            onChange={handleRadio}
          />
          <img src="./images/icon-pro.svg" alt="pro" className={styles.img} />
          <span className={styles.span}>
            <h2>Pro</h2>
            <p className={styles.p}>$15/mo</p>
          </span>
        </label>
      </form>
    </div>
  );
};

const Yearly = ({id}) => {
  const plan = useSelector(getPlan);
  const activePage = useSelector(getActivePage);
  const dispatch = useDispatch();

  const handleRadio = (e) => {
    dispatch(setPlan(e.target.value));
  };

  const formHandler = e => {
    e.preventDefault();
    dispatch(setActivePage(activePage + 1));
  } 

  return (
    <div className={styles.btn_c}>
      <form
      className={styles.form}
      onSubmit={formHandler}
      id={id}
      name="plan"
      >
        <label className={`${styles.btn} ${
            plan.plan === "Arcade" ? styles.btn_checked : ""
          }`}>
            <input
            className={styles.input}
            type="radio"
            name="plan"
            value="arcade_yr"
            onChange={handleRadio}
          />
          <img
            src="./images/icon-arcade.svg"
            alt="arcade"
            className={styles.img}
          />
          <span className={styles.span}>
            <h2>Arcade</h2>
            <p className={styles.p}>$90/yr</p>
            <p className={styles.py}>2 months free</p>
          </span>
        </label>

        <label className={`${styles.btn} ${
            plan.plan === "Advanced" ? styles.btn_checked : ""
          }`}>
            <input
            className={styles.input}
            type="radio"
            name="plan"
            value="advanced_yr"
            onChange={handleRadio}
          />
          <img
            src="./images/icon-advanced.svg"
            alt="advanced"
            className={styles.img}
          />
          <span className={styles.span}>
            <h2>Advanced</h2>
            <p className={styles.p}>$120/yr</p>
            <p className={styles.py}>2 months free</p>
          </span>
        </label>

        <label className={`${styles.btn} ${
            plan.plan === "Pro" ? styles.btn_checked : ""
          }`}>
            <input
            className={styles.input}
            type="radio"
            name="plan"
            value="pro_yr"
            onChange={handleRadio}
          />
          <img src="./images/icon-pro.svg" alt="pro" className={styles.img} />
          <span className={styles.span}>
            <h2>Pro</h2>
            <p className={styles.p}>$150/yr</p>
            <p className={styles.py}>2 months free</p>
          </span>
        </label>
      </form>
    </div>
  );
};

export const Plans = () => {
  const option = useSelector(getOption);
  const dispatch = useDispatch();

  const handleCheck = (e) => {
    const check = e.target.checked;
    if (check) {
      dispatch(setOption("yearly"));
      dispatch(setOptions("yearly"));
      dispatch(setPlan("arcade_yr"));
      dispatch(setAddons("yearly"));
    } else {
      dispatch(setOption("monthly"));
      dispatch(setOptions("monthly"));
      dispatch(setPlan("arcade_mo"));
      dispatch(setAddons("monthly"));
    }
  };

  return (
    <>
      <Container>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        {option === "monthly" && <Monthly id="plan"/>}
        {option === "yearly" && <Yearly id="plan"/>}

        <div className={styles.switch_c}>
          <p className={`${styles.sp} ${option === "monthly" ? styles.sp_one : ""}`}>Monthly</p>
          <label className={styles.switch}>
            <input
              className={styles.s_input}
              type="checkbox"
              onChange={handleCheck}
              checked={option === "yearly" ? true : false}
            />
            <span className={styles.slider}></span>
          </label>
          <p className={`${styles.sp} ${option === "yearly" ? styles.sp_one : ""}`}>Yearly</p>
        </div>
      </Container>
      <Btn cm={styles.btn_btn} form="plan"/>
    </>
  );
};


export const PlanDesktop = () => {
  const option = useSelector(getOption);
  const dispatch = useDispatch();

  const handleCheck = (e) => {
    const check = e.target.checked;
    if (check) {
      dispatch(setOption("yearly"));
      dispatch(setOptions("yearly"));
      dispatch(setPlan("arcade_yr"));
      dispatch(setAddons("yearly"));
    } else {
      dispatch(setOption("monthly"));
      dispatch(setOptions("monthly"));
      dispatch(setPlan("arcade_mo"));
      dispatch(setAddons("monthly"));
    }
  };


  return(
    <div className={styles.plan_ctn}>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      {option === "monthly" && <Monthly id="plann"/>}
        {option === "yearly" && <Yearly id="plann"/>}

        <div className={styles.switch_c}>
          <p className={`${styles.sp} ${option === "monthly" ? styles.sp_one : ""}`}>Monthly</p>
          <label className={styles.switch}>
            <input
              className={styles.s_input}
              type="checkbox"
              onChange={handleCheck}
              checked={option === "yearly" ? true : false}
            />
            <span className={styles.slider}></span>
          </label>
          <p className={`${styles.sp} ${option === "yearly" ? styles.sp_one : ""}`}>Yearly</p>
        </div>
        <Btn cm={styles.btn_btn} form="plann"/>
    </div>
  )


}