import { NavigationActions } from "react-navigation"

let _navigator = "this"

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef
}

/**
 * Navigate
 * @param routeName
 * @param params
 * @param key
 */
function navigate(routeName, params = {}, key = false) {
    const navigateObj = {
        routeName,
        params
    }

    _navigator.dispatch(
        NavigationActions.navigate(key ? ({
            ...navigateObj,
            key
        }) : navigateObj)
    )
}

function back() {

    _navigator.dispatch(
        NavigationActions.back()
    )
}

// add other navigation functions that you need and export them

export default {
    navigate,
    setTopLevelNavigator,
    back
}