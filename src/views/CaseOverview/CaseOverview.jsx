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

const errorColor = {
  Color: '#f44336'
}
class UserProfile extends React.Component{
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
  isValidForm = () => {
    let valid1 = this.state.description!="";
    alert(this.state.description)
    
    if (!valid1) {
      this.setState({required1error: 'Required Field'});
  }
  else {
      this.setState({required1error: ''});
  }
  return valid1 ;
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
};

  handleSubmit(event) {
    alert('Information Stored and Associated With Case ID');
    window.location = '/patientchart'
    
    
  }

 

state = {

  patientcondition: '',
  firstname: '',
  lastname: '',
  age: '',
  location: '',
  description: '',
  required1error: ''


}


  render() {
  return (
     
    <div>
      <Progress
          percent={25}
          status="active"
      
        />
      <Grid container>
        <ItemGrid xs={12} sm={12} md={5}>
          <RegularCard
            cardTitle="Overall Patient Information"
            cardSubtitle="Please Fill Out the Following Information and Click Next Step to Continue. ***All fields are mandatory!***"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="***Patient Condition***"
                      id="patient-condition"
                      onChange = {this.state.patientcondition}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                      
                    />
                    <strong>{this.state.required1error}</strong>

                  </ItemGrid>
                  
                  
                </Grid>

                <Grid container>
                  <ItemGrid xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="***First Name***"
                      id="firstname"
                      onChange = {this.state.firstname}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                      
                    />
                    <strong>{this.state.required1error}</strong>

                  </ItemGrid>
                  
                  
                </Grid>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="***Last Name***"
                      id="last-name"
                      onChange = {this.state.lastname}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                      
                    />
                    <strong>{this.state.required1error}</strong>

                  </ItemGrid>
                  
                  
                </Grid>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="***Age***"
                      id="age"
                      onChange = {this.state.age}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                      
                    />
                    <strong>{this.state.required1error}</strong>

                  </ItemGrid>
                  
                  
                </Grid>
                
                <Grid container>
                  
                  <ItemGrid xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="***Location of Case***"
                      id="case-location"
                      onChange = {this.state.location}

                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                   <strong>{this.state.required1error}</strong>

                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={4}>
                    
                  </ItemGrid>
                </Grid>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <InputLabel style={{ color: "#AAAAAA" }}>
                      
                    </InputLabel>
                    <CustomInput
                      labelText="***Overall Case Description***"
                      id="about-me"
                      onChange = {this.state.description}

                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5
                      }}
                    />
                    <strong>{this.state.required1error}</strong>

                  </ItemGrid>
                </Grid>
              </div>
            }
            footer={<Button 
            color="primary"
            //href="/patientchart"
            onClick = {this.handleSubmit}
            >Next Step
            <a >
            </a>
            </Button>
            }
            
            
          />
           
        </ItemGrid>
        
        <ItemGrid xs={12} sm={12} md={15}>
          
        </ItemGrid>
      </Grid>
      
    </div>
  
  );
}
}


export default UserProfile;
