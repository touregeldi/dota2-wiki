export const addHeroStr = (
    {
        id = 0,
        localized_name = 'Hero',
        img = ''
    } = {}
) => ({
    type:'ADD_HERO_STR',
    hero:{
        id,
        name:localized_name,
        img
    }
});

export const addHeroAgi = (
    {
        id = 0,
        localized_name = 'Hero',
        img = ''
    } = {}
) => ({
    type:'ADD_HERO_AGI',
    hero:{
        id,
        name:localized_name,
        img
    }
});

export const addHeroInt = (
    {
        id = 0,
        localized_name = 'Hero',
        img = ''
    } = {}
) => ({
    type:'ADD_HERO_INT',
    hero:{
        id,
        name:localized_name,
        img
    }
});

export const startAddHero =(
    {
        id = 0,
        name = 'Hero',
        img = ''
    } = {}
) => {
    return (dispatch) => {
        return fetch('/api').then((response) => {
            return response.json();
        }).then((data) => {
            data.heroesStr.forEach(hero => {
                dispatch(addHeroStr(hero))
            });
            data.heroesAgi.forEach(hero => {
                dispatch(addHeroAgi(hero))
            });
            data.heroesInt.forEach(hero => {
                dispatch(addHeroInt(hero))
            });
        })
    }
}