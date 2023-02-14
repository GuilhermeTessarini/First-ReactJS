function Greetings({name}){

    function generateGreetings(anyName){
        return `Hello, ${anyName}, how are you?`
    }

    return  <>
                {name && <p>{generateGreetings(name)}</p>}
            </>
    
}

export default Greetings