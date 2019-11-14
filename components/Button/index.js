import React from 'react'

import Touchable from '../Touchable'

import styled from 'styled-components'
import { colors, config } from '../../constants'

export default function Component(props) {

    let style = {
        backgroundColor: colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: config.defaultRadius,
    }

    console.log(props.children.length)

    return (
        <Touchable style={style} onPress={props.onPress}>
            {props.children}
        </Touchable>
    )

}
