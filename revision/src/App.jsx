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
// import React, { useState } from 'react'

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false)

//   return (
//     <div>
//       {isLoggedIn ? (
//         <h1>Welcome Bhavika</h1>
//       ) : (
//         <h1>Please Login</h1>
//       )}

//       <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//         Login / Logout
//       </button>
//     </div>
//   )
// }

// export default App


// List rendering + map()
// import React from 'react'

// const App = () => {

//   const users = ["divyanshi", "tanu", "mahi", "dhanshri"]

//   return (
//     <div>
//       <h1>Users</h1>

//       {users.map((user) => (
//         <h3>{user}</h3>
//       ))}
//     </div>
//   )
// }

// export default App

//key prop
 
//  import React from 'react'  
//    const App = () => {
//     const user =["tanu","mahi","dhanshri","divya"]
//      return (
//        <div>
//         {user.map((user,index)=>(
//           <h3 key = {index}>{user}</h3>
//         ))}
//        </div>
//      )
//    }
   
//    export default App


// useEffect
// import React, { useEffect } from 'react'

// const App = () => {
// useEffect(()=> {
// console.log("component is render")
// },[])//dependency array jo ki empty hai
//   return (
//     <div>
// <h1>kajal is a beautiful girl</h1>
// <h1> she is good girl</h1>
//     </div>
//   )
// }

// export default App


//dependency array of useEffect
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0)


//   useEffect(()=>{
//     console.log("count changed:",count)
//   },[count])
//   return (
//     <div>
// <h1>Count:{count}</h1>
// <button onClick={()=>setCount(count+1)}>Increase</button>
// <button onClick={()=>setCount(count-1)}>Decrease</button>

//     </div>
//   )
// }

// export default App

//API Calling using fetch()

// import React, { useEffect, useState } from 'react'

// const App = () => {
// const [jobs,setJobs] = useState([])
// useEffect(()=> {
//   fetch('http://localhost:8080/api/v1/jobs')
//   .then((response)=>response.JSON())
//   .then((data)=>{
//     setJobs(data)
// })
// },[])
//   return (
//     <div>
// <h1>Jobs</h1>
// {jobs.map((job)=>(
// <h3 key ={job._id}>{job.title}</h3>
// ))}
//     </div>
//   )
// }

// export default App

// example 2
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [users, setUsers] = useState([])

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data)
//       })
//   }, [])

//   return (
//     <div>
//       <h1>Users</h1>

//       {users.map((user) => (
//         <h3 key={user.id}>{user.name}</h3>
//       ))}
//     </div>
//   )
// }

// export default App

// Loading 
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [users, setUsers] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data)
//         setLoading(false)
//       })
//   }, [])

//   return (
//     <div>
//       <h1>Users</h1>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         users.map((user) => (
//           <h3 key={user.id}>{user.name}</h3>
//         ))
//       )}
//     </div>
//   )
// }

// export default App

// loading + error
// import React, { useEffect, useState } from 'react'

// const App = () => {
// const [users,setUsers]=useState([])
// const [loading, setLoading] = useState(true)
// const [error, setError] = useState('')

// useEffect(()=> {
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(()=>{
//    if (!response.ok) {  //check karta hai ki request successful hui ya nahi.
                           // Agar successful nahi hui → error throw hoga.
//           throw new Error('Something went wrong')
//         }
//     return response.json()
//       })
//       .then((data) => {
//         setUsers(data)
//         setLoading(false)
//       })
//       .catch((error) => {
//         setError(error.message)
//         setLoading(false)
//       })
//   }, [])

//   return (
//     <div>

//     </div>
//   )
// }

// export default App

//  React router
//  import React from 'react'
//  import { Routes, Route, Link } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
 
//  const App = () => {

//    return (
//      <div>
//   <nav>
// <Link to ="/"> Home </Link>
// <Link to ="/about"> About </Link>
//   </nav>
//   <Routes>
//     <Route path="/" element={<Home/>} />
//     <Route path="/about" element={<About/>} />
//   </Routes>
//      </div>
//    )
//  }
 
//  export default App

 // useNavigate
//  import React from 'react'
//  import { Routes, Route, Link } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
 
//  const App = () => {

//    return (
//      <div>
//          <Routes>
//     <Route path="/" element={<Home/>} />
//     <Route path="/about" element={<About/>} />
//   </Routes>
//      </div>
//    )
//  }
 
//  export default App
    

// useMemo
// import React, { useMemo, useState } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0)

//   const result = useMemo(() => {
//     return count * 10
//   }, [count])

//   return (
//     <div>
//       <h2>Result: {result}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   )
// }

// export default App

// useCallback


// lazy loading
// import { lazy, Suspense } from "react";

// const About = lazy(() => import("./pages/About"));
// function App() {
//   return (
//     <Suspense fallback={<h2>Loading...</h2>}>
//       <About />
//     </Suspense>
//   );
// }

// export default App;


// example 2
// import { lazy, Suspense } from "react";

// const About = lazy(() => import("./pages/About"));

// function App() {
//   return (
//     <Suspense fallback={<h2>Loading...</h2>}>
//       <About />
//     </Suspense>
//   );
// }

// export default App;


// Jsx
// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h1>My react Practice</h1>
//       <p>I am learning react</p>
//     </div>
//   )
// }

// export default App

// component 

function Navbar() {
  return <h2>JobConnect Navbar</h2>;
}

function App() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to JobConnect</h1>
    </div>
  );
}

export default App;
