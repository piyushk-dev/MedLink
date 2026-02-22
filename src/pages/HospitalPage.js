import React from "react";
import { HospitalSearch } from "../components/hospital/HospitalSearch";
import { BedTicker } from "../components/hospital/BedTicker";

const HospitalPage = () => {
  return (
    <>
      <BedTicker />
      <HospitalSearch />
    </>
  );
};

export default HospitalPage;
