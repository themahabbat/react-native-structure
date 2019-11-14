import React, { useContext, useEffect } from 'react'
import { Platform } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import { MainContext } from '../../context'

import styled from 'styled-components'

import { Text, Button, Header, ViewContainer, Icon, Touchable } from '../../components'

const Content = styled.View`
    flex:1;
    background: red;
    align-items: center;
    justify-content: center;
`

function HomeScreen(props) {
    const { navigation } = props

    const { _state, _setState, _lang } = useContext(MainContext)

    useEffect(() => {
        _setState({ authToken: 123 })
    }, [])

    return (
        <ViewContainer statusBarColor="#fff">

            <Header>

                <Header.Left>

                    <Header.Item>
                        <Button onPress={() => alert('Left')}>
                            <Icon name="ios-arrow-back" size={24} />
                        </Button>
                    </Header.Item>

                </Header.Left>

                <Header.Center>
                    {/* <Header.Title>Home</Header.Title> */}
                    <Header.Logo />
                </Header.Center>

                <Header.Right>

                    <Header.Item>
                        <Button onPress={() => alert('Right')}>
                            <Icon name="ios-arrow-forward" size={18} />
                        </Button>
                    </Header.Item>

                </Header.Right>

            </Header>

            <Content>

                <Text>Home Screen</Text>
                <Touchable onPress={() => navigation.navigate('Test')}>
                    <Text>TEST</Text>
                </Touchable>
            </Content>

        </ViewContainer>
    );


}


function TestScreen(props) {
    const { navigation } = props

    const { _state, _setState, _lang } = useContext(MainContext)

    return (
        <ViewContainer>

            <Header>

                <Header.Left>

                    <Header.Item>
                        <Button onPress={() => navigation.goBack()}>
                            <Icon name="ios-arrow-back" size={24} />
                        </Button>
                    </Header.Item>

                </Header.Left>

                <Header.Center>
                    <Header.Title>Home</Header.Title>
                </Header.Center>

                <Header.Right>

                    <Header.Item>
                        <Button onPress={() => alert('Right')}>
                            <Icon name="ios-arrow-forward" size={18} />
                        </Button>
                    </Header.Item>

                </Header.Right>

            </Header>

            <Content>

                <Text>Test Screen</Text>
                <Touchable onPress={() => navigation.navigate('Test')}>
                    <Text>TEST</Text>
                </Touchable>
            </Content>

        </ViewContainer>
    );
}

const Stack = createStackNavigator()



const Register = props => {

    const RegisterRoutes = [
        {
            name: "Home",
            component: HomeScreen,
        },
        {
            name: "Test",
            component: TestScreen
        }
    ]

    const navigationMode = Platform.OS === 'ios' ? 'card' : 'modal'

    return (
        <Stack.Navigator
            initialRouteName="Home"
            headerMode="none"
            mode={navigationMode}>
            {RegisterRoutes.map((route, index) => {
                return <Stack.Screen
                    key={index}
                    name={route.name}
                    component={route.component}
                />
            })}
        </Stack.Navigator>
    )




    //
}

export default Register
