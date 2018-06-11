import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid, Hidden } from "material-ui";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { render } from 'react-dom';
import { StitchClientFactory } from 'mongodb-stitch';
import { browserHistory, Route } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom'
import { RegularCard, P, A, ItemGrid } from "../../components";

import iconsStyle from "../../variables/styles/iconsStyle";
import {
  StatsCard,
  ChartCard,
  TasksCard,
  
  Table,
 
  CustomInput,
  Button
} from "../../components";


let appId = 'nxhumanapi-hpevv';
let stitchClientPromise = StitchClientFactory.create(appId);
stitchClientPromise.then(stitchClient => stitchClient.login())
  .then(() => console.log('logged in as: '))
  .catch(e => console.log('error: ', e));

function addItem(item) {
  
stitchClientPromise.then(stitchClient => {
    // mongodb1 is the name of the mongodb service registered with the app.
    let db = stitchClient.service('mongodb','mongodb-atlas').db('nxhuman');
    let itemsCollection = db.collection('test');
    // CRUD operations:
    const userId = stitchClient.authedId();
    return db.collection('test').updateOne(
      
        { owner_id: userId, x: item },
      
      
    );
  }).then(result => console.log('success: ', result))
    .catch(e => console.log('error: ', e));
}

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleChange(event) {
    this.setState({value: event.target.value});
    addItem(this.state.value);
  } 

  handleEmail() {
    this.send('nxhuman@unc.edu')
  }

handleSubmit2(event) {
    alert('Your Information was Completely Saved! Remember to Click Submit Your Case' );

    event.preventDefault();
  }

  handleSubmit(event) {
    alert('Your Case Was Emailed to NXHUMAN with your Case ID!' );
    window.location = '/login'
    event.preventDefault();
  }
  render () {
  return (
    <Grid container>
      <Progress
          percent={100}
          status= "success"
          status = "active"
      
        />
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          plainCard
          cardTitle="Review and Submit"
        
          cardSubtitle= "Please Click Final Save to Ensure All Data has been Associated with your Case ID and Saved to your Email. Then Click Submit to Email your Information to nxHuman!"
           
          
          content={
            <div>
            {/*{<Button 
            //onClick = {addItem(this.state.text)}
            color="primary"
            href="/caseoverview">Review/Edit Case Overview
            </Button>}

            {<Button 
            //onClick = {addItem(this.state.text)}
            color="primary"
            href="/patientchart">Review/Edit Patient Chart
            </Button>}

            {<Button 
            //onClick = {addItem(this.state.text)}
            color="primary"
            href="/dialogue">Review/Edit Dialogue
            </Button>}*/}

            <form onSubmit={this.handleSubmit2}>
            
            <input type="submit" value="Final Save of Components!" onClick = {addItem(this.state.text)} />
            </form>

            <form onSubmit={this.handleSubmit}>
            
            <input type="submit" value="Submit Your Case" onClick = {this.handleSubmit} />
            
            </form>

            </div>
          }
        />
        
      </ItemGrid>
    </Grid>
    
  );
}

}

/* Icons.propTypes = {
  classes: PropTypes.object.isRequired
}; */

export default withStyles(iconsStyle)(Review);
