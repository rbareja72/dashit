import React, { useState } from 'react';
import { View } from 'react-native';
import Dash from './Dash';

export default DashedBorderedView = (props) => {
    const [width, setWidth] = useState(0);
    return (
        <View style={{...props.style, padding: 5}} onLayout={(e) => {
            const { width } = e.nativeEvent.layout;
            setWidth(width);
        }}>
            <Dash
                lineColor="black"
                lineWidth="15"
                gapWidth="10"
                style={{
                    width: '100%',
                    height: 1,
                    flexDirection: 'row',   
                    position: 'absolute',
                    top:0,
                    alignSelf: 'flex-start'
                }}
            />
            <Dash
                lineColor="black"
                lineWidth="15"
                gapWidth="10"
                style={{
                    width: props.style.height,
                    height: 1,
                    flexDirection: 'column',                    
                    position: 'absolute',
                    left: 0
                }}
            />
            <Dash
                lineColor="black"
                lineWidth="15"
                gapWidth="10"
                style={{
                    width: props.style.height,
                    height: 1,
                    flexDirection: 'column',
                    position: 'absolute',
                    left: width
                }}
            />              
             <Dash
                lineColor="black"
                lineWidth="15"
                gapWidth="10"
                style={{ 
                    width: '100%', 
                    height: 1, 
                    flexDirection: 'row', 
                    position: 'absolute',
                    bottom: 0,
                }}
            />
            {props.children} 
        </View>
    );
};