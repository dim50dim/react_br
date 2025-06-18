
import Student from "./components/Student"


function App() {


  return (
    <>
<Student name:string ='Mike' age:number={54} isStudent:boolean={false}/>
<Student name:string='Patrick' age:number={33} isStudent={false}/>
<Student name:string ='Tom' age={14} isStudent={true}/>
<Student name:string='Sandy' age={42} isStudent={true}/>
    </>
  )
}

export default App
