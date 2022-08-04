import React from 'react';

const Category =  ({category, handleFilter}) => {
    return (
      <div className="container">
        {category.map((value, index)=>{
          return <button
          type='button'
          className='btn'
          key={index}
          onClick={()=> handleFilter(value)}>
            {value}
          </button>
        })}
      </div>
      
    );
  };
  
  export default Category;
  