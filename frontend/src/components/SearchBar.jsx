import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(()=>{
    if(location.pathname.includes('collection')){
        setVisible(true)
    }
    else{
        setVisible(false)
    }
  },[location])
return (visible && showSearch) ? (
  <div className="border-t border-t-gray-400 border-gray-200 bg-gray-50 text-center">
    <div className="inline-flex items-center justify-between border border-gray-400 px-4 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
      {/* Input */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 outline-none bg-transparent text-sm"
        type="text"
        placeholder="Search"
      />
      {/* Search Icon */}
      <img className="w-4 ml-2" src={assets.search_icon} alt="search" />
    </div>

    {/* Close Icon */}
    <img
      onClick={() => setShowSearch(false)}
      className="inline w-3 cursor-pointer ml-2"
      src={assets.cross_icon}
      alt="close"
    />
  </div>
) : null;

};

export default SearchBar;
