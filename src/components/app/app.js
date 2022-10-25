import { UserProvider } from '../../contexts/user-context';
import { useState } from 'react';
import { ConvertContextProvider } from '../../contexts/convert-context';
import { converter } from '../../redux/utils';
import Main from '../main';
import { CurrencyChangerContextProvider } from '../../contexts/currencyChanger-context';

const App = () => {
  const [name, setName] = useState('Andrey');

  const [currency, changeCurrency] = useState('$');

  return (
    <div>
      <CurrencyChangerContextProvider value={{currency, changeCurrency}}>
        <ConvertContextProvider value={converter[currency]}>
          <UserProvider value={{ name, setName }}>
            <Main />
          </UserProvider>
        </ConvertContextProvider>
      </CurrencyChangerContextProvider>
    </div>
  );
};

export default App;
