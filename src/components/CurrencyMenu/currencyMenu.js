import { useContext } from "react";
import currencyChangerContext from "../../contexts/currencyChanger-context";
import style from "./currencyMenu.style.module.css";

function CurrencyMenu() {
	const { currency, changeCurrency } = useContext(currencyChangerContext);

	return (
		<div className={style.chooseCurrencyMenu}>
			{"Currency: "}
			<select  onInput={(event) => changeCurrency(event.target.value)}>
				<option selected={currency === "$"} value="$">Dollar $</option>
				<option selected={currency === "₽"} value="₽">Rouble ₽</option>
				<option selected={currency === "€"} value="€">Euro €</option>
				<option selected={currency === "£"} value="£">Pound £</option>
			</select>
		</div>
	)
}

export default CurrencyMenu;