function People({name, age, profession, foto}) {
    return (
        <div>
            <img src={foto} alt={name}/>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Profession: {profession}</p>
        </div>
    )
}

export default People