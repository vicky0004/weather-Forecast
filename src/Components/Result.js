import React from 'react'; 
import Loader from "./Loader";

export default function Result(props) {
  const { weatherData: data } = props;
  // console.log(data);
  function kToC(k) {
    return (k - 273.15).toFixed(2) + "° C";
  }
  function check(data) {
    if (data)
      return true;
    else
      return false;
  };
  function getTheDate(stamp) {
    const date = new Date(stamp * 1000);
    return date.toLocaleTimeString();
  }
  let showOnPage;
  if (data == null) {
    if(props.isSearched==true)showOnPage = <Loader/>;
    else
    showOnPage=(
      <div className='container mt-5'>
        <h1 className='text-center'>Please Search..</h1>
      </div>
    );
  }
  else {
    showOnPage = <div className="row pt-3 border">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
              {data.name} ({kToC(data.main.temp)}) {data.weather[0].description}
            </h4>
            <div className="row">
              <div className="col">
                <div className="row">

                  <hr />
                  <table className="table">
                    <tbody>
                      <tr>
                        <th >Feels like</th>
                        <td>{kToC(data.main.feels_like)}</td>
                      </tr>
                      <tr>
                        <th >Min Temp.</th>
                        <td>{kToC(data.main.temp_min)}</td>
                      </tr>
                      <tr>
                        <th >Max Temp.</th>
                        <td >{kToC(data.main.temp_max)}</td>
                      </tr>
                      <tr>
                        <th >Sun Rise</th>
                        <td >{getTheDate(data.sys.sunrise)}</td>
                      </tr>
                      <tr>
                        <th >Sun Set</th>
                        <td >{getTheDate(data.sys.sunset)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  }
  return (<>
    {showOnPage}
  </>
  );
}
