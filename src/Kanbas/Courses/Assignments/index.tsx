import { useParams } from "react-router";
import * as db from "../../Database";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdAssignment } from 'react-icons/md'; 
export default function Assignments() {
  const { cid } = useParams();
  const assignment = db.assignment;
    return (
      <div>
        <AssignmentControls /><br /><br /><br /><br />
        <div id="wd-assignment-page">
          <ul id="wd-assignment" className="list-group rounded-0">
          <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
            <div id="wd-assignments-title" className="wd-title p-3 ps-2 d-flex justify-content-between align-items-center" style={{ backgroundColor: '#e0e0e0' }}>
                <div>
                  <BsGripVertical className="me-2 fs-3" />
                  <strong>ASSIGNMENTS</strong>
                </div>
                <div className="float-end">
                  <span className="badge rounded-pill border border-secondary text-dark me-3" style={{ backgroundColor: '#e0e0e0' }}>
                    40% of Total
                  </span>
                  <BsPlus size={24} />
                  <IoEllipsisVertical className="fs-4" />
                </div>
            </div>
              {assignment
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <ul className="wd-assignment-list list-group rounded-0">
                  <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdAssignment className="me-2 fs-3 green-icon" />
                  
                  <div className="me-3" style={{ whiteSpace: 'nowrap' }}>
                    <a className="wd-assignment-link"
                      href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}>
                      <span className="text-decoration-none text-dark bold-text"> {assignment.title} </span>
                    </a>
                    <span className="d-block">
                      <span style={{ color: 'red' }}>Multiple Modules </span> |
                      <strong> Not available until </strong> | May 13 at 12am |
                      </span>
                    <span className="d-block">
                      <strong> Due </strong> May 15 at 12am | 100pts
                      </span>
                  </div>
                  <div className="ms-auto">
                    <LessonControlButtons />
                  </div>
                </div>        
              </li>
                </ul>
              ))}
          </li>
          </ul>
        </div>
      </div>
      
  );}

  /*

              <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdAssignment className="me-2 fs-3 green-icon" />
                  
                  <div className="me-3" style={{ whiteSpace: 'nowrap' }}>
                    <a className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/123">
                      <span className="text-decoration-none text-dark bold-text">A1</span>
                    </a>
                    <span className="d-block">
                      <span style={{ color: 'red' }}>Multiple Modules </span> |
                      <strong> Not available until </strong> | May 13 at 12am |
                      </span>
                    <span className="d-block">
                      <strong> Due </strong> May 15 at 12am | 100pts
                      </span>
                  </div>
                  <div className="ms-auto">
                    <LessonControlButtons />
                  </div>
                </div>        
              </li>
  */
  