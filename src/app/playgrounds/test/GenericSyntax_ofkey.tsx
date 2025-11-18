import React from "react";

function getProperty<T, U extends keyof T>(Obj: T, Key: U): T[U] {
  return Obj[Key];
}

const GenericSyntaxForkeyof = () => {
  const person = { name: "Jun Han", age: 36 };

  const name = getProperty(person, "name");
  const age = getProperty(person, "age");

  let defaultValue = undefined;

  if (defaultValue) {
    console.log(defaultValue, "test yy");
  } else {
    console.log(defaultValue, "test nn");
  }
  return (
    <>
      <h3 className="font-semibold text-2xl">Test generic syntax for keyof</h3>
      <p>
        name: {name}; age: {age}
      </p>
    </>
  );
};

export default GenericSyntaxForkeyof;
