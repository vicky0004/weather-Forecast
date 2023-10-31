import React from 'react'

export default function Recent(props) {
  let data;
  if(props.recent == null){
    data= "";
  }
  else{
    data = props.recent.map((recentData,id)=>{
      return (
        <li onClick={()=> props.research(recentData.lat,recentData.lon)} className="shadow mt-3 bg-secondary text-white p-1" key ={id}>
          {recentData.city}
          </li>
      );
    });
  };
  return (
    <div className="recent-box">
      <h3>Recent</h3>
      <ul className="list-unstyled pe-auto">{data}
      </ul>
    
    </div>
  );
}
