type Role = 'admin' | 'student' | 'teacher';

interface FullUserData {
    username: string;
    password: string;
    role: Role;
    numSubjects: string[];
    birthyear: number;
}

interface UserData {
    username: string;
    password: string;
    role: Role;
}

interface TeacherData {
    username: string;
    password: string;
    numSubjects: string[];
    birthyear: number;
}

interface StudentData {
    username: string;
    password: string;
    numSubjects: string[];
    birthyear: number;
}

export { TeacherData, StudentData, FullUserData, UserData };