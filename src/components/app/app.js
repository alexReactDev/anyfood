import { UserProvider } from '../../contexts/user-context';
import { useState } from 'react';
import { ConvertContextProvider } from '../../contexts/convert-context';
import  style  from "./app.style.module.css";
import Main from '../main';

const App = () => {
  const [name, setName] = useState('Andrey');

  const [currency, changeCurrency] = useState('$');

  const converter = {
    "$": (value) => value + " $",
    "₽": (value) => Math.trunc(value * 72.65) + " ₽",
    "€": (value) => Math.trunc(value * 0.86) + " €",
    "£": (value) => Math.trunc(value * 0.74) + " £",
  }


  return (
    <div>
      <div className={style.chooseCurrencyMenu}>
        {"Currency: "}
        <select  onInput={(event) => changeCurrency(event.target.value)}>
          <option selected={currency === "$"} value="$">Dollar $</option>
          <option selected={currency === "₽"} value="₽">Rouble ₽</option>
          <option selected={currency === "€"} value="€">Euro €</option>
          <option selected={currency === "£"} value="£">Pound £</option>
        </select>
      </div>
      <ConvertContextProvider value={converter[currency]}>
      <UserProvider value={{ name, setName }}>
         <Main />
       </UserProvider>
      </ConvertContextProvider>
    </div>
  );
};

export default App;
