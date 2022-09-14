import Converter from './compomemts/Converter/Converter';
import TrainingAcc from './compomemts/TrainingAcc/TrainingAcc'
import './App.css';

function App() {
  return (
   <div className='tasks'>
    <div className='task task-1'>
      <span className='task-title'>Задача 1. Конвертер цветов</span>
      <Converter />
    </div>
    <div className='task task-2'>
      <span className='task-title'>Задача 2. Учёт тренировок</span>
        <TrainingAcc />
    </div>
   </div>
  )
}

export default App;
