import Card from './Card.jsx'
import Button from './Button.jsx'
import TimeConstraintsBox from './TimeConstraintsBox.jsx'
import AddTask from './AddTask.jsx'
import './index.css'

function App() {

  return (
    <>
      {/* Page-1 */}
      <div className='flex flex-col place-items-center justify-center h-[100vh] '>
        <h1 className='flex p-5 font-semibold text-3xl'>Schedule Generator</h1>
        <h3 className='flex font-medium'>Create optimized schedule with academic precision</h3>
        <h3 className='flex font-medium'>Input your tasks, constraints and priorities to generate</h3>
        <h3 className='flex font-medium'>the perfect daily plan</h3>
        <Card />
        <Button placeholder='Generate' />
      </div>
      {/* Page-2 */}
      <div className='h-[100vh]'>
        <Button className="m-0" placeholder='Back To Home' />
        <div className='flex flex-col place-items-center justify-center'>
          <h1 className='flex p-5 font-semibold text-3xl'>Schedule Setup</h1>
          <h3 className='flex font-medium'>Step 1 of 3</h3>
          <div className='flex m-4 gap-20'>
            <span className='w-10 h-10 p-3 bg-blue-700 rounded-4xl'>1</span>
            <span className='w-10 h-10 p-3 bg-blue-700 rounded-4xl'>2</span>
            <span className='w-10 h-10 p-3 bg-blue-700 rounded-4xl'>3</span></div>
          <TimeConstraintsBox />
          <div className='flex flex-row gap-[500px]'>
            <Button placeholder='Back To Home' />
            <Button placeholder='Next Step' />
          </div>
        </div>
      </div>
      {/* Page-3 */}
      <div className='flex flex-col place-items-center justify-center h-[100vh]'>
        <h3 className='flex font-medium'>Step 2 of 3</h3>
        <div className='flex m-4 gap-20'>
          <span className='w-10 h-10 p-3 bg-blue-700 rounded-4xl'>1</span>
          <span className='w-10 h-10 p-3 bg-blue-700 rounded-4xl'>2</span>
          <span className='w-10 h-10 p-3 bg-blue-700 rounded-4xl'>3</span></div>
        <AddTask />
        <div className='flex flex-row gap-[500px]'>
          <Button placeholder='Back To Home' />
          <Button placeholder='Next Step' />
        </div>
      </div>
      {/* Page-4 */}
      <div className='h-[100vh]'>
        <Button placeholder='Back To Home' />
        <div className='flex flex-row'>
          <div>
            <h2 className='flex font-medium'>Generated Schedule </h2>
            <h4 className='flex font-medium'>Optimized schedule based on your priorities and time constraints</h4>
          </div>
          <div>
            <Button placeholder='Edit Task' />
            <Button placeholder='Export PDF' />
          </div>
        </div>

        <div className='flex flex-col place-items-center justify-center'>

        </div>
      </div>
    </>
  )
}

export default App
