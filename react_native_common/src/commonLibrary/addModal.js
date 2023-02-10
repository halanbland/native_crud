import Modall from '../commonBase/commonModal'

function AddModal(props) {
    return(
        <Modall
        width= {260}
        height= {160}
        backgroundColor= "#23374f"
        borderRadius= {20}
        margin= "auto"
        flexDirection= 'column'
        justifyContent= "space-around"
        alignItems= 'center'
        >{props.children}</Modall> 
    )
}

export default AddModal