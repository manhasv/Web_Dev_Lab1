import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-4">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" className="form-control" />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea
          id="wd-description"
          className="form-control"
          rows={9}
          defaultValue={`
          The assignment is available online. Submit a link to the landing page of your 
          Web application running on Netlify.
          
          The landing page should include the following:
          - Your full name and section
          - Links to each of the lab assignments
          - Link to the Kanbas application
          - Links to all relevant source code repositories
          The Kanbas application should include a link to navigate back to the landing page.`}
        />
      </div>

      <div className="d-flex flex-column align-items-start mb-4">
        <div className="w-100 mb-4 d-flex justify-content-end">
          <label htmlFor="wd-points" className="form-label me-2">Points</label>
          <input
            id="wd-points"
            value={100}
            className="form-control" 
            style={{ width: '900px' }} />
        </div>
        <div className="w-100 mb-4 d-flex justify-content-end">
          <label htmlFor="wd-group" className="form-label me-2">Assignment Groups</label>
          <select id="wd-group" className="form-control" style={{ width: '900px' }}>
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="Something">Something</option>
          </select>
        </div>

        <div className="w-100 mb-4 d-flex justify-content-end">
          <label htmlFor="wd-display-grade-as" className="form-label me-2" >Display Grade as</label>
          <select id="wd-display-grade-as" className="form-control" style={{ width: '900px' }}>
            <option value="Percentage">Percentage</option>
            <option value="Something">Something</option>
          </select>
        </div>

        <div className="w-100 mb-4 d-flex justify-content-end">
          <label htmlFor="wd-submission-type" className="form-label me-2">Submission Type</label>
          <div className="card" style={{ width: '900px' }}>
            <div className="card-body">
              <div className="mb-4">
                <select id="wd-submission-type" className="form-control">
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>
                
              </div>

              <div className="mb-4">
                <label className="form-label"> <strong>Online Entry Options:</strong></label>
                <div className="form-check">
                  <input type="checkbox" id="wd-text-entry" className="form-check-input" />
                  <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-website-url" className="form-check-input" defaultChecked />
                  <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
                  <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
                  <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotations</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-file-upload" className="form-check-input" />
                  <label htmlFor="wd-file-upload" className="form-check-label">File Upload</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100 mb-4 d-flex justify-content-end">
          <label htmlFor="wd-assign" className="form-label me-2">Assign</label>
            <div className="card" style={{ width: '900px' }}>
              <div className="card-body">
                <div className="mb-2">
                  <label className="col wd-assign"> <strong>Assign to</strong></label>
                </div>
                <div className="border p-2 mt-1">
                  <div className="border p-2 d-flex justify-content-between align-items-center" style={{ width: '200px' }}>
                    <span>Everyone</span>
                    <span>
                      <FaXmark />
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                </div>
                <div className="mb-4">
                  <label htmlFor="wd-due-date" className="form-label"><strong>Due</strong></label>
                  <input type="date" id="wd-due-date" className="form-control" value="2024-05-13" />
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <label htmlFor="wd-available-from" className="form-label"><strong>Available From</strong></label>
                    <input type="date" id="wd-available-from" className="form-control" value="2024-05-06" />
                  </div>

                  <div className="col">
                    <label htmlFor="wd-available-until" className="form-label"><strong>Until</strong></label>
                    <input type="date" id="wd-available-until" className="form-control" value="2024-05-20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-secondary me-2">Cancel</button>
        <button type="button" className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
