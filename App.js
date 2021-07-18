import React from 'react';
import ReactNative, {
  PixelRatio,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const StatusBar = Platform.isTV ? View : ReactNative.StatusBar;

const Button = ({title, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style}>
        <Text style={style}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const fgColor = isDarkMode ? Colors.lighter : Colors.darker;
  const bgColor = isDarkMode ? Colors.darker : Colors.lighter;

  const [message, setMessage] = React.useState('');

  const backgroundStyle = {
    backgroundColor: bgColor,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  };

  const buttonStyle = {
    fontSize: 24 / PixelRatio.get(),
    padding: 20 / PixelRatio.get(),
    margin: 20 / PixelRatio.get(),
    color: fgColor,
    backgroundColor: bgColor,
  };

  const messageStyle = {
    fontSize: 24 / PixelRatio.get(),
    padding: 20 / PixelRatio.get(),
    margin: 20 / PixelRatio.get(),
    color: bgColor,
    backgroundColor: fgColor,
    flex: 1,
    width: '100%',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Button
        title="Button 1"
        style={buttonStyle}
        onPress={() => setMessage('Button 1 pressed')}
      />
      <Button
        title="Button 2"
        style={buttonStyle}
        onPress={() => setMessage('Button 2 pressed')}
      />
      <View style={messageStyle}>
        <Text style={messageStyle}>{message}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
