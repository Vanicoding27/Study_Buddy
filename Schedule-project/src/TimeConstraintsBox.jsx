import React from 'react';

function TimeConstraintsBox({ userInputs, updateUserInputs }) {
  const { startTime, sleepTime, tasks = [] } = userInputs;

  const [taskInput, setTaskInput] = React.useState('');

  const handleAddTask = () => {
    if (taskInput.trim()) {
      updateUserInputs({
        tasks: [...tasks, taskInput.trim()]
      });
      setTaskInput('');
    }
  };

  const removeTask = (indexToRemove) => {
    updateUserInputs({
      tasks: tasks.filter((_, i) => i !== indexToRemove)
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-stone-900 rounded-2xl shadow-2xl border border-stone-800">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          Time Constraints
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Define your productive window and priorities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            (Start of productive day)
          </label>
          <select
            value={startTime}
            onChange={(e) => updateUserInputs({ startTime: e.target.value })}
            className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
          >
            <option value="">Select start time</option>
            {['05:00 AM', '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM'].map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Sleep Time (End of productive day)
          </label>
          <select
            value={sleepTime}
            onChange={(e) => updateUserInputs({ sleepTime: e.target.value })}
            className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
          >
            <option value="">Select sleep time</option>
            {['09:00 PM', '10:00 PM', '11:00 PM', '12:00 AM', '01:00 AM', '02:00 AM'].map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Total Available Hours (Optional)
          </label>
          <input
            type="number"
            min="4"
            max="16"
            placeholder="e.g. 9"
            value={userInputs.totalHours || ''}
            onChange={(e) => updateUserInputs({ totalHours: e.target.value })}
            className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
          />
        </div>
      </div>

      {/* Tasks Section */}
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