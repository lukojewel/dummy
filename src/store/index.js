/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-13 22:52:40
 * @modify date 2019-05-13 22:52:40
 * @desc [description]
 */

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

const initialState = {};

const middleware = applyMiddleware(thunk);

const store = createStore(reducers, initialState, compose(middleware));

export default store;
