import { Users, FriendSuggestion, Deadlines } from "../test-data/test-data";
import './rightBar.css';
import Online from "../Online/Online";
import { Avatar } from "@mui/material";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="rightbarComponentContainer">
        <div className="containerTitle">
          Suggestions For You
        </div>
        {FriendSuggestion.map((u) => (
          <div className="friendSuggestionRequest">
            <div className="friendSuggestionLeft">
              <div className="friendSuggestionAvatar">
                <Avatar src= {u.avatar} />
              </div>
              <div className="friendSuggestionName">
                {u.username}
              </div>
            </div>
            <div className="friendSuggestionRight">
              <button className="sendFriendRequest">Friend request</button>
            </div>
          </div>
        ))}
        <div className="showMore">
          Show more
        </div>
      </div>
      <div className="upcomingDeadline">
        <div className="rightbarComponentContainer">
          <div className="containerTitle">
            Upcoming Tests & Deadlines
          </div>
          {Deadlines.map((u) => (
            <div className="deadlineAndTest">
              <div className="moduleName">
                {u.module}
              </div>
              <div className="deadlineOrTest">
                {u.type}
              </div>
              <div className="date">
                {u.date}
              </div>
            </div>
          ))}
          <div className="showMore">
            Show more
          </div>
        </div>
      </div>
      <div className="rightbarComponentContainer">
        <div className="containerTitle">
          Friends & Recent Chat
        </div>
        <div className="Friend">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </div>
        <div className="showMore">
          Show more
        </div>
      </div>
    </div>
  )
}

export default RightBar
