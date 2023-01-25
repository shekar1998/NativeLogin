import {View, StyleSheet, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import color from '../../color/color';
import {CameraScreen} from './CameraScreen';

type Props = {};
const {width, height} = Dimensions.get('window');
const bgcolor = color.light;
const data = [
  {
    photoURL:
      'https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg?region=0,0,640,480',
  },
  {
    photoURL:
      'https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg?region=0,0,640,480',
  },
  {
    photoURL:
      'https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg?region=0,0,640,480',
  },
  {
    photoURL:
      'https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg?region=0,0,640,480',
  },
  {
    photoURL:
      'https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg?region=0,0,640,480',
  },
  {
    photoURL:
      'https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg?region=0,0,640,480',
  },
  {
    photoURL:
      'https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg?region=0,0,640,480',
  },
  {
    photoURL:
      'https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg?region=0,0,640,480',
  },
  {
    photoURL:
      'https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg?region=0,0,640,480',
  },
  {
    photoURL:
      'https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg?region=0,0,640,480',
  },
  {
    photoURL:
      'https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg?region=0,0,640,480',
  },
  {
    photoURL:
      'https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg?region=0,0,640,480',
  },
  {
    photoURL:
      'https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg?region=0,0,640,480',
  },
  {
    photoURL:
      'https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg?region=0,0,640,480',
  },
  {
    photoURL:
      'https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg?region=0,0,640,480',
  },
  {
    photoURL:
      'https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg?region=0,0,640,480',
  },
];
const Home = (props: Props) => {
  const [User, setUser] = useState([]);

  useEffect(() => {
    const user: any = auth().currentUser;

    if (user) {
      setUser(user);
      console.log('User email: ', user);
    }
  }, []);

  return (
    <View style={styles.container}>
      <CameraScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   flex:1,
   color:'red'
  },

  numText: {
    elevation: 5,
  },
});

export default Home;
