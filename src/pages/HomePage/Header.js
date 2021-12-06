import React from 'react';
import { Text , View } from 'react-native';
import styles from './HomePage.styles';

export default function Header () {
    return (
        <View style={styles.view}>
            <Text style={styles.textBigger}>
               Hi,folks!
            </Text>
            <Text style={styles.text}>
               Welcome on board!
            </Text>
            <Text style={styles.textSmaller}>
    
            </Text> 
            <Text style={styles.textSmaller}>
             Make some memories with this new photo app!
            </Text> 
            <Text style={styles.textSmaller}>
              Bring your friends    ..
            </Text>
            <Text style={styles.textSmaller}>
               and your smile!
            </Text>
        </View>
    )
}