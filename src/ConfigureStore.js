import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import Logger from "./middleware/logger";

const storeFactory = () =>
    createStore(rootReducer, applyMiddleware(Logger, thunk));

export default storeFactory;
