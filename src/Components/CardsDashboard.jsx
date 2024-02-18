import React from 'react'
import Card from './Card';

const CardsDashboard = () => {

  const renderCards = () => {

    const arCards = [
      <Card 
        title={"Forest Dream"}
        author={"Nadu"}
        rating={"4.0"}
      />,
      <Card 
        title={"Mountain Dream"}
        author={"Suman"}
        rating={"4.5"}
      />,
      <Card 
        title={"Sea Dream"}
        author={"Anukant"}
        rating={"4.7"}
      />
    ];
    return (
      <div 
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "30px"
        }}
      >
        {arCards}
      </div>
    );
  }

  return (
    <div className='card-dashboard'
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "30px", 
      }}
    >
      {renderCards()}
    </div>
  )
}

export default CardsDashboard;