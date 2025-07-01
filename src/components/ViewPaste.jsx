
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const ViewPaste = () => {

    const {id} = useParams();

    const allPastes = useSelector((state)=> state.paste.pastes);

    const paste = allPastes.filter((p)=>p._id===id)[0];

    console.log("final paste" , paste);


  return (
    <div>
      <div className="flex flex-row gap-[20px] place-content-between">
        <input
          className="p-[10px] rounded-[20px] mt-[17px] w-[66%] pl-[10px]"
          type="text"
          placeholder="Enter your text here"
          value={paste.title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
        />

            {/* <button
            onClick={createPaste}
            className="p-[10px] rounded-[20px] mt-[17px]"
            >
            {pasteId ? "Update My Paste" : "Create My Paste"}
            </button> */}
      </div>
      <div>
        <textarea
          className="rounded-[20px] mt-[10px] min-w-[500px] p-[20px]"
          value={paste.content}
          placeholder="Enter content here"
          disabled
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  )
}

export default ViewPaste
