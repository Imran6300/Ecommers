import Css from "./Card.module.css";
import AnimatedContent from "../../AnimatedContent/animatedcontent";
const Card = () => {
  return (
    <AnimatedContent
      distance={40}
      direction="vertival"
      reverse={false}
      duration={1.2}
      ease="power3.out"
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={0.2}
      delay={0.3}
    >
      <div className={`card ${Css.Card}`} style={{ width: "18rem" }}>
        <img
          src="./shirt.png"
          className={`${Css.CardImg}card-img-top`}
          alt="..."
        />
        <div className={`card-body`}>
          <h5 className={`card-title`}>Card title</h5>
          <p className={`card-text`}>
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <a href="#" className={`btn btn-primary`}>
            Go somewhere
          </a>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default Card;
