import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import firebaseSDK from '../../firebase/firebaseSDK';

export default class Login extends React.Component {
  state = {
    name: 'Alice',
    email: 'linh@gmail.com',
    password: '123456',
    avatar: '',
  };

  onPressLogin = async () => {
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      avatar: this.state.avatar,
    };

    const response = firebaseSDK.login(
      user,
      this.loginSuccess,
      this.loginFailed,
    );
  };

  loginSuccess = () => {
    console.log('login successful, navigate to chat.');
    this.props.navigation.navigate('Chat', {
      name: this.state.name,
      email: this.state.email,
      avatar: this.state.avatar,
    });
  };

  loginFailed = () => {
    alert('Login failure. Please tried again.');
  };

  onChangeTextEmail = (email) => this.setState({email});
  onChangeTextPassword = (password) => this.setState({password});

  render() {
    const {email, password} = this.state;
    return (
      <View>
        <Text style={styles.title}>Email</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="yourmail@gmail.com"
          onChangeText={this.onChangeTextEmail}
          value={email}
        />
        <Text style={styles.title}>Password</Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={this.onChangeTextPassword}
          value={password}
        />
        <Button
          title="Login"
          style={styles.buttonText}
          onPress={this.onPressLogin}
        />

        <Button
          title="Signup"
          style={styles.buttonText}
          onPress={() => this.props.navigation.navigate('Signup')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 16,
    marginLeft: 16,
    fontSize: 16,
  },
  nameInput: {
    height: 40,
    margin: 16,
    paddingHorizontal: 16,
    borderColor: '#111111',
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 42,
  },
});
