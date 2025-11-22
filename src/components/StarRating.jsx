import React, { useState } from "react";
const NUMBER_OF_STARS = 5;
const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const handleMouseEnter = (e, starValue) => {
    const { width, left } = e.currentTarget.getBoundingClientRect();
    const indexHovered = e.clientX - left;
    const newIdx = indexHovered < width / 2 ? starValue - 0.5 : starValue;
    setHoveredStar(newIdx);
  };
  const handleStarClick = (e, starValue) => {
    const { width, left } = e.currentTarget.getBoundingClientRect();
    const indexHovered = e.clientX - left;
    const newIdx = indexHovered < width / 2 ? starValue - 0.5 : starValue;
    setRating(newIdx);
  };
  return (
    <div className="star-rating">
      <div className="star-container">
      {[...Array(NUMBER_OF_STARS)].map((_, index) => {
        const starValue = index + 1;
        let fillType = "empty";
        if (hoveredStar >= starValue) {
          fillType = "full";
        } else if (hoveredStar >= starValue - 0.5) {
          fillType = "half";
        } else if (rating >= starValue) {
          fillType = "full";
        } else if (rating >= starValue - 0.5) {
          fillType = "half";
        }
        return (
          <div
            key={index}
            onClick={(e) => handleStarClick(e, starValue)}
            onMouseEnter={(e) => handleMouseEnter(e, starValue)}
            onMouseLeave={() => setHoveredStar(0)}
          >
            <span
              className={`star ${
                fillType === "full" ? "full" : fillType === "half" ? "half" : ""
              }`}
            >
              ★
            </span>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default StarRating;
