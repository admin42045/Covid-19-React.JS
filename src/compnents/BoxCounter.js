import React, { useState, useEffect } from "react";

const apiUrl = `https://data.covid19india.org/data.json`;

const Count = () => {
  const [confirmed, setConfirmed] = useState([]);
  const [active, setActive] = useState([]);
  const [deceased, setDeceased] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [lastUpdate, setLastUpdate] = useState([]);
  //alert(active);
  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `https://data.covid19india.org/data.json`;

      const zeroIndexConfirmed = [];
      const zeroIndexActive = [];
      const zeroIndexDeceased = [];
      const zeroIndexRecovered = [];
      const zeroIndexLastUpdate = [];

      try {
        const resp = await fetch(apiUrl);
        const res = await resp.json();
        console.log(res);
        console.log(res.statewise[0]);
        let total = res.statewise[0];
        do {
          zeroIndexConfirmed.push(total.confirmed);
          zeroIndexActive.push(total.active);
          zeroIndexDeceased.push(total.deaths);
          zeroIndexRecovered.push(total.recovered);
          zeroIndexLastUpdate.push(total.lastupdatedtime);
        } while (0);

        setConfirmed(zeroIndexConfirmed);
        setActive(zeroIndexActive);
        setRecovered(zeroIndexDeceased);
        setDeceased(zeroIndexRecovered);
        setLastUpdate(zeroIndexLastUpdate);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="box-wrapper">
        <div className="confirmed">
          <h4>Confirmed</h4>
          <span>{confirmed}</span>
        </div>

        <div className="active">
          <h4>Active</h4>
          <span>{active}</span>
        </div>

        <div className="recovered">
          <h4>Recovered</h4>
          <span>{recovered}</span>
        </div>

        <div className="deceased">
          <h4>Deceased</h4>
          <span>{deceased}</span>
        </div>
      </div>
      <div className="time-update">
        <h6>Last Update</h6>
        <span>{lastUpdate}</span>
      </div>
    </>
  );
};

export default Count;
