import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import DashedBorderedView from './DashedBorderedView';
export default class App extends Component {

  render() {
    const styles = {
      dashedBorder: {
        width: '90%',
        height: 300,
        alignItems: 'center',
        backgroundColor: 'pink',
        justifyContent: 'center',
        flexDirection: 'column'
      },
    };
    return (
      <SafeAreaView style={{}}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <DashedBorderedView
            style={styles.dashedBorder}
            borderColor="green"
            length="1"
            gapWidth="1"
            thickness="1"
          >
            <Text>Hi klsdnfj</Text>
            <Text>ksdjnfods</Text>
          </DashedBorderedView> 
          <DashedBorderedView
            style={{
              backgroundColor: 'red',
              height: 200,
              width: 200
            }}
            borderColor="blue"
            length="1"
            gapWidth="0"
            thickness="1"
          >
            <Text>hadippa</Text>
          </DashedBorderedView>
        </View>
      </SafeAreaView>
    );
  }
}


