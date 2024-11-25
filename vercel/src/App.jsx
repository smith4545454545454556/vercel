import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from './api/data'

function App() {
  const [name, setName] = useState({
    name: ""
  })
  const handleName = (e) => {
    e.preventDefault()
    setName((prev) => ({ ...prev, name: e.target.value }))

  }
  useEffect(() => {
    console.log(name)
  }, [name])
  const handleForm = async (e) => {
    e.preventDefault()

    const response = await data(name)
    console.log(response, "backend response")


  }

  return (
    <>
      <form onSubmit={handleForm}>
        <label>name</label>
        <input type='text' onChange={handleName} value={name.name} />
        <button type='submit'>submit</button>
      </form>
    </>
  )
}

export default App
