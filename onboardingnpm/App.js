import React from 'react';
import Imagen from './src/config/images';
import colors from './src/config/colors';
import constants from './src/config/constants';
import Onboarding from './src/views/onboarding';
const data = [
  {
    title: 'PDM',
    desc: 'React-native',
    image: Imagen.IMG1,
    colortext: colors.color,
    colorPrev:colors.color,
    colorNext:colors.white,
    color2Prev:colors.white,
    color2Next:colors.orange,
    disabledP:'none',
  },
  {
    title: 'NPM',
    desc: 'Libreria',
    image:Imagen.IMG2,
    colortext:colors.color,
    colorPrev:colors.color,
    colorNext:colors.white,
    color2Next:colors.orange,
    //disabledN:'none',
    color2Prev:colors.white,
  },
];
const App: () => React$Node = () => {
  return (
    <>
      {/* <MainNavigator /> */}
      <Onboarding data={data} /> 
    </> 
  );
};
export default App;
