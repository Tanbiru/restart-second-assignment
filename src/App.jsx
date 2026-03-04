import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Tickets from "./Components/Tickets/Tickets";
import Navbar from "./Components/Navbar/Navbar";
import { Suspense } from "react";

const fetchTickets = async () => {
  const res = await fetch("/public/tickets.json");
  return res.json();
};

function App() {
  
  const ticketPromise = fetchTickets()



  return (
    <>
      {/* Navbar section */}
      <Navbar></Navbar>

      {/* Banner section */}
      <Banner></Banner>

      {/* Main section */}
      

      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Tickets ticketPromise ={ticketPromise}></Tickets>
      </Suspense>

      {/* Footer section */}

      <Footer></Footer>
    </>
  );
}

export default App;
