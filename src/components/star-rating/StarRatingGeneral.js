import React, { Component } from 'react';
import StarRating from 'react-native-star-rating';
export default class StarRatingGeneral extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      starCount: this.props.rate
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    const fullStar = require('../../../images/star_color.png');
    const emptyStar = require('../../../images/empty_star.png');
    return (
      <StarRating
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        fullStar={fullStar}
        emptyStar={emptyStar}
        starSize = {20}
        starPadding={10}
      />
    );
  }
}
