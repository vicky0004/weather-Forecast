import React, { Component } from 'react'
import Search from './Search';
import Result from './Result';
import axios from 'axios';
import Recent from './Recent';
// import Footer from './Footer';
class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      lon: "",
      weatherData: null,
      city: "",
      isSearched: false,
      recent: [],
    };
  }
  changeHandler = (event) => {
    const name = event.target.name;
    if (name === "city") {
      this.setState({
        city: event.target.value,
        lat: "",
        lon: "",
      });
    } else if (name === "lat") {

      this.setState({
        lat: event.target.value,
      });
    } else if (name === "lon") {
      this.setState({
        lon: event.target.value,
      });
    }
  };

  researchHandler = (lat, lon) => {
    this.setState({ lat, lon, weatherData: null }, () => {
      // console.log(lat,lon);
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&APPID=6863ef31c727ec4ebab4341b7f45f5f9`)
        .then((result) => {
          // console.log(result);
          this.setState({
            city: result.data.name,
            weatherData: result.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  searchHandler = () => {
    if (this.state.lat === "") {
      console.log(this.state.city);
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=6863ef31c727ec4ebab4341b7f45f5f9`)
        .then((result) => {
          this.setState({
            weatherData: result.data,
            lat: result.data.coord.lat,
            lon: result.data.coord.lon,
          }, () => {
            this.addDataToRecent();
          });
        })
        .catch((error) => {
          alert("City not found");
        });
    }
    else {
      this.setState({
        weatherData: null,
        isSearched: true,
      })
      setTimeout(() => {
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&APPID=6863ef31c727ec4ebab4341b7f45f5f9`)
          .then((result) => {
            // console.log(result);
            this.setState({
              city: result.data.name,
              weatherData: result.data,
            }, () => {
              this.addDataToRecent();
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }, 500);
    }
  }

  addDataToRecent = () => {
    let recent = this.state.recent;
    let flag = false;
    recent.map((recentData) => {
      if (recentData.city === this.state.city) {
        flag = true;
      }
    })
    if (flag === false) {
      recent.push({
        lat: this.state.lat,
        lon: this.state.lon,
        city: this.state.city,
      });
      this.setState({ recent }, () => {
        // console.log(this.state.recent);
        window.localStorage.setItem('recent', JSON.stringify(this.state.recent));
      });
    }
  }

  componentDidMount() {
    const data = window.localStorage.getItem("recent");
    let recent = data === null ? [] : JSON.parse(data);
    this.setState({ recent });
  }

  locationHandler = () => {
    if (navigator.geolocation) {
      this.setState({
        lat: "",
        lon: "",
        weatherData: null,
        isSearched: true,

      })
      navigator.geolocation.getCurrentPosition(
        (res) => {
          this.setState({
            lat: res.coords.latitude,
            lon: res.coords.longitude,
          });
          setTimeout(() => {
            axios
              .get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&APPID=6863ef31c727ec4ebab4341b7f45f5f9`)
              .then((result) => {
                // console.log(result);
                this.setState({
                  city: result.data.name,
                  weatherData: result.data,
                }, () => {
                  this.addDataToRecent();
                });
              })
              .catch((error) => {
                console.log(error);
              });
          }, 300);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("location is not supported");
    }
  };

  render() {
    return (
      <>
        <div className='container mx-3 pt-4 row' style={{ height: "500px" }}>
          <div className='border recent-tab col-3'>
            <Recent
              research={this.researchHandler}
              recent={this.state.recent}
            />
          </div>
          <div className='col-sm-9 '>
            <Search
              lat={this.state.lat}
              lon={this.state.lon}
              weatherData={this.state.weatherData}
              city={this.state.city}
              change={this.changeHandler}
              getLocation={this.locationHandler}
              search={this.searchHandler}

            />
            <Result
              isSearched={this.state.isSearched}
              weatherData={this.state.weatherData}
            />
          </div>
        </div>
        {/* <Footer/> */}
      </>
    )
  }
}
export default Weather;