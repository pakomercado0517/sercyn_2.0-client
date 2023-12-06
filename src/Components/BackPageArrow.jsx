import React from "react";
import { useNavigate } from "react-router-dom";
function BackPageArrow({ color = "000000" }) {
  const navigate = useNavigate();
  const handleBackClick = async () => {
    await navigate(-1);
  };

  return (
    <div>
      <div onClick={handleBackClick}>
        <img
          className={`w-8 h-8`}
          src={`https://img.icons8.com/external-flatart-icons-outline-flatarticons/120/${color}/external-back-arrow-basic-ui-elements-flatart-icons-outline-flatarticons.png`}
          alt="back_arrow_img"
        />
      </div>
    </div>
  );
}

export default BackPageArrow;
