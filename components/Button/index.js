import React from 'react'

import Text from '../Text'
import Touchable from '../Touchable'

import styled from 'styled-components'
import { colors, config } from '../../constants'

export default function Component(props) {

    let style = {
        backgroundColor: props.color ? colors[props.color] : colors.white,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: config.defaultRadius,

        justifyContent: 'center',
        alignItems: 'center'
    }

    if (props.children.length > 1) {
        style.flexDirection = 'row'
    }

    return (
        <Touchable style={style} onPress={props.onPress}>
            {props.children}
        </Touchable>
    )

}
