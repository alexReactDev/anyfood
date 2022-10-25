import { createContext } from "react";

const context = createContext();

const CurrencyChangerContextProvider = context.Provider;

export { context as default, CurrencyChangerContextProvider };