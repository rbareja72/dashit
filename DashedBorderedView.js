import React, { useState } from 'react';
import { View } from 'react-native';
import Dash from './Dash';

export default DashedBorderedView = (props) => {
    const [width, setWidth] = useState(0);
    const { borderColor, length, gapWidth, thickness } = props;
    const padding = Number.parseInt(thickness) + 2;
    return (
        <View style={{...props.style, padding: padding }} onLayout={(e) => {
            const { width } = e.nativeEvent.layout;
            setWidth(width);
        }}>
            <Dash
                length={length}
                gapWidth={gapWidth}
                borderColor={borderColor}
                thickness={thickness}
                style={{
                    width: '100%',
                    flexDirection: 'row',   
                    position: 'absolute',
                    top:0,
                    alignSelf: 'flex-start'
                }}
            />
            <Dash
                length={length}
                gapWidth={gapWidth}
                borderColor={borderColor}
                thickness={thickness}
                style={{
                    width: props.style.height,
                    flexDirection: 'column',                    
                    position: 'absolute',
                    left: 0
                }}
            />
            <Dash
                length={length}
                gapWidth={gapWidth}
                borderColor={borderColor}
                thickness={thickness}
                style={{
                    width: props.style.height,
                    flexDirection: 'column',
                    position: 'absolute',
                    left: width-thickness
                }}
            />              
            <Dash
                length={length}
                gapWidth={gapWidth}
                borderColor={borderColor}
                thickness={thickness}
                style={{ 
                    width: '100%', 
                    flexDirection: 'row', 
                    position: 'absolute',
                    bottom: Number.parseInt(thickness)-2,
                }}
            />
            {props.children} 
        </View>
    );
};