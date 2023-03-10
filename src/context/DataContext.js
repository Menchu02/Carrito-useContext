import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { createStaticHandler } from '@remix-run/router';

// QUIERO CREAR UN CONTEXTO DE LLAMADA  A UNOS UNS DATOS ,
// PARA PODER LLEVARME ESTOS DATOS Y PODER UTILIZARLOS DONDE DESEE

//1 creo una variable y le asigno el createContext
export const dataContext = createContext();
//le pongo export para poder exportarla

//2 creo una función que va a ser el provedor de información
const DataProvider = ({ children }) => {
  //4 creo un estado para hacer la llamada a los datos y hacer un cambio de estado
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  //5 llamada a los datos con axios
  useEffect(() => {
    axios.get('data.json').then((res) => setData(res.data));
  }, []);

  // 3 ¿qué quiero retornar? quiero retornar los valores que estén dentro de mi provedor, y mi proveedor es DataProvider
  return (
    // EN VALUE PONGO LOS HIJOS QUE QUIERO COMPARTIR Y LLEVARME A OTROS COMPONENTES
    <dataContext.Provider value={{ data, cart, setCart }}>
      {/* todo lo que ponga aquí dentro, es la información que quiero repartir */}
      {/* todos los valores que ponga aquí son hijos de DataProvider, por eso los llamo children */}
      {/* tengo que ir a mi app, y envolver en DataProvider a todo,
     para que la info pueda llegar a todos los puntos de esta aplicación */}
      {children}
    </dataContext.Provider>
  );
};

//exporto mi función proveedora
export default DataProvider;
