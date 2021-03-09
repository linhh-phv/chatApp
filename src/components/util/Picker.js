// import {arrayIsEmpty} from '@dungdang/react-native-basic/src/Functions';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Button,
  Alert,
  FlatList,
  Platform,
} from 'react-native';
import {fonts, colors} from '../../styles/theme/appTheme';
import Sizes from '../../styles/Size';
import {get, values, toArray, isEmpty} from 'lodash';

const Picker = (props) => {
  const {show, onShow, data} = props;

  const height = new Animated.Value(0);
  const modalShowTime = 100;

  // const showModal = () => {
  //   Animated.timing(height, {
  //     toValue: 1,
  //     duration: modalShowTime,
  //     useNativeDriver: false,
  //   }).start();
  // };

  // const hideModal = () => {
  //   Animated.timing(height, {
  //     toValue: 0,
  //     duration: modalShowTime,
  //     useNativeDriver: false,
  //   }).start();
  // };

  // useEffect(() => {
  //   if (show) {
  //     showModal();
  //   } else {
  //     hideModal();
  //   }
  // }, [show]);

  const SeparatorComponent = () => {
    return (
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: 'rgba(0,0,0,0.1)',
        }}
      />
    );
  };
  const handlePicker = async (func) => {
    await func();
    // await onShow(false);
  };
  return (
    <SafeAreaView style={{}}>
      <Modal
        visible={show}
        transparent={true}
        style={{flex: 1}}
        animationType="fade"
        statusBarTranslucent={true}>
        <TouchableWithoutFeedback
          style={{}}
          onPress={() => {
            console.log('outside');
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
            }}>
            <TouchableWithoutFeedback>
              <Animated.View style={[styles.modal, {height: 200}]}>
                <View>
                  <View style={{borderRadius: 10, backgroundColor: '#fff'}}>
                    <FlatList
                      ItemSeparatorComponent={() => {
                        return <SeparatorComponent />;
                      }}
                      data={data}
                      renderItem={({item}) => {
                        return (
                          <View style={styles.center}>
                            <TouchableOpacity
                              onPress={() => handlePicker(item.func)}
                              style={[styles.center, styles.basicButton]}>
                              <Text style={{fontSize: 20, color: 'blue'}}>
                                {item.title}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        );
                      }}
                      keyExtractor={(item) => item.id.toString()}
                    />
                  </View>
                </View>
                <View style={[styles.center, {marginTop: 10}]}>
                  <TouchableOpacity
                    onPress={() => onShow(false)}
                    style={[styles.basicButton, styles.center]}>
                    <Text style={{fontSize: 20, color: 'red'}}>Cancel</Text>
                  </TouchableOpacity>
                </View>

                <SafeAreaView />
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

export default Picker;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    padding: 10,
  },
  center: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  basicButton: {
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '100%',
  },
});
