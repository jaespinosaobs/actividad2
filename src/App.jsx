import { useState } from 'react'
import ClassList from './components/classList';
import ClassDetail from './components/classDetail';
import './App.css'

function App() {
  const [selectedClass, setSelectedClass] = useState(null)

  return (
     <div className="container py-4">
      <h1 className="text-center mb-4">D&D Classes & Spells</h1>
      
      {selectedClass ? (
        <ClassDetail 
          cls={selectedClass} 
          onBack={() => setSelectedClass(null)} 
        />
      ) : (
        <ClassList onSelect={setSelectedClass} />
      )}
    </div>
  )
}

export default App
