import React from 'react';

const Card = ({ data }) => {
  const getCreateYearGap = (created) => {
    const diff = Date.now() - new Date(created);
    const diff2 = new Date(diff); // miliseconds from epoch
    return Math.abs(diff2.getUTCFullYear() - 1970);
  };
  const {
    image, name, id, created, status, species, gender, location,
  } = data;
  return (
    <div className="card rickmrty-card ">
      <div className="card-header">
        <div><img className="card-img-top" src={image} alt="Character" /></div>
        <div className="card-title">
          <h2>{ name }</h2>
          <p>
              id:
            { id }
            - created
            {getCreateYearGap(created)}
            years ago
          </p>
        </div>
      </div>
      <div className="card-body">
        <div className="card-info">
          <div>
            <span>STATUS</span>
            <p>{status}</p>
          </div>
          <div>
            <span>SPECIES</span>
            <p>{species}</p>
          </div>
          <div>
            <span>GENDER</span>
            <p>{gender}</p>
          </div>
          <div>
            <span>LAST LOCATION</span>
            <p>{ location && location.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
