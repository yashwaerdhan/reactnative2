import React from "react";
import Homescreen from "./screens/home";
import { createAppsContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack";
import {creatMaterialTopTapNavigator} from "react-navigation-tabs"
import {RFvalue} from "react-native-responsive-fonts"
export default function app({
    return <AppContainer/>
})
const AppTopNavigation=creatMaterialTopTabNavigator({
    RecommendedMovies:{
        sceern:RecommendedMoviesScreen,
        navigationOptions:{
            tabBarLable:"Recommended"
        }
    }
})