import { useState } from 'react';
import { nanoid } from 'nanoid';
import './TrainingAcc.css';
import itemsList from './data';
import List from './List';

const TrainingAcc = () => {
    const [items, setForm] = useState(itemsList);
    
    // функция фильтрации массива данных по дате
    const filterArr = (arr) => {
        return arr.sort((a, b) => {
            return Date.parse(a.date) > Date.parse(b.date) ? 1
                : Date.parse(a.date) === Date.parse(b.date) ? 0
                    : -1;
        })
    }
    const resetForm = (evt) => {
        evt.target.date.value = ''
        evt.target.distance.value = ''
    }
    const onSubmit = (evt) => {
        evt.preventDefault()
        // проверим не введена ли уже такая дата
              if (items.find(i => i.date === evt.target.date.value)) {
            setForm((prevItems) => {
                const indexOfDate = prevItems.findIndex((item) => item.date === evt.target.date.value)
                const newDistsnce = prevItems[indexOfDate].distance + +evt.target.distance.value
                const newItems = [...prevItems];
                newItems[indexOfDate].distance = newDistsnce;
                return newItems;
            });
              } else {
            //проверим подходят ли данные по формату 
            const dateReg = /^\d{2}([./-])\d{2}\1\d{4}$/
            const reg = /^[0-9]+$/
            if (dateReg.test(evt.target.date.value) && reg.test(evt.target.distance.value)) {
            const newItem = { date: evt.target.date.value, distance: +evt.target.distance.value, id: nanoid(),}
                setForm((prevItems) => filterArr([...prevItems, newItem]))
                return;
            }       
        }
    }

    const onDelete = (id) => {
    setForm((prevItems) => prevItems.filter((item) => item.id !== id))
    }

return (
    <div className='container'>
      <form onSubmit={onSubmit}>
        <div className='form-block'>
            <label htmlFor="name">Дата(дд.мм.гггг)</label>
            <input placeholder='дд.мм.гггг' id="date" name="date" value={items.date}/>
        </div>
        <div className='form-block'>
            <label htmlFor="score">Пройдено км</label>
            <input id="distance" name="distance" value={items.distance}/>
        </div>
        <div className='form-block btn'>
          <button type="submit">ОК</button>  
        </div>
      </form>
      <div className='history'>
            <div className='history-title'>
                    <div>Дата(дд.мм.гггг)</div>
                    <div>Пройдено км</div>
                    <div>Действия</div>
            </div>
            <List items={items} onDelete={onDelete}/>
        </div> 
    </div> 
    )
}

export default TrainingAcc;