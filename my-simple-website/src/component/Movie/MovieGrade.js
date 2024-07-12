//영화 평점 사이트 = Movie Grade Site Movie Rating Site
import React, { useEffect, useState } from "react";
import axios from "axios";
// 추후 css 추가할 예정

const MovieRating = () => {
  const [영화들, set영화들] = useState([]);

  useEffect(() => {


    
  }, []);


  return (
    <div className="movie-container">
      <h1>평점좋은 영화들</h1>
      <div className="movie-content">
        {영화들.map(영화 => (
            <div key={영화.id} className="movie">
                <img src={영화.medium_cover_image} />
                <h2>{영화.title}</h2>
            </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRating;
