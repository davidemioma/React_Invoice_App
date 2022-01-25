import classes from "./Nav.module.css";
import { useDispatch } from "react-redux";
import { themeActions } from "../../store/index-redux";

function Nav() {
  const dispatch = useDispatch();

  const toggleThemeHandler = () => {
    dispatch(themeActions.toggleTheme());
  };

  return (
    <nav className={classes.nav}>
      <img className={classes.navLogo} src={"/static/images/logo.svg"} alt="" />

      <div className={classes.imgDiv}>
        <img
          onClick={toggleThemeHandler}
          src={"/static/images/icon-sun.svg"}
          alt=""
        />
        <div className={classes.avatar}>
          <img src={"/static/images/image-avatar.jpg"} alt="" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
