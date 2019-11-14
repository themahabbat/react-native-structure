import React from 'react'
import { Text } from 'react-native'

import { config } from '../../constants'

export default function Component(props) {

    const style = [
        { fontFamily: config.defaultFont },
        props.style
    ]

    return <Text style={style}>{props.children}</Text>
}
