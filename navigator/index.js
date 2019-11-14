import React, { useState, useEffect, useContext } from 'react'
import { AsyncStorage, Platform } from 'react-native';

import { MainContext } from '../context'

import { createStackNavigator } from '@react-navigation/stack';

import routes from './routes'

const Stack = createStackNavigator()

export default function AppNavigator() {

    const navigationMode = Platform.OS === 'ios' ? 'card' : 'modal'

    const { _setState } = useContext(MainContext)

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {

        async function initRoute() {

            let token = await AsyncStorage.getItem('@app/authToken')

            if (token && token !== '') {
                // TODO: validate token then
                _setState({ authToken: token })
            }
            setLoaded(true)

        }

        initRoute()

    }, [])

    if (loaded) return (
        <Stack.Navigator
            initialRouteName="AppFlow"
            headerMode="none"
            mode={navigationMode}>
            {Object.keys(routes).map((name, index) => {
                return <Stack.Screen
                    key={index}
                    name={name}
                    component={routes[name]}
                />
            })}
        </Stack.Navigator>
    )
    else return <React.Fragment />


    //
}
