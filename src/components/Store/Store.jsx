import React, { createContext, useRef, useState } from 'react';

export const Store = createContext();


function StoreProvider({children}){

  const [menu,setMenu] = useState('About');

  return(
    <Store.Provider value={{menu,setMenu}}>
      {children}
    </Store.Provider>
  )
}

export default StoreProvider;