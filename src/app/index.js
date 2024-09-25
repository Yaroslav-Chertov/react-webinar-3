import { useCallback, useContext, useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Main from './main';
import Basket from './basket';
import useStore from '../store/use-store';
import useSelector from '../store/use-selector';
import Product from "./product/product";

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {
  const activeModal = useSelector(state => state.modals.name);

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/product/:id'} element={<Product />} />
      </Routes>

      {activeModal === 'basket' && <Basket />}
    </>
  );
}

export default App;
