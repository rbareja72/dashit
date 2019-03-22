import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

const renderDashes = (props, layoutWidth) => {
    const { lineColor, lineWidth, gapWidth, style } = props;
    const { height, flexDirection } = style;
    const vericalStyles = StyleSheet.create({
        lineStyle: {
            width: Number.parseInt(height),
            height: Number.parseInt(lineWidth),
            backgroundColor: lineColor,
        },
        gapStyle: {
            width: Number.parseInt(height),
            height: Number.parseInt(gapWidth),
            opacity: 0,
        }
    });
    const horizontalStyles = StyleSheet.create({
        lineStyle: {
            width: Number.parseInt(lineWidth),
            height: Number.parseInt(height),
            backgroundColor: lineColor
        },
        gapStyle: {
            width: Number.parseInt(gapWidth),
            height: Number.parseInt(height),
            opacity: 0
        }
    });
    const styles = flexDirection === 'column' ? vericalStyles : horizontalStyles;
    let dashes = [];
    for (let i = 0; i < layoutWidth;) {
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
        i += Number.parseInt(gapWidth) + Number.parseInt(lineWidth);
    }
    return dashes;
}

export default HorizontalDash = (props) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    return (
        <View style={{...props.style}} onLayout={(event) => {
            var { width } = event.nativeEvent.layout;
            setWidth(width);
        }}>
            {renderDashes(props, width, height)}
        </View>
    );
};