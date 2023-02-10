import Inpt from "../commonBase/commonInput.js";

function AddInpt(props) {
    const {onChangeText, value} = props
    return (
        <Inpt
            height= {40}
            borderWidth= {1}
            borderRadius= {8}
            padding= {10}
            marginTop= {20}
            maxWidth= {200}
            borderColor= "white"
            backgroundColor = 'white'
            onChangeText = {onChangeText}
            value = {value}
        />
    )
}

export default AddInpt