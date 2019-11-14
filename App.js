import React from 'react';

import * as Font from 'expo-font'
import { Asset } from 'expo-asset'
import { SplashScreen } from 'expo'

import { config, images as appImages } from './constants'

import { Ionicons } from '@expo/vector-icons';
import { ViewContainer, SplashScreen as SplashScreenView } from './components';

import { MainContextProvider } from './context'

import { NavigationNativeContainer } from '@react-navigation/native';
import Register from './pages/Register'

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

        const images = Object.keys(appImages).map(key => appImages[key])

        const cacheImages = images.map(image => {
            return Asset.fromModule(image).downloadAsync()
        })

        return Promise.all([
            cacheImages,

            Font.loadAsync({
                'Roboto': require('native-base/Fonts/Roboto.ttf'),
                'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
                ...Ionicons.font,
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
                    <Register />
                </NavigationNativeContainer>

            </MainContextProvider>
        )
    }

}

export default App
