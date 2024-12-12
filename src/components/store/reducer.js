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
                tickets: action.tickets.splice(0, 5)
            })
        default:
            return state
    }
}

getTickets()

async function getTickets() {
    const {searchId} = await (await fetch('https://aviasales-test-api.kata.academy/search')).json()
    const response = await (await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`, { method: 'GET' })).json()
    const {tickets} = await response
    store.dispatch({ type: 'SET_TICKETS', tickets })
}


export default reducer