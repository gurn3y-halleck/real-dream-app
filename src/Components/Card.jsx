import React from 'react';
import { dreamTransalvania } from '../Assets/images/imagesIndex';
import BackgroundComponent from './CardBackgroundComp';


const Card = (props) => {
  return (
    <BackgroundComponent imageUrl={dreamTransalvania}>
      <div
        style={{
          top: "50%",
          left: 0,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          fontSize: "30px",
          color: "white",
        }}
      >
        <div
          style={{
            display:"flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            {props.title}
          </div>
          <div>
            {props.rating}
          </div>
        </div>
        <div>
          {props.author}
        </div>
      </div>
    </BackgroundComponent>
  )
}

export default Card;