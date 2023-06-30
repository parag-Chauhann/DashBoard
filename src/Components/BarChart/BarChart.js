import "./barchart.css"

import { Line } from 'react-chartjs-2';
import{
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from "chart.js"

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
);

export default function BarChart () {

    const data= {
        labels:["Jan,2023", "Feb,2023", "Mar,2023", "Apr,2023", "May,2023", "June,2023", "July,2023"],
        datasets:[{
            data:[28000000,21000000,35000000,20000000,39000000, 22000000, 25000000],
            backgroundColor:"transparent",
            borderColor:"#9e73f8",
            pointBorderColor:"transparent",
            pointBorderWidth:4,
            tension:0.5,
        }]
    };

    const options = {
        plugins:{
            legend:false
        },
        scales:{
            x:{
                grid:{
                    display:false,
                }
            },
            y:{
                min:10000000,
                max:40000000,
                ticks:{
                    stepSize:10000000,
                },
                grid:{
                    borderDash:[10]
                }
                
            }
        }
        
    }


    return(
        <div className="barchart">
            <div className="visits">
                <h1>Total visits</h1>
                <div>
                    <h1 className="visits-number">42,43M</h1>
                </div>
                
        </div>
        <hr />
            <div style={{width:"500px" , height:"500px", marginLeft: "20px"}}>
                <Line data={data} options={options}/>

            </div>

        </div>
    )
};
