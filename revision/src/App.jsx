// import React from 'react'

// const { useState } = require("react");

//  const App = () => {
//   return (
//     <div>
//       <h1>hello  bhavika</h1>
//       </div>
//   )
// }
// export default App


//component use
// import React from 'react'
// import Header from './Header'
// const App = () => {
//   const name ="bhavika"
//   return (

//     <div>
//        <Header/>
//       <h1>hello {name}</h1>
//       <p>welcome my website</p>
//     </div>
  
//   )
// }
// export default App

// props use
// import React from 'react'
// import User from './User'

// const App = () => {
//   return (
//     <div>
//     <User name = "bhavika" age ={50}/>
  
//     </div>
//   )
// }

// export default App

// import  React  from 'react'
// import User from './User'

// const App = () => {
//   return (
//     <div>
//       <User email="bhavika@gmail.com" password ={121212}/>
//     </div>
//   )
// }

// export default App

// child props
// import React from 'react'
// import Card from './Card'

// const App = () => {
//   return (
//     <Card>
//         <h2>bhavika maski</h2>
//         <p>wlcome my profile</p>
//     </Card>
//   )
// }

// export  default  App

//use state ka use
// import React, { useState } from 'react'

// const App = () => {
//    const[count,setcount]= useState(0)
//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={()=>setcount(count+1)}>Increase</button>
//     </div>
//   )
// }

// export default App


//2 example
// import React, { useState } from 'react'

// const App = () => {
//    const[age,setage] = useState(22)
//   return (
//     <div>
// <h1>{age}</h1>
// <button onClick={()=>setage(25)}>change age</button>
//     </div>
//   )
// }

// export default App



//event handling
// import React from 'react'

// const App = () => {
//     const handleClick = ()=>{
//         alert("Button clicked")
//     }
//   return (
//     <div>
//         <button onClick={ handleClick}>click me</button>
//     </div>
//   )
// }

// export default App


//useState + onClick
// import React, { useState } from 'react'

// const App = () => {
//    const [name,setname] = useState("bhavika")
//    const changeName = () => {
//     setname("kangana")
//    }
//   return (
//     <div>
// <h1>{name}</h1>
// <button onClick={changeName}>update name</button>
//     </div>
//   )
// }

// export default App

// onchange + useState + input
// import React, { useState } from 'react'

// const App = () => {
//    const [name, setname]= useState("")
//   return (
//     <div>
// <input type ="text"
// onChange={(e) => setname(e.target.value)}/>
// <h1>{name}</h1>
//     </div>

//   )
// }

// export default App


//react + forms + onsubmit


// controlled component

// import React, { useState } from 'react'
// const App = () => {
//   const [name, setname] = useState("")

//   return (
//     <div>
//       <h1>My Name:{name}</h1>
//       <input
//       type="text"
//       value ={name}
//       onChange={(e) =>setname(e.target.value)}
//       placeholder = "Enter your name"
//       ></input>
//     </div>
//   )
// }

// export default App


//  Multiple Inputs Handling
// import React, { useState } from 'react'

// const App = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: ""
//   })

//   const handleChange = (e) => {
//     setForm({
//     ...form, //purani saari values ko copy kar dega
//       [e.target.name]: e.target.value
//     })
//   }

//   return (
//     <div>
//       <input
//         name="name"
//         value={form.name}
//         onChange={handleChange}
//         placeholder="Enter name"
//       />

//       <input
//         name="email"
//         value={form.email}
//         onChange={handleChange}
//         placeholder="Enter email"
//       />

//       <input
//         name="password"
//         value={form.password}
//         onChange={handleChange}
//         placeholder="Enter password"
//       />

//       <h3>{form.name}</h3>
//       <h3>{form.email}</h3>
//       <h3>{form.password}</h3>
//     </div>
//   )
// }

// export default App

//  conditional rendering
import React, { useState } from 'react'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome Bhavika</h1>
      ) : (
        <h1>Please Login</h1>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Login / Logout
      </button>
    </div>
  )
}

export default App