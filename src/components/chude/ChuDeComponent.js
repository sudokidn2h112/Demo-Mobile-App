import React, { Component } from 'react';
import Button from 'react-native-button';
import FlatListItem from './FlatListItem';
import EditModal from './EditModal';
import ChuDeItem from './ChuDeItem';
import {
    Text, View, Image, Alert, Platform, TextInput, FlatList, ActivityIndicator, RefreshControl
} from 'react-native';

export default class ChuDeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            refreshing: false,
        });
    }
    // showRefresh = () => {
    //     this.props.onFetchChuDes('asc');
    // }
    componentWillMount() {
        // this.setState({refreshing : true});
        this.props.onFetchChuDes('asc');
        // alert(`${JSON.stringify(this.props.listChuDes)}`)
        // this.setState({refreshing : false});
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             isLoadding: false
    //         })
    //     }, 500);
    // }
    renderItem = ({ item, index }) => {
        return <ChuDeItem mItem={item} itemIndex={index} chuDeComponent={this} />
    }
    render() {

        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <FlatList
                    data={this.props.listChuDes}
                    keyExtractor={(item) => item.id}
                    renderItem={this.renderItem}
                    extraData={this.props.listChuDes}
                // refreshControl = {
                //     <RefreshControl 
                //         refreshing={this.state.refreshing}
                //         onRefresh = {this.showRefresh}
                //     />
                // }
                />
                {/* <Text style={{ margin: 10, fontWeight: 'bold', color: 'forestgreen', fontSize: 20 }}>
                    Chủ đề Component -Góp ý
                </Text>
                <Text style={{ margin: 10, color: 'black', fontSize: 20 }}>
                    New movie information
                </Text>
                <View style={{ height: 100, margin: 10 }}>
                    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({ movieName: text })}
                        value={this.state.movieName}
                        placeholder='Enter new movie name'
                        underlineColorAndroid="transparent"
                    />
                    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1, width: 120 }}
                        onChangeText={(text) => this.setState({ releaseYear: text })}
                        value={this.state.releaseYear}
                        placeholder='Release year'
                        keyboardType='numeric'
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={{ height: 70, flexDirection: 'row' }}>
                    <Button
                        containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                        style={{ fontSize: 18, color: 'white' }}
                        onPress={() => {
                            this.props.onFetchChuDes('asc');
                        }}>
                        Fetch Chủ Đề
                    </Button>
                    <Button
                        containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                        style={{ fontSize: 18, color: 'white' }}
                        onPress={() => {
                            const { movieName, releaseYear } = this.state;
                            if (!movieName.length || !releaseYear.length) {
                                alert('You must enter movie name and release Year');
                                return;
                            }
                            // this.props.onAddMovie({ name: movieName, releaseYear: releaseYear });
                        }}>
                        Add Movie
                    </Button>
                </View> */}
                {/* {this.state.isLoadding ? (<View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}><ActivityIndicator /></View>) : */}
                {/* <FlatList
                        data={this.props.listChuDes}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => <FlatListItem {...item} itemIndex={index} chuDeComponent={this} />
                        }
                        extraData={this.props.listChuDes}
                    /> */}

                {/* }  */}

                {/* <EditModal ref={'editModal'} chuDeComponent={this} /> */}
            </View>);
    }
}