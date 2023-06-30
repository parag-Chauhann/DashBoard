import "./index.css"
import Sidebar from "./Components/Sidebar/Sidebar";
import TrafficSources from "./Components/TrafficSources/TrafficSources";
import { useEffect, useState } from "react";
import { collection, doc, onSnapshot, setDoc  } from "firebase/firestore";
import { firestore } from "../src/Firebase/Firebase";
import Header from "./Components/Header/Header";
import InnerHeader from "./Components/InnerHeader/InnerHeader";
import BarChart from "./Components/BarChart/BarChart";
import ProjectData from "./Components/ProjectData/ProjectData";
import ProjectData2 from "./Components/ProjectData/ProjectData2";


function App() {

  const [datapie,setDataPie] = useState([])

  useEffect(()=> {
      onSnapshot(collection(firestore, "pie-chart-data"), (snapshot)=>{
          const pieData = snapshot.docs.map((doc)=> {
              return{
                //   id:doc.id,
                  ...doc.data()
              }
          })
          console.log("piedata" , pieData)
          setDataPie(pieData)
      })
  },[])

  const handleDirect = (e) => {
    
    e.preventDefault() 
    if(e.target.value<0)
    {
        return null
    }

        // const data = {
    //     lables : ["yes", "No"],
    //     datasets : [{
    //         data:[3,6],
    //         backgroundColor:["red", "blue"],
    //     }]
    // }

    datapie[0].datasets[0].data[0] = parseInt(e.target.value)

    
    const ref = doc(firestore,"pie-chart-data", "aIrsPBARTlnpAf5xeeU3")
    setDoc(ref,datapie[0])
} 

const handleSearch = (e) => {
    e.preventDefault()
    if(e.target.value<0)
    {
        return null
    }

    datapie[0].datasets[0].data[1] = parseInt(e.target.value)

    
    const ref = doc(firestore,"pie-chart-data", "aIrsPBARTlnpAf5xeeU3")
    setDoc(ref,datapie[0])

} 

  
  return (
    <div className="App">
      <Sidebar />
      <div>
      <Header />
      </div>

      <div>
      <InnerHeader />
      </div>
      
      <div className=" BarChart-cointainer">
        <div>
        <BarChart />
        </div>
        <div>
        <span className="projectData-cointainer">
        <ProjectData />

        <div>
        <ProjectData2 />
        </div>
        
        </span>



        </div>
        

      </div>




      <div className="cointainer">
      {datapie.map((info ,i)=>{
        return(
            <div key={i}>
            <TrafficSources data={info}
                            handleDirect={handleDirect} 
                            handleSearch={handleSearch}/>
                            
                            </div>                 
        )
      }
      )}
      </div >
      

                        
    </div>
  );
}

export default App;
