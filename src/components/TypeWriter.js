import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { colors, fontSize, fonts } from '../utils/theme';

const TypeWriter = ({ text, speed = 100, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      if (onComplete) {
        onComplete();
      }
    }
  }, [index, text, displayedText, speed, onComplete]);

  return (
    <View>
      <Text style={{ color: colors.color_white, fontFamily: fonts.Medium, fontSize: fontSize.px_18 }}>
        {displayedText}
      </Text>
    </View>
  );
};

export default TypeWriter;
