import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet} from 'react-native';
import Button from 'react-native-button';

import {ImageLightBox} from '../commons/screenNames';

export default class DetailComponent extends Component{
    static navigationOptions = ({navigation}) => {
        const {params ={}} = navigation.state;
        let headerTitle = 'Detail';
        let headerStyle = {backgroundColor: 'rgb(226,81,65)', borderBottomColor: 'white'}
        let headerTitleStyle = {color : 'yellow'};
        let headerTintColor = 'white';
        return {headerTitle, headerTitleStyle, headerStyle, headerTintColor}
    }
    render() {
        const {navigation} = this.props;
        let dataReceive = navigation.state.params;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} >
                    This is Detail Screen
                </Text>
                <Text >
                   Params from Main screen
                </Text> 
                <Text >
                   Movie's name: {dataReceive.name}
                </Text> 
                <Text >
                   Release year: {dataReceive.releaseYear}
                </Text> 
                <Button containerStyle={{padding :10, margin:20, width:200, height:45, borderRadius: 10, backgroundColor:'darkviolet'}} 
                    style={{fontSize:18, color:'white'}}
                    onPress = {() => {
                        // this.props.navigate(DetailScreen);
                        navigation.navigate(ImageLightBox)
                    }}
                >
                Navigate to Third
                </Button>    
            </View>    
        )
    }
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'mediumseagreen',
    },
    welcome: {
        fontSize: 20,
        fontWeight : 'bold',
        color: 'white',
        margin: 10,
      },
})