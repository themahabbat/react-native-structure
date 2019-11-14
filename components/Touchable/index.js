import React from 'react'

import { TouchableOpacity } from 'react-native'
import { config } from '../../constants'

export default function Component({ children, ...rest }) {


    return (
        <TouchableOpacity activeOpacity={config.buttonTapOpacity} {...rest}>
            {children}
        </TouchableOpacity>
    )

}
