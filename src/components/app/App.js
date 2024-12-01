import React, { useState } from 'react';
import TransFilter from '../trans-filter/trans-filter';

import './App.css';
import SortFilter from '../sort-filter/sort-filter';
import TicketList from '../ticket-list/ticket-list';

function App() {
  const [tickets, setTickets] = useState([    
    {id: 1, price: '13 400', carrier: "S7 Airlines", segments: [{ origin: "MOW", destination: "HKT", date: "10:45 - 08:00", stops: ["HKG", "JNB"], duration: "21ч 15м" }, { origin: "MOW", destination: "HKT", date: "11:20 - 00:50", stops: ["HKG"], duration: "13ч 30м" }]},
    {id: 2, price: '13 400', carrier: "S7 Airlines", segments: [{ origin: "MOW", destination: "HKT", date: "10:45 - 08:00", stops: ["HKG", "JNB"], duration: "21ч 15м" }, { origin: "MOW", destination: "HKT", date: "11:20 - 00:50", stops: ["HKG"], duration: "13ч 30м" }]},
    {id: 3, price: '13 400', carrier: "S7 Airlines", segments: [{ origin: "MOW", destination: "HKT", date: "10:45 - 08:00", stops: ["HKG", "JNB"], duration: "21ч 15м" }, { origin: "MOW", destination: "HKT", date: "11:20 - 00:50", stops: ["HKG"], duration: "13ч 30м" }]},
    {id: 4, price: '13 400', carrier: "S7 Airlines", segments: [{ origin: "MOW", destination: "HKT", date: "10:45 - 08:00", stops: ["HKG", "JNB"], duration: "21ч 15м" }, { origin: "MOW", destination: "HKT", date: "11:20 - 00:50", stops: ["HKG"], duration: "13ч 30м" }]},
    {id: 5, price: '13 400', carrier: "S7 Airlines", segments: [{ origin: "MOW", destination: "HKT", date: "10:45 - 08:00", stops: ["HKG", "JNB"], duration: "21ч 15м" }, { origin: "MOW", destination: "HKT", date: "11:20 - 00:50", stops: ["HKG"], duration: "13ч 30м" }]},
])
  return (
    <div className="App">
      <div className='logo' />
      <div className='main'>
        <TransFilter />
        <div className='main__tickets'>
          <SortFilter />
          <TicketList tickets={tickets} />
        </div>
      </div>
    </div>
  );
}

export default App;
