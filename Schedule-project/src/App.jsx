
import Card from './Card.jsx'
import Button from './Button.jsx'
import { useState } from 'react'
import TimeConstraintsBox from './TimeConstraintsBox.jsx'
import './index.css'
import { URL } from './Constant.js'

function App() {
  const [result, setResult] = useState("");
  const payload = {
    "contents": [
      {
        "role": "user",
        "parts": [
          {
            "text":
              "You are an expert productivity planner AI. Generate a data-driven and highly optimized daily schedule between 2 PM and 11 PM. Tasks to include is Study, Mock Test, Revision, Coding, and Assignment. Priority Task is Mock Test must be placed in focused hours 6 PM and 9 PM Include short, well-timed breaks for lunch at afternoon, dinner at night, and a short walk. Distribute other tasks logically before and after focus hours. Apply productivity techniques like time blocking, energy management, or Pomodoro principles to maximize focus and reduce fatigue.Output the schedule *only* in the form of a Markdown table with these exact columns: Time Slot , Task , Focus Level Low/Medium/High , Notes and note that output will be only the table no titles, no text, no explanation, no markdown headers before or after.Keep the table neat, complete, and balanced . since i want to reflect the output directly to my website and no unstructured raw data so enhance the way of providing the output so that i can directly use it in my website.Keep the output neat, complete, and balanced, with each task separated by a blank line for easy parsing. Since I want to reflect the output directly to my website and access each task separately in my UI, provide the output as structured pieces without any raw unstructured data."
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

  console.log(result)



  return (
    <>
      {/* Page-1 */}
      <div className='flex flex-col place-items-center justify-center h-[100vh] bg-gradient-to-r from-violet-200 to-pink-200 '>
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

        </div>
      </div>
      {/* Page-2 */}
      <div className='h-[100vh]'>
        <div className='flex flex-col place-items-center justify-center'>
          <h1 className='flex p-5 font-semibold text-white text-3xl'>Schedule Setup</h1>
          <h3 className='flex font-medium text-stone-900'>Step 1 of 3</h3>
          <div className='flex m-4 gap-20'>
            <span className='w-10 h-10 p-3 text-white place-content-center bg-blue-900 rounded-4xl'>1</span>
            <span className='w-10 h-10 p-3 text-white bg-blue-950 rounded-4xl'>2</span>
            <span className='w-10 h-10 p-3 text-white bg-blue-950 rounded-4xl'>3</span></div>
          <TimeConstraintsBox />
        </div>
        <Button placeholder="Generate" Click={handleClick} />
        <p id="response" className="mt-4">{result}</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-300">
            {/* Header */}
            <thead className="text-xs uppercase bg-stone-900/90 text-blue-400">
              <tr>
                <th className="px-6 py-4 font-semibold tracking-wider">Time Slot</th>
                <th className="px-6 py-4 font-semibold tracking-wider">Task</th>
                <th className="px-6 py-4 font-semibold tracking-wider">Focus Level</th>
                <th className="px-6 py-4 font-semibold tracking-wider">Notes</th>
              </tr>
            </thead>

            {/* Body – this part stays dynamic (example rows) */}
            <tbody className="divide-y divide-stone-800">
              <tr className="hover:bg-stone-900/60 transition-all duration-200">
                <td className="px-6 py-5 font-medium text-blue-300 whitespace-nowrap">2:00 PM – 3:00 PM</td>
                <td className="px-6 py-5 font-medium text-white">Study Session</td>
                <td className="px-6 py-5">
                  <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-green-500/20 text-green-400">
                    High
                  </span>
                </td>
                <td className="px-6 py-5 text-gray-400">Pomodoro 2×25 min</td>
              </tr>

              <tr className="hover:bg-stone-900/60 transition-all duration-200">
                <td className="px-6 py-5 font-medium text-blue-300 whitespace-nowrap">6:00 PM – 9:00 PM</td>
                <td className="px-6 py-5 font-bold text-yellow-400">Mock Test</td>
                <td className="px-6 py-5">
                  <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-red-500/20 text-red-400">
                    High
                  </span>
                </td>
                <td className="px-6 py-5 text-gray-400">Full focus block</td>
              </tr>
            </tbody>
          </table>


        </div>
      </div>
    </>
  )
}

export default App
