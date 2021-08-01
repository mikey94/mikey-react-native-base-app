import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { View, Text } from "react-native"
import HomeView from "./HomeView"

class Home extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <HomeView/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)