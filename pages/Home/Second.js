import React, { useContext } from 'react'

import { MainContext } from '../../context'

import { Text, Button, Header, ViewContainer, Icon, Touchable } from '../../components'
import styled from 'styled-components'

import { colors } from '../../constants'


export default function Page(props) {
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

            </Header>



            <Content>




                <Text xlarge>Second Screen</Text>

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




            </Content>



        </ViewContainer>
    );
}


const Content = styled.View`
    flex:1;
    background: ${colors.bg};
    align-items: center;
    justify-content: center;
`
