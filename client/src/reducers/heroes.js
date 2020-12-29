const heroesReducerDefaultState = []

export const heroesStrReducer = (state = heroesReducerDefaultState, action)=>{
    switch(action.type){
        case 'ADD_HERO_STR':
            return [
                ...state,
                action.hero
            ]
        default:
            return state
    }
}

export const heroesAgiReducer = (state = heroesReducerDefaultState, action)=>{
    switch(action.type){
        case 'ADD_HERO_AGI':
            return [
                ...state,
                action.hero
            ]
        default:
            return state
    }
}

export const heroesIntReducer = (state = heroesReducerDefaultState, action)=>{
    switch(action.type){
        case 'ADD_HERO_INT':
            return [
                ...state,
                action.hero
            ]
        default:
            return state
    }
}