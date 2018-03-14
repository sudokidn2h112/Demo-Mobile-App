import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight,TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-elements';
// import StarRatingGeneral from '../star-rating/StarRatingGeneral';
// import Swipeout from 'react-native-swipeout';
// import AddModal from './AddModal';
// import EditModal from './EditModal';
// import {getDataFromService} from '../networking/Server';

export default class YKienItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null,
            numberOfRefresh: 0,
            starCount: this.props.mItem.rate
        };
    }
    
    ratingCompleted(rating) {
        this.setState({ starCount: rating})
      }

    render() {
        const { mItem, itemIndex, yKienComponent } = this.props; 
        const starColor = require('../../../images/star_color.png')
        let urlImage = "";
        const imageURI = (mItem) => {
            let url = mItem.hinhAnh;
            if(url.length > 0 && url != null){
                let urlImg = url.substring(2, url.length );
                let tempUrl = urlImg.replace("dichvucong.dtt","danang.gov");
                urlImage = tempUrl.replace(".egov","").split("?");
                console.log(`url: ${urlImage[0]}`)
                return urlImage[0];
            }else{
                return "https://facebook.github.io/react/logo-og.png"
            }
            
        };
        return (
            <View style={{flex:1, flexDirection:'row'}}>
                <View style={{flex:2, flexDirection :'column'}}>
                    <Image 
                        source={{uri: imageURI(mItem)}}
                        style={{ height:120, width:145}}
                    />
                    <Text style={{width:145, backgroundColor:mItem.mauNen, textAlign:'center', color:'white'}}>{mItem.tenCoQuan}</Text>
                </View>
                <View style={{flex:3, flexDirection :'column', paddingLeft:10}}>
                    <View style={{flex:2}}>
                        <TouchableOpacity 
                            style={{ marginTop:10}} 
                            onPress={()=>{
                                nav.navigate(Detail)
                                }}>
                            <Text style={{fontWeight:'bold', fontSize:15}}>{mItem.tenChuDe}</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize:13}}>{mItem.thoiGianDienRa} {mItem.ngayDienRa}</Text>
                    </View>
                    <View style={{ flexDirection:'column', justifyContent:'flex-end', alignItems:'flex-start'}}>
                        <View style={{ justifyContent:'center'}}>
                        <Rating
                            type="star"
                            // ratingImage={starColor}
                            ratingCount={5}
                            ratingColor ={'white'}
                            fractions={0.5}
                            startingValue={this.state.starCount}
                            imageSize={20}
                            onFinishRating={ (rating) => this.ratingCompleted(rating)}
                            style={{ paddingVertical: 10 }}
                            />
                        </View>       
                        <View style={{flexDirection: 'row', flex:1, justifyContent:'flex-end'}}>
                            <View style={{flex:1, flexDirection:'row'}}>
                                <Image 
                                    source={require('../../../images/comment.png')}
                                    style={{width:15, height:15, marginRight:5, tintColor:'#92a3bf'}}
                                />
                                <Text style={{fontSize:13}}>{mItem.binhLuan} Bình luận</Text>
                            </View>
                            <View style={{flex:1, flexDirection:'row'}}>
                                <Image 
                                    source={require('../../../images/heart.png')}
                                    style={{width:15, height:15, marginRight:5, tintColor:'red'}}
                                />
                                <Text style={{fontSize:13, flex:1}}>{mItem.quanTam} Quan tâm</Text>
                            </View>
                        </View>
                    </View>
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