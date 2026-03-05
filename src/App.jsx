

import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Tickets from "./Components/Tickets/Tickets";
import Navbar from "./Components/Navbar/Navbar";
import { Suspense, useState } from "react";

const fetchTickets = async () => {
  const res = await fetch("/public/tickets.json");
  return res.json();
};

function App() {
  const ticketPromise = fetchTickets();
  
  
  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);

  
  const handleTicketSelect = () => {
    setInProgress(prev => prev + 1);
  };


  const handleTicketComplete = () => {
    setInProgress(prev => prev - 1);
    setResolved(prev => prev + 1);
  };

  return (
    <>
      {/* Navbar section */}
      <Navbar/>

      {/* Banner section */}

      <Banner 
        inProgress={inProgress} 
        resolved={resolved} 
      />

     

      {/* Main section */}
     
        <Tickets 
          ticketPromise={ticketPromise}
          onTicketSelect={handleTicketSelect}
          onTicketComplete={handleTicketComplete}
        />
     

      {/* Footer section */}
      <Footer/>
    </>
  );
}

export default App;