import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants';

export default function Component(props) {

    let color = colors.black
    let margin = 8

    if (props.color) color = colors[props.color]

    let style = [
        {
            position: 'relative',
            top: 0.8,

            marginLeft: props.rightButton ? margin : 0,
            marginRight: props.leftButton ? margin : 0,
        },
        props.style
    ]

    return <Ionicons
        name={props.name}
        size={props.size || 26}
        style={style}
        color={color}
    />

}
