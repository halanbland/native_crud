import Modall from '../commonBase/commonModal.js'

function DelModal(props) {
    return(
        <Modall
        width= {260}
        height= {100}
        backgroundColor= "#23374f"
        borderRadius= {20}
        margin= "auto"
        flexDirection= 'column'
        justifyContent= "space-around"
        alignItems= 'center'
        color = 'white'
        >{props.children}
        </Modall> 
    )
}

export default DelModal