import { useEffect, useRef, useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [users, setUsers] = useState([])
  const nameRef = useRef()
  const techRef = useRef()
  useEffect(() => {
    axios.get('http://127.0.0.1:4000/getUsers').then(users => {
      setUsers(users.data)
      console.log(users)
    }).catch(err => console.error(err))
  }, []);

  const handleSaveUser = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:4000/addUser',
      { name: nameRef.current.value, tech: techRef.current.value })
      .then((user) => {
        console.log(users)
        setUsers = [...users, user]
      })
      .catch(err => console.error(err))
  }


  return (
    <div>
      <h2>Mern App</h2>
      {users.map((user, i) => {
        return <div key={i}>
          <ul>
            <li>
              {user.name}, {user.tech}
            </li>
          </ul>
        </div>
      })}

      <div>
        <form>
          <input ref={nameRef} type='text' placeholder='name' />
          <input ref={techRef} type='text' placeholder='tech' />
          <button type="submit" onClick={handleSaveUser}>Save</button>
        </form>
      </div>
    </div>
  )
}

export default App
