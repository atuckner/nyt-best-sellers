import { formatWeeksOnList } from "../utils";
import { SparklesIcon, TrophyIcon } from "./Icons";

type WeeksOnListProps = {
  weeks: number;
};

const NEWLY_LISTED = 1;
const LISTED_LONG_TERM = 20;

const WeeksOnList = ({ weeks }: WeeksOnListProps) => {
  let showIcon;

  if (weeks === NEWLY_LISTED) {
    showIcon = (
      <div className="weeks-on-list-icon">
        <SparklesIcon />
      </div>
    );
  }

  if (weeks >= LISTED_LONG_TERM) {
    showIcon = (
      <div className="weeks-on-list-icon">
        <TrophyIcon />
      </div>
    );
  }

  return (
    <div className="weeks-on-list">
      {showIcon}
      <p className="weeks-on-list-text">{formatWeeksOnList(weeks)}</p>
    </div>
  );
};

export default WeeksOnList;
