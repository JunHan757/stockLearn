"use client";

import { useRef, useEffect } from "react";

function MyComponent() {
  // TypeScript: explicitly type the ref as HTMLDivElement
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!divRef.current) return;

    const p = document.createElement("p");
    p.innerHTML = `Hello`;
    divRef.current.appendChild(p);
  }, []);

  if (!divRef.current) {
    console.log("hello");
  }

  const handleClick = () => {
    // TypeScript knows divRef.current is HTMLDivElement | null
    if (divRef.current) {
      console.log(divRef.current);
      divRef.current.style.backgroundColor = "red";
    }
  };

  return (
    <div ref={divRef} onClick={handleClick}>
      Click me
    </div>
  );
}

export default MyComponent;
