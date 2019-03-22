import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import DashedBorderedView from './DashedBorderedView';
export default class App extends Component {

  render() {
    const styles = {
      dashedBorder: {
        width: '50%',
        height: 400,
      },
    };
    return (
      <SafeAreaView>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <DashedBorderedView
            style={styles.dashedBorder}
          >
            <Text>Hi klsdnfj</Text>
          </DashedBorderedView> 
        </View>
      </SafeAreaView>
    );
  }
}


