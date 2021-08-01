import React from "react"
import { createStackNavigator, createDrawerNavigator, createSwitchNavigator, createAppContainer } from "react-navigation"
import { Image, Dimensions, View } from "react-native"

import LoginScreen from "../features/Login/Login.container"
import HomeScreen from "../features/Home/Home.container"
import AuthLoadingScreen from "../features/AuthLoading/AuthLoading"

const AuthStack = createStackNavigator({
    Login: { 
        screen: LoginScreen, 
        title: "Login", 
        navigationOptions: ({ navigation }) => ({
            //
        }) 
    }
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        //
    })
})

const AppStack = createStackNavigator({
    Home: { 
        screen: HomeScreen, 
        title: "Home",
        navigationOptions: ({ navigation }) => ({
            //
        }) 
    }
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        //
    })
})

const rootNavigator = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
},{
    initialRouteName: "AuthLoading"
})


export default createAppContainer(rootNavigator)