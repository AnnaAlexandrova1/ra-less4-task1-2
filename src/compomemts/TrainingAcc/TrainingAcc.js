import { useState } from 'react';
import { nanoid } from 'nanoid';
import './TrainingAcc.css';
import itemsList from './data';

const TrainingAcc = () => {
// функция фильтрации массива данных по дате
    const filter = (arr) => {
        arr = arr.filter(item => item.onDelete === false)
        return arr.sort((a,b) => {
         return Date.parse(a.date) > Date.parse(b.date) ? 1
                    : Date.parse(a.date) === Date.parse(b.date) ? 0
                              : -1;
        })
     }

    const[form, setForm]=useState({
        itemsList: filter(itemsList),
        });
    
    const onSubmit = (evt) => {
    evt.preventDefault()
    setForm(prevForm => ({...prevForm, [itemsList]: addNewItem(itemsList, evt) }));
    evt.target.date.value=''
    evt.target.distance.value=''
}

const addNewItem = (iList, evt) => {
   // проверим не введена ли уже такая дата
    if(iList.find(i => i.date === evt.target.date.value)){
        return iList.map(item => {
            if(item.date === evt.target.date.value){
                return {...item.distance = item.distance + +evt.target.distance.value }
            } else {
                return item
            }
        })
    }

     // проверим подходят ли данные по формату
    const checkFormat = () => {
        const dateReg = /^\d{2}([./-])\d{2}\1\d{4}$/
        const reg = /^[0-9]+$/
        if(dateReg.test(evt.target.date.value) && reg.test(evt.target.distance.value)){
        return iList.push({date: evt.target.date.value, distance: +evt.target.distance.value, id: nanoid(), onDelete: false})
        } else {
        return iList
        }
    }
    let newItemList = checkFormat()
    return newItemList
}

const renderList = form.itemsList.map(item => {
    return (
        <div className='history-point' key={item.id}>
        <div>{item.date}</div>
        <div>{item.distance}</div>
        <div className='icons'>
        <div className="material-icons clear">clear</div>
        </div>
    </div>
    )
})

return (
    <div className='container'>
      <form onSubmit={onSubmit}>
        <div className='form-block'>
            <label htmlFor="name">Дата(дд.мм.гггг)</label>
            <input placeholder='дд.мм.гггг' id="date" name="date" value={form.itemsList.date}/>
        </div>
        <div className='form-block'>
            <label htmlFor="score">Пройдено км</label>
            <input id="distance" name="distance" value={form.itemsList.distance}/>
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
            <div className='frame'>
            {renderList}
            </div>
        </div> 
    </div> 
    )
}

export default TrainingAcc;