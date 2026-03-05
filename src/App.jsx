


import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Tickets from "./Components/Tickets/Tickets";
import Navbar from "./Components/Navbar/Navbar";
import { useState, useEffect } from "react";

function App() {

const [tickets, setTickets] = useState([]);
const [inProgress, setInProgress] = useState(0);
const [resolved, setResolved] = useState(0);


useEffect(() => {
fetch("/tickets.json")
.then((res) => res.json())
.then((data) => {
setTickets(data);
})
.catch((err) => {
console.error("Failed to load tickets:", err);
});
}, []);

const handleTicketSelect = () => {
setInProgress((prev) => prev + 1);
};

const handleTicketComplete = () => {
setInProgress((prev) => prev - 1);
setResolved((prev) => prev + 1);
};

return (
<>
{/* Navbar */} 
<Navbar />

  {/* Banner */}
  <Banner 
    inProgress={inProgress} 
    resolved={resolved} 
  />

  {/* Tickets */}
  <Tickets
    ticketData={tickets}
    onTicketSelect={handleTicketSelect}
    onTicketComplete={handleTicketComplete}
  />

  {/* Footer */}
  <Footer />
</>


);
}

export default App;
