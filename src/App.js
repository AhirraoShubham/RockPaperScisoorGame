/**
 * RockPaperScissor React Native App
 * https://github.com/AhirraoShubham
 *
 * Author: @Mr.Ahirrao
 * Date: 29/10/2020
 * 
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import PlayGround from './PlayGround';

export default function App() {
  const [playMode, setPlayMode] = useState(false);

  return playMode ? (
    <PlayGround/>
  ):(
    <View style={styles.container}>
    <Text style={styles.header}>Rock Paper Scissors</Text>
    <Text style={styles.emoji}>✊ ✋ ✌️</Text>
    <View style={styles.btnStyle}>
      <Button title='Play'
        onPress={() => {
          setPlayMode(true)
        }} 
      />
    </View>
    <Text style={styles.copyrighttext}>©Mr.Ahirrao</Text>
    <Text style={styles.sorceCode}>SouceCode</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 28,
    margin: 10
  },
  emoji: {
    fontSize: 60
  },
  btnStyle: {
    marginTop: 60,
    width: 210,
  },
  sorceCode: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontStyle: 'italic',
    color: '#3B3B98',
    textDecorationLine: 'underline'
  },
  copyrighttext: {
    position: 'absolute',
    bottom: 10,
    fontStyle: 'italic',
    color: '#3B3B98'
  }
});