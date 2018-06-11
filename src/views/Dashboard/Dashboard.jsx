/* global location */
/* eslint no-restricted-globals: ["off", "location"] */
import React from "react";
import PropTypes from "prop-types";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import axios from 'axios';
import ajax from 'ajax';
import $ from 'jquery'; 
import { render } from 'react-dom';
import { StitchClientFactory } from 'mongodb-stitch';
import { browserHistory, Route } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom'


import {
  ContentCopy,
  Store,
  InfoOutline,
  Warning,
  DateRange,
  LocalOffer,
  Update,
  ArrowUpward,
  AccessTime,
  Accessibility
} from "material-ui-icons";
import { withStyles, Grid } from "material-ui";

import {
  StatsCard,
  ChartCard,
  TasksCard,
  RegularCard,
  Table,
  ItemGrid,
  CustomInput,
  Button
} from "../../components";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../../variables/charts";

import dashboardStyle from "../../variables/styles/dashboardStyle";

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

class Dashboard extends React.Component {
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

  handleSubmit(event) {
    alert('Case ID Successfully Created and Associated With Email Address: ' + this.state.value);
    window.location='/caseoverview'
    event.preventDefault();
  }


  
  render() {
    return (
      <div>

        <Progress
          percent={0}
          status="active"
      
        />
        <Grid container> 
            <RegularCard
              cardTitle="Welcome to nXHuman Case Authoring Tool"
              cardSubtitle="nXHuman Case Authoring Tool Allows Instructors to Design Cases for their Students to Assess Patient Interaction. Enter a Case ID to Get Started."
            />
            <RegularCard
            cardTitle="CaseID"
            cardSubtitle="Create a Name for your Case and Click Next Step to Continue."
            content={
              <ItemGrid xs={12} sm={12} md={5}>
                      <form>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        
      </form>
                      
                      
            </ItemGrid>   
          } 
             />
          </Grid>   
            {<Button
            
            
            href="/caseoverview"
            onClick = {addItem(this.state.text)}
            onClick = {this.handleSubmit}
            color="primary"
            >Next Step
            
            </Button>}
            

      </div>
    );  
  }  
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);

  