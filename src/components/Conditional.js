import { useState } from "react"

function Conditional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function sendEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function clearEmail(e){
        setUserEmail()
    }
    return(
        <div>
            <h1>Register your e-mail:</h1>
            <form>
                <input type="email" 
                       placeholder="E-mail"
                       onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={sendEmail}>Submit</button>
                {userEmail && (
                    <div>
                        <p>The user email is: {userEmail}</p>
                        <button onClick={clearEmail}>Clear e-mail</button>
                    </div>)}
            </form>
            
        </div>
    )
}

export default Conditional