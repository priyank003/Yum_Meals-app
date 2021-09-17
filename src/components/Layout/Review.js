import classes from "./Review.module.css";
import Title from "../UI/Title";
import Name from "../UI/Name";
import CustomerIcon from "../UI/CustomerIcon";
import User1 from "../../assets/User/cheerful-curly-business-girl-wearing-glasses.jpg";

// import User2 from "../../assets/User/comfort-romance-coziness-concept-cheerful-lovely-african-american-girl-yellow-sweater-hugging-herself-embracing-body-as-feeling-comfy-smiling-silly-camera-white-wall.jpg";
// import User3 from "../../assets/User/portrait-beautiful-smiling-model-dressed-summer-hipster-jeans-shorts-clothes.jpg";
// import User4 from "../../assets/User/portrait-beautiful-young-woman-standing-grey-wall.jpg";
import chef from "../../assets/portrait-happy-male-chef-dressed-uniform.png";

const Review = () => {
  return (
    <div className={classes.review}>
      <div className={classes["review-left"]}>
        <div className={classes["chef-wrap"]}>
          {/* <div className={classes["our-reviewer"]}>
            <Name>Our Reviewer</Name>
            <div className={classes["reviewer-icons"]}>
              <CustomerIcon src={User2}></CustomerIcon>
              <CustomerIcon
                src={User3}
                className={classes.userThree}
              ></CustomerIcon>
              <CustomerIcon
                src={User4}
                className={classes.userFour}
              ></CustomerIcon>
            </div>
          </div> */}
          <img src={chef} className={classes.chefImg} alt="" />
        </div>
      </div>
      <div className={classes["review-right"]}>
        <Title>WHAT THEY SAY</Title>
        <div className={classes["customer-review"]}>
          <h1 className={classes["review-heading"]}>
            What Our Customer <br /> Say About Us
          </h1>

          <p className={classes["review-para"]}>
            "YumMeals is the best. Besides the many and delicious meals, the
            service is also very good, especially in the very fast delivery.I
            highly recommend YumMeals to you."
          </p>
          <div className={classes["customer-tab"]}>
            <CustomerIcon src={User1}></CustomerIcon>
            <div className={classes["customer-info"]}>
              <Name>Theresa Jordan</Name>
              <span>Food Enthusiast</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
