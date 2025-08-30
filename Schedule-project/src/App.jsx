import Card from './Card.jsx'
import Button from './Button.jsx'
import TimeConstraintsBox from './TimeConstraintsBox.jsx'
import './index.css'

function App() {

  return (
    <>
      <div className='flex flex-col place-items-center justify-center'>
        <h1 className='flex p-5 font-semibold text-3xl'>Schedule Generator</h1>
        <h3 className='flex font-medium'>Create optimized schedule with academic precision</h3>
        <h3 className='flex font-medium'>Input your tasks, constraints and priorities to generate</h3>
        <h3 className='flex font-medium'>the perfect daily plan</h3>
        <Card/>
        <Button placeholder='Generate'/>
      </div>
      <div className='flex flex-col place-items-center justify-center'>
        <h1 className='flex p-5 font-semibold text-3xl'>Schedule Setup</h1>
        <h3 className='flex font-medium'>Step 1 of 3</h3>
        <div><span>@</span><span>@</span><span>@</span></div>
        <TimeConstraintsBox/>
        <Button placeholder='Next Step'/>
      </div>
      
    </>
  )
}

export default App
