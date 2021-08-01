import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { View, Text } from "react-native"
import LoginView from "./LoginView"

class Login extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <LoginView/>
            </View>
        )
    }
}

const mapStateToProps = () => {
    //
}

const mapDispatchToProps = () => {
    //
} 

export default connect(mapStateToProps, mapDispatchToProps)(Login)