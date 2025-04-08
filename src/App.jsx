import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count > 0 ? state.count - 1 : 0 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Counter</h1>
      <div className="text-6xl font-semibold text-blue-900 mb-6">
        {state.count}
      </div>
      <div className="flex gap-4">
      <button
        onClick={() => dispatch({ type: 'decrement' })}
        disabled={state.count === 0}
        className={`px-6 py-2 rounded text-white ${
        state.count === 0
        ? 'bg-red-300 cursor-not-allowed'
        : 'bg-red-500 hover:bg-red-600'
        }`}>
            -1
        </button>
        <button
          onClick={() => dispatch({ type: 'reset' })}
          className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch({ type: 'increment' })}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          +1
        </button>
      </div>
    </div>
  );
}
