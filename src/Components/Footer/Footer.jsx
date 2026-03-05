import React from 'react';

const Footer = () => {
    return (
        <section className=' bg-black py-16 '>
            <div className='w-10/12 mx-auto text-[#FFFFFF] flex justify-between flex-col md:flex-row gap-10 border-b-2 border-[#A1A1AA] pb-10'>
        <div className='space-y-5'>
            <h2 className='text-xl font-bold'>CS — Ticket System</h2>
            <p className='text-sm text-[#A1A1AA]'>The main benefits of a CS Ticket System include better <br /> response time, improved communication,  performance tracking, <br /> and higher customer satisfaction.  Managers can monitor agent <br /> performance, measure resolution times, and identify common <br /> customer issues through reports and analytics. Overall, a <br /> CS Ticket System helps businesses provide professional .</p>
        </div>

        <div className='space-y-5'>
            <h3 className='text-xl font-bold'>Company</h3>
            <ul className='text-sm text-[#A1A1AA]'>
                <li className='py-3'>About Us</li>
                <li className='py-3'>Our Mission</li>
                <li className='py-3'>Contact Saled</li>
            </ul>
        </div>

        <div className='space-y-5'>
            <h3 className='text-xl font-bold'>Services</h3>
            <ul className='text-sm text-[#A1A1AA]'>
                <li className='py-3'>Products & Services</li>
                <li className='py-3'>Customer Stories</li>
                <li className='py-3'>Download Apps</li>
            </ul>
        </div>

         <div className='space-y-5'>
            <h3 className='text-xl font-bold'>Information</h3>
            <ul className='text-sm text-[#A1A1AA]'>
                <li className='py-3' >Privacy Policy</li>
                <li className='py-3'>Terms & Conditions</li>
                <li className='py-3'>Join Us</li>
            </ul>
         </div>

         <div className='space-y-5'>
            <h3 className='text-xl font-bold'>Social Links</h3>
            <ul className='text-sm text-[#A1A1AA]'>
                <li className='py-3'><i class="fa-brands fa-x-twitter"></i> @CS — Ticket System</li>
                <li className='py-3'><i class="fa-brands fa-linkedin"></i> @CS — Ticket System</li>
                <li className='py-3'><i class="fa-brands fa-square-facebook"></i> @CS — Ticket System</li>
                <li className='py-3'><i class="fa-regular fa-envelope"></i> support@cst.com</li>
            </ul>
         </div>
         </div>

         <div>
            <p className='text-[#FFFFFF] flex justify-center pt-20'>&copy; 2025 CS — Ticket System. All rights reserved.</p>
         </div>

        </section>
    );
};

export default Footer;