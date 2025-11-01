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
            "text": "You are an expert productivity planner and front-end UI designer. Generate a fully coded React component that produces an AI-optimized daily schedule between 2 PM and 11 PM.\n\n### INPUT DETAILS:\nTasks: Study, Mock Test, Revision, Coding, Assignment.\nPriority Task: Mock Test (must be between 6 PM and 9 PM — focused hours).\nInclude breaks for lunch, dinner, and a short walk.\nUse smart time management methods like Pomodoro, energy-based task placement, and time blocking.\n\n### OUTPUT REQUIREMENTS:\n1. Generate a **React functional component** named `ProductiveSchedule`.\n2. The component should:\n   - Display a **styled schedule table** with columns: Time Slot, Task, Focus Level (Low / Medium / High), and Notes.\n   - Include a **Task Completion Checklist** with checkboxes `[ ]` next to each task.\n   - Display a live **Efficiency Score** (percentage of tasks marked completed).\n   - Include a **Productivity Tips** section with 3 short actionable insights.\n   - Show a **Professional UI Color Palette** (3–5 hex colors) in small colored boxes with labels: Background, Text, Accent, Button, Highlight.\n\n3. The UI must be **minimal, modern, and professional** — use a calm and productivity-focused palette. The layout should be centered, responsive, and visually balanced.\n4. Use **Tailwind CSS classes** for styling (assume Tailwind is already configured).\n5. Include clear comments in the code explaining each part.\n6. Ensure all JSX syntax and React hooks (if used) are correct and production-ready.\n\n### FORMAT:\nReturn only the complete React component code block (no explanation, no extra text) enclosed in triple backticks with the language tag ```jsx```."
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
