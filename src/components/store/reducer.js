import { store } from "../app/App"

const initialState = {
    sortFilter: 'lowCost',
    tickets: [],
    transFilters: {
        all: false,
        noTr: false,
        oneTr: false,
        twoTr: false,
        threeTr: false,
    },
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_SORT_FILTER":
            return Object.assign({}, state, {
                sortFilter: action.sortFilter
            })
        case "TOGGLE_TRANS_FILTER":
            return Object.assign({}, state, {
                transFilters: Object.assign({}, state.transFilters, {
                    [action.transFilter]: !state.transFilters[action.transFilter] 
                })
            })
        case "TOGGLE_ALL_FILTERS_ON":
            return Object.assign({}, state, {
                transFilters: (() => {
                    const newTrans = {}
                    for (let i in state.transFilters) {
                        newTrans[i] = true
                    }
                    return newTrans
                })()
            })
        case "TOGGLE_ALL_FILTERS_OFF":
            return Object.assign({}, state, {
                transFilters: (() => {
                    const newTrans = {}
                    for (let i in state.transFilters) {
                        newTrans[i] = false
                    }
                    return newTrans
                })()
            })
        case "SET_TICKETS":
            return Object.assign({}, state, {
                tickets: [...action.tickets].sort((a, b) => a.price - b.price)
            })
        case "SET_FASTEST_TICKETS":
            return Object.assign({}, state, {
                tickets: [...state.tickets].sort((prevElement, nextElement) => {
                    const durationPrev = prevElement.segments[0].duration + prevElement.segments[1].duration;
                    const durationNext = nextElement.segments[0].duration + nextElement.segments[1].duration;
                    return durationPrev - durationNext;
                })
            })
        case "SET_LOWEST_TICKETS":
            return Object.assign({}, state, {
                tickets: [...state.tickets].sort((a, b) => a.price - b.price)
            })
        case "SET_OPTIMAL_TICKETS":
            return Object.assign({}, state, {
                tickets: [...state.tickets].sort((prevElement, nextElement) => {
                    const durationPrev = prevElement.segments[0].duration + prevElement.segments[1].duration;
                    const durationNext = nextElement.segments[0].duration + nextElement.segments[1].duration;
                    const optValuePrev = prevElement.price / 10 + durationPrev;
                    const optValueNext = nextElement.price / 10 + durationNext;
                    return optValuePrev - optValueNext;
                })
            })
        default:
            return state
    }
}

getTickets()

async function getTickets() {
    try {
        const {searchId} = await (await fetch('https://aviasales-test-api.kata.academy/search')).json()
        let response = await (await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`, { method: 'GET' })).json()
        const {tickets} = await response
        store.dispatch({ type: 'SET_TICKETS', tickets })
    } catch (e) {
        console.log(e)
    }

}


export default reducer