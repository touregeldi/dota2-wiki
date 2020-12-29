import { createStore, combineReducers, applyMiddleware} from 'redux';
import {heroesStrReducer, heroesAgiReducer, heroesIntReducer} from '../reducers/heroes'
import thunk from 'redux-thunk'

export default () =>{
    const store = createStore(
        combineReducers({
            heroesStr: heroesStrReducer,
            heroesAgi: heroesAgiReducer,
            heroesInt: heroesIntReducer
        }),
        applyMiddleware(thunk)
    )

    return store
}