import React from 'react'

function TernaryOperators() {
    let loggedIn = true;
    return(
       <div>
          <h2>Logged In</h2>
          { loggedIn ? <p>Welcome</p> : <p>Please login</p> }
       </div>
    )
   
}

export default TernaryOperators