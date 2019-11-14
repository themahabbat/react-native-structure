import React from 'react'

import { getLang } from '../helpers';

export const MainContext = React.createContext()

export class MainContextProvider extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            lang: null,
            authToken: null,
        }
    }


    render() {
        return (
            <MainContext.Provider
                value={{
                    _state: this.state,
                    _setState: (obj) => this.setState(obj),
                    _lang: getLang(this.state),
                }}
            >
                {this.props.children}
            </MainContext.Provider>
        )
    }
}

//

export const withMainContext = ChildComponent => props => (
    <MainContext.Consumer>
        {
            context => <ChildComponent {...props} MainContext={context} />
        }
    </MainContext.Consumer>
)
