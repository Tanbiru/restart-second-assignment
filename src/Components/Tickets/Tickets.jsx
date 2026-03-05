
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tickets = ({ ticketPromise, onTicketSelect, onTicketComplete }) => {
  const [ticketData, setTicketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  
  useEffect(() => {
    ticketPromise.then(data => {
      setTicketData(data);
      setLoading(false);
    });
  }, [ticketPromise]);

  const handleTicketClick = (ticket, e) => {
    e.preventDefault();
  
    const isAlreadySelected = selectedTickets.some(t => t.id === ticket.id);
    
    if (!isAlreadySelected) {
      setSelectedTickets([...selectedTickets, ticket]);
      onTicketSelect(); 
      
      toast.success(`"${ticket.title}" added to Task Status!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.info(`"${ticket.title}" is already in Task Status`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleCompleteTask = (ticket) => {
    setSelectedTickets(selectedTickets.filter(t => t.id !== ticket.id));
    setResolvedTickets([...resolvedTickets, ticket]);
    
    onTicketComplete(); 

    toast.success(`"${ticket.title}" has been resolved!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-100">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <div className="mt-10 w-10/12 mx-auto flex flex-col lg:flex-row lg:justify-around gap-10">



        {/* Customer tickets section*/}



        <div className="order-2 lg:order-1">
          <h3 className='text-2xl font-semibold text-[#34485A] pb-5'>Customer Tickets</h3>

          <div className='grid grid-cols-1 lg:grid-cols-2 pb-32 gap-5'>
            {
              ticketData.map(ticket => {
                const statusColor =
                  ticket.status === "Open"
                    ? "bg-[#B9F8CF] text-[#02A53B]"
                    : "bg-yellow-100 text-yellow-700";

                const priorityColor =
                  ticket.priority === "High"
                    ? "text-red-600"
                    : ticket.priority === "Medium"
                      ? "text-yellow-500"
                      : "text-green-600";

                return (
                  <div key={ticket.id}>
                    <div className="w-full">
                      <a
                        href="#"
                        onClick={(e) => handleTicketClick(ticket, e)}
                        className="block border border-gray-300 rounded-md p-5 shadow-sm bg-white
                        hover:shadow-md active:scale-[0.99] transition duration-200"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                              {ticket.title}
                            </h3>
                            <p className="text-gray-500 text-sm mt-1">
                              {ticket.description}
                            </p>
                          </div>

                          <span className={`flex items-center gap-2 text-sm font-medium px-3 py-1 rounded-full ${statusColor}`}>
                            <span className="w-2 h-2 bg-current rounded-full"></span>
                            {ticket.status}
                          </span>
                        </div>

                        <div className="flex justify-between items-center mt-4 text-sm">
                          <div className="flex items-center gap-3">
                            <span className="text-gray-500">{ticket.id}</span>
                            <span className={`font-semibold ${priorityColor}`}>
                              {ticket.priority}
                            </span>
                          </div>

                          <div className="flex items-center gap-4 text-gray-500">
                            <span>{ticket.customer}</span>
                            <span className="flex items-center gap-1"><i class="fa-regular fa-calendar"></i>
                              {ticket.createdAt}
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>

        {/* Task status section*/}


        <div className="order-1 lg:order-2">
          <h3 className='text-2xl font-semibold text-[#34485A] pb-5'>Task Status</h3>

          <div className=''>
            {selectedTickets.length > 0 ? (
              selectedTickets.map(ticket => (
                <div key={ticket.id} className="card w-full bg-base-100 card-sm shadow-sm mb-5">
                  <div className="card-body items-center">
                    <h2 className="card-title">{ticket.title}</h2>
                    <button 
                      onClick={() => handleCompleteTask(ticket)}
                      className="btn btn-wide bg-[#02A53B] text-white hover:bg-[#028a30] transition-colors"
                    >
                      Complete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className='text-xl text-[#627382] mb-5'>No tasks selected.</p>
            )}

            <h3 className='text-2xl font-semibold text-[#34485A] pb-5'>Resolved Task</h3>
            
            {resolvedTickets.length > 0 ? (
              resolvedTickets.map(ticket => (
                <div key={ticket.id} className="mb-2 bg-gray-50 rounded-xl">
                  <p className='text-lg text-[#627382] p-4'>{ticket.title}</p>
                </div>
              ))
            ) : (
              <p className='text-xl text-[#627382]'>No resolved tasks yet.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tickets;