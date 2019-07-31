import React, { Component } from 'react';
import Pdf from '../Documents/AbhijithNandagopal_Resume.pdf';
import dp from '../Documents/profilepic.JPG';
export default class About extends Component {
   onResumeClick() {
      window.open(Pdf);
    }
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="six columns">

               <img className="profile-pic"  src={dp} alt="" />

            </div>

            <div className="one columns" />


            <div className="five columns main-col test">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p><p className="things_center">Coder. Footballer. Guitarist. Photographer. Gamer</p>
               <div className="resume_button"><input type="button" value="Resume" onClick={this.onResumeClick} size="20" class="newButton" target = "_blank"/></div>
               

            </div>
         </div>
      </section>
    );
  }
}