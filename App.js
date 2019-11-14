import React from 'react';
import { Image } from 'react-native'

import * as Font from 'expo-font'
import { Asset } from 'expo-asset'
import { SplashScreen } from 'expo'

import { config, fonts, images as appImages } from './constants'

import { ViewContainer, SplashScreen as SplashScreenView } from './components';

import { MainContextProvider } from './context'

import { NavigationNativeContainer } from '@react-navigation/native';
import AppNavigator from './navigator'

// OPTIMIZE MEMORY USAGE
import { useScreens } from 'react-native-screens';
useScreens()


const { splashScreenTime } = config

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            appReady: false
        }

    }

    async initApp() {
        SplashScreen.hide()

        const cacheImages = Object.keys(appImages).map(key => {
            return Asset.fromModule(appImages[key]).downloadAsync()
        })



        return Promise.all([
            cacheImages,

            Font.loadAsync({
                ...fonts
            })
        ])
    }

    async componentDidMount() {
        // console.disableYellowBox = true

        await this.initApp()
    }


    render() {
        if (!this.state.appReady) return (
            <SplashScreenView
                onLoad={() => {
                    setTimeout(() => {
                        this.setState({ appReady: true })
                    }, splashScreenTime)
                }}
            />
        )

        if (this.state.appReady) return (
            <MainContextProvider>

                <NavigationNativeContainer>
                    <AppNavigator />
                </NavigationNativeContainer>

            </MainContextProvider>
        )
    }

}

export default App
