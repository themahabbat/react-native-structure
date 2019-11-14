import React from 'react'
import { Image } from 'react-native'

import styled from 'styled-components'

import { images, layout } from '../../constants'

export default function Component(props) {

    let style = {
        flex: 1,
        width: layout.screenWidth,
        height: layout.screenHeight,
        resizeMode: "contain"
    }

    return (
        <SplashScreenContainer>
            <Image source={images.logo} onLoad={props.onLoad} style={style} />
        </SplashScreenContainer>
    )
}


const SplashScreenContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`
