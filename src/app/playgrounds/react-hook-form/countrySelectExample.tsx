import React, { useState, useMemo } from "react";
import countryList from "react-select-country-list";
import Select from "react-select";

const CountrySelectExample = () => {
  const [value, setValue] = useState("");
  const options: any = useMemo(() => countryList().getData(), []);
  const changeHandler = (value: any) => {
    setValue(value);
  };

  return <Select options={options} value={value} onChange={changeHandler} />;
};

export default CountrySelectExample;
