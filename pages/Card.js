import './Card.css';

const Card = (props) =>  (
    <div className="card">
      <div className="front">
        <img src="/static/juice.jpg" alt="Avatar" className="card-image" />
        <div className="container">
          <h3>sample card <span className="price">$50</span></h3> 
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        </div>
      </div>
    </div>
);

export default Card;
