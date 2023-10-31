import React from 'react'

export default function Search(props) {
  return (
    <div className='row '>
        <div className="col-lg-5">
            <div className="form-group">
                <label htmlFor="">Type City Name</label>
                <input type="text" 
                    className='form-control'
                    name='city'
                    id='city'
                    value={props.city}
                    onChange={props.change}
                    aria-describedby='helpId'
                    placeholder='City Name....'
                />
            </div>
            <p><i>*only city no village</i></p>
        </div>
        <div className="col-lg-1">
        <label htmlFor=""></label>
        <button className='btn btn-primary fa fa-search' onClick={props.search}> Search</button>
      </div>
        <div className='col-lg-1 text-center'>
            <label htmlFor=""></label>
            <h5>Or</h5>
        </div>
        <div className="col-lg-5">
            <div className="form-group">
                <label htmlFor="">Get Co-ordinate</label>
                <button className='btn btn-outline-dark  fa fa-crosshairs' onClick={props.getLocation}></button>
                <div className="row pt-2">
                    <span className='bg-dark text-white rounded   col'>Latitude:</span>
                    <input 
                        type="number" 
                        step="any" 
                        className='from-control col mr-1'
                        name='lat'
                        id='latId'
                        value={props.lat}
                        onChange={props.change}
                        aria-describedby='helpId'
                        placeholder=''

                    />
                    <span className='bg-dark text-white rounded   col'>Longitude:</span>
                    <input 
                        type="number" 
                        step="any" 
                        className='from-control  col mr-1'
                        name='lon'
                        id='lonId'
                        value= {props.lon}
                        onChange={props.change}
                        aria-describedby='helpId'
                        placeholder=''

                    />
                </div>
            </div>
        </div>
    </div>
  )
}
