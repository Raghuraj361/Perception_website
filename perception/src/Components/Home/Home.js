import React from "react";
import "./Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Companies from "../Companies/Companies";
import WantTo from "../wantTo/WantTo";
import Integrations from "../Integrations/Integrations";
import ReviewsChannel from "../ReviewsChannel/ReviewsChannel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Home() {
  return (
    <div className="home_container">
      <div className="home_first_page">
        <div className="home_rightSide">
          <p>
            Priortise your next feature with <br /> Impactful Insights
          </p>
          <span>🎯 Drive organic growth</span>
          <span>🥷 Uncover competitor insights</span>
          <span>📈 Level up your User Experience</span>
        </div>
        <div className="home_leftSide">
          <Carousel
            className="carousel__container"
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            arrows={false}
            // swipeable={false}
            // showDots={true}
            autoPlaySpeed={4000}
            containerClass="carousel-container"
          >
            <div>
              <img
                className="carousel_img"
                alt="logo in herosection"
                src="https://firebasestorage.googleapis.com/v0/b/perception-ai-14ae8.appspot.com/o/homepage-carousel-images%2Fimage%2029.png?alt=media&token=0e640336-4270-4379-b0e5-5a6183103834"
              />
            </div>
            <div>
              <img
                className="carousel_img"
                alt="logo in herosection"
                src="https://firebasestorage.googleapis.com/v0/b/perception-ai-14ae8.appspot.com/o/homepage-carousel-images%2Fimage%2030.png?alt=media&token=5b26ac8a-621d-4bfd-92e2-e9689cb5c1da"
              />
            </div>
            <div>
              <img
                className="carousel_img"
                alt="logo in herosection"
                src="https://firebasestorage.googleapis.com/v0/b/perception-ai-14ae8.appspot.com/o/homepage-carousel-images%2Fimage%2031.png?alt=media&token=3418dfbf-ec73-480c-b2a6-86d67a9dd2df"
              />
            </div>
          </Carousel>
        </div>
      </div>
      <Companies />
      <WantTo />
      <Integrations />
      <ReviewsChannel />
    </div>
  );
}

export default Home;
