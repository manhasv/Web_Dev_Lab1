import { IoEllipsisVertical,   } from "react-icons/io5";
import {BsPlus} from "react-icons/bs";
import GreenCheckMark from "./GreenCheckMark";
export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckMark />
      <BsPlus size={24} />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
