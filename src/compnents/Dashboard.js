import Loading from "./Loading";
import { useEffect, useState } from "react";
import Charts from "./Charts";
import Header from "./Header";
import BoxCounter from "./BoxCounter";

const Dashboar = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]); // store into array
  const [indianState, setIndianState] = useState([]); // also store into array

  const apiUrlIndiaCovidData = `https://data.covid19india.org/data.json`;
  const apiUrlIndiaCovidState = `https://data.covid19india.org/states_daily.json`;

  // fetching data from first api
  const fetchIndianCovidData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrlIndiaCovidData);
      const data = await response.json();
      setLoading(false);
      // console.log(data.statewise);
      setData(data.statewise);
    } catch (error) {
      setLoading(false);
      console.log(error, `error is coming.....covid-19 state.`);
    }
  };

  // fetching data from second api
  const fetchIndianCovidState = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrlIndiaCovidState);
      const indianState = await response.json();
      setLoading(false);
      // console.log(indianState);
    } catch (error) {
      setLoading(false);
      console.log(error, `error is coming.....covid-19 state `);
    }
  };

  useEffect(() => {
    fetchIndianCovidData();
    //  fetchIndianCovidState();
  }, []);

  //for loading
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <>
      <div className="app">
        <Header />
        <div className="app_left">
          <div className="chart-area">
            {/** Docut Chart */}
            <Charts />
            {/** Line Chart */}
          </div>
          {/** Table  */}
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>STATUS/UT</th>
                  <th>CONFIRMED</th>
                  <th>ACTIVE</th>
                  <th>RECOVERED</th>
                  <th>DECEASED</th>
                </tr>
              </thead>
              <tbody className="tbody">
                {data.map((data) => {
                  return (
                    <tr>
                      <td>{data.state}</td>
                      <td>{data.confirmed}</td>
                      <td>{data.active}</td>
                      <td>{data.recovered}</td>
                      <td>{data.deaths}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="app_right">
          <BoxCounter />
        </div>
      </div>
    </>
  );
};

export default Dashboar;
