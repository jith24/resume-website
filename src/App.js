import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import PageProgress from 'react-page-progress';
import { PushSpinner } from "react-spinners-kit";
import ReactDOM from "react-dom";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        loading: true,
    };
}

componentDidMount() {
  this.setState({loading: false})
}


  render() {
    const { loading } = this.state;
    return (
      this.state.loading ? <div className="App"><PushSpinner
      size={30}
      color="#686769"
      loading={loading}/></div> : <div className="App">
        <Header resumeData={resumeData}/>
        <PageProgress color={'#007bff'} height ={5}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}
export default App;
ReactDOM.render(<App />, document.getElementById("root"));
