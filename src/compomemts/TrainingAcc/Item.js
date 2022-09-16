import React from 'react';
import PropTypes from 'prop-types';

const Item = ({date, distance, id, onDelete}) => {
 

return (
    <div className='history-point' key={id}>
        <div>{date}</div>
        <div>{distance}</div>
        <div className='icons'>
        <div className="material-icons clear" onClick={onDelete}>clear</div>
        </div>
    </div>
    )   
}

Item.propTypes = {
    date: PropTypes.string.isRequired,
    distance: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
  };

export default Item;
