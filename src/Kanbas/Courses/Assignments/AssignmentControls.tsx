import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

export default function AssignmentControls() {
    return (
      <div id="wd-assignment-controls" className="d-flex justify-content-between align-items-center">
        <form className="d-flex me-1" role="search" style={{ width: '700px', height: '50px' }}>
        <div className="input-group">
          <div className="input-group-text">
            <FaSearch />
          </div>
          <input
            className="form-control"
            type="search"
            placeholder="Search for Assignment"
            aria-label="Search"/>
        </div>
      </form>
  
        {/* Buttons floated to the right */}
        <div className="d-flex">
          <button
            id="wd-add-assignment"
            className="btn btn-lg btn-danger me-1">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
          </button>
          <button
            id="wd-add-assignment-group"
            className="btn btn-lg btn-secondary">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
          </button>
        </div>
      </div>
    );
  }