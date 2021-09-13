import React from 'react'

const GetInTouch = () => {
  const [header] = React.useState({ 
    mainHeader: "Info.",
    subHeading: "Additional info.",
   
  });
    const [state] = React.useState([
        { id: 1, title: "Father's Name:", text: "Ajay Singh Rajput" },
        { id: 2, title: "Gender:", text: "Male" },
        { id: 3, title: "Marital Status:", text: "Unmarried" },
        { id: 4, title: "Nationality:", text: "India" },
      ]);
    return (
      <div id="additional">
      <div className="All">
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
    )
}

export default GetInTouch
