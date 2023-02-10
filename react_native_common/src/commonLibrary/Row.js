import Modall from '../commonBase/commonModal.js'

function Row(props) {
    return(
        <Modall
        width= "100%"
        backgroundColor= "#23374f"
        borderRadius= {20}
        flexDirection= 'row'
        justifyContent= "space-around"
        alignItems= 'center'
        >{props.children}</Modall> 
    )
}

export default Row