
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Description from './description';
import Footer from './footer';

const onboardingFactory = ({textoDesc,textoTit,disableN,disableP,source,onPressN,onPressP,isLoading,colorP,colorN,colort,color2N,color2P}) => {
  return (
    <View style={styles.container}>
      <Description
        source={source}
        style={styles.desc}
        textoTit={textoTit}
        textoDesc={textoDesc}
        colort={colort}
       />
      <Footer
        isLoading={isLoading}
        onPressP={onPressP}
        onPressN={onPressN}
        colorP ={colorP}
        colorN={colorN}
        color2N={color2N}
        color2P={color2P}
        disableN={disableN}
        disableP={disableP}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 3,
    paddingBottom:10,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
},
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    height: 20,
  },
  desc:{
    textAlign:'center',
  }
});
export default onboardingFactory;