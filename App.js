import React from 'react';
import ReactNative, {
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const StatusBar = Platform.isTV ? View : ReactNative.StatusBar;

const Button = ({title, style}) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={style}>
        <Text style={style}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  };

  const buttonStyle = {
    fontSize: 24,
    padding: 20,
    margin: 20,
    color: isDarkMode ? 'white' : 'black',
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Button title="Button 1" style={buttonStyle} />
      <Button title="Button 2" style={buttonStyle} />
    </SafeAreaView>
  );
};

export default App;
