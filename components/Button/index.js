import React from 'react'

import Text from '../Text'
import Touchable from '../Touchable'

import styled from 'styled-components'
import { colors, config } from '../../constants'

export default function Component(props) {

    const hasPadding = props.color ? true : false

    let style = [
        {
            backgroundColor: props.color ? colors[props.color] : colors.white,
            paddingHorizontal: hasPadding ? 15 : 0,
            paddingVertical: hasPadding ? 10 : 0,
            borderRadius: config.defaultRadius,

            justifyContent: 'center',
            alignItems: 'center'
        },
        props.style
    ]

    if (props.children.length > 1) {
        style.flexDirection = 'row'
    }

    return (
        <Touchable style={style} onPress={props.onPress}>
            {props.children}
        </Touchable>
    )

}
