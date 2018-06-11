import React from "react";
import { Grid } from "material-ui";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { RegularCard, Table, ItemGrid, Button } from "../../components";
<div id="root"></div>
function TableList({ ...props }) {
  return (
  
    
    <Grid container>
       <Progress
          percent={50}
          status="active"
      
        />
     
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          plainCard
          content={
            <Table
              tableHeaderColor="primary"
              tableHead={["Case", "Encounters", "Immunizations", "Medications", "Lab Values","Diagnostic Tests"]}
              tableData={[
               /*  ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
                ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
                ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
                [
                  "4",
                  "Philip Chaney",
                  "$38,735",
                  "Korea, South",
                  "Overland Park"
                ],
                [
                  "5",
                  "Doris Greene",
                  "$63,542",
                  "Malawi",
                  "Feldkirchen in Kärnten"
                ],
                ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"] */
              ]}
            />
          }
        />
        {<Button color="primary"
         href="/dialogue"
         >Next Step</Button>}
      </ItemGrid>
    </Grid>
    
  );

}

export default TableList;
