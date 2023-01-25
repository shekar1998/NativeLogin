import {Image} from 'native-base';
import {InferProps, Requireable} from 'prop-types';
import React, {useState, useCallback, useEffect, useLayoutEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  GiftedChat,
  IMessage,
  InputToolbar,
  InputToolbarProps,
  Send,
} from 'react-native-gifted-chat';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/firestore';

const {width, height} = Dimensions.get('window');

export function CameraScreen() {
  const [messages, setMessages]: any = useState([]);
  const [Typedmessages, setTypedmessages]: any = useState('');
  const [User, setUser]: any = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT',
        createdAt: new Date(),
        quickReplies: {
          type: 'radio', // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: '😋 Yes',
              value: 'yes',
            },
            {
              title: '📷 Yes, let me show you with a picture!',
              value: 'yes_picture',
            },
            {
              title: '😞 Nope. What?',
              value: 'no',
            },
          ],
        },
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
      {
        _id: 2,
        text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
        createdAt: new Date(),
        quickReplies: {
          type: 'checkbox', // or 'radio',
          values: [
            {
              title: 'Yes',
              value: 'yes',
            },
            {
              title: 'Yes, let me show you with a picture!',
              value: 'yes_picture',
            },
            {
              title: 'Nope. What?',
              value: 'no',
            },
          ],
        },
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
    ]);
    const user: any = auth().currentUser;
    setUser(user);
    console.log('user', user);
    const users = auth().isSignInWithEmailLink('shekar6803@gmail.com').valueOf();
    console.log('users', users)
    
    //   .auth()
    //   .listUsers(4)
    //   .then((res: any) => console.log('res', res));
    // const queryedData: any = firebase()
    //   .collection('ChatDoc')
    //   .orderBy('createdAt', 'desc')
    //   .get()
    //   .then((data: any) => data);
    // const unsubscribe = setMessages(
    //   queryedData._docs.map((doc: any) => ({
    //     _id: doc.data()._id,
    //     createdAt: doc.data().createdAt.toDate(),
    //     text: doc.data().text,
    //     user: doc.data().user,
    //   })),
    // );
    // return () => {
    //   unsubscribe();
    // };
  }, []);

  useLayoutEffect(() => {
    const queryedData = firebase()
      .collection('ChatDoc')
      .orderBy('createdAt', 'desc')
      .get()
      .then((data: any) => data);
    const unsubscribe = firebase()
      .collection('ChatDoc')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot: any) =>
        setMessages(
          snapshot.docs.map((doc: any) => ({
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user,
          })),
        ),
      );
    console.log('queryedData', queryedData);
    return () => {
      unsubscribe();
    };
  }, []);

  const onPressPhoneNumber = () => {};

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages: any) =>
      GiftedChat.append(previousMessages, messages),
    );
    //   firestore()
    // .collection('Users')
    // .add({
    //   name: 'Ada Lovelace',
    //   age: 30,
    // })
    // .then(() => {
    //   console.log('User added!');
    // });
    const {_id, createdAt, text, user} = messages[0];
    const FirstPerson = User.email;
    firebase()
      .collection('ChatDoc')
      .add({_id, createdAt, text, user, FirstPerson});
    // addDoc(collection(db, 'chats'), { _id, createdAt,  text, user });
  }, []);

  const renderSend = (sendProps: any) => {
    if (sendProps.text.trim().length > 0) {
      return (
        <Send {...sendProps} containerStyle={styles.sendStyle}>
          <Image
            alt={'Send Messsage'}
            style={styles.ImageStyle}
            source={require('../../assets/Images/send-message.png')}
          />
        </Send>
      );
    }
    return null;
  };

  const customtInputToolbar = (props: any) => {
    return <InputToolbar {...props} containerStyle={styles.inputContainer} />;
  };

  return (
    <View style={styles.mainContainer}>
      <GiftedChat
        messages={messages}
        textInputProps={{style: {color: 'black', width: width - 40}}}
        onSend={messages => onSend(messages)}
        renderInputToolbar={props => customtInputToolbar(props)}
        user={{
          _id: 1,
        }}
        renderSend={renderSend}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 10,
    fontStyle: 'italic',
    color: '#000',
  },
  ImageStyle: {
    width: 25,
    height: 25,
  },
  sendStyle: {
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    marginBottom: 20,
    color: 'red',
  },
  sendWrapperStyle: {
    flex: 1,
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
  inputContainer: {
    borderRadius: 10,
    width: width - 20,
    marginHorizontal: 10,
  },
});
