import style from './App.module.css';
import HeroesAgi from './components/HeroesAgi';
import HeroesInt from './components/HeroesInt';
import HeroesStr from './components/HeroesStr'


function App() {
  return (
    <div className={style.container}>
      <h1 className={style.headername}>Dota2 Wiki</h1>
      <h3 className={style.strength}>Strength</h3>
      <HeroesStr/>
      <h3 className={style.strength}>Agility</h3>
      <HeroesAgi/>
      <h3 className={style.strength}>Intelegent</h3>
      <HeroesInt/>
      
    </div>
  );
}

export default App;
