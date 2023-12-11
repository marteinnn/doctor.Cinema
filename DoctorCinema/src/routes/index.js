import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Cinemas from '../views/Cinemas';
import CinemaInfo from '../views/CinemaInfo';
import Main from '../views/Main';

const Stack = createStackNavigator();

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Cinemas" component={Cinemas} />
            <Stack.Screen name="CinemaInfo" component={CinemaInfo} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;
