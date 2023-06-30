import "./ProjectData.css"

export default function ProjectData() {
    return (
        <div className="main">
        <div className="projectData" >
            <div >
                <img className="stats-logo" src="https://cdn0.iconfinder.com/data/icons/business-startup-10/50/60-256.png" alt="stats-logo"/>
                <span>
                    <img className="arrow-logo" src="https://cdn2.iconfinder.com/data/icons/freeicons/PNG_256x256/Arrow%20Up.png" alt="questionMark"/>
                </span>
            </div>

            <div className="data">
                <h1>43%</h1>

                <div>
                    <p>Bounce rate</p>
                    <span>
                    <img className="question-logo" src="https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/circle-question-256.png" alt="questionMark"/>
                    </span>

                </div>
            </div>
        </div>

        <div className="projectData2" >
            <div >
                <img className="stats-logo" src="https://cdn0.iconfinder.com/data/icons/business-and-management-flat-8/24/CALENDER_date_event_daedline-256.png" alt="stats-logo"/>
            </div>

            <div className="data2">
                <h1>43%</h1>

                <div>
                    <p>pages per visit%</p>

                </div>
            </div>
        </div>
        </div>

        
    )
}