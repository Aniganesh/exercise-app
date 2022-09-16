import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {theme} from '../Theme';

interface HeaderProps {
  heading: string;
}

const Header: FC<HeaderProps> = ({heading}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerRoot as StyleProp<ViewStyle>}>
      <IconButton
        icon="arrow-left"
        size={20}
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          }
        }}
      />
      <Text theme={theme} style={styles.text}>
        {heading}
      </Text>
    </View>
  );
};

export default Header;

const styles = {
  headerRoot: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  } as ViewStyle,
  text: {fontSize: 20, backgroundColor: 'transparent'},
};
