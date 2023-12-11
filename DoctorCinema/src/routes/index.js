import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Contacts from '../views/Cinemas';
import Main from '../views/Main';

const Stack = createStackNavigator();

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Cinemas" component={Contacts} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;
