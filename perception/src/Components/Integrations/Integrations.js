import React from "react";
import "./Integrations.css";

function Integrations() {
  return (
    <div className="Integrations_container">
      <div className="Integrations_top">
        <h2 className="Integrations_heading">Integrations</h2>
        <div className="Integrations_paragraph">
          Integrate seamlessly with your <span>Favourite Apps</span>
        </div>
      </div>
      <div className="Integrations_icon">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/perception-ai-14ae8.appspot.com/o/integration-logos%2Fmixpanel.png?alt=media&token=0f4518dc-21d5-4cde-afe5-cd0b77aa4521"
          alt="#"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/perception-ai-14ae8.appspot.com/o/integration-logos%2Fclever-tap.png?alt=media&token=2e238f58-92ed-4a00-a91d-78632ec4c30f"
          alt="#"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/perception-ai-14ae8.appspot.com/o/integration-logos%2Famplitude.png?alt=media&token=047ed0a5-8d55-4138-8ef1-ce000fdf9b6c"
          alt="#"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/perception-ai-14ae8.appspot.com/o/integration-logos%2Fslack.png?alt=media&token=7442178c-5d94-4627-819f-9016f64cd2f6"
          alt="#"
        />
      </div>
    </div>
  );
}

export default Integrations;
