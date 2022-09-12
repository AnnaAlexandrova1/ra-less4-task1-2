import { useState } from 'react';
import './Converter.css'

const Converter = () => {
    const[form, setForm]=useState({
        name: ''
       ,
        });
       

    const handleChange = ({target}) => {
         const {name, value} = target;
         setForm(prevForm => ({...prevForm, [name]: value
         }))
         
    }
    console.log(form.name)

    return (
        <div className="converter">
          <input className='input-data' 
          id='input-data' 
          name='name'
          value={form.name}
          onChange={handleChange}>
          </input>
          <div className='output-data'>
          </div>
        </div>
    )
}

export default Converter;