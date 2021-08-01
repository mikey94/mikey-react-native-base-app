import React from "react"
import NavigationStack from "./NavigationStack"
import NavigationService from "./NavigationService"
const AppNavigation = () =>
    <NavigationStack
        ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef)
        }}
    />

export default AppNavigation