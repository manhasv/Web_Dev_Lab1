import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const fetchEnrollmentsForCurrentUser = async () => {
    const { data } = await axiosWithCredentials.get(`${USERS_API}/current/enrollments`);
    return data;
};

export const enrollUserInCourse = async (userId: string, courseId: string) => {
    const { data } = await axiosWithCredentials.post(`${ENROLLMENTS_API}`, {
        userId,
        courseId,
    });
    return data;
};

export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
    console.log("Unenrolling user:", userId, "from course:", courseId);
    const { data } = await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${userId}/${courseId}`);
    return data;
};
// Optional: Fetch all enrollments, if needed
export const fetchAllEnrollments = async () => {
    const { data } = await axiosWithCredentials.get(`${ENROLLMENTS_API}`);
    return data;
};