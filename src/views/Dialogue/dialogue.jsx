import React, { Component } from "react";
import { withStyles, Grid, GridList, ListItem, List, Card, FormControl, InputLabel, Checkbox, Input, MenuItem, Select } from "material-ui";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { StitchClientFactory } from 'mongodb-stitch';
import $ from 'jquery';
import {
    RegularCard,
    Button,
} from "../../components";

const style = {
    typo: {
        paddingLeft: "25%",
        marginBottom: "40px",
        position: "relative"
    },
    note: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        bottom: "10px",
        color: "#c0c1c2",
        display: "block",
        fontWeight: "400",
        fontSize: "13px",
        lineHeight: "13px",
        left: "0",
        marginLeft: "20px",
        position: "absolute",
        width: "260px"
    }
};

const errorColor = {
    color: '#f44336'
}

function PageHeader({ ...props }) {
    return (
        <div>
            <Progress
                percent={75}
                status="active"
            />

            <RegularCard
                cardTitle={"Student and Patient Dialogue"}
                cardSubtitle={"Use the Right Arrow Key to See More! Remember to Save Periodically and Click Next Step when Finished. ***Marked Fields are Required***"}
            />
        </div>
    );
}

function PageFooter({ ...props }) {
    return (
        <div>
            <Button
                color="primary"
                href="/review">Next Step
            </Button>
        </div>
    );
}

let appId = 'nxhumanapi-hpevv';
let stitchClientPromise = StitchClientFactory.create(appId);
stitchClientPromise.then(stitchClient => stitchClient.login())
    .then(() => console.log('logged in as: '))
    .catch(e => console.log('error: ', e));

class DialogueForm extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        greeting: '',
        greetingOptional: false,
        posGreeting: '',
        emotionsPosGreeting: '',
        posGreetingOptional: false,
        neutGreeting: '',
        emotionsNeutGreeting: '',
        neutGreetingOptional: false,
        negGreeting: '',
        emotionsNegGreeting: '',
        negGreetingOptional: false,

        chart: '',
        chartOptional: false,
        posChart: '',
        emotionsPosChart: '',
        posChartOptional: false,
        neutChart: '',
        emotionsNeutChart: '',
        neutChartOptional: false,
        negChart: '',
        emotionsNegChart: '',
        negChartOptional: false,
        chart2: '',
        chartOptional2: false,
        chart3: '',
        chartOptional3: false,
        posChart2: '',
        emotionsPosChart2: '',
        posChartOptional2: false,
        neutChart2: '',
        emotionsNeutChart2: '',
        neutChartOptional2: false,
        negChart2: '',
        emotionsNegChart2: '',
        negChartOptional2: false,
        posChart3: '',
        emotionsPosChart3: '',
        posChartOptional3: false,
        neutChart3: '',
        emotionsNeutChart3: '',
        neutChartOptional3: false,
        negChart3: '',
        emotionsNegChart3: '',
        negChartOptional3: false,

        problem: '',
        problemOptional: false,
        posProblem: '',
        emotionsPosProblem: '',
        posProblemOptional: false,
        neutProblem: '',
        emotionsNeutProblem: '',
        neutProblemOptional: false,
        negProblem: '',
        emotionsNegProblem: '',
        negProblemOptional: false,
        problem2: '',
        problemOptional2: false,
        problem3: '',
        problemOptional3: false,
        posProblem2: '',
        emotionsPosProblem2: '',
        posProblemOptional2: false,
        neutProblem2: '',
        emotionsNeutProblem2: '',
        neutProblemOptional2: false,
        negProblem2: '',
        emotionsNegProblem2: '',
        negProblemOptional2: false,
        posProblem3: '',
        emotionsPosProblem3: '',
        posProblemOptional3: false,
        neutProblem3: '',
        emotionsNeutProblem3: '',
        neutProblemOptional3: false,
        negProblem3: '',
        emotionsNegProblem3: '',
        negProblemOptional3: false,
        problem4: '',
        problemOptional4: false,
        posProblem4: '',
        emotionsPosProblem4: '',
        posProblemOptional4: false,
        neutProblem4: '',
        emotionsNeutProblem4: '',
        neutProblemOptional4: false,
        negProblem4: '',
        emotionsNegProblem4: '',
        negProblemOptional4: false,

        history: '',
        historyOptional: false,
        posHistory: '',
        emotionsPosHistory: '',
        posHistoryOptional: false,
        neutHistory: '',
        emotionsNeutHistory: '',
        neutHistoryOptional: false,
        negHistory: '',
        emotionsNegHistory: '',
        negHistoryOptional: false,
        history2: '',
        historyOptional2: false,
        history3: '',
        historyOptional3: false,
        posHistory2: '',
        emotionsPosHistory2: '',
        posHistoryOptional2: false,
        neutHistory2: '',
        emotionsNeutHistory2: '',
        neutHistoryOptional2: false,
        negHistory2: '',
        emotionsNegHistory2: '',
        negHistoryOptional2: false,
        posHistory3: '',
        emotionsPosHistory3: '',
        posHistoryOptional3: false,
        neutHistory3: '',
        emotionsNeutHistory3: '',
        neutHistoryOptional3: false,
        negHistory3: '',
        emotionsNegHistory3: '',
        negHistoryOptional3: false,

        diagnosis: '',
        diagnosisOptional: false,
        posDiagnosis: '',
        emotionsPosDiagnosis: '',
        posDiagnosisOptional: false,
        neutDiagnosis: '',
        emotionsNeutDiagnosis: '',
        neutDiagnosisOptional: false,
        negDiagnosis: '',
        emotionsNegDiagnosis: '',
        negDiagnosisOptional: false,
        diagnosis2: '',
        diagnosisOptional2: false,
        posDiagnosis2: '',
        emotionsPosDiagnosis2: '',
        posDiagnosisOptional2: false,
        neutDiagnosis2: '',
        emotionsNeutDiagnosis2: '',
        neutDiagnosisOptional2: false,
        negDiagnosis2: '',
        emotionsNegDiagnosis2: '',
        negDiagnosisOptional2: false,
        diagnosis3: '',
        diagnosisOptional3: false,
        diagnosis4: '',
        diagnosisOptional4: false,
        posDiagnosis3: '',
        emotionsPosDiagnosis3: '',
        posDiagnosisOptional3: false,
        neutDiagnosis3: '',
        emotionsNeutDiagnosis3: '',
        neutDiagnosisOptional3: false,
        negDiagnosis3: '',
        emotionsNegDiagnosis3: '',
        negDiagnosisOptional3: false,
        posDiagnosis4: '',
        emotionsPosDiagnosis4: '',
        posDiagnosisOptional4: false,
        neutDiagnosis4: '',
        emotionsNeutDiagnosis4: '',
        neutDiagnosisOptional4: false,
        negDiagnosis4: '',
        emotionsNegDiagnosis4: '',
        negDiagnosisOptional4: false,
        diagnosis5: '',
        diagnosisOptional5: false,
        posDiagnosis5: '',
        emotionsPosDiagnosis5: '',
        posDiagnosisOptional5: false,
        neutDiagnosis5: '',
        emotionsNeutDiagnosis5: '',
        neutDiagnosisOptional5: false,
        negDiagnosis5: '',
        emotionsNegDiagnosis5: '',
        negDiagnosisOptional5: false,
        diagnosis6: '',
        diagnosisOptional6: false,
        posDiagnosis6: '',
        emotionsPosDiagnosis6: '',
        posDiagnosisOptional6: false,
        neutDiagnosis6: '',
        emotionsNeutDiagnosis6: '',
        neutDiagnosisOptional6: false,
        negDiagnosis6: '',
        emotionsNegDiagnosis6: '',
        negDiagnosisOptional6: false,

        required1error: '',
        required2error: ''

    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleChangeCheckbox = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    handleSubmit(event) {
        if (!this.isValidForm()) {
            alert('Unable to Save. Required Fields Cannot Be Empty.')
            return;
        }

        alert('Dialogue Information Successfully Stored and Associated with Your Case ID! Remember to Click Next Step When You are Done');

        stitchClientPromise.then(stitchClient => {
            // mongodb1 is the name of the mongodb service registered with the app.
            let db = stitchClient.service('mongodb','mongodb-atlas').db('nxhuman');
            let itemsCollection = db.collection('dialogue');
            // CRUD operations:
            const userId = stitchClient.authedId();
            return db.collection('dialogue').updateOne(

                {
                    owner_id: userId,
                    dialogue: this.state
                }


            );
        }).then(result => console.log('success: ', result))
            .catch(e => console.log('error: ', e));
    }

    isValidForm = () => {
        let valid1 = this.state.problem && this.state.posProblem && this.state.neutProblem && this.state.negProblem;
        let valid2 = this.state.diagnosis && this.state.posDiagnosis && this.state.neutDiagnosis && this.state.negDiagnosis;
        if (!valid1) {
            this.setState({required1error: 'Required Field'});
        }
        else {
            this.setState({required1error: ''});
        }
        if (!valid2) {
            this.setState({required2error: 'Required Field'});
        }
        else {
            this.setState({required2error: ''});
        }
        return valid1 && valid2;
    }

    render() {
        const flexContainer = {
            display: 'flex',
            flexDirection: 'row',
            padding: 0,
            width: '100%'
        };

        const greetingContainer = {
            display: 'flex',
            flexDirection: 'row',
            padding: 0,
            width: '50%'
        };

        const problemFlexContainer = {
            display: 'flex',
            flexDirection: 'row',
            padding: 0,
            width: '150%'
        };

        const diagnosisFlexContainer = {
            display: 'flex',
            flexDirection: 'row',
            padding: 0,
            width: '250%'
        };


        const flexItem = {
            width: 1000,
            height: 900,
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            padding:'20px'
        };

        const problemItem = {
            width: 1500,
            height: 900,
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            padding:'20px'
        };

        const diagnosisItem = {
            width: 2500,
            height: 900,
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            padding:'20px'
        };

        return (
            <div style={{overflowX: 'auto'}}>
                <form onSubmit={this.handleSubmit}>
                    <List style={flexContainer}>
                        <ListItem style={greetingContainer}>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Greeting and Introduction</InputLabel>
                                    <Input id="greeting"
                                           value={this.state.greeting}
                                           onChange={this.handleChange('greeting')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.greetingOptional}
                                        onChange={this.handleChangeCheckbox('greetingOptional')}
                                        value="greetingOptional"
                                    />
                                </div>
                            </Card>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posGreeting"
                                           value={this.state.posGreeting}
                                           onChange={this.handleChange('posGreeting')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPosGreeting')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posGreetingOptional}
                                        onChange={this.handleChangeCheckbox('posGreetingOptional')}
                                        value="posGreetingOptional"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutGreeting"
                                           value={this.state.neutGreeting}
                                           onChange={this.handleChange('neutGreeting')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeutGreeting')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutGreetingOptional}
                                        onChange={this.handleChangeCheckbox('neutGreetingOptional')}
                                        value="neutGreetingOptional"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negGreeting"
                                           value={this.state.negGreeting}
                                           onChange={this.handleChange('negGreeting')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNegGreeting')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negGreetingOptional}
                                        onChange={this.handleChangeCheckbox('negGreetingOptional')}
                                        value="negGreetingOptional"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Check for Chart Updates</InputLabel>
                                    <Input id="chart"
                                           value={this.state.chart}
                                           onChange={this.handleChange('chart')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.chartOptional}
                                        onChange={this.handleChangeCheckbox('chartOptional')}
                                        value="chartOptional"
                                    />
                                </div>
                            </Card>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posChart"
                                           value={this.state.posChart}
                                           onChange={this.handleChange('posChart')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPosChart')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posChartOptional}
                                        onChange={this.handleChangeCheckbox('posChartOptional')}
                                        value="posChartOptional"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutChart"
                                           value={this.state.neutChart}
                                           onChange={this.handleChange('neutChart')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeutChart')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutChartOptional}
                                        onChange={this.handleChangeCheckbox('neutChartOptional')}
                                        value="neutChartOptional"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negChart"
                                           value={this.state.negChart}
                                           onChange={this.handleChange('negChart')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNegChart')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negChartOptional}
                                        onChange={this.handleChangeCheckbox('negChartOptional')}
                                        value="negChartOptional"
                                    />
                                </div>
                            </Card>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Follow-Up Questions</InputLabel>
                                    <Input id="chart2"
                                           value={this.state.chart2}
                                           onChange={this.handleChange('chart2')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.chartOptional2}
                                        onChange={this.handleChangeCheckbox('chartOptional2')}
                                        value="chartOptional2"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Follow-Up Response</InputLabel>
                                    <Input id="chart3"
                                           value={this.state.chart3}
                                           onChange={this.handleChange('chart3')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.chartOptional3}
                                        onChange={this.handleChangeCheckbox('chartOptional3')}
                                        value="chartOptional3"
                                    />
                                </div>
                            </Card>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posChart2"
                                           value={this.state.posChart2}
                                           onChange={this.handleChange('posChart2')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPosChart2')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posChartOptional2}
                                        onChange={this.handleChangeCheckbox('posChartOptional2')}
                                        value="posChartOptional2"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutChart2"
                                           value={this.state.neutChart2}
                                           onChange={this.handleChange('neutChart2')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeutChart2')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutChartOptional2}
                                        onChange={this.handleChangeCheckbox('neutChartOptional2')}
                                        value="neutChartOptional2"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negChart2"
                                           value={this.state.negChart2}
                                           onChange={this.handleChange('negChart2')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNegChart2')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negChartOptional2}
                                        onChange={this.handleChangeCheckbox('negChartOptional2')}
                                        value="negChartOptional2"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posChart3"
                                           value={this.state.posChart3}
                                           onChange={this.handleChange('posChart3')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPosChart3')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posChartOptional3}
                                        onChange={this.handleChangeCheckbox('posChartOptional3')}
                                        value="posChartOptional3"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutChart3"
                                           value={this.state.neutChart3}
                                           onChange={this.handleChange('neutChart3')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeutChart3')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutChartOptional3}
                                        onChange={this.handleChangeCheckbox('neutChartOptional3')}
                                        value="neutChartOptional3"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negChart3"
                                           value={this.state.negChart3}
                                           onChange={this.handleChange('negChart3')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNegChart3')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negChartOptional3}
                                        onChange={this.handleChangeCheckbox('negChartOptional3')}
                                        value="negChartOptional3"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem style={problemFlexContainer}>
                            <Card style={problemItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>***Ask about Problem***</InputLabel>
                                    <Input id="problem"
                                           value={this.state.problem}
                                           onChange={this.handleChange('problem')} />
                                    <strong style={errorColor}>{this.state.required1error}</strong>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.problemOptional}
                                        onChange={this.handleChangeCheckbox('problemOptional')}
                                        value="problemOptional"
                                    />
                                </div>
                            </Card>
                            <Card style={problemItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>***Patient Response***</InputLabel>
                                    <Input id="posProblem"
                                           value={this.state.posProblem}
                                           onChange={this.handleChange('posProblem')}
                                           />
                                    <strong style={errorColor}>{this.state.required1error}</strong>
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPosProblem')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posProblemOptional}
                                        onChange={this.handleChangeCheckbox('posProblemOptional')}
                                        value="posProblemOptional"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>***Patient Response***</InputLabel>
                                    <Input id="neutProblem"
                                           value={this.state.neutProblem}
                                           onChange={this.handleChange('neutProblem')}
                                    />
                                    <strong style={errorColor}>{this.state.required1error}</strong>
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeutProblem')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutProblemOptional}
                                        onChange={this.handleChangeCheckbox('neutProblemOptional')}
                                        value="neutProblemOptional"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>***Patient Response***</InputLabel>
                                    <Input id="negProblem"
                                           value={this.state.negProblem}
                                           onChange={this.handleChange('negProblem')}
                                    />
                                    <strong style={errorColor}>{this.state.required1error}</strong>
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNegProblem')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negProblemOptional}
                                        onChange={this.handleChangeCheckbox('negProblemOptional')}
                                        value="negProblemOptional"
                                    />
                                </div>
                            </Card>
                            <Card style={problemItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Follow-Up Questions</InputLabel>
                                    <Input id="problem2"
                                           value={this.state.problem2}
                                           onChange={this.handleChange('problem2')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.problemOptional2}
                                        onChange={this.handleChangeCheckbox('problemOptional2')}
                                        value="problemOptional2"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Lead into Physical Examination</InputLabel>
                                    <Input id="problem3"
                                           value={this.state.problem3}
                                           onChange={this.handleChange('problem3')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.problemOptional3}
                                        onChange={this.handleChangeCheckbox('problemOptional3')}
                                        value="problemOptional3"
                                    />
                                </div>
                            </Card>
                            <Card style={problemItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posProblem2"
                                           value={this.state.posProblem2}
                                           onChange={this.handleChange('posProblem2')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPosProblem2')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posProblemOptional2}
                                        onChange={this.handleChangeCheckbox('posProblemOptional2')}
                                        value="posProblemOptional2"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutProblem2"
                                           value={this.state.neutProblem2}
                                           onChange={this.handleChange('neutProblem2')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeutProblem2')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutProblemOptional2}
                                        onChange={this.handleChangeCheckbox('neutProblemOptional2')}
                                        value="neutProblemOptional2"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negProblem2"
                                           value={this.state.negProblem2}
                                           onChange={this.handleChange('negProblem2')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNegProblem2')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negProblemOptional2}
                                        onChange={this.handleChangeCheckbox('negProblemOptional2')}
                                        value="negProblemOptional2"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posProblem3"
                                           value={this.state.posProblem3}
                                           onChange={this.handleChange('posProblem3')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPosProblem3')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posProblemOptional3}
                                        onChange={this.handleChangeCheckbox('posProblemOptional3')}
                                        value="posProblemOptional3"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutProblem3"
                                           value={this.state.neutProblem3}
                                           onChange={this.handleChange('neutProblem3')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeutProblem3')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutProblemOptional3}
                                        onChange={this.handleChangeCheckbox('neutProblemOptional3')}
                                        value="neutProblemOptional3"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negProblem3"
                                           value={this.state.negProblem3}
                                           onChange={this.handleChange('negProblem3')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNegProblem3')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negProblemOptional3}
                                        onChange={this.handleChangeCheckbox('negProblemOptional3')}
                                        value="negProblemOptional3"
                                    />
                                </div>
                            </Card>
                            <Card style={problemItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Ask for Additional Concerns</InputLabel>
                                    <Input id="problem4"
                                           value={this.state.problem4}
                                           onChange={this.handleChange('problem4')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.problemOptional4}
                                        onChange={this.handleChangeCheckbox('problemOptional4')}
                                        value="problemOptional4"
                                    />
                                </div>
                            </Card>
                            <Card style={problemItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posProblem4"
                                           value={this.state.posProblem4}
                                           onChange={this.handleChange('posProblem4')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPosProblem4')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posProblemOptional4}
                                        onChange={this.handleChangeCheckbox('posProblemOptional4')}
                                        value="posProblemOptional4"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutProblem4"
                                           value={this.state.neutProblem4}
                                           onChange={this.handleChange('neutProblem4')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeutProblem4')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutProblemOptional4}
                                        onChange={this.handleChangeCheckbox('neutProblemOptional4')}
                                        value="neutProblemOptional4"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negProblem4"
                                           value={this.state.negProblem4}
                                           onChange={this.handleChange('negProblem4')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNegProblem4')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negProblemOptional4}
                                        onChange={this.handleChangeCheckbox('negProblemOptional4')}
                                        value="negProblemOptional4"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Update Family History of [Disease]</InputLabel>
                                    <Input id="history"
                                           value={this.state.history}
                                           onChange={this.handleChange('history')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.historyOptional}
                                        onChange={this.handleChangeCheckbox('historyOptional')}
                                        value="historyOptional"
                                    />
                                </div>
                            </Card>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posHistory"
                                           value={this.state.posHistory}
                                           onChange={this.handleChange('posHistory')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPosHistory')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posHistoryOptional}
                                        onChange={this.handleChangeCheckbox('posHistoryOptional')}
                                        value="posHistoryOptional"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutHistory"
                                           value={this.state.neutHistory}
                                           onChange={this.handleChange('neutHistory')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeutHistory')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutHistoryOptional}
                                        onChange={this.handleChangeCheckbox('neutHistoryOptional')}
                                        value="neutHistoryOptional"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negHistory"
                                           value={this.state.negHistory}
                                           onChange={this.handleChange('negHistory')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNegHistory')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negHistoryOptional}
                                        onChange={this.handleChangeCheckbox('negHistoryOptional')}
                                        value="negHistoryOptional"
                                    />
                                </div>
                            </Card>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Follow-Up Questions</InputLabel>
                                    <Input id="history2"
                                           value={this.state.history2}
                                           onChange={this.handleChange('history2')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.historyOptional2}
                                        onChange={this.handleChangeCheckbox('historyOptional2')}
                                        value="historyOptional2"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Follow-Up Response</InputLabel>
                                    <Input id="history3"
                                           value={this.state.history3}
                                           onChange={this.handleChange('history3')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.historyOptional3}
                                        onChange={this.handleChangeCheckbox('historyOptional3')}
                                        value="historyOptional3"
                                    />
                                </div>
                            </Card>
                            <Card style={flexItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posHistory2"
                                           value={this.state.posHistory2}
                                           onChange={this.handleChange('posHistory2')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPosHistory2')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posHistoryOptional2}
                                        onChange={this.handleChangeCheckbox('posHistoryOptional2')}
                                        value="posHistoryOptional2"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutHistory2"
                                           value={this.state.neutHistory2}
                                           onChange={this.handleChange('neutHistory2')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeutHistory2')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutHistoryOptional2}
                                        onChange={this.handleChangeCheckbox('neutHistoryOptional2')}
                                        value="neutHistoryOptional2"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negHistory2"
                                           value={this.state.negHistory2}
                                           onChange={this.handleChange('negHistory2')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNegHistory2')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negHistoryOptional2}
                                        onChange={this.handleChangeCheckbox('negHistoryOptional2')}
                                        value="negHistoryOptional2"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posHistory3"
                                           value={this.state.posHistory3}
                                           onChange={this.handleChange('posHistory3')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPosHistory3')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posHistoryOptional3}
                                        onChange={this.handleChangeCheckbox('posHistoryOptional3')}
                                        value="posHistoryOptional3"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutHistory3"
                                           value={this.state.neutHistory3}
                                           onChange={this.handleChange('neutHistory3')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeutHistory3')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutHistoryOptional3}
                                        onChange={this.handleChangeCheckbox('neutHistoryOptional3')}
                                        value="neutHistoryOptional3"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negHistory3"
                                           value={this.state.negHistory3}
                                           onChange={this.handleChange('negHistory3')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNegHistory3')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negHistoryOptional3}
                                        onChange={this.handleChangeCheckbox('negHistoryOptional3')}
                                        value="negHistoryOptional3"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                        <ListItem style={diagnosisFlexContainer}>
                            <Card style={diagnosisItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>***Diagnosis and Treatment***</InputLabel>
                                    <Input id="diagnosis"
                                           value={this.state.diagnosis}
                                           onChange={this.handleChange('diagnosis')} />
                                    <strong style={errorColor}>{this.state.required2error}</strong>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.diagnosisOptional}
                                        onChange={this.handleChangeCheckbox('diagnosisOptional')}
                                        value="diagnosisOptional"
                                    />
                                </div>
                            </Card>
                            <Card style={diagnosisItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>***Patient Response***</InputLabel>
                                    <Input id="posDiagnosis"
                                           value={this.state.posDiagnosis}
                                           onChange={this.handleChange('posDiagnosis')} />
                                    <strong style={errorColor}>{this.state.required2error}</strong>
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPosDiagnosis')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posDiagnosisOptional}
                                        onChange={this.handleChangeCheckbox('posDiagnosisOptional')}
                                        value="posDiagnosisOptional"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>***Patient Response***</InputLabel>
                                    <Input id="neutDiagnosis"
                                           value={this.state.neutDiagnosis}
                                           onChange={this.handleChange('neutDiagnosis')} />
                                    <strong style={errorColor}>{this.state.required2error}</strong>
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeutDiagnosis')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutDiagnosisOptional}
                                        onChange={this.handleChangeCheckbox('neutDiagnosisOptional')}
                                        value="neutDiagnosisOptional"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>***Patient Response***</InputLabel>
                                    <Input id="negDiagnosis"
                                           value={this.state.negDiagnosis}
                                           onChange={this.handleChange('negDiagnosis')} />
                                    <strong style={errorColor}>{this.state.required2error}</strong>
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNegDiagnosis')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negDiagnosisOptional}
                                        onChange={this.handleChangeCheckbox('negDiagnosisOptional')}
                                        value="negDiagnosisOptional"
                                    />
                                </div>
                            </Card>
                            <Card style={diagnosisItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Ask for Patient Questions</InputLabel>
                                    <Input id="diagnosis2"
                                           value={this.state.diagnosis2}
                                           onChange={this.handleChange('diagnosis2')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.diagnosisOptional2}
                                        onChange={this.handleChangeCheckbox('diagnosisOptional2')}
                                        value="diagnosisOptional2"
                                    />
                                </div>
                            </Card>
                            <Card style={diagnosisItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posDiagnosis2"
                                           value={this.state.posDiagnosis2}
                                           onChange={this.handleChange('posDiagnosis2')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPosDiagnosis2')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posDiagnosisOptional2}
                                        onChange={this.handleChangeCheckbox('posDiagnosisOptional2')}
                                        value="posDiagnosisOptional2"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutDiagnosis2"
                                           value={this.state.neutDiagnosis2}
                                           onChange={this.handleChange('neutDiagnosis2')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeutDiagnosis2')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutDiagnosisOptional2}
                                        onChange={this.handleChangeCheckbox('neutDiagnosisOptional2')}
                                        value="neutDiagnosisOptional2"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negDiagnosis2"
                                           value={this.state.negDiagnosis2}
                                           onChange={this.handleChange('negDiagnosis2')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNegDiagnosis2')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negDiagnosisOptional2}
                                        onChange={this.handleChangeCheckbox('negDiagnosisOptional2')}
                                        value="negDiagnosisOptional2"
                                    />
                                </div>
                            </Card>
                            <Card style={diagnosisItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Follow-Up Response</InputLabel>
                                    <Input id="diagnosis3"
                                           value={this.state.diagnosis3}
                                           onChange={this.handleChange('diagnosis3')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.diagnosisOptional3}
                                        onChange={this.handleChangeCheckbox('diagnosisOptional3')}
                                        value="diagnosisOptional3"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Follow-Up Response</InputLabel>
                                    <Input id="diagnosis4"
                                           value={this.state.diagnosis4}
                                           onChange={this.handleChange('diagnosis4')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.diagnosisOptional4}
                                        onChange={this.handleChangeCheckbox('diagnosisOptional4')}
                                        value="diagnosisOptional4"
                                    />
                                </div>
                            </Card>
                            <Card style={diagnosisItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posDiagnosis3"
                                           value={this.state.posDiagnosis3}
                                           onChange={this.handleChange('posDiagnosis3')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPosDiagnosis3')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posDiagnosisOptional3}
                                        onChange={this.handleChangeCheckbox('posDiagnosisOptional3')}
                                        value="posDiagnosisOptional3"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutDiagnosis3"
                                           value={this.state.neutDiagnosis3}
                                           onChange={this.handleChange('neutDiagnosis3')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeutDiagnosis3')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutDiagnosisOptional3}
                                        onChange={this.handleChangeCheckbox('neutDiagnosisOptional3')}
                                        value="neutDiagnosisOptional3"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negDiagnosis3"
                                           value={this.state.negDiagnosis3}
                                           onChange={this.handleChange('negDiagnosis3')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNegDiagnosis3')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negDiagnosisOptional3}
                                        onChange={this.handleChangeCheckbox('negDiagnosisOptional3')}
                                        value="negDiagnosisOptional3"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posDiagnosis4"
                                           value={this.state.posDiagnosis4}
                                           onChange={this.handleChange('posDiagnosis4')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPosDiagnosis4')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posDiagnosisOptional4}
                                        onChange={this.handleChangeCheckbox('posDiagnosisOptional4')}
                                        value="posDiagnosisOptional4"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutDiagnosis4"
                                           value={this.state.neutDiagnosis4}
                                           onChange={this.handleChange('neutDiagnosis4')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeutDiagnosis4')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutDiagnosisOptional4}
                                        onChange={this.handleChangeCheckbox('neutDiagnosisOptional4')}
                                        value="neutDiagnosisOptional4"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negDiagnosis4"
                                           value={this.state.negDiagnosis4}
                                           onChange={this.handleChange('negDiagnosis4')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNegDiagnosis4')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negDiagnosisOptional4}
                                        onChange={this.handleChangeCheckbox('negDiagnosisOptional4')}
                                        value="negDiagnosisOptional4"
                                    />
                                </div>
                            </Card>
                            <Card style={diagnosisItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Additional Instructions</InputLabel>
                                    <Input id="diagnosis5"
                                           value={this.state.diagnosis5}
                                           onChange={this.handleChange('diagnosis5')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.diagnosisOptional5}
                                        onChange={this.handleChangeCheckbox('diagnosisOptional5')}
                                        value="diagnosisOptional5"
                                    />
                                </div>
                            </Card>
                            <Card style={diagnosisItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posDiagnosis5"
                                           value={this.state.posDiagnosis5}
                                           onChange={this.handleChange('posDiagnosis5')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPosDiagnosis5')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posDiagnosisOptional5}
                                        onChange={this.handleChangeCheckbox('posDiagnosisOptional5')}
                                        value="posDiagnosisOptional5"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutDiagnosis5"
                                           value={this.state.neutDiagnosis5}
                                           onChange={this.handleChange('neutDiagnosis5')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeutDiagnosis5')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutDiagnosisOptional5}
                                        onChange={this.handleChangeCheckbox('neutDiagnosisOptional5')}
                                        value="neutDiagnosisOptional5"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negDiagnosis5"
                                           value={this.state.negDiagnosis5}
                                           onChange={this.handleChange('negDiagnosis5')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNegDiagnosis5')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negDiagnosisOptional5}
                                        onChange={this.handleChangeCheckbox('negDiagnosisOptional5')}
                                        value="negDiagnosisOptional5"
                                    />
                                </div>
                            </Card>
                            <Card style={diagnosisItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Goodbye</InputLabel>
                                    <Input id="diagnosis6"
                                           value={this.state.diagnosis6}
                                           onChange={this.handleChange('diagnosis6')} />
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.diagnosisOptional6}
                                        onChange={this.handleChangeCheckbox('diagnosisOptional6')}
                                        value="diagnosisOptional6"
                                    />
                                </div>
                            </Card>
                            <Card style={diagnosisItem}>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="posDiagnosis6"
                                           value={this.state.posDiagnosis6}
                                           onChange={this.handleChange('posDiagnosis6')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="positive"
                                        onChange={this.handleChange('emotionsPosDiagnosis6')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.posDiagnosisOptional6}
                                        onChange={this.handleChangeCheckbox('posDiagnosisOptional6')}
                                        value="posDiagnosisOptional6"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="neutDiagnosis6"
                                           value={this.state.neutDiagnosis6}
                                           onChange={this.handleChange('neutDiagnosis6')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="neutral"
                                        onChange={this.handleChange('emotionsNeutDiagnosis6')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.neutDiagnosisOptional6}
                                        onChange={this.handleChangeCheckbox('neutDiagnosisOptional6')}
                                        value="neutDiagnosisOptional6"
                                    />
                                </div>
                                <FormControl fullWidth={true}>
                                    <InputLabel>Patient Response</InputLabel>
                                    <Input id="negDiagnosis6"
                                           value={this.state.negDiagnosis6}
                                           onChange={this.handleChange('negDiagnosis6')} />
                                </FormControl>
                                <FormControl>
                                    <Select
                                        value="negative"
                                        onChange={this.handleChange('emotionsNegDiagnosis6')}
                                    >
                                        <MenuItem value="positive">Positive</MenuItem>
                                        <MenuItem value="neutral">Neutral</MenuItem>
                                        <MenuItem value="negative">Negative</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    Optional:
                                    <Checkbox
                                        checked={this.state.negDiagnosisOptional6}
                                        onChange={this.handleChangeCheckbox('negDiagnosisOptional6')}
                                        value="negDiagnosisOptional6"
                                    />
                                </div>
                            </Card>
                        </ListItem>
                    </List>
                </form>
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

function TypographyPage({ ...props }) {
    return (
        <div>
            <PageHeader/>
            <Grid container>
                <DialogueForm/>
            </Grid>
            <PageFooter/>
        </div>
    );
}

export default withStyles(style)(TypographyPage);
