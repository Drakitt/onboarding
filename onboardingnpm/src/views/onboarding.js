import React, {useState, useEffect} from 'react';
import OnboardingFactory from '../components/onboardingFactory';

const onboarding = ({data, done }) => {
  const [screen, setScreen] = useState(null);
  const [actual, setActual] = useState(0);
  const [Loading, setIsLoading] = useState(false);

  useEffect(() => {
    const iteracion = (datos, done) => {
      let output = [];
      for (let i = 0; i < datos.length; i++) {
        let nt = i == datos.length - 1 ? 0 : i + 1;
        let pv = i == datos.length - 1 ? 0 : i - 1;
        let status = i == 0 ? true : false;
        output.push({
          title: datos[i].title,
          desc: datos[i].desc,
          image: datos[i].image,
          colortext: datos[i].colortext,
          colorPrev: datos[i].colorPrev,
          colorNext: datos[i].colorNext,
          Loading: datos[i].Loading,
          color2Next: datos[i].color2Next,
          color2Prev:datos[i].color2Prev,
          disabledN:datos[i].disabledN,
          disabledP:datos[i].disabledP,
          nextScreen: datos[i].nextScreen,
          position: i,
          next: nt,
          prev: pv,
          state: status,
          stay: done,
        });
      }
      setScreen(output);
    };
    iteracion(data, done);
  }, [data]);

  return (
    <>
      {screen != null ? (
        <>
          {screen.map(sc => (
            <>
              {sc.position == actual ? (
                <OnboardingFactory
                  source={sc.image}
                  textoTit={sc.title}
                  textoDesc={sc.desc}
                  colorN={sc.colorNext}
                  colorP={sc.colorPrev}
                  colort={sc.colortext}
                  isLoading={Loading}
                  color2N={sc.color2Next}
                  color2P={sc.color2Prev}
                  disableN={sc.disabledN}
                  disableP={sc.disabledP}
                  onPressP={() => {
                    setActual(sc.prev);
                  }}
                  onPressN={() => {
                    setActual(sc.next);
                  }}
                  color={sc.color}
                />
              ) : null}
            </>
          ))}
        </>
      ) : null}
    </>
  );
};

export default onboarding;