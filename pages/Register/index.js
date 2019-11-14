import React from 'react'
import { TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';


import styled from 'styled-components'

import { Text, Button, Header, ViewContainer, Icon } from '../../components'

const Content = styled.View`
    flex:1;
    background: dodgerblue;
    align-items: center;
    justify-content: center;
`

function HomeScreen(props) {
    const { navigation } = props

    return (
        <ViewContainer statusBarColor="#fff">

            <Header>

                <Header.Left>
                    <Header.Item>
                        <Icon name="ios-aperture" />
                    </Header.Item>

                    <Header.Item>
                        <Button>
                            <Text>Back</Text>
                        </Button>
                    </Header.Item>

                </Header.Left>

                <Header.Center>
                    <Header.Title>Home</Header.Title>
                    <Header.SubTitle>Screen</Header.SubTitle>
                </Header.Center>

                <Header.Right>
                    <Header.Item>
                        <Icon name="ios-aperture" />
                    </Header.Item>

                    <Header.Item>
                        <Icon name="ios-attach" />
                    </Header.Item>
                </Header.Right>

            </Header>

            <Content>

                <Text>Home Screen</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Test')}>
                    <Text>TEST</Text>
                </TouchableOpacity>
            </Content>

        </ViewContainer>
    );


}


function TestScreen(props) {
    return (
        <ViewContainer>

            <Header>

                <Header.Left>
                    <Header.Item onPress={() => props.navigation.goBack()}>
                        <Icon name="ios-arrow-back" />
                    </Header.Item>

                    <Header.Item>
                        <Icon name="ios-attach" />
                    </Header.Item>
                </Header.Left>

                <Header.Center>
                    <Header.Title>Test</Header.Title>
                    <Header.SubTitle>Screen</Header.SubTitle>
                </Header.Center>

                <Header.Right>
                    <Header.Item>
                        <Icon name="ios-aperture" />
                    </Header.Item>

                    <Header.Item>
                        <Icon name="ios-attach" />
                    </Header.Item>
                </Header.Right>

            </Header>

            <Content>

                <Text>Test Screen</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Test')}>
                    <Text>TEST</Text>
                </TouchableOpacity>
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


    return (
        <Stack.Navigator initialRouteName="Home">
            {RegisterRoutes.map((route, index) => {
                return <Stack.Screen
                    key={index}
                    name={route.name}
                    component={route.component}
                    options={{ header: () => null }}
                />
            })}
        </Stack.Navigator>
    )




    //
}

export default Register
