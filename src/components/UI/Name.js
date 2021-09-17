import classes from "./Name.module.css";

const Name = (props) => {
  return <h3 className={classes.Name}>{props.children}</h3>;
};
export default Name;
