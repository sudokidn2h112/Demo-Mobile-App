import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, ActivityIndicator} from 'react-native';
import Button from 'react-native-button';

import {Detail} from '../commons/screenNames';

export default class Main extends Component{
    static navigationOptions = ({navigation}) => {
        const {params ={}} = navigation.state;
        let headerTitle = 'Main';
        let headerTitleStyle = {color : 'red'};
        let headerRight = (
                <Button 
                containerStyle={{padding :10, margin:5, borderRadius: 10, backgroundColor:'darkviolet'}} 
                style={{fontSize:15, color:'white'}}
                onPress = {() => {
                    params.onSave()
                }}
                >Save</Button>);
        let headerBackTitle = 'Back';
        return {headerTitle, headerTitleStyle, headerRight, headerBackTitle}
    }
    
    _onSave () {
        if(this.props.navigation.state.params.isSaving){
            return;
        }
       this.props.navigation.setParams({isSaving:true});
       //do sonthing for about 3s
       setInterval(() =>{
        console.log(`I'm finish task about 3s`);
        this.props.navigation.setParams({isSaving:false});
       }, 3000)
    }

    componentDidMount(){
        this.props.navigation.setParams({ onSave : this._onSave.bind(this), isSaving : false});
    }

    render() {
        const {navigation} = this.props;
        let dataSendToDetail = {
            name: 'Stars War',
            releaseYear : 1977
        };
        let mainView = (navigation.state.params && navigation.state.params.isSaving == true) ? <ActivityIndicator /> :
        <View style={styles.container}>
        <Text style={styles.welcome} >
            This is Main Screen
        </Text>          
    </View> 
        return mainView;
    }
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'dodgerblue',
    },
    welcome: {
        fontSize: 20,
        fontWeight : 'bold',
        color: 'white',
        margin: 10,
      },
})