import { Link, useNavigate } from "react-router-dom";
import { setEnrollments, enroll, unenroll } from "./Enrollment/reducer";
import { useDispatch, useSelector } from "react-redux";
import * as courseClient from "./Courses/client";
import * as enrollmentsClient from "./Enrollment/client";
import { useEffect, useState, useCallback } from "react";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [viewAllCourses, setViewAllCourses] = useState(false);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isFaculty = currentUser?.role === "FACULTY";
  const displayedCourses = isFaculty ? allCourses : viewAllCourses ? allCourses : courses;

  // Helper function to determine if the current user is enrolled in a specific course
  const isEnrolledInCourse = (courseId: string) => {
    return enrollments.some(
      (enrollment: { user: any; course: string }) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );
  };

  const fetchCourses = useCallback(async () => {
    try {
      const fetchedCourses = await courseClient.fetchAllCourses();
      setAllCourses(fetchedCourses);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const fetchEnrollments = useCallback(async () => {
    try {
      const enrollments = await enrollmentsClient.fetchEnrollmentsForCurrentUser();
      dispatch(setEnrollments(enrollments));
    } catch (error) {
      console.error("Failed to fetch enrollments:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCourses();
    fetchEnrollments();
  }, [fetchCourses, fetchEnrollments, currentUser]);

  const handleEnrollToggle = async (courseId: string, enrolled: boolean) => {
    const enrollment = { user: currentUser._id, course: courseId };

    if (enrolled) {
      try {
        await enrollmentsClient.unenrollUserFromCourse(currentUser._id, courseId);
        dispatch(unenroll(enrollment));
        await fetchEnrollments(); // Re-fetch enrollments
        await fetchCourses(); // Re-fetch courses if needed
      } catch (error) {
        console.error("Failed to unenroll from course:", error);
      }
    } else {
      try {
        await enrollmentsClient.enrollUserInCourse(currentUser._id, courseId);
        dispatch(enroll(enrollment));
        await fetchEnrollments(); // Re-fetch enrollments
        await fetchCourses(); // Re-fetch courses if needed
      } catch (error) {
        console.error("Failed to enroll in course:", error);
      }
    }
  };

  const navigateToCourse = (courseId: string) => {
    if (isFaculty || isEnrolledInCourse(courseId)) {
      navigate(`/Kanbas/Courses/${courseId}/Home`);
    } else {
      alert("You must be enrolled in this course to view it.");
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {/* Faculty view for adding/updating courses */}
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

      {/* Student toggle to view all courses or enrolled courses */}
      {!isFaculty && (
        <button
          className="btn btn-info float-end"
          onClick={() => setViewAllCourses(!viewAllCourses)}
        >
          {viewAllCourses ? "View My Enrollments" : "View All Courses"}
        </button>
      )}

      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2>
      <hr />

      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5 g-4">
        {displayedCourses.map((course) => {
          const enrolled = isEnrolledInCourse(course._id); // Use helper function

          return (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img src={course.image || "/images/reactjs.jpg"} alt="Description" width="100%" height={160} />
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
                        navigateToCourse(course._id);
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
