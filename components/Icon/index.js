import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Component(props) {

    return (
        <Ionicons name={props.name} size={props.size || 26} color={props.color || '#080808'} />
    )

}
