import React, { FC } from 'react';
import { Provider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import App from './src';
import HeaderClass from './src/components/Headers';
import { theme } from './src/core/theme';
import Quiz from './src/screens/Dashboard';

// const Main = () => (
//   <Provider theme={theme}>
//     <App />
//   </Provider>
// );

// export default Main;

const MainApp=()=>{
  React.useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.hide();
    },350);
  },[]);
  console.disableYellowBox = true;

  // <Provider theme={theme}>
  //      <Quiz />
  // </Provider>

  return(
    <SafeAreaView style={{backgroundColor:'white',flex:1}}>
      <App/>
    </SafeAreaView>
  )
}

export default MainApp;