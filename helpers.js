import React, { useState, useEffect, useRef } from 'react';

import { AsyncStorage } from 'react-native'

import { languages } from './localization'
import { config } from './constants'

export function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export async function login(token, callback = null) {

    await AsyncStorage.setItem('@app/authToken', token)

    if (callback) callback()

}

export async function logout(callback = null) {
    await AsyncStorage.removeItem('@app/authToken')

    if (callback) callback()

}


export function getLang(state) {

    const currentLang = state.lang

    if (currentLang && (currentLang in languages)) return languages[currentLang]
    else return languages[languages[0]]

}

export async function setLang(lang, _setState) {

    if (lang in languages) {
        try {
            await AsyncStorage.setItem('@main/lang', lang)
            _setState({ lang })
        } catch (e) {
            throw new Error(e)
        }
    }

}


export function request(type, url, data, token, successCallback = null, errorCallback = null) {
    if (token) axios.defaults.headers.common['Authorization'] = "Bearer " + token;
    axios.defaults.headers.post['Accept'] = 'application/json';

    axios[type](config.apiURL + url, data).then(res => {
        if (successCallback) successCallback(res)
    }).catch(err => {
        if (errorCallback) errorCallback(err)
    })
}
