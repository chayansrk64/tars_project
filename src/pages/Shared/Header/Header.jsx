import React, { useContext, useState } from 'react';

const Header = () => {
  const [photo, setPhoto] = useState('');
  const clientId = 'FRjjKABZG0FGS9KWWjzKBZ4wSkMB_X9la9IFAUn13_E';
  const [receive, setReceive] = useState([]);



  const handleChange = event => {
    setPhoto(event.target.value);
  }

  const handleClick = () => {
      console.log(photo)

      fetch(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=${clientId}`)
      .then(res => res.json())
      .then(data => {
        console.log(data.results)
        setReceive(data.results)
      })
      
  }

    return (
        <div className='mx-20'>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
       
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Image Gallery</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 items-center">
        {/* search button start */}
      <li> 
      <div className="form-control">
        <div className="input-group">
            <input onChange={handleChange} type="text" placeholder="Search…" className="input input-bordered" />
            <button onClick={handleClick} className="btn btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
        </div>
        </div>
      </li>
       {/* search button end */}
      <li><a>Explore </a></li>
      <li><a>Connection</a></li>
      <li><a>Community</a></li>
      <li><a>{receive.length} tested</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Dark mood</a>
  </div>
</div>
        </div>
    );
};

export default Header;