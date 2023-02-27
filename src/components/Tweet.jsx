import Message from './Message';
import ProfileImage from './ProfileImage';
import Actions from './Actions';
import User from './User';
import Timestamp from './Timestamp';

function Tweet({tweet: {user, timestamp, message}}) {
  return (
    <div className="tweet">
      <ProfileImage image={user.image}/>

      <div className="body">
        <div className="top">
          <User {...user}/>

          <Timestamp timestamp={timestamp}/>
        </div>

        <Message message={message}/>

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
