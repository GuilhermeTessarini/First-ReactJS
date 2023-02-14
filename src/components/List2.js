function List2 ({items}){
    return(
        <>
            <h3>My List:</h3>
            {items.length > 0 ? (
            items.map((item, index) => (
                    <p key={index}>{item}</p>
            ))) : (
                <p>No items in the list </p>
            )}
        </>
    )
}

export default List2