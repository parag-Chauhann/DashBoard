import "./innerheader.css";

function InnerHeader () {
    return (
        <div className="inner-header">
            <h1>Project Statistic</h1>
            <div className="Statistic-days">
                <ul>
                    <button>30 Days</button>
                    <button>90 Days</button>
                    <button>6 Months</button>
                    <button>12 Months</button>
                </ul>
            </div>
        </div>
    )
}

export default InnerHeader;