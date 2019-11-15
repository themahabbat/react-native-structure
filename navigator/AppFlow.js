import React, { useContext, useEffect } from 'react'

import { MainContext } from '../context'

import config from './config'

export default function AppFlow(props) {
    const { navigation } = props

    const { _state } = useContext(MainContext)


    useEffect(() => {
        let route = null

        if (config.hasAuth) {
            if (_state.authToken) route = config.defaultRoute
            else route = config.authRoute
        }
        else route = config.defaultRoute

        navigation.push(route)
    }, [_state.authToken])


    return <React.Fragment />




    //
}
