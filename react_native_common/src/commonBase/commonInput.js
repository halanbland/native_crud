import react from 'react'
import {TextInput} from 'react-native'

function Inpt(props) {
    const {
    height,
    borderWidth,
    borderRadius,
    padding,
    marginTop,
    maxWidth,
    borderColor,
    backgroundColor,
    onChangeText,
    value
    } = props

    return (
        <TextInput
        onChangeText = {onChangeText}
        value = {value}
        style = {{
            height,
            borderWidth,
            borderRadius,
            padding,
            marginTop,
            maxWidth,
            borderColor,
            backgroundColor,
            
        }}
        />
    )
}
export default Inpt