import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';

export default function produceReducer(state = {}, action) {
    switch (action.type) {
      case POPULATE:
        const newState = {...state};
        action.produce.forEach(prod => {
            newState[prod.id] = prod;
        })
        return newState;
      default:
        return state;
    }
}

export const populateProduce = () => {
    return ({
        type: POPULATE,
        produce: produceData
    })
}

export const likeProduce = () => {
    
}

// window.populateProduce = populateProduce;
