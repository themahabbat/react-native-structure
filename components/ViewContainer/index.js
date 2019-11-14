import React from 'react'
import { View, Platform } from 'react-native'

import ExpoConstants from 'expo-constants';

import styled from 'styled-components'



const StatusBar = props => (
    <View
        style={{
            height: ExpoConstants.statusBarHeight,
            backgroundColor: props.color || '#fff'
        }}
    />
)


export default function Component(props) {

    return <ViewContainer>
        <StatusBar color={props.statusBarColor || '#fff'} />
        {props.children}
    </ViewContainer>

}



const ViewContainer = styled.View`
    flex: 1;
    position: relative;
`
