import PropTypes from 'prop-types'

function Item({brand, launch}){
    return(
        <>
            <li>
                {brand} - {launch}
            </li>
        </>
    )
}


Item.propTypes = {
    brand: PropTypes.string.isRequired,
    launch: PropTypes.number,
}

Item.defaultProps = {
    brand: 'Required',
    launch: 0,
}
export default Item