import Card from "../Cards/Card";
import Css from "./hero.module.css";
const Hero = () => {
  const HandleOnClick = () => {
    console.log("Button Was Clicked");
  };
  return (
    <>
    <div className={`${Css.herocontainer}`}>
      <section className={`${Css.heroFirst}`}>
        <div className={`${Css.herotext}`}>
          <h1 className={`${Css.heroHeadding}`}>trending collection</h1>
          <h3>
            Fresh styles, fresh vibes <br /> just dropped for you.
          </h3>
          <button className={`${Css.shopbtn}`} onClick={HandleOnClick}>
            Shop Now
          </button>
          <button className={`${Css.explorebtn}`} onClick={HandleOnClick}>
            Explore
          </button>
        </div>
      </section>
      <section className={`${Css.heroSecond}`}>
        <img src="./heroimage.jpg" />
      </section>
    </div>
    <div className={`${Css.herosections}`}>
      <section className={`${Css.first}`}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </section>
    </div>
    </>
  );
};

export default Hero;
