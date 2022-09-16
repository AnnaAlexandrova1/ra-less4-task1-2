import PropTypes from 'prop-types';
import Item from './Item';

const List = (props) => {
   const { items, onDelete } = props

   if(items.length < 1){
    return(
        <div className="empty-list">Нет записей. Тренируйся и добавляй!</div>
    )
   }

   return(
        <div className='frame'>
            {items.map(item => {
              return (
                <Item 
                key={item.id}
                date={item.date}  
                distance={item.distance} 
                id={item.id} 
                onDelete={onDelete} />
            )}
            )}
        </div>
   )
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      distance: PropTypes.number.isRequired,
    })).isRequired,
    onDelete: PropTypes.func.isRequired,
  };



export default List