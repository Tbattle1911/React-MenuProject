import React from "react";


function Main ({data}) {
    return (
      <div className="Main">
        {data.map((mainMenu)=> {
          const { id, name, category, prices, photo, des} = mainMenu;
          return <article className="item" key={id}>
            <img src={photo} alt={name} className="img" />
            <div className="info">
            <h3>{name}</h3>
            <h4 className="prices">{prices}</h4>
            </div>
            <p className="info-text"> {des} </p>
          </article>
        })}
      </div>
    );
  }
  
  export default Main;
  