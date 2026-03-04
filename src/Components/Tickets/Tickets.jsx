import React, { use } from 'react';

const Tickets = ({ticketPromise}) => {

    const ticketData = use(ticketPromise)
    console.log(ticketData);



    return (

        <div className="mt-10 w-10/12 mx-auto flex justify-around">


          <div>
          <h3 className='text-2xl font-semibold text-[#34485A] pb-5'>Customer Tickets</h3>

           <div className='grid grid-cols-2 pb-32 gap-5'>

        {
          ticketData.map(ticket =>
           
              <div>
           <div className='w-lg'>



  <a
    href="#"
    className="block border border-gray-300 rounded-md p-5 shadow-sm bg-white 
               hover:shadow-md  
                
               active:scale-[0.99] transition duration-200"
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

  
      <span className="flex items-center gap-2 bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
        {ticket.status}
      </span>
    </div>

    <div className="flex justify-between items-center mt-4 text-sm">
      <div className="flex items-center gap-3">
        <span className="text-gray-500">{ticket.id}</span>
        <span className="text-red-600 font-semibold">{ticket.priority}</span>
      </div>

      <div className="flex items-center gap-4 text-gray-500">
        <span>{ticket.customer}</span>
        <span className="flex items-center gap-1">
          📅 {ticket.createdAt}
        </span>
      </div>
    </div>

  </a>
  </div>

  </div>
 
  
  
  )
        }
        </div>
        </div>

  <div>
        <h3 className='text-2xl font-semibold text-[#34485A] pb-5'>Task Status</h3>

        <div className=''>

        {
          ticketData.map(ticket => <div className="card w-96 bg-base-100 card-sm shadow-sm mb-5">
  <div className="card-body items-center">
    <h2 className="card-title">{ticket.title}</h2>
    
    
      <button className="btn btn-wide bg-[#02A53B] text-white">Complete</button>
    
  </div>
</div>)
        }

        <h3 className='text-2xl font-semibold text-[#34485A] pb-5'>Resolved Task</h3>
        <p className='text-xl text-[#627382]'>No resolved tasks yet.</p>
        </div>

      
      </div>

        

</div>
    );
};

export default Tickets;