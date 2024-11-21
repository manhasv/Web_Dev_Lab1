import { FaTrash, FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as db from "../../Database";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as coursesClient from "../client";
import { addPerson, deletePerson, setPeople } from "./reducer";
export default function PeopleTable() {
  const { cid } = useParams();
  const { users, enrollments } = db;
  const { people } = useSelector((state: any) => state.peopleReducer);
  const dispatch = useDispatch();
  const fetchPeople = async () => {
    const people = await coursesClient.findPeopleForCourse(cid as string);
    dispatch(setPeople(people));
  };
  useEffect(() => {
    fetchPeople();
  }, []);

  const removePerson = async (personId: string) => {
    await coursesClient.removePersonFromCourse(cid as string, personId);
    dispatch(deletePerson({personId, cid }));
  };
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
        </thead>
        <tbody>
          {people
            .map((user: any) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>
                  <span className="wd-last-name">{user.lastName}</span>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
                <td> {isFaculty && <FaTrash className="text-danger me-2 mb-1" onClick={() => removePerson(user._id)}/>}</td>
              </tr>
              ))}
        </tbody>

      </table>
    </div> );}