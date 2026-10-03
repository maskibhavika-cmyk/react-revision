
// props  use (example 1)

// import React from 'react'

// const User = (props) => {
//   return (
//     <div>
//        <h1>Name:{props.name}</h1>
//        <p>Age:{props.age}</p>
//     </div>
//   )
// }

// export default User


//(example 2)
import React from 'react'

const User = (props) => {
  return (
    <div>
        <h3>Email:{props.email}</h3>
        <p>Password:{props.password}</p>
    </div>
  )
}

export default User