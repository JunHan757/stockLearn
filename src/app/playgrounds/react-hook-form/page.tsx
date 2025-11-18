"use client";
import ExampleController from "./controller";
import CountrySelectExample from "./countrySelectExample";

const Home = () => {
  return (
    <>
      <h3 className="font-semibold text-2xl">Test controller</h3>
      <div className="flex min-h-screen home-wrapper">
        <ExampleController />
        <CountrySelectExample />
      </div>
    </>
  );
};

export default Home;
