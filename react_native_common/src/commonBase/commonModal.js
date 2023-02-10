import React from "react"
import {View} from 'react-native'

function Modall(props) {
    const {
        width,
        height,
        backgroundColor,
        borderRadius,
        margin,
        flexDirection,
        justifyContent,
        alignItems,
        color,
        children
    } = props
    return (
        <View
        style = {{
            width,
            height,
            backgroundColor,
            borderRadius,
            margin,
            flexDirection,
            justifyContent,
            alignItems,
            color
        }}
        >
            {children}
        </View>
    )
}

export default Modall