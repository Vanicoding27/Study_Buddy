import React, { useState } from 'react';

function TimeConstraintsBox() {
  const [totalHours, setTotalHours] = useState('');
  const [wakeUpTime, setWakeUpTime] = useState('');
  const [sleepTime, setSleepTime] = useState('');
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput.trim()]);
      setTaskInput('');
    }
  };

  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((_, i) => i !== indexToRemove));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-stone-900 rounded-2xl shadow-2xl border border-stone-800">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          Time Constraints
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Define your productive window and priorities
        </p>
      </div>

      {/* Time Settings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Available Hours */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Total Available Hours
          </label>
          <input
            type="number"
            min="1"
            max="16"
            placeholder="e.g. 10"
            value={totalHours}
            onChange={(e) => setTotalHours(e.target.value)}
            className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
          />
        </div>

        {/* Wake-up Time */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Wake-up Time
          </label>
          <select
            value={wakeUpTime}
            onChange={(e) => setWakeUpTime(e.target.value)}
            className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
          >
            <option value="">Select time</option>
            {['05:00', '06:00', '07:00', '08:00', '09:00', '10:00'].map(time => (
              <option key={time} value={time}>{time} AM</option>
            ))}
          </select>
        </div>

        {/* Sleeping Time */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Sleep Time
          </label>
          <select
            value={sleepTime}
            onChange={(e) => setSleepTime(e.target.value)}
            className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
          >
            <option value="">Select time</option>
            {['10:00 PM', '11:00 PM', '12:00 AM', '01:00 AM'].map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Add Tasks Section */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          Tasks & Priorities
        </h3>

        <div className="flex gap-3 mb-5">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
            placeholder="Enter a task (e.g., Math Revision, Coding Practice)"
            className="flex-1 px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
          />
          <button
            onClick={handleAddTask}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition transform hover:scale-105 active:scale-95 shadow-lg"
          >
            + Add
          </button>
        </div>

        {/* Task List */}
        <div className="space-y-2">
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-center py-6 italic">
              No tasks added yet. Start typing above!
            </p>
          ) : (
            tasks.map((task, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-5 py-3 bg-stone-800/50 border border-stone-700 rounded-xl hover:bg-stone-800 transition"
              >
                <span className="text-white font-medium">{task}</span>
                <button
                  onClick={() => removeTask(index)}
                  className="text-red-400 hover:text-red-300 text-sm font-medium"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default TimeConstraintsBox;