"use client";
import Image from "next/image";
import React from "react";
import Button from "./components/Button";
import { useReducer } from "react";

export default function Home() {

  const [services, dispatch] = useReducer(servicesReducer, initialServices);

  const handleServiceClicked = () => {
    dispatch({ type: "ADD_SERVICE", id: });
  };



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
              <Button serviceName={"Gel Manicure 120"} handleClick={handleServiceClicked}></Button>
            </li>
            <li>
              <Button serviceName={"Pedicure 80"} handleClick={handleServiceClicked}></Button>

            </li>
            <li>
              <Button serviceName={"Manicure and Pedicure 200"} handleClick={handleServiceClicked}></Button>

            </li>
          </ol>
          {serviceClicked && <button>Book Now</button>}
        </div>
      </main>
    </>
  );
}

const servicesReducer = (state: typeof initialServices, action: { type: string, id: number }) => {
  switch (action.type) {
    case "CLICKED":
      return {
        ...state,
        serviceClicked: !state.serviceClicked
      };
    default:
      return state;
  }
};

const initialServices = {
  serviceClicked: false,
  services: [
    {
      id: 1,
      serviceName: "Gel Manicure 120"
    },
    {
      id: 2,
      serviceName: "Pedicure 80"
    },
    {
      id: 3,
      serviceName: "Manicure and Pedicure 200"
    }
  ]
};
