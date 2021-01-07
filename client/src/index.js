import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { addHero, startAddHero } from './actions/heroes';

const store = configureStore();

// store.subscribe(() => {
//   console.log(store.getState());
// })


// store.dispatch(addHero({
//   id:0,
//   name:'Anti-Mage',
//   img:'/apps/dota2/images/heroes/antimage_full.png'
// }))

// store.dispatch(addHero({
//   id:1,
//   name:'Axe',
//   img:'/apps/dota2/images/heroes/axe_full.png?'
// }))

// store.dispatch(addHero({
//   id:2,
//   name:'Bane',
//   img:'/apps/dota2/images/heroes/bane_full.png?'
// }))

// store.dispatch(addHero({
//   id:3,
//   name:'Bloodseeker',
//   img:'/apps/dota2/images/heroes/bloodseeker_full.png?'
// }))

ReactDOM.render(<p>Loading</p>,document.getElementById('root'))

store.dispatch(startAddHero()).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
})
