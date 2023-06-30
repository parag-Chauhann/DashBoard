import { useEffect, useState } from "react";
import { firestore } from "../../Firebase/Firebase";
import "./Sidebar.css";
import { collection, onSnapshot } from "firebase/firestore";

function Sidebar() {
    const [sidebar, setSidebar] = useState([])
    const [sidebarfooter, setSidebarfooter] = useState([])
    const [sidebarheader, setSidebarheader] = useState([])


        // fetching data for sidebar header from firebase as realtime updates 
        useEffect(()=>{
            onSnapshot(collection(firestore, "sidebarHeader", ), (snapshot)=> {
                const sidearheader = snapshot.docs.map((doc)=> {
                    return{
                        id:doc.id,
                        ...doc.data()
                    }
                })
                setSidebarheader(sidearheader)
    
            })
            
    
        },[])

        // fetching data for sidebar from firebase as realtime updates 
    useEffect(()=>{
        onSnapshot(collection(firestore, "sidebar", ), (snapshot)=> {
            const sideardata = snapshot.docs.map((doc)=> {
                return{
                    id:doc.id,
                    ...doc.data()
                }
            })
            setSidebar(sideardata)

        })
        

    },[])

    // fetching data for sidebar footer from firebase as realtime updates 
    useEffect(()=>{
        onSnapshot(collection(firestore, "sidebarfooter", ), (snapshot)=> {
            const sidearfooter = snapshot.docs.map((doc)=> {
                return{
                    id:doc.id,
                    ...doc.data()
                }
            })
            setSidebarfooter(sidearfooter)

        })
        

    },[])

  return (
    <>
    <div className="left"> 
    {/* SideBar Header */}
    <div className="sidebar-header">
    {sidebarheader.map((data, index)=>(
        <div key={index} className="sidebar-header">
        <img className="sidebar-header-icon" alt="sidebar-menu" src={data.icon}/>
        <h6 className="sidebar-header-title" >{data.title}</h6>
        </div>
    ))}
    </div>

    {/* sidebar Menu */}
    <div className="sidebar-main">
    {sidebar.map((data, index)=>(
        <div key={index} className="sidebar-menu" id="hard-hover">
        <img className="sidebar-icon" alt="sidebar-menu" src={data.icon}/>
        <h6 className="sidebar-title" >{data.title}</h6>
        </div>
    ))}
    </div>


    {/* sidebar footer */}
    <div className="sidebar-footer">
    {sidebarfooter.map((data, index)=>(
        <div key={index} className="sidebar-menu menu-hover">
        <img className="sidebar-icon" alt="sidebar-menu" src={data.icon}/>
        <h6 className="sidebar-title" >{data.title}</h6>
        </div>
    ))}


    </div>
    </div>

    </>
    
    
  );
}

export default Sidebar;