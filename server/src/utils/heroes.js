const request = require('request')

const compare = (a,b)=>{
    if(a.localized_name > b.localized_name) return 1;
    if(a.localized_name == b.localized_name) return 0;
    if(a.localized_name < b.localized_name) return -1
}

const heroReq = (callback)=>{
    const url = 'https://api.opendota.com/api/heroStats';

    request({url, json:true }, (error, {body}) => {
        if(error){
            callback('Unable to connect to service heroes', undefined)
        }else{
           
            const heroesStr = body.filter(hero => hero.primary_attr === 'str')
            const heroesAgi = body.filter(hero => hero.primary_attr === 'agi')
            const heroesInt = body.filter(hero => hero.primary_attr === 'int')   
            heroesStr.sort(compare)
            heroesAgi.sort(compare)
            heroesInt.sort(compare)       
            const heroes = {
                heroesStr, 
                heroesAgi,
                heroesInt
            }
            callback(undefined, heroes)
        }
    })
}

module.exports = heroReq;