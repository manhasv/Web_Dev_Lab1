import { Link, useNavigate } from "react-router-dom";
import { enroll, setEnrollments, unenroll } from "./Enrollment/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as userClient from "./Account/client";
import * as enrollmentClient from "./Enrollment/client";

export default function Dashboard({
  allCourses,
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  refreshCourses
}: {
  allCourses: any[];
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  refreshCourses: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [viewAllCourses, setViewAllCourses] = useState(false);
  const displayed = viewAllCourses ? allCourses : courses;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isFaculty = currentUser?.role === "FACULTY";

  const handleEnrollToggle = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await enrollmentClient.unenrollUserFromCourse(currentUser._id, courseId);
      dispatch(unenroll({ user: currentUser._id, course: courseId }));
    } else {
      await enrollmentClient.enrollUserInCourse(currentUser._id, courseId);
      dispatch(enroll({ user: currentUser._id, course: courseId }));
    }
    fetchEnrollments();
    refreshCourses();
  };

  const fetchEnrollments = async () => {
    try {
      const enrollments = await userClient.fetchEnrollments();
      dispatch(setEnrollments(enrollments));
      console.log('Enrollments updated:', enrollments);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchEnrollments();
  }, [currentUser]);

  const navigateToCourse = (courseId: string, isEnrolled: boolean) => {
    if (isFaculty) {
      navigate(`/Kanbas/Courses/${courseId}/Home`);
    } else {
      if (isEnrolled) {
        navigate(`/Kanbas/Courses/${courseId}/Home`);
      } else {
        alert("You must be enrolled in this course to view it.");
      }
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {isFaculty && (
        <>
          <h5>
            New Course
            <button className="btn btn-primary float-end" onClick={addNewCourse}>
              Add
            </button>
            <button className="btn btn-warning float-end me-2" onClick={updateCourse}>
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </>
      )}
      {!isFaculty && (
        <button
          className="btn btn-info float-end"
          onClick={() => setViewAllCourses(!viewAllCourses)}>
          Enrollments
        </button>
      )}
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({displayed.length})</h2>
      <hr />

      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5 g-4">
        {displayed.map((course) => {
          const enrolled = enrollments.some(
            (enrollment: { user: any; course: any }) =>
              enrollment.user === currentUser._id && enrollment.course === course._id
          );

          return (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img src={course.image || "/images/reactjs.jpg"} width="100%" height={160}/>
                  
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                    <p className="card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description}
                    </p>


                    {!isFaculty && (
                      <button
                        className={`btn ${enrolled ? "btn-danger" : "btn-success"}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleEnrollToggle(course._id, enrolled);
                        }}
                      >
                        {enrolled ? "Unenroll" : "Enroll"}
                      </button>
                    )}
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToCourse(course._id, enrolled);
                      }}
                    >
                      Go
                    </button>

                    {isFaculty && (
                      <>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                        >
                          Delete
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}