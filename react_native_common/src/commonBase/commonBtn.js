import React from "react";
import { Pressable } from "react-native";

function Btn(props) {
    const {width , height, backgroundColor,lineHeight,textAlign, margin, borderRadius, color, children, onPress} = props

    return (
        <Pressable
            style = {{
                width,
                height,
                backgroundColor,
                lineHeight,
                textAlign,
                margin,
                borderRadius,
                color,
            }}
            onPress = {onPress}
        >
            {children}
        </Pressable>
    )
}

export default Btn
