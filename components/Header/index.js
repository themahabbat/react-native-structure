import React from 'react'

import { View, Image } from 'react-native'

import Text from '../Text'

import { layout, config, images } from '../../constants'

import styled from 'styled-components'


export function Item(props) {

    const style = {
        marginHorizontal: 6
    }

    return <View style={style}>
        {props.children}
    </View>

}



export function Left(props) {

    let style = {
        position: 'absolute',
        left: 5
    }

    if (props.children.length > 1) {
        style.flexDirection = 'row'
        style.justifyContent = 'space-between'
        style.alignItems = 'center'
    }

    return <View style={style}>{props.children}</View>

}



export function Logo(props) {

    const style = {
        maxWidth: 120,
        height: config.headerHeight - 10,
        resizeMode: "contain"
    }

    return <Image source={images.logo} style={style} />
}

export function Title(props) {

    const style = {
        fontFamily: 'Roboto_medium',
        fontSize: 18,
    }

    return <Text style={style}>{props.children}</Text>
}

export function SubTitle(props) {

    const style = {}

    return <Text style={style}>{props.children}</Text>
}


export function Center(props) {

    const style = {
        position: 'absolute',
        left: layout.screenWidth / 2 - 75,
        alignItems: 'center',
        width: 150,
    }

    return <View style={style}>
        {props.children}
    </View>

}

export function Right(props) {

    let style = {
        position: 'absolute',
        right: 5
    }

    if (props.children.length > 1) {
        style.flexDirection = 'row'
        style.justifyContent = 'space-between'
        style.alignItems = 'center'
    }

    return <View style={style}>{props.children}</View>

}


export default function Component(props) {

    return <Header>
        {props.children}
    </Header>

}
Component.Left = Left
Component.Right = Right
Component.Center = Center

Component.Item = Item

Component.Logo = Logo
Component.Title = Title
Component.SubTitle = SubTitle



const Header = styled.View`
    position: relative;
    background: ${props => props.bg || '#fff'};
    height: ${config.headerHeight}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
