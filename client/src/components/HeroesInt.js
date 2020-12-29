import React from 'react';
import style from './HeroesStr.module.css'
import { connect,} from 'react-redux';

const HeroesStr = (props) => {
    console.log(props.heroes)
    return (
        <div className={style.container}>
            {
                props.heroes.map(hero => (<div className={style.profile} key={hero.id}>
                    <img alt="" src={'https://api.opendota.com' + hero.img} className={style.img}/>
                    <h5 className={style.profileName}>{hero.name}</h5>
                </div>))
            }
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        heroes:state.heroesInt
    }
}

export default connect(mapStateToProps)(HeroesStr);