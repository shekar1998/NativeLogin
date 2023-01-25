import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class MessageBubble extends Component {
  render() {
    const {messageObj, position}: any = this.props;
    const timeStr = messageObj.created_at;
    if (position === 'left') {
      let messageText = messageObj.text;
      messageObj &&
        messageObj.assignees &&
        messageObj.assignees.forEach((element: any) => {
          messageText = messageText.replace(
            new RegExp(`@${element.id}`, 'g'),
            `@${element.name.replace(/\s/g, '')}`,
          );
        });
      return (
        <View style={styles.messageContainer}>
          <View style={styles.leftBubble}>
            <View style={styles.leftBubbleContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.msgText}>{messageText}</Text>
                {/* <ParseText textStyle={styles.msgText} text={messageText} /> */}
                <View style={styles.timeContainer}>
                  <Text style={styles.byText} numberOfLines={1}>
                    {messageObj.user.name}
                  </Text>
                  <Text style={styles.badgeIcon}>{'\u2B24'}</Text>
                  <Text style={styles.timeText}>{timeStr}</Text>
                </View>
              </View>
              <View style={styles.leftTriangle} />
            </View>
          </View>
        </View>
      );
    } else {
      let messageText = messageObj.text;
      messageObj &&
        messageObj.assignees &&
        messageObj.assignees.forEach((element:any) => {
          messageText = messageText.replace(
            new RegExp(`@${element.id}`, 'g'),
            `@${element.name.replace(/\s/g, '')}`,
          );
        });
      return (
        <View style={styles.messageContainer}>
          <View style={styles.rightBubble}>
            <View style={styles.rightBubbleContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.userMsgText}>{messageText}</Text>
                {/* <ParseText textStyle={styles.userMsgText} text={messageText} /> */}
                <View style={styles.timeContainer}>
                  <Text
                    style={[
                      styles.timeText,
                      {color: 'white', textAlign: 'right'},
                    ]}>
                    {timeStr}
                  </Text>
                </View>
              </View>
              <View style={styles.rightTriangle} />
            </View>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  messageContainer: {
    marginBottom: 20,
  },
  leftBubble: {
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
  },
  leftBubbleContainer: {
    maxHeight: 'auto',
    maxWidth: '85%',
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginLeft: 10,
    paddingTop: 15,
    paddingLeft: 0,
    paddingRight: 5,
    paddingBottom: 10
  },
  leftTriangle: {
    position: 'absolute',
    left: -10,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 10,
    borderTopWidth: 15,
    transform: [
      {rotate: '180deg'}
    ],
    borderRightColor: 'transparent',
    borderTopColor: 'white'
  },
  rightBubble: {
    backgroundColor: 'transparent',
    alignItems: 'flex-end',
    marginRight: 5
  },
  rightBubbleContainer: {
    maxHeight: 'auto',
    maxWidth: '90%',
    backgroundColor: 'blue',
    justifyContent: 'flex-end',
    paddingTop: 15,
    paddingLeft: 5,
    paddingRight: 10,
    paddingBottom: 10,
    marginRight: 10
  },
  rightTriangle: {
    position: 'absolute',
    right: -10,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderTopWidth: 15,
    transform: [
      {rotate: '360deg'}
    ],
    borderTopColor: 'transparent',
    borderLeftColor: 'blue',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  byText: {
    fontSize: 10,
    letterSpacing: 1.9,
    maxWidth: 100
  },
  timeText: {
    fontSize: 12,
    letterSpacing: 1.53,
    color: '#605858'
  },
  msgText: {
    fontSize: 13,
    letterSpacing: 1.9,
  },
  userMsgText: {
    fontSize: 13,
    letterSpacing: 1.9,
    color: 'white'
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: 10
  },
  badgeIcon: {
    fontSize: 2,
    color: '#605858',
    marginLeft: 5,
    marginRight: 5
  }
})