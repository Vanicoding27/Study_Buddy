import Card from './Card.jsx';
import Button from './Button.jsx';
import { useState } from 'react';
import TimeConstraintsBox from './TimeConstraintsBox.jsx';
import './index.css';
import { URL } from './Constant.js';

function App() {
  const [scheduleData, setScheduleData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // User inputs state — from TimeConstraintsBox
  const [userInputs, setUserInputs] = useState({
    startTime: "02:00 PM",     // Default
    sleepTime: "11:00 PM",      // Default
    totalHours: "",
    tasks: ["Study", "Mock Test"],
    priorityTask: "Mock Test",
    priorityTimeSlot: "6:00 PM – 9:00 PM"
  });
  


// Dynamic Prompt Generator
  const generatePrompt = () => {
    const startTime = userInputs.startTime || "2:00 PM";
    const endTime = userInputs.sleepTime || "11:00 PM";
    const tasksList = userInputs.tasks.length > 0
      ? userInputs.tasks.join(", ")
      : "Study, Revision, Practice";

    const priorityInfo = userInputs.priorityTask
      ? `Priority Task: ${userInputs.priorityTask} must be placed in your peak focus hours (typically evening).`
      : "";

    const totalHoursMention = userInputs.totalHours
      ? ` Total productive hours available: ${userInputs.totalHours}.`
      : "";

    return `
You are an expert productivity planner AI. Generate a data-driven and highly optimized daily schedule between ${startTime} and ${endTime}.${totalHoursMention}

Tasks to include: ${tasksList}.
${priorityInfo}

Include short, well-timed breaks for meals and a short walk if it fits naturally.
Distribute tasks logically using energy management: lighter tasks early/late, deep work during peak hours and brekfast,lunch(typically after 9 pm) and dinner should be assigned on proper time and appropriate bathing time also if time slot starts early from the morning .
Apply techniques like time blocking and Pomodoro where suitable.

Output the schedule *only* in the form of a Markdown table with these exact columns: Time Slot, Task, Focus Level Low/Medium/High, Notes.
Output only the table — no extra text, no titles.

Then, at the very end, add a JSON representation of the same data like this:
\`\`\`json
[{"time_slot": "2:00 PM – 3:30 PM", "task": "Study", "focus_level": "Medium", "notes": "Active recall + Pomodoro"}, ...]
\`\`\`
Keep the schedule balanced, realistic, and fatigue-reducing.`.trim();
  };
  // Build dynamic payload
  const getPayload = () => ({
    contents: [
      {
        role: "user",
        parts: [
          {
            text: generatePrompt()
          }
        ]
      }
    ]
  });

  // Parse AI response (Markdown table + JSON)
  const parseResponseToSchedule = (text) => {
    try {
      const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
      if (jsonMatch && jsonMatch[1]) {
        const parsed = JSON.parse(jsonMatch[1]);
        if (Array.isArray(parsed)) {
          return parsed.map(row => ({
            time_slot: row.time_slot || row["Time Slot"] || row["time_slot"] || "",
            task: row.task || row.Task || "",
            focus_level: row.focus_level || row["Focus Level"] || row.focus_level || "",
            notes: row.notes || row.Notes || ""
          })).filter(row => row.time_slot && row.task);
        }
      }

      // Fallback: parse markdown table
      const lines = text.trim().split('\n').filter(line => line.includes('|') && !line.match(/[-|]+/));
      return lines.map(line => {
        const cols = line.split('|').map(c => c.trim()).filter(Boolean);
        if (cols.length >= 4) {
          return {
            time_slot: cols[0],
            task: cols[1],
            focus_level: cols[2],
            notes: cols[3] || ""
          };
        }
        return null;
      }).filter(Boolean);

    } catch (err) {
      console.error("Parsing error:", err);
      setError("Failed to parse schedule. Please try again.");
      return [];
    }
  };

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    setScheduleData([]);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(getPayload()),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      const aiText = data.candidates[0]?.content?.parts[0]?.text || "";

      const parsedSchedule = parseResponseToSchedule(aiText);
      setScheduleData(parsedSchedule);

    } catch (err) {
      console.error(err);
      setError("Failed to generate schedule. Check console or try again.");
    } finally {
      setLoading(false);
    }
  };

  // Color helpers
  const getFocusColor = (level) => {
    const l = level?.toLowerCase();
    if (l === "high") return "bg-red-500/20 text-red-400";
    if (l === "medium") return "bg-yellow-500/20 text-yellow-400";
    if (l === "low") return "bg-green-500/20 text-green-400";
    return "bg-gray-500/20 text-gray-400";
  };

  const getTaskColor = (task) => {
    return task?.includes(userInputs.priorityTask || "Mock Test")
      ? "text-yellow-400 font-bold"
      : "text-white font-medium";
  };

  // Callback to update inputs from child components (e.g., TimeConstraintsBox)
  const updateUserInputs = (newInputs) => {
    setUserInputs(prev => ({ ...prev, ...newInputs }));
  };

  return (
    <>
      {/* Page 1 - Landing */}
      <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-violet-200 to-pink-200'>
        <h1 className='p-5 font-semibold text-white text-3xl'>Schedule Generator</h1>
        <h3 className='font-medium text-stone-900'>Create optimized schedule with academic precision</h3>
        <h3 className='font-medium text-stone-900'>Input your tasks, constraints and priorities to generate</h3>
        <h3 className='font-medium text-stone-900'>the perfect daily plan</h3>
        <div className='flex flex-row gap-4 mt-8'>
          <Card sign='⏱️' heading='Time Optimization' subheading='Intelligent scheduling based on your available time slots' />
          <Card sign='⭐' heading='Priority-Based' subheading='Tasks organized by importance and urgency levels' />
          <Card sign='📅' heading='Export Ready' subheading='Download your schedule as PDF for easy reference' />
        </div>
      </div>

      {/* Page 2 - Generator */}
      <div className='min-h-screen bg-gray-950 text-white py-10'>
        <div className='flex flex-col items-center'>
          <h1 className='p-5 font-semibold text-3xl'>Schedule Setup</h1>
          {/* Pass update function to child */}
          <TimeConstraintsBox userInputs={userInputs} updateUserInputs={updateUserInputs} />

          <div className='mt-8'>
            <Button
              placeholder={loading ? "Generating..." : "Generate Schedule"}
              Click={handleClick}
              disabled={loading}
            />
          </div>

          {error && <p className='text-red-400 mt-4'>{error}</p>}

          {scheduleData.length > 0 && (
            <div className="mt-12 w-full max-w-5xl px-4">
              <h2 className='text-2xl font-bold text-center mb-6 text-blue-400'>Your Optimized Schedule</h2>
              <div className="overflow-x-auto rounded-lg shadow-2xl">
                <table className="w-full text-sm text-left text-gray-300">
                  <thead className="text-xs uppercase bg-stone-900/90 text-blue-400">
                    <tr>
                      <th className="px-6 py-4 font-semibold tracking-wider">Time Slot</th>
                      <th className="px-6 py-4 font-semibold tracking-wider">Task</th>
                      <th className="px-6 py-4 font-semibold tracking-wider">Focus Level</th>
                      <th className="px-6 py-4 font-semibold tracking-wider">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-800">
                    {scheduleData.map((row, index) => (
                      <tr key={index} className="hover:bg-stone-900/60 transition-all duration-200">
                        <td className="px-6 py-5 font-medium text-blue-300 whitespace-nowrap">
                          {row.time_slot}
                        </td>
                        <td className={`px-6 py-5 ${getTaskColor(row.task)}`}>
                          {row.task}
                        </td>
                        <td className="px-6 py-5">
                          <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${getFocusColor(row.focus_level)}`}>
                            {row.focus_level}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-gray-400">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;