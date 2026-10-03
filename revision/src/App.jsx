// import React from 'react'

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

import React from 'react'
import User from './User'

const App = () => {
  return (
    <div>
      <User email="bhavika@gmail.com" password ={121212}/>
    </div>
  )
}

export default App

// use state ka use
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


// import React, { useState } from 'react'

// const App = () => {
//    const[age,setage] = useState("22")
//   return (
//     <div>
// <h1>{age}</h1>
// <button onClick={()=>setage("25")}>change age</button>
//     </div>
//   )
// }

// export default App