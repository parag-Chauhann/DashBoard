import "./Header.css";

function Header () {
    return (
        <>
        <div className="header">
            <div className="header-logo">
                <img className="logo" alt="logo" src="https://cdn1.iconfinder.com/data/icons/essentials-pack/96/friend_group_people_team_members-256.png"/>
            </div>

            <div>
                <select className="dropdown">
                    <option>Select Team</option>
                    <option>Team1</option>
                    <option>Team2</option>
                    <option>Team3</option>
                    <option>Team4</option>
                </select>
            </div>

            <div>
                <img className="logo" alt="logo" src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Plus-256.png"/>
            </div>


            <div className="profile">
            <img className="logo" alt="ProfilePicture" src="https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/18-man-256.png"/>
            <select className="profile-name">
                <option >Name1</option>
                <option>Team1</option>
                <option>Team2</option>
                <option>Team3</option>
                <option>Team4</option>
            </select>

            </div>

            
        </div>
        
        </>
        
    )
}

export default Header;