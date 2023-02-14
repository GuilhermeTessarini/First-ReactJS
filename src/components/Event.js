import Button from "./Events/Button"

function Event(number){

    function firstEvent(){
        console.log(`Activate first event`)
    }

    function secondEvent() {
        console.log('Activate second event')
    }

    return(
        <div>
            <p>Click to trigger event:</p>
            <Button event={firstEvent} text="First Event"/>
            <Button event={secondEvent} text="Second Event"/>
        </div>
    )
}

export default Event