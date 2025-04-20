import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 px-6 py-8">
            <h1 className="text-3xl font-bold text-white text-center">
              React + Vite + TypeScript + Tailwind CSS
            </h1>
            <p className="mt-2 text-blue-100 text-center">
              Your modern web development stack
            </p>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex flex-col gap-6">
              {/* Counter Card */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Interactive Counter</h2>
                <p className="text-gray-600 mb-4">
                  Click the button below to increment the counter.
                </p>
                <div className="flex items-center gap-4">
                  <button
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition-colors"
                    onClick={() => setCount((count) => count + 1)}
                  >
                    Count is: {count}
                  </button>
                  <button 
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md shadow-sm transition-colors"
                    onClick={() => setCount(0)}
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <div className="text-blue-600 text-lg font-semibold mb-2">Reactive</div>
                  <p className="text-blue-800">Build interactive UIs with React's component-based architecture</p>
                </div>
                <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
                  <div className="text-purple-600 text-lg font-semibold mb-2">Type-Safe</div>
                  <p className="text-purple-800">Write more reliable code with TypeScript's static typing</p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                  <div className="text-green-600 text-lg font-semibold mb-2">Fast Development</div>
                  <p className="text-green-800">Enjoy lightning-fast HMR with Vite's dev server</p>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                  <div className="text-amber-600 text-lg font-semibold mb-2">Utility-First CSS</div>
                  <p className="text-amber-800">Style your app with Tailwind's composable utility classes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <p className="text-center text-gray-500 text-sm">
              Edit <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">src/App.tsx</code> and save to test hot module replacement (HMR)
            </p>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          Created with Vite, React, TypeScript, and Tailwind CSS
        </div>
      </div>
    </div>
  )
}

export default App
