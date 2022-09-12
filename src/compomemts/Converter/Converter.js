import { useState } from 'react';
import './Converter.css'

const Converter = () => {
    const[form, setForm]=useState({
        name: '',
        color: 'white',
        });
       
    const handleChange = ({target}) => {
         const {name, value} = target;
         setForm(prevForm => ({...prevForm, [name]: value
         }))  
    }

    const hexToRgb = (hex) => {
        if(hex.length < 7){
            return
         }
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? 
            `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
           : "Ошибка!";
      }

      const styles = {
        backgroundColor: hexToRgb(form.name),
      }

    return (
        <div className="converter"
        style={styles}>
          <input className='input-data' 
          id='input-data' 
          name='name'
          value={form.name}
          onChange={handleChange}>
          </input>
          <div className='output-data'>
           {hexToRgb(form.name)}
          </div>
        </div>
    )
}

export default Converter;