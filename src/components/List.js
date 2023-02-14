import Item from './Item'

function List(){
    return(
        <>
            <h1>My List</h1>
            <ul>
                <Item brand="Ferrari" launch={1985}/>
                <Item brand="Mercedes" launch={1964}/>
                <Item brand="Renault" launch={1999}/>
                <Item/>
                <li>Item 1</li>
            </ul>
        </>
    )
}


export default List