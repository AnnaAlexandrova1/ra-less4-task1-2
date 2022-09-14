import './TrainingAcc.css'

const TrainingAcc = () => {

return (
    <div className='container'>
      <form>
        <div className='form-block'>
            <label htmlFor="name">Дата(дд.мм.гггг)</label>
            <input id="date" name="date"/>
        </div>
        <div className='form-block'>
            <label htmlFor="score">Пройдено км</label>
            <input id="distance" name="distance"/>
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