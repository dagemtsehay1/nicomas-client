import { LeftSide } from "./_components/left-side";
import { RightSide } from "./_components/right-side";

export default function Donate() {
  return (
    <div className="flex flex-col sm:flex-row">
  <div className="sm:flex-1">
    <LeftSide />
  </div>
  <div className="sm:flex-1">
    <RightSide />
  </div>
</div>
  );
}
