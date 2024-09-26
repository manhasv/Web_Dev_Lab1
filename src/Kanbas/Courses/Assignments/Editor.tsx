export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <br /><br />
        <input id="wd-name" value="A1 - ENV + HTML" />
        <br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br /><br />
        <table>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        {/* Complete on your own */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Groups</label>
          </td>
          <select id="wd-group">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="Something">Something</option>
         </select>
        </tr>
        <br/>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <select id="wd-display-grade-as">
            <option value="Percentage">Percentage</option>
            <option value="Something">Something</option>
         </select>
        </tr>
        <br/>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <select id="wd-submission-type">
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
         </select>
        </tr>
        <br/>
        <tr>
            <td align="right" valign="top">
                <label>Online Entry Options:</label><br/>
            </td>
            <input type="checkbox"  id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label><br/>

            <input type="checkbox"  id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label><br/>

            <input type="checkbox"  id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

            <input type="checkbox"  id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotations</label><br/>

            <input type="checkbox"  id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Upload</label><br/>
        </tr>
        <br/>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign Assign to</label>
          </td>
          <td>
          <input id="wd-assign-to" defaultValue="Everyone" placeholder="Assign to" /><br/>
          </td>
        </tr>
        <br/>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
          <input type="date"
                  id="wd-due-date"
                  value="2024-05-13"/><br/>
        </tr>
        <br/>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from">Available From</label>
          </td>
          <input type="date"
                  id="wd-available-from"
                  value="2024-05-06"/><br/>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-until">Until</label>
          </td>
          <input type="date"
                  id="wd-available-until"
                  value="2024-05-20"/><br/>
        </tr>
        <br/>
        <tr>
          <td align="left" valign="top">
            ___________________<br/>
            <br/>
          <button type="button">
              Cancel
            </button>
            <button type="button">
              Save
            </button>
          </td>
          
        </tr>
        
      </table>
    </div>
);}
