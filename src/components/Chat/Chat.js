import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat'; // 0.3.0

import firebaseSDK from '../../firebase/firebaseSDK';

export default class Chat extends React.Component {
  // static navigationOptions = ({navigation}) => ({
  //   title: (navigation.state.params || {}).name || 'Chat!',
  // });

  state = {
    messages: [],
  };

  get user() {
    const {name, email, avatar} = this.props.route.params;
    return {
      name: name,
      email: email,
      avatar: avatar,
      id: firebaseSDK.uid,
      _id: firebaseSDK.uid,
    };
  }

  componentDidMount() {
    firebaseSDK.refOn((message) =>
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, message),
      })),
    );
  }
  componentWillUnmount() {
    firebaseSDK.refOff();
  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={firebaseSDK.send}
        user={this.user}
      />
    );
  }
}
