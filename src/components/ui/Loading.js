import classes from "./Loading.module.css";
import loadinggif from "../../asset/loadinggif.gif";
import ReactDom from "react-dom";

const Loading = () => {
  return ReactDom.createPortal(
    <div className={classes.wrapper}>
      <div className={classes.loader}>
        <img src={loadinggif} alt="loading" />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loading;
