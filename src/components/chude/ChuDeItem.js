import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight } from 'react-native';
// import flatListData from '../data/flatListData';
// import Swipeout from 'react-native-swipeout';
// import AddModal from './AddModal';
// import EditModal from './EditModal';
// import {getDataFromService} from '../networking/Server';

export default class ChuDeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null,
            numberOfRefresh: 0
        };
    }
    render() {
        const { mItem, itemIndex, chuDeComponent } = this.props;  
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato'                
                    backgroundColor: 'mediumseagreen'
                }}>
                    <Image
                        source={{ uri: mItem.hinhAnh }}
                        style={{ width: 100, height: 100, margin: 5 }}
                    >

                    </Image>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        height: 100
                    }}>
                        <Text style={styles.flatListItem}>{mItem.ten}</Text>
                        <Text style={[styles.flatListItem, { backgroundColor: mItem.mauNen }]}>Đây la màu: {mItem.mauNen}</Text>
                    </View>
                </View>
                <View style={{
                    height: 1,
                    backgroundColor: 'white'
                }}>

                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16
    }
});