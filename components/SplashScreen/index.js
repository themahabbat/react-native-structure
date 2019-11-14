import React from 'react'
import { Image } from 'react-native'

import styled from 'styled-components'

import { images } from '../../constants'

export default function Component(props) {

    return (
        <SplashScreenContainer>
            <Image source={images.logo} onLoad={props.onLoad} />
        </SplashScreenContainer>
    )
}


const SplashScreenContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`
