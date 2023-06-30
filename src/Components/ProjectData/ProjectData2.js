import { useState } from "react"
import "./ProjectData.css"

export default function ProjectData2() {
    const [projectData] = useState([
        {
        icon:"https://cdn0.iconfinder.com/data/icons/users-android-l-lollipop-icon-pack/24/user-512.png",
        percentage:"https://cdn0.iconfinder.com/data/icons/round-arrows-1/134/small_down_red-256.png",
        data:"326.06k",
        title:"Total Monthly Visit"
    },

    {
        icon:"https://cdn1.iconfinder.com/data/icons/gradak-interface/32/interface-81-256.png",
        percentage:"https://cdn0.iconfinder.com/data/icons/round-arrows-1/134/small_down_red-256.png",
        data:"00:03:27",
        title:"Avg. Visit Duration"
    },
])

    return (
        <div>
            {projectData.map((info, index)=>{
                return(
                <div className="projectData2" key={index}>
                    <div >
                        <img className="stats-logo" src={info.icon} alt="stats-logo"/>
                        <span>
                            <img className="arrow-logo" src={info.percentage} alt="questionMark"/>
                        </span>
                    </div>

                    <div className="data2">
                        <h1>{info.data}</h1>
                    <div  className="data2">
                        <p>{info.title}</p>
                        <span>
                            <img className="question-logo" src="https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/circle-question-256.png" alt="questionMark"/>
                        </span>
                    </div>
            </div>
        </div>
                )
            })}
            

        </div>
        
        // <div className="projectData" >
        //     <div >
        //         <img className="stats-logo" src="" alt="stats-logo"/>
        //         <span>
        //             <img className="arrow-logo" src="https://cdn2.iconfinder.com/data/icons/freeicons/PNG_256x256/Arrow%20Up.png" alt="questionMark"/>
        //         </span>
        //     </div>

        //     <div className="data">
        //         <h1>43%</h1>

        //         <div>
        //             <p>Bounce rate</p>
        //             <span>
        //             <img className="question-logo" src="https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/circle-question-256.png" alt="questionMark"/>
        //             </span>

        //         </div>
        //     </div>
        // </div>

        
    )
}