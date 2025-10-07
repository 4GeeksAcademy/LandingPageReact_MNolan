import React from 'react'

function Card(props) {
  return (
    <>


      <div className="card text-center" style={{ width: "18rem" }}>
        <img src="src/img/rigo-baby.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title fw-bold">{props.title}</h5>
          <p className="card-text"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, accusamus, dolorum nostrum corrupti facere voluptatem quisquam ex beatae amet ullam ratione voluptas neque, fuga molestiae perferendis voluptates! Porro, fugiat facilis. </p>
          <a href="#" className="btn btn-primary">{props.button} </a>
        </div>
      </div>



    </>
  )
}

export default Card;