import React from "react";
import { Grid, InputLabel } from "material-ui";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "../../components";
import avatar from "../../assets/img/faces/marc.jpg";

import { render } from 'react-dom';
import { StitchClientFactory } from 'mongodb-stitch';
import { browserHistory, Route } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom'
require("./todo.scss")
let appId = "nxhumanapi-hpevv";


//function myauth() {
  
if (process.env.APP_ID) {
  appId = process.env.APP_ID;
}

let mongodbService = "mongodb-atlas";
if (process.env.MONGODB_SERVICE) {
  mongodbService = process.env.MONGODB_SERVICE;
}

let options = {};
if (process.env.STITCH_URL) {
  options.baseUrl = process.env.STITCH_URL;
}
var aliasthis = this;
let stitchClientPromise = StitchClientFactory.create(appId,options);

var AuthControls = class extends React.Component {
  constructor(props){
    super(props)
    this.stitchClientPromise = this.stitchClientPromise.bind(this);
    this.state = {userData:null}
    this.stitchClient = props.stitchClient;
  }

  componentDidMount() {
    if (this.stitchClient.isAuthenticated()) {
      this.stitchClient.userProfile()
      .then(userData=>{
        this.setState({userData:userData.data})
      })
    }
  }
}




  //stitchClientPromise.then(stichClient => stichClient.authenticate("google"))
  
//}
  
class Login extends React.Component {

handleSubmit() {
  alert('Logged In Successfully!')
}


 render () {
  return (
    
    <div>
      <Progress
          percent={0}
          status="active"
      
        />
      <Grid container>
      
        <ItemGrid xs={12} sm={12} md={8}>
          <RegularCard
            cardTitle="Login Portal"
            cardSubtitle="Please Click Login, which will Log You into Google. Afterwards, Click Next Step!"
            content={
              <div>
                <Grid container>
                  
                  
           
                    <button 
                    //color="primary"
                    onClick = {() =>   stitchClientPromise.then(stichClient => stichClient.authenticate("google"))}
                    >Login With Google!
                    </button>
                    

                    {stitchClient => !stitchClient.isAuthenticated()
                    ?<div>
                      Success
                      </div>
                    :this.handleSubmit}
                  
                  
              
                  
                </Grid>
                
              </div>
            }
            footer={<Button 
            color="primary"
            onClick = {this.handleSubmit}
            href="/dashboard">Next Step
            </Button>}
          />
        </ItemGrid>
      </Grid>
      <ItemGrid>
      
      
          
          </ItemGrid>
    </div>
  
  );

}
}



export default Login;