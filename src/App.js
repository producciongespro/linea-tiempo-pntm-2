import React, { useState, useEffect } from 'react';
import data from './data.json';
import Movil from './componentes/Movil';
import Escritorio from './componentes/Escritorio';
import plataforma from './modulos/plataforma';
import Splash from './componentes/Splash';


console.log("data", data);
function App() {
  //const [isReady, setIsReady]= useState(false);
  const [componente, setComponente] = useState(null);

 useEffect(()=>{

  setTimeout(() => {
    let platform = plataforma();
    if (platform === "movil") {
      setComponente(<Movil data={data} />)
    }
    if (platform === "escritorio") {
      setComponente(<Escritorio data={data} />)
    }
  }, 2000);
 },[] )

  return (
    componente ?
      componente
      :
      <Splash />
  )
}
export default App;