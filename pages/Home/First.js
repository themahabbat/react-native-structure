import React, { useEffect, useContext } from 'react'

import { MainContext } from '../../context'

import { Text, Button, Header, ViewContainer, Icon, Touchable } from '../../components'
import styled from 'styled-components'

import { config, colors } from '../../constants'


export default function Page(props) {
    const { navigation } = props

    const { _state, _setState, _lang } = useContext(MainContext)

    return (
        <ViewContainer statusBarColor="#fff">



            <Header>

                <Header.Left>

                    <Header.Item>
                        <Button onPress={() => alert('Left')}>
                            <Icon name="md-home" size={24} />
                        </Button>
                    </Header.Item>

                </Header.Left>


                <Header.Center>

                    <Header.Item>
                        <Button onPress={() => alert('Title Clicked')}>
                            <Header.Title>{config.appName}</Header.Title>
                        </Button>
                    </Header.Item>

                    <Header.SubTitle>Subtitle</Header.SubTitle>

                </Header.Center>



                <Header.Right>

                    <Header.Item>
                        <Button onPress={() => alert('Right')}>
                            <Icon name="md-menu" size={24} />
                        </Button>
                    </Header.Item>

                </Header.Right>

            </Header>





            <Content>

                <Text xlarge>Home Screen</Text>

                <Text light style={{ marginVertical: 15 }}>
                    {_state.authToken ? (
                        `Token: ${_state.authToken}`
                    ) : (
                            `Not logged in!`
                        )}
                </Text>

                {!_state.authToken && (
                    <Button
                        style={{ marginTop: 10 }}
                        color="red"
                        onPress={() => _setState({ authToken: 'dsGrE0qUZQHeEfXTUWhw' })}>
                        <Text large color="white">
                            LOG IN
                    </Text>
                    </Button>
                )}


                <Button
                    style={{ marginTop: 10 }}
                    color="primary"
                    onPress={() => navigation.navigate('Home_Second')}>
                    <Text large color="white">
                        Go to Second Screen
                        </Text>
                </Button>


            </Content>





        </ViewContainer >
    );


}

const Content = styled.View`
    flex:1;
    background: ${colors.bg};
    align-items: center;
    justify-content: center;
`
