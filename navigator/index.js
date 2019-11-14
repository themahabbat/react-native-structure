import React, { useContext, useEffect } from 'react'
import { Platform } from 'react-native';

import routes from './routes'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()


export default function AppNavigator() {

    const navigationMode = Platform.OS === 'ios' ? 'card' : 'modal'

    return (
        <Stack.Navigator
            initialRouteName="First"
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




    //
}
