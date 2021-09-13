import React from "react";


const GetInTouch = () => {
  const [header] = React.useState({
    mainHeader: "Get In Touch!",
    subHeading: "Contact Info.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Shishir Singh" },
    { id: 2, title: "Email:", text: "shishirsingh1998@gmail.com" },
    { id: 3, title: "Phone:", text: "+918218133271" },
    {
      id: 4,
      title: "Linkedin",
      text: "https://www.linkedin.com/in/shishir-singh-9093b0174",
    },
  ]);

  

  return (
    <div id="contact">
      <div className="ContactAll">
        <div className="container">
          <div className="Allheader">
            <div className="common">
              <h3 className="heading">{header.mainHeader}</h3>
              <h1 className="mainHeader">{header.subHeading}</h1>

              <div className="commonBorder"></div>
            </div>
            <div className="info__contacts">
              <div className="row">
                {state.map((info) => (
                  <div className="col-6">
                    <strong>{info.title}</strong>
                    <p>{info.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default GetInTouch;
