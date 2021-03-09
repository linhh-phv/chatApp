// Example of Image Picker in React Native
// https://aboutreact.com/example-of-image-picker-in-react-native/

// Import React
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  Linking,
} from 'react-native';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Picker from './Picker';

const ImagePickerComponent = () => {
  const [filePath, setFilePath] = useState({});
  const [show, onShow] = useState(false);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const handlePicker = (response) => {
    if (response.didCancel) {
      console.log('User cancelled camera picker');
      onShow(false);
      return;
    } else if (response.errorCode == 'camera_unavailable') {
      console.log('Camera not available on device');
      return;
    } else if (response.errorCode == 'permission') {
      console.log('Permission not satisfied');
      return;
    } else if (response.errorCode == 'others') {
      console.log(response.errorMessage);
      return;
    } else {
      let source = response;
      setFilePath(source);
    }
  };
  const takePhoto = async () => {
    let type = 'photo';
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        handlePicker(response);
      });
    }
  };

  const chooseImage = () => {
    let type = 'photo';
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      handlePicker(response);
    });
  };

  const search = () => {
    console.log('search...');
  };
  const dataCustom = [
    {id: 1, title: 'Take Photo', func: () => takePhoto()},
    {
      id: 2,
      title: 'Choose Image',
      func: () => chooseImage(),
    },
    {id: 3, title: 'Search...', func: () => search()},
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.titleText}>
        Example of Image Picker in React Native
      </Text>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,' + filePath.data,
          }}
          style={styles.imageStyle}
        />
        <Image source={{uri: filePath.uri}} style={styles.imageStyle} />
        <Text style={styles.textStyle}>{filePath.uri}</Text>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.buttonStyle}
          onPress={() => Linking.openURL('app-settings:')}>
          <Text style={styles.textStyle}>setting</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => onShow(true)}>
          <Text style={styles.textStyle}>show</Text>
        </TouchableOpacity>

        <Picker onShow={onShow} show={show} data={dataCustom} />
      </View>
    </SafeAreaView>
  );
};

export default ImagePickerComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  imageStyle: {
    width: 150,
    height: 150,
    margin: 5,
  },
});
