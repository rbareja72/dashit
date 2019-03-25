import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

const renderDashes = (props, layoutWidth) => {
    const { borderColor, length, gapWidth, style, thickness } = props;
    const { flexDirection } = style;
    const display = flexDirection === 'column';
    const width = display ? thickness : length;
    const height = display ? length : thickness ;
    const gapLength = display ? thickness : gapWidth ;
    const gapHeight = display ? gapWidth : thickness ;
    const styles = StyleSheet.create({
        lineStyle: {
            width: Number.parseInt(width),
            height: Number.parseInt(height),
            backgroundColor: borderColor,
        },
        gapStyle: {
            width: Number.parseInt(gapLength),
            height: Number.parseInt(gapHeight),
            opacity: 0,
        }
    });
    let dashes = [];
    for (let i = 0; i < layoutWidth;) {
        i += Number.parseInt(length);
        if (i > layoutWidth) {
            if( flexDirection === 'column'){
                dashes.push(
                    <View
                        key={i + 'd'}
                        style={{ ...styles.lineStyle, height: layoutWidth - (i - length) }}
                    />
                );
            } else {
                dashes.push(
                    <View
                        key={i + 'd'}
                        style={{ ...styles.lineStyle, width: layoutWidth - (i - length) }}
                    />
                );
            }
            
            break;
        }
        i+=Number.parseInt(gapWidth);
        dashes.push(
            <View
                key={i + 'd'}
                style={styles.lineStyle}
            />
        );
        dashes.push(
            <View
                key={i + 'g'}
                style={styles.gapStyle}
            />
        );
    }
    return dashes;
}

export default Dash = (props) => {
    const [width, setWidth] = useState(0);
    return (
        <View style={{...props.style}} onLayout={(event) => {
            var { width } = event.nativeEvent.layout;
            setWidth(width);
        }}>
            {renderDashes(props, width)}
        </View>
    );
};