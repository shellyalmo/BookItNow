"use client";
import Image from "next/image";
import React from "react";

export default function Home() {
  const [serviceClicked, setServiceClicked] = React.useState(false);
  function handleClick() {
    setServiceClicked(!serviceClicked);
  }
  return (
    <>
      <nav>
        <ol>
          <li>
            <a href="#">log in</a>
          </li>
          <li>
            <a href="#">sign in</a>
          </li>
          <li>book it now!</li>
        </ol>
      </nav>
      <main>
        <h1>Metuktakot Nail Salon</h1>
        <Image src="/nails.png" alt="logo" width={200} height={200} />
        <h3>Your best nail salon in Givatayim</h3>
        <div className="services">
          <ol>
            Choose your service:
            <li>
              <button
                onClick={handleClick}
                style={{ backgroundColor: serviceClicked ? "red" : "white" }}
              >
                Gel Manicure 120
              </button>
            </li>
            <li>
              <button
                onClick={handleClick}
                style={{ backgroundColor: serviceClicked ? "red" : "white" }}
              >
                Pedicure 80
              </button>
            </li>
            <li>
              <button
                onClick={handleClick}
                style={{ backgroundColor: serviceClicked ? "red" : "white" }}
              >
                Manicure and Pedicure 200
              </button>
            </li>
          </ol>
          {serviceClicked && <button>Book Now</button>}
        </div>
      </main>
    </>
  );
}
