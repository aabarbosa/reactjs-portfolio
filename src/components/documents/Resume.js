import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'
import resume from './AABarbosa.pdf';
import axios from 'axios'

/*
//TODO: Decide beet. axios and react-pdf
const apiURL = 'https://www.npmjs.com/package/react-pdf'
axios(`${apiURL}/pdf`, {  
  method: 'GET',  responseType: 'blob'
}).then(response => {
  file = new Blob([response.data],{type: 'application/pdf'});
  const fileURL = URL.createObjectURL(file);
  window.open(fileURL);}).catch(error => { console.log(error); });

*/

class Resume extends Component {
  state = {
    numPages: 2,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        {/*TODO: Solve not loading*/}
        <Document
          file={resume}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}

export default Resume 