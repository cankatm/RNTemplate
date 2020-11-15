import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';

const CenteredArea = ({
  children,
  marginTop = 0,
  marginBottom = 0,
  vertical = false,
  horizontal = false,
}) => {
  return (
    <View
      style={[
        styles.centeredAreaContainerStyle,
        {
          marginTop,
          marginBottom,
          alignItems: horizontal ? 'center' : 'flex-start',
          justifyContent: vertical ? 'center' : 'flex-start',
        },
      ]}
    >
      {children}
    </View>
  );
};

export default CenteredArea;
