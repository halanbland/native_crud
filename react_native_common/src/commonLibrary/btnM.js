import Btn from '../commonBase/commonBtn.js'

function BtnM(props) {
    const {onPress, children} = props
    return(
        <Btn
        width= {70}
        height= {30}
        backgroundColor= "#07c3ff"
        lineHeight= {30}
        textAlign= "center"
        margin= {8}
        borderRadius= {8}
        color= "white"
        onPress = {onPress}
        >
            {children}
        </Btn>
    )
}

export default BtnM
