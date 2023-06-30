import "./TrafficSources.css"
import { Doughnut } from 'react-chartjs-2';

import{
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js"
// import { useEffect, useState } from "react";
// import { collection, doc, onSnapshot, setDoc  } from "firebase/firestore";
// import { firestore } from "../../Firebase/Firebase";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);


function TrafficSources (props) {


    // const datapie = [
        // {
    //     datasets : [{
    //         data:[3,6],
    //         backgroundColor:["red", "blue"],
    //     }]
// }
// ]
// datapie[0].datasets[0].data[0]

    // const [datapie,setDataPie] = useState(null)

    // useEffect(()=> {
    //     onSnapshot(collection(firestore, "pie-chart-data"), (snapshot)=>{
    //         const pieData = snapshot.docs.map((doc)=> {
    //             return{
    //                 id:doc.id,
    //                 ...doc.data()
    //             }
    //         })
    //         setDataPie(pieData)
    //     })
    // },[])


    // const handleDirect = (e) => {
    //     e.preventDefault() 
    //     if(e.target.value<0)
    //     {
    //         return null
    //     }

    //     datapie[0].datasets[0].data[0] = parseInt(e.target.value)

        
    //     const ref = doc(firestore,"pie-chart-data", "aIrsPBARTlnpAf5xeeU3")
    //     setDoc(ref,datapie[0])
    // } 

    // const handleSearch = (e) => {
    //     e.preventDefault() 
    //     if(e.target.value<0)
    //     {
    //         return null
    //     }

    //     datapie[0].datasets[0].data[1] = parseInt(e.target.value)

        
    //     const ref = doc(firestore,"pie-chart-data", "aIrsPBARTlnpAf5xeeU3")
    //     setDoc(ref,datapie[0])
    // } 



    return(
        <>
        <div className="TrafficSources">
        <div>
            <h1>Traffic Sources</h1>
            <hr />
        </div>

        <div className="inner-block">
                <p className="inner-data">source </p>
                <p className="inner-data">Traffic Source, %</p>
        </div>

        <div className="dataAndpie">
            <div className="inner-pie-data-cointainer">

        <div className="inner-pie-data">
            <div className="shade-direct"></div>
            <p>Direct</p>
            <input onChange={props.handleDirect} type="number" className="input" placeholder={props.data.datasets[0].data[0]}/>
            {/* <input onChange={(e) => props.handleDirect(e, props.data.id)} type="number" className="input" placeholder={props.data.datasets[0].data[0]}/> */}
            
        </div>

        <div className="inner-pie-data">


            <div className="shade-search">
            </div>
            <p>Search</p>
            <input onChange={(e) => props.handleSearch(e, props.data.id)} type="number" className="input" placeholder={props.data.datasets[0].data[1]}/>


                
        </div>
        </div>

        <div className="pie-chart">
            {props.data?<Doughnut data={props.data}/>:null}
        </div>

        </div>


        </div>




        
        </>
    )
}


export default TrafficSources;