import {createStore} from 'redux';
import reducer from '../reducers/index';

const store = createStore(reducer);//the app expects the reducer

export default store;