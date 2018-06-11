import React from "react";
import { Grid, InputLabel } from "material-ui";
import {
  withStyles,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from "material-ui";
import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "../../components";
import PropTypes from "prop-types";
import tableStyle from "../../variables/styles/tableStyle";
import CircularProgressbar from 'react-circular-progressbar'; 

import { StitchClientFactory } from 'mongodb-stitch';

let appId = 'nxhumanapi-hpevv';
let stitchClientPromise = StitchClientFactory.create(appId);
stitchClientPromise.then(stitchClient => stitchClient.login())
    .then(() => console.log('logged in as: '))
    .catch(e => console.log('error: ', e));



class PatientChart extends React.Component{ 
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
state = {
  weight: '',
  height: '',
  momhistory: '',
  dadhistory: '',
  cortisol: '',
  tsh: '',
  heartrate: '',
  bp: '',
  o2pressure: '',
  co2pressure: '',
  hemoglobin: '',
  wbc: '',
  Neck: '',
  neuro: '',
  mmr: '',
  flushot: '',
  glucose: '',
  protein: '',
  ldl: '',
  hdl: '',
  amylase: '',
  lipase: '',
  activemeds: '',
  inactivemeds: '',
  microsource: '',
  resultsofmicroculture: '',
  b12: '',
  folic: '',
  observationnotes: '',
  nutrition: '',
  lactate: '',
  albumin: '',
  alcohol: '',
  tylenol: '',
  rbc: '',
  glucose: '',
  sourceofviro: '',
  resultofviro: ''
}
   handleSubmit() {
    alert('Patient Chart Information Successfully Stored and Associated with Your Case ID! Remember to Click Next Step When You are done');
    stitchClientPromise.then(stitchClient => {
      // mongodb1 is the name of the mongodb service registered with the app.
      let db = stitchClient.service('mongodb','mongodb-atlas').db('nxhuman');
      let itemsCollection = db.collection('patientchart');
      // CRUD operations:
      const userId = stitchClient.authedId();
      return db.collection('patientchart').updateOne(

          { owner_id: userId, patientchart: this.state }


      );
  }).then(result => console.log('success: ', result))
      .catch(e => console.log('error: ', e));

}

handleChange = name => event => {
  this.setState({ [name]: event.target.value });
};




   handleSubmit2(event) {
    alert('Patient Chart Information Successfully Stored and Associated with Your Case ID!');
    event.preventDefault();
}

render() {
  return (
    <div>
     <RegularCard
     cardTitle="Patient Chart Information"
     cardSubtitle="Please Fill Out the Following Information and Click Save. Fields are Optional! Click Next Step when Finished."
     ></RegularCard> 
      <Grid container flexdirection = 'column'
            
                  >
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
          //Patient Info
            cardTitle="Patient Height and Weight"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Patient Weight"
                      id="weight"
                      value={this.state.weight}
                      onChange={this.handleChange('weight')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Patient Height"
                      id="height"
                      value={this.state.height}
                      onChange={this.handleChange('height')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Family History"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Medical History of Mother"
                      id="momhistory"
                      value={this.state.momhistory}
                      onChange={this.handleChange('momhistory')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Medical History of Father"
                      id="dadhistory"
                      value={this.state.dadhistory}
                      onChange={this.handleChange('dadhistory')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                 
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Endocrine Values"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Cortisol"
                      id="cortisol"
                      value={this.state.cortisol}
                      onChange={this.handleChange('cortisol')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="TSH"
                      id="tsh"
                      value={this.state.tsh}
                      onChange={this.handleChange('tsh')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  
                </Grid>
              </div>
            }
          />
        </ItemGrid>
      </Grid>

      <Grid container flexdirection = 'column'>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
          //Patient Info
            cardTitle="Flow and Vitals"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    
                    <CustomInput
                      labelText="Heart Rate"
                      id="heartrate"
                      value={this.state.heartrate}
                      onChange={this.handleChange('heartrate')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Blood Pressure"
                      id="bp"
                      value={this.state.bp}
                      onChange={this.handleChange('bp')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  
                  </ItemGrid>
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Gas Labs"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Oxygen Pressure"
                      id="o2pressure"
                      value={this.state.o2pressure}
                      onChange={this.handleChange('o2pressure')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Carbon Dioxide Pressure"
                      id="co2pressure"
                      value={this.state.co2pressure}
                      onChange={this.handleChange('co2pressure')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                 
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Hematology Labs"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Hemoglobin (g/dl)"
                      id="hemoglobin"
                      value={this.state.hemoglobin}
                      onChange={this.handleChange('hemoglobin')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="White Blood Count (x103/_l"
                      id="wbc"
                      value={this.state.wbc}
                      onChange={this.handleChange('wbc')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  
                </Grid>
              </div>
            }
          />
        </ItemGrid>
      </Grid>

      <Grid container flexdirection = 'column'>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
          //Patient Info
            cardTitle="Hospital Examination"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    
                    <CustomInput
                      labelText="Neck/Lymph Node Check"
                      id="Neck"
                      value={this.state.Neck}
                      onChange={this.handleChange('Neck')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Neurology Exam"
                      id="neuro"
                      value={this.state.neuro}
                      onChange={this.handleChange('neuro')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  
                  </ItemGrid>
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Immunizations"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Measles, Mumps, Rubella"
                      id="mmr"
                      value={this.state.mmr}
                      onChange={this.handleChange('mmr')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Flu Shot Current?"
                      id="flushot"
                      value={this.state.flushot}
                      onChange={this.handleChange('flushot')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                 
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Nutrient Labs"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Glucose (mg/dL)"
                      id="glucose"
                      value={this.state.glucose}
                      onChange={this.handleChange('glucose')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Protein (g/dL)"
                      id="protein"
                      value={this.state.protein}
                      onChange={this.handleChange('protein')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  
                </Grid>
              </div>
            }
          />
        </ItemGrid>
      </Grid>

    <Grid container flexdirection = 'column'>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
          //Patient Info
            cardTitle="Lipids"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    
                    <CustomInput
                      labelText="LDL (mg/dL)"
                      id="ldl"
                      value={this.state.ldl}
                      onChange={this.handleChange('ldl')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="HDL (mg/dL)"
                      id="hdl"
                      value={this.state.hdl}
                      onChange={this.handleChange('hdl')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  
                  </ItemGrid>
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Liver"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Amylase (U/L)"
                      id="amylase"
                      value={this.state.amylase}
                      onChange={this.handleChange('amylase')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Lipase"
                      id="lipase"
                      value={this.state.lipase}
                      onChange={this.handleChange('lipase')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                 
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Medications List"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Active Medications"
                      id="activemeds"
                      value={this.state.activemeds}
                      onChange={this.handleChange('activemeds')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Inactive Medications"
                      id="inactivemeds"
                      value={this.state.inactivemeds}
                      onChange={this.handleChange('inactivemeds')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  
                </Grid>
              </div>
            }
          />
        </ItemGrid>
      </Grid>

      <Grid container flexdirection = 'column'>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
          //Patient Info
            cardTitle="Microbiology"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    
                    <CustomInput
                      labelText="Source"
                      id="microsource"
                      value={this.state.microsource}
                      onChange={this.handleChange('microsource')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Overall Results of Culture"
                      id="resultsofmicroculture"
                      value={this.state.resultsofmicroculture}
                      onChange={this.handleChange('resultsofmicroculture')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  
                  </ItemGrid>
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Miscellanous Factors"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Vitamin B12 (pg/mL)"
                      id="b12"
                      value={this.state.b12}
                      onChange={this.handleChange('b12')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Folic Acid (ng/mL)"
                      id="folic"
                      value={this.state.folic}
                      onChange={this.handleChange('folic')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                 
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Patient Progress Notes"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Observation Notes"
                      id="observationnotes"
                      value={this.state.observationnotes}
                      onChange={this.handleChange('observationnotes')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Nutrition Summary"
                      id="nutrition"
                      value={this.state.nutrition}
                      onChange={this.handleChange('nutrition')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  
                </Grid>
              </div>
            }
          />
        </ItemGrid>
      </Grid>

      <Grid container flexdirection = 'column'>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
          //Patient Info
            cardTitle="Serum"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    
                    <CustomInput
                      labelText="Lactate"
                      id="lactate"
                      value={this.state.lactate}
                      onChange={this.handleChange('lactate')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Albumin"
                      id="albumin"
                      value={this.state.albumin}
                      onChange={this.handleChange('albumin')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  
                  </ItemGrid>
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Toxicology"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Alcohol Level"
                      id="alcohol"
                      value={this.state.alcohol}
                      onChange={this.handleChange('alcohol')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Acetaminophen Level"
                      id="tylenol"
                      value={this.state.tylenol}
                      onChange={this.handleChange('tylenol')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                 
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Urine Results"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Red Blood Cell Level"
                      id="rbc"
                      value={this.state.rbc}
                      onChange={this.handleChange('rbc')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Glucose Level"
                      id="glucose"
                      value={this.state.glucose}
                      onChange={this.handleChange('glucose')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  </ItemGrid>
                  
                </Grid>
              </div>
            }
          />
        </ItemGrid>
      </Grid>

      <Grid container flexdirection = 'column'>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
          //Patient Info
            cardTitle="Virology"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={10}>
                    
                    <CustomInput
                      labelText="Source"
                      id="sourceofviro"
                      value={this.state.sourceofviro}
                      onChange={this.handleChange('sourceofviro')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                    <CustomInput
                      labelText="Result"
                      id="resultsofviro"
                      value={this.state.resultofviro}
                      onChange={this.handleChange('resultsofviro')} 
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                  
                  </ItemGrid>
                </Grid>
              </div>
            }
          />
        </ItemGrid>
        
      </Grid>
      <Button 
            color="primary"
            onClick={this.handleSubmit}
            >Save
            <a >
            </a>
            </Button> 
             
            
         
           
        
    
    </div>
  );
}
}

export default PatientChart;
