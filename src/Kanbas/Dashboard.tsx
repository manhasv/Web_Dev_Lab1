import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                      Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/green.png" width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1000 Intro
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                      Intro to Computer Science
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/red.png" width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS2500 Fundamental of Computer Science
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                      Fundies 1
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/purple.png" width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS2510 Fundamentals of Computer Science 2
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                      Fundies 2
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/blue.png" width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS3800 Theory of Computation
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                      Theory of Computation by Prof. A
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/lightpink.png" width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS4500 Fundamental of Software Engineering
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Fundamental of Software Engineering
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/hotpink.png" width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS3700 Network and Distributed Systems
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                  Network and Distributed Systems
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}