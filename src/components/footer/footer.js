import { ReactComponent as Logo } from '../../icons/logo.svg';
import style from "./style.module.css";

const Footer = () => {
	return (
		<footer className={`${style.footer} footer`}>
			<div className="content">
				<div className={style.footer__body}>
					<a href="/" className={style.footer__logo}>
						<Logo className={style.footer__logoImg} />
					</a>
					<p className={style.footer__text}>
						© AnyFood all rights reserved
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer;