import {useState} from 'react'

function Form(){

    function registerUser(e){
        e.preventDefault()
        console.log(`The user: ${name} has been registered with the password: ${password}`)
    }

    const[name, setName] = useState()
    const[password, setPassword] = useState()

    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={registerUser}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" 
                           id="name" 
                           name="name" 
                           placeholder="Your Name"
                           onChange={(e) => setName(e.target.value)}
                           />
                </div>
                <div>
                <label htmlFor="password">Password: </label>
                    <input type="password" 
                           id="password" 
                           name="password" 
                           placeholder="Your Password"
                           onChange={(e) => setPassword(e.target.value)}
                    />                      
                    
                </div>
                <div>
                    <input type="submit" value="Register"></input>
                </div>
            </form>
        </div>
    )
}

export default Form