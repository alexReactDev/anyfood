import { useEffect } from "react";
import { connect } from "react-redux"
import { errorPageLeave } from "../../redux/actions";
import { errorMessageSelector } from "../../redux/selectors";
import style from "./style.module.css";

function Error( { errorMessage, onUnmount } ) {

	useEffect(() => () => onUnmount());

	return(
		<div className={style.errorPage}>
			<div className="content">
				<div className={style.errorPage__body}>
					<h2 className={style.errorPage__title}>
						Error!
					</h2>
					<p className={style.errorPage__text}>
						{errorMessage}
					</p>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	errorMessage: errorMessageSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
	onUnmount: () => dispatch(errorPageLeave()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Error);