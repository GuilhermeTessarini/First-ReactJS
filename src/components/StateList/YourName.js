function YourName({setName}){
    return(
        <>
            <p>Type your name: </p>
            <input type="text" 
                   placeholder="What is your Name?" 
                   onChange={(e) => setName(e.target.value)}  />
        </>
    )
}

export default YourName