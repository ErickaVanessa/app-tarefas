import React, {useState} from "react"
import '../style/global.css'




export function Home() {

  

  const [studentName,setStudentName] = useState()

  return (
  <>

  <header>

  <h1>Tarefas Semanas </h1>

   <input type="text" name="" id="text" placeholder="digite seu nome ..." onChange={e => setStudentName(e.target.value)}></input>

   <p>
    {studentName}
   </p>

  </header>

    </>
      
  
  )
    
}

export default Home


