import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readmore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
          <p>
            {readmore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readmore)}>
              {readmore ? "showless" : "readmore"}
            </button>
          </p>

          <button className="delete-btn" onClick={() => removeTour(id)}>
            {" "}
            not interested
          </button>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
