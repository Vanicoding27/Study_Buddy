import Card from './Card.jsx'
import Button from './Button.jsx'
import { useState } from 'react'
import TimeConstraintsBox from './TimeConstraintsBox.jsx'
import AddTask from './AddTask.jsx'
import './index.css'
import { URL } from './Constant.js'

function App() {
  const [result, setResult] = useState("");
  const payload ={
    "contents": [
      {
        "role": "user",
        "parts": [
          {
            "text": 
            "You are an expert productivity planner AI. Generate a data-driven and highly optimized daily schedule between 2 PM and 11 PM. Tasks to include is Study, Mock Test, Revision, Coding, and Assignment. Priority Task is Mock Test must be placed in focused hours 6 PM and 9 PM Include short, well-timed breaks for lunch at afternoon, dinner at night, and a short walk. Distribute other tasks logically before and after focus hours. Apply productivity techniques like time blocking, energy management, or Pomodoro principles to maximize focus and reduce fatigue.Output the schedule *only* in the form of a Markdown table with these exact columns: Time Slot , Task , Focus Level Low/Medium/High , Notes and note that output will be only the table no titles, no text, no explanation, no markdown headers before or after.Keep the table neat, complete, and balanced . since i want to reflect the output directly to my website and no unstructured raw data so enhance the way of providing the output so that i can directly use it in my website" 
          }
        ]
      }
    ]
  }
  


  const handleClick = async () => {
    let response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(payload),
    })
    response = await response.json();
    setResult(response.candidates[0].content.parts[0].text)
  }





  return (
    <>
      {/* Page-1 */}
      <div className='flex flex-col place-items-center justify-center h-[100vh] '>
        <h1 className='flex p-5 font-semibold text-white text-3xl'>Schedule Generator</h1>
        <h3 className='flex font-medium text-stone-900'>Create optimized schedule with academic precision</h3>
        <h3 className='flex font-medium text-stone-900'>Input your tasks, constraints and priorities to generate</h3>
        <h3 className='flex font-medium text-stone-900'>the perfect daily plan</h3>
        <div className='flex flex-row gap-4'>
          <Card sign='⏱️' heading='Time Optimization' subheading='Intelligent scheduling based on your available time slots' />
          <Card sign='⭐' heading='Priority-Based' subheading='Tasks organized by importance and urgency levels' />
          <Card sign='📅' heading='Export Ready' subheading='Download your schedule as PDF for easy reference' />
        </div>
        <div className="p-6">
          {/* <input className="bg-amber-50 w-2xl h-5 " placeholder="type...." type='text' onChange={(event) => setResponseText(event.target.value)} /> */}
          <Button placeholder="Generate" Click={handleClick} />
          <p id="response" className="mt-4">{result}</p>
          
        </div>
      </div>
      {/* Page-2 */}
      <div className='h-[100vh]'>
        <Button className="m-0" placeholder='Back To Home' />
        <div className='flex flex-col place-items-center justify-center'>
          <h1 className='flex p-5 font-semibold text-white text-3xl'>Schedule Setup</h1>
          <h3 className='flex font-medium text-stone-900'>Step 1 of 3</h3>
          <div className='flex m-4 gap-20'>
            <span className='w-10 h-10 p-3 text-white place-content-center bg-blue-900 rounded-4xl'>1</span>
            <span className='w-10 h-10 p-3 text-white bg-blue-950 rounded-4xl'>2</span>
            <span className='w-10 h-10 p-3 text-white bg-blue-950 rounded-4xl'>3</span></div>
          <TimeConstraintsBox />
        </div>
        <Button placeholder='Next Step' />
      </div>
      {/* Page-3 */}
      <div className='flex flex-col place-items-center justify-center h-[100vh]'>
        <h3 className='flex font-medium text-stone-900'>Step 2 of 3</h3>
        <div className='flex m-4 gap-20'>
          <span className='w-10 h-10 p-3 text-white bg-blue-950 rounded-4xl'>1</span>
          <span className='w-10 h-10 p-3 text-white bg-blue-900 rounded-4xl'>2</span>
          <span className='w-10 h-10 p-3 text-white bg-blue-950 rounded-4xl'>3</span></div>
        <AddTask />
        <div className='flex flex-row gap-[500px]'>
          <Button placeholder='Back To Home' />
          <Button placeholder='Next Step' />
        </div>
      </div>
      {/* Page-4 */}
      <div className='h-[100vh]'>
        <Button placeholder='Back To Home' />
        <div className='flex flex-row gap-[100px]'>
          <div className='text-white pl-2 text-xl'>
            <h2 className='flex font-medium'>Generated Schedule </h2>
            <h4 className='flex font-medium'>Optimized schedule based on your priorities and time constraints</h4>
          </div>
          <div>
            <Button placeholder='Edit Task' />
            <Button placeholder='Export PDF' />
          </div>
        </div>

        <div id='response' className='flex flex-col text-white bg-stone-950 h-[40vh] m-4 rounded-2xl place-items-center justify-center'>

        </div>
      </div>
    </>
  )
}

export default App
