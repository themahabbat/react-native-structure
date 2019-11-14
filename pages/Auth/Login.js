import React, { useEffect, useContext } from 'react'

import { MainContext } from '../../context'

import { Text, Button, Header, ViewContainer, Icon, Touchable } from '../../components'
import styled from 'styled-components'

import { config, colors } from '../../constants'

import { login as loginHelper } from '../../helpers'


export default function Page(props) {
    const { navigation } = props

    const { _state, _setState, _lang } = useContext(MainContext)

    const login = () => {

        loginHelper('testapitoken', () => {
            _setState({ authToken: 'testapitoken' })
        })

    }

    return (
        <ViewContainer statusBarColor="#fff">



            <Header>


                <Header.Center>

                    <Header.Title>{config.appName}</Header.Title>

                </Header.Center>


            </Header>





            <Content>

                <Text xlarge>Login Screen</Text>

                <Button
                    color="blue"
                    style={{ marginVertical: 15 }}
                    onPress={() => login()}>
                    <Text light large color="white">
                        LOG IN
                    </Text>
                </Button>


                <Button
                    style={{ marginTop: 10 }}
                    color="primary"
                    onPress={() => navigation.navigate('Auth_Register')}>
                    <Text large color="white">
                        Don't you have a account? Register now!
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
