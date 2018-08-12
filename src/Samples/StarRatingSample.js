import React from 'react';
import StarRating from 'components/StarRating';

export default class StarRatingSample extends React.Component {
  state = {
    feedback: ""
  }
  onClick(id, value) {
    this.setState({ feedback: `value is ${value} from ${id}` })
  }
  render() {
    return (
      <div>
        <StarRating id="a" stars={3.7} showLabel OnValueChanged={(...arg) => this.onClick(...arg)}></StarRating>
        <StarRating id="b" stars={3.2} editable={false}></StarRating>
        <StarRating id="c" stars={3.5} style={{ fontSize: "2em" }} OnValueChanged={(...arg) => this.onClick(...arg)}></StarRating>
        <span>Feedback: {this.state.feedback}</span>
      </div>

    );
  }
}
