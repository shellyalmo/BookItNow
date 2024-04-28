import React from "react";

export default function Button({serviceName,handleClick}: {serviceName: string, handleClick:Function}) {
    const [serviceClicked, setServiceClicked] = React.useState(false);
    function handleServiceClick() {
      setServiceClicked(!serviceClicked);
      handleClick();
    }
    return (
        <button
        onClick={handleServiceClick}
        style={{ backgroundColor: serviceClicked ? "red" : "white" }}
      > {serviceName}
      </button>
    );
  }



