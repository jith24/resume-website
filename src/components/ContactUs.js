import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work, football or a cup of tea :)
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Drop an email : 
                <a href="mailto:abhijithn@cet.ac.in"> abhijithn@cet.ac.in </a>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}