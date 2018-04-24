import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

const App = () => (
    <Header headerText={'Music'}/>
);

AppRegistry.registerComponent('MusicCollectionApp', () => App);