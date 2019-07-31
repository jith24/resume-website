import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <h6>Activities & Societies - {item.activities}</h6>
                          <p>
                          <div>{item.Achievements_1}</div>
                          <div>{item.Achievements_2}</div>
                          <div>{item.Achievements_3}</div>
                          <div>{item.Achievements_4}</div>
                          <div>{item.Achievements_5}</div>
                          <div>{item.Achievements_6}</div>
                          <div>{item.Achievements_7}</div>
                          <div>{item.Achievements_8}</div>
                          <div>{item.Achievements_9}</div>
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work & Experience</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          <div>{item.Achievements_1}</div>
                          <div>{item.Achievements_2}</div>
                          <div>{item.Achievements_3}</div>
                          <div>{item.Achievements_4}</div>
                          <div>{item.Achievements_5}</div>
                          <div>{item.Achievements_6}</div>
                          <div>{item.Achievements_7}</div>
                          <div>{item.Achievements_8}</div>
                          <div>{item.Achievements_9}</div>
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>
      </section>
    );
  }
}