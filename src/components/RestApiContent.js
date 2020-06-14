import React, { Component } from 'react'  
import axios from 'axios';  
import { Line } from 'react-chartjs-2';  
export class Linecharts extends Component {  
        constructor(props) {  
                super(props);  
                this.state = { Data: {} };  
        }  
        componentDidMount() {  
                axios.get(`https://canvasjs.com/data/gallery/react/nifty-stock-price.json`)  
                        .then(res => {  
                                console.log(res.data);  
                                const ipl = res.data;  
                                let playername = [];  
                                let runscore = [];  
                                ipl.forEach(record => {  
                                        playername.push(record.x/100000);  
                                        runscore.push(record.y);  
                                });  
                                this.setState({  
                                       Data: {  
                                                labels: playername,  
                                                datasets: [  
                                                        {  
                                                                label: 'IPL 2018/2019 Top Run Scorer',  
                                                               data: runscore,  
                                                                backgroundColor: [  
                                                                        "#3cb371",  
                                                                        "#0805FF",  
                                                                        "#9966FF",  
                                                                        "#4C4CFF",  
                                                                        "#0085FF",  
                                                                        "#f990a7",  
                                                                        "#aad2ed",  
                                                                        "#FF00FF",  
                                                                        "Blue",  
                                                                        "Red"  
                                                                ]  
                                                        }  
                                                ]  
                                        }  
                                });  
                        })  
        }  
        render() {  

          return (  
                        <div>  
                                <Line  
                                        data={this.state.Data}  
                                        options={{ maintainAspectRatio: false }} />  
                        </div>  
                )  
        }  
}  
export default Linecharts