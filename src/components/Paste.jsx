// src/components/Paste.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div>
      <input
        className='p-[10px] rounded-[20px] min-w-[600px] mt-[25px]'
        type='search'
        placeholder='search here'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className='flex flex-col gap-[25px] mt-[25px]'>
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div key={paste._id} className='border p-4 rounded-lg'>
                <div>{paste.title}</div>
                <div>{paste.content}</div>
                <div className='flex flex-row gap-[20px] place-content-evenly'>
                  <Link to={`/?pasteId=${paste._id}`}><button>Edit</button></Link>
                  <Link to={`/pastes/${paste._id}`}><button>View</button></Link>
                  <button onClick={() => handleDelete(paste._id)}>Delete</button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success('Copied to clipboard');
                    }}
                  >
                    Copy
                  </button>
                  <button>Share</button>
                </div>
                <div>{paste.createdAt}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
