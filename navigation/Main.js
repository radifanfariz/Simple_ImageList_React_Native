import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Detail } from '../screens/Detail';

const Mainstack = createStackNavigator();
export const Main = () => (
    <Mainstack.Navigator>
        <Mainstack.Screen name="Home" component={Home} />
        <Mainstack.Screen name="Detail" component={Detail} />
    </Mainstack.Navigator>
)