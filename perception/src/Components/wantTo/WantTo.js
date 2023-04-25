import React, { useState } from "react";
import "./WantTo.css";

function WantTo() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="wantTo_container">
      <h2 className="wantTo_heading">I want to...</h2>
      <div className="tabContainer">
        <div
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Prioritize Better
        </div>
        <div
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Know Perception
        </div>
        <div
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Engage
        </div>
        <div
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Retain Users
        </div>
        <div
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Increase Ranking
        </div>
      </div>
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="innerContent">
            <h3 className="content1Heading">
              We help your <span>Product team</span> <br /> to priortise better
              based on <br /> our Impactful Insights
            </h3>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/perception-ai-14ae8.appspot.com/o/services-illustrations%2Fillustration%201.svg?alt=media&token=62147d43-a003-43d4-ae23-1f045ef4a63c"
              alt="#"
            />
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="innerContent">
            <h3 className="content1Heading">
              Know the <span>Perception and Sentiment</span> <br /> across
              different platforms like Twitter,
              <br /> Facebook, Linkedin and much more
            </h3>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/perception-ai-14ae8.appspot.com/o/services-illustrations%2Fillustration%202.svg?alt=media&token=7c3a7963-8b6e-49be-a4b7-3438afbde06b"
              alt="#"
            />
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="innerContent">
            <h3 className="content1Heading">
              Manage all <span>Reviews</span> from <br /> Playstore, App store
              and <br /> Twitter in one place.
            </h3>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/perception-ai-14ae8.appspot.com/o/services-illustrations%2Fillustration%203.svg?alt=media&token=b3201a6b-d381-4b6c-b556-06adbe052c41"
              alt="#"
            />
          </div>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <div className="innerContent">
            <h3 className="content1Heading">
              With our <span>Insights</span> reduce the <br /> dropoffs in your
              funnel and <br /> help people engage better.
            </h3>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/perception-ai-14ae8.appspot.com/o/services-illustrations%2Fillustration%204.svg?alt=media&token=8552aa93-bd03-4279-823b-d7ad63fe8409"
              alt="#"
            />
          </div>
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <div className="innerContent">
            <h3 className="content1Heading">
              Increase your App Ranking <br /> on playstore and{" "}
              <span>app Store</span> .
            </h3>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/perception-ai-14ae8.appspot.com/o/services-illustrations%2Fillustration%205.svg?alt=media&token=35c3eafb-6a32-4c16-8bf9-d9d0a24b6ec5"
              alt="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WantTo;
