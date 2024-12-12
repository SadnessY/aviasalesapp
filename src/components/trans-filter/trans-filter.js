import React, { Component } from "react";
import { connect } from "react-redux";
import "./trans-filter.css"
import { store } from "../app/App";

class TransFilter extends Component {
    toggleCheck = (event) => {
        event.stopPropagation()
        if ( document.getElementById('all').checked ) {
            this.props.toggleFilter('all')
        } else if (document.getElementById('noTr').checked === true && document.getElementById('oneTr').checked === true && document.getElementById('twoTr').checked === true && document.getElementById('threeTr').checked === true && document.getElementById('all').checked === false ) {
            this.props.toggleFilter('all')
        }
        this.props.toggleFilter(event.target.id)
    }
    toggleAll = (event) => {
        event.stopPropagation()
        if (event.target.checked) {
            this.props.toggleAll()
        } else {
            this.props.toggleAllOff()
        }
    }
    render() {
        return (
            <div className="transFilter">
                <h4>КОЛИЧЕСТВО ПЕРЕСАДОК</h4>
                <label className="check">
                    <input onChange={this.toggleAll} id="all" checked={this.props.transFilters['all']} className="check__input" type="checkbox"/>
                    <span className="check__box"></span>
                    Все
                </label>
                <label className="check">
                    <input onChange={this.toggleCheck} id="noTr" checked={this.props.transFilters['noTr']} className="check__input" type="checkbox"/>
                    <span className="check__box"></span>
                    Без пересадок
                </label>
                <label className="check">
                    <input onChange={this.toggleCheck} id="oneTr" checked={this.props.transFilters['oneTr']} className="check__input" type="checkbox"/>
                    <span className="check__box"></span>
                    1 пересадка
                </label>
                <label className="check">
                    <input onChange={this.toggleCheck} id="twoTr" checked={this.props.transFilters['twoTr']} className="check__input" type="checkbox"/>
                    <span className="check__box"></span>
                    2 пересадки
                </label>
                <label className="check">
                    <input onChange={this.toggleCheck} id="threeTr" checked={this.props.transFilters['threeTr']} className="check__input" type="checkbox"/>
                    <span className="check__box"></span>
                    3 пересадки
                </label>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        transFilters: state.transFilters
    }
}

const mapDispatchToProps = () => {
    return {
        toggleFilter: (transFilter) => store.dispatch({type: 'TOGGLE_TRANS_FILTER', transFilter}),
        toggleAll: () => store.dispatch({type: 'TOGGLE_ALL_FILTERS_ON'}),
        toggleAllOff: () => store.dispatch({type: 'TOGGLE_ALL_FILTERS_OFF'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransFilter)