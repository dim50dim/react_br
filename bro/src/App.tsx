
import Student from "./components/Student"


function App() {


  return (
    <>
<Student name ='Mike' age:number={54} isStudent:boolean={false}/>
<Student name='Patrick' age:number={33} isStudent={false}/>
<Student name ='Tom' age={14} isStudent={true}/>
<Student name='Sandy' age={42} isStudent={true}/>
    </>
  )
}

export default App
