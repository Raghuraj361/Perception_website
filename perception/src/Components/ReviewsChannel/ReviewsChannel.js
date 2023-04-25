import React from "react";
import "./ReviewsChannel.css";

function ReviewsChannel() {
  return (
    <div className="ReviewsChannel_container">
      <h2 className="ReviewsChannel_heading">Reviews Channel</h2>
      <div className="ReviewsChannel_container2">
        <div className="ReviewsChannel_leftSection">
          <p className="leftHeading">
            <span>Save hours</span> while monitoring your App <br /> Reviews and
            Ratings every week
          </p>
          <div className="ReviewsChannel_app">
            <div className="ReviewsChannel_leftApp">
              <span>
                <img
                  className="icon"
                  src="https://banner2.cleanpng.com/20180404/wew/kisspng-computer-icons-check-mark-clip-art-yes-5ac4682d550d40.1600619315228211653484.jpg"
                  alt="#"
                />
                Playstore
              </span>
              <span>
                <img
                  className="icon"
                  src="https://banner2.cleanpng.com/20180404/wew/kisspng-computer-icons-check-mark-clip-art-yes-5ac4682d550d40.1600619315228211653484.jpg"
                  alt="#"
                />
                App Store
              </span>
              <span>
                <img
                  className="icon"
                  src="https://banner2.cleanpng.com/20180404/wew/kisspng-computer-icons-check-mark-clip-art-yes-5ac4682d550d40.1600619315228211653484.jpg"
                  alt="#"
                />
                Twitter
              </span>
            </div>
            <div className="ReviewsChannel_rightApp">
              <span>
                <img
                  className="icon"
                  src="https://banner2.cleanpng.com/20180404/wew/kisspng-computer-icons-check-mark-clip-art-yes-5ac4682d550d40.1600619315228211653484.jpg"
                  alt="#"
                />
                Facebook
              </span>
              <span>
                <img
                  className="icon"
                  src="https://banner2.cleanpng.com/20180404/wew/kisspng-computer-icons-check-mark-clip-art-yes-5ac4682d550d40.1600619315228211653484.jpg"
                  alt="#"
                />
                Linkedin
              </span>
              <span>
                <img
                  className="icon"
                  src="https://banner2.cleanpng.com/20180404/wew/kisspng-computer-icons-check-mark-clip-art-yes-5ac4682d550d40.1600619315228211653484.jpg"
                  alt="#"
                />{" "}
                and much more...
              </span>
            </div>
          </div>
        </div>
        <div className="ReviewsChannel_RightSection">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/perception-ai-14ae8.appspot.com/o/homepage-carousel-images%2Fimage%2029.png?alt=media&token=0e640336-4270-4379-b0e5-5a6183103834"
            alt="#"
          />
        </div>
      </div>
    </div>
  );
}

export default ReviewsChannel;
