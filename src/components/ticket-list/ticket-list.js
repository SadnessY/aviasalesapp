import React, { Component } from "react";
import TicketItem from "../ticket-item/ticket-item";
import './ticket-list.css'
import { connect } from "react-redux";

class TicketList extends Component {
    counter = 0
    render() {
        const items = this.props.tickets.map((ticket) => {
            return (<TicketItem key={this.counter++} ticketProps={ticket}/>)
        })
        return (
            <div className="ticketList">
                {items}
                <button className='showMoreBtn'>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        tickets: state.tickets
    }
}

export default connect(mapStateToProps)(TicketList)