import React, { Component } from "react";
import { connect } from "react-redux";
import './sort-filter.css'
import { store } from "../app/App";

class SortFilter extends Component {
    switchFilter = (event) => {
        event.stopPropagation()
        document.getElementsByClassName('selected')[0].classList.remove('selected')
        event.target.classList.add('selected')
        this.props.setFilter(event.target.id)
        if (event.target.id === 'fastFilter') {
            return this.props.setFastest()
        }
        if (event.target.id === 'lowCost') {
            return this.props.setLowest()
        }
        if (event.target.id === 'midFilter') {
            return this.props.setOptimal()
        }
    }
    render(){
        return (
            <div className="sortFilter">
                <button id="lowCost" onClick={this.switchFilter} className="sortFilter__btn selected">САМЫЙ ДЕШЕВЫЙ</button>
                <button id="fastFilter" onClick={this.switchFilter} className="sortFilter__btn">САМЫЙ БЫСТРЫЙ</button>
                <button id="midFilter" onClick={this.switchFilter} className="sortFilter__btn">ОПТИМАЛЬНЫЙ</button>
            </div>
        )
    }
}

const mapDispatchToProps = () => {
    return {
        setFilter: (sortFilter) => {store.dispatch({type: 'SET_SORT_FILTER', sortFilter})},
        setFastest: () => { store.dispatch({ type: 'SET_FASTEST_TICKETS' }) },
        setLowest: () => { store.dispatch({ type: "SET_LOWEST_TICKETS" }) },
        setOptimal: () => { store.dispatch({ type: "SET_OPTIMAL_TICKETS" }) }
    }
}

export default connect(mapDispatchToProps)(SortFilter)