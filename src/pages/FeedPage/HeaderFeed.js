import React from 'react';

import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

export default function HeaderFeed() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require('../../../assets/logs/Logo_1.jpg')} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItem: 'center',
    flexDirector: 'row',
    marginTop: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    color: 'black',
  },
  logo: {
    winth: 100,
    height: 60,
    reziseMode: 'contain',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  }
})