import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
      <div className="card">
        <img
          src={props.img}
          alt="Female Model"
        />
        <h1>{props.user},{props.age}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum, id,
          placeat expedita quasi provident esse laudantium aperiam asperiores
          vero autem cumque quae incidunt facilis laboriosam nisi culpa possimus!
          Corporis.
        </p>
        <button>View Profile</button>
      </div>
  )
}

export default Card
