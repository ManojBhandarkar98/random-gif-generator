import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from '../hooks/useGif';

const Tag = () => {
const [search,setSearch] = useState('');
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">

      <h1 className="mt=[15px] text-2xl font-bold underline uppercase">Search {search} Random GIF</h1>

      {
        loading ? (<Spinner />) : (<img src={gif} width={450} />)
      }

      <input type='text' className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center' onChange={(event) => setSearch(event.target.value)} value={search}></input>

      <button onClick={() => { fetchData() }} className="w-10/12 bg-white opacity-90 text-lg py-2 rounded-lg mb-[20px]">Generate</button>
    </div>
  );
}

export default Tag;