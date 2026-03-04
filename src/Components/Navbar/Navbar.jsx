import React from 'react';

const Navbar = () => {
    return (
        <section className=' bg-base-100 shadow-sm'>
     <div className="navbar  justify-between px-6 w-10/12 mx-auto">
  <div>
    <h3 className="text-2xl font-bold text-[#130B2D]">
      CS — Ticket System
    </h3>
  </div>

  <div className="flex items-center gap-6">
    <ul className="hidden md:flex items-center gap-6 text-sm">
      <li>Home</li>
      <li>FAQ</li>
      <li>Changelog</li>
      <li>Blog</li>
      <li>Download</li>
      <li>Contact</li>
    </ul>

    <button className="btn gradient-btn text-[#FFFFFF]">
      + New Ticket
    </button>
  </div>
</div>
</section>
    );
};

export default Navbar;