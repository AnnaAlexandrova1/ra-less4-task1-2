import { useState } from 'react';
import './TrainingAcc.css'
import { nanoid } from 'nanoid'

import itemsList from './data';

const TrainingAcc = () => {
    const[form, setForm]=useState({
        itemsList: itemsList,
        });
    
    const onSubmit = (evt) => {
    evt.preventDefault()
    setForm(prevForm => ({...prevForm, [itemsList]: addNewItem(itemsList, evt) }));
    }

// фильтр по дате
const filterDate = (arr) => {
        arr.sort((a, b) => a.date.getTime() > b.date.getTime() ? 1 : -1)
    }

const addNewItem = (iList, evt) => {
   // проверим не введена ли уже такая дата
    if(iList.find(i => i.date == evt.target.date.value)){
        //console.log(iList.filter(i => i.date == evt.target.date.value))
        return iList.map(item => {
            if(item.date == evt.target.date.value){
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
        return iList.push({date: evt.target.date.value, distance: +evt.target.distance.value, id: nanoid()})
        } else {
        return iList;
        }
    }
    let newItemList = checkFormat()
    return newItemList
}

// суммируем значение в одинаковую дату
/*
const sumDate = (iList, evt) => {
    //console.log(iList)
        return iList.map(elem => {
            if(elem.date == evt.target.date.value){
                elem.distance = elem.distance  + evt.target.distance.value
            }
        })
    } 
*/


console.log(form.itemsList)

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
                <div className='history-point'>
                    <div>22.08.2022</div>
                    <div>15</div>
                    <div className='icons'>
                    <div className="material-icons edit">edit</div>
                    <div className="material-icons clear">clear</div>
                    </div>
                    
                </div>
            </div>
        </div> 
    </div> 
    )
}

export default TrainingAcc;