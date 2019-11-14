import React from 'react'
import { Text } from 'react-native'

import { config, colors } from '../../constants'

export default function Component(props) {

    let fontFamily = config.defaultFont
    let fontSize = 14

    if (props.small) fontSize = 12
    else if (props.xsmall) fontSize = 10
    else if (props.medium) fontSize = 16
    else if (props.large) fontSize = 18
    else if (props.xlarge) fontSize = 20

    if (props.light) fontFamily = 'Roboto_light'
    else if (props.medium) fontFamily = 'Roboto_medium'
    else if (props.bold) fontFamily = 'Roboto_bold'
    else if (props.black) fontFamily = 'Roboto_black'


    const style = [
        {
            fontFamily,
            fontSize,
            color: props.color ? colors[props.color] : '#000',
        },
        props.style
    ]

    return <Text style={style}>{props.children}</Text>
}
