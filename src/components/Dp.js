
import { shortName, getRandomColor } from '../utilities/UserImage';

const Dp = ({ name, available }) => {
    return (
      <div
        className="photo"
        style={{ backgroundColor: getRandomColor(), position: "relative" }}
      >
        {shortName(name)}
        <div className="userstatus" style={{backgroundColor: available ? "#00FF00" : "#989898",}}/>
      </div>
    );
  };

  export default Dp