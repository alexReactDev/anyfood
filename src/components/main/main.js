import { Redirect, Route, Switch } from "react-router-dom";
import Header from '../header'
import Basket from '../basket';
import Restaurants from '../restaurants';
import Footer from '../footer';
import Error from '../error';

const Main = () => {
	return (
		<div className="wrapper">
      <Header />
			<main className="main">
				<Switch>
            <Redirect exact from="/" to="/restaurants" />
            <Route path="/checkout" component={() => (
               <div style={{
                  margin: "30px auto 0px auto",
                  maxWidth: "600px"
               }}>
                  <Basket />
               </div>
            )} />
            <Route path="/restaurants" component={Restaurants} />
            <Route path="/error" component={Error} />
            <Route path="/thanks" component={() => <h2>Спасибо за заказ</h2>} />
            <Route path="/" component={() => <h2>404 - Not found :(</h2>} />
         </Switch>
			</main>
      <Footer />
		</div>
	)
}

export default Main;