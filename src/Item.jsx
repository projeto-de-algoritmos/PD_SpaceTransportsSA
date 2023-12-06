import PropTypes from 'prop-types';
import "./item.css"; 
  
function Item({ type, value, weight, image }) {
  
  Item.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.number,
    weight: PropTypes.number,
    image: PropTypes.string.isRequired, 
  };
  
  return (
    <div className="item">
      <img src={image} alt={type} className="item-image" />
      <h3>{type}</h3>
      <p>Valor: {value}</p>
      <p>Peso: {weight}</p>
    </div>
  );
}

export default Item;