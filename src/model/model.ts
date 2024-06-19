import DB from "../database/database.json";
import jsonfile from "jsonfile";
import { randomUUID } from "node:crypto";
import { findUser } from "./utils";

import { FullUserData, UserData, TeacherData, StudentData } from "./types";

const PATH = "./src/database/database.json";

class SuperClass {
  username;
  password;
  id;
  role;

  constructor(userData: UserData) {
    const { username, password, role } = userData;

    this.username = username; //const username = userData.username, pero al desestructurar el objeto ahorramos escribir codigo.
    this.password = password;
    this.role = role;
    this.id = randomUUID();
  }

  login(username: string, password: string) {
    if (password !== this.password) return "Wrong credentials";
    // logica del login...
    return "User logged";
  }

  logout() {
    return "User logged out";
  }

  changePassword(currentPassword: string, newPassword: string) {
    if (currentPassword !== this.password) return "Wrong credentials";

    this.password = newPassword;

    return "Password changed";
  }
}

//El operador extends trae los atributos y metodos de la superclase y los completa con lo que yo le pase por parametro en el constructor de esta clase hija:
class AcademicProfile extends SuperClass {
  // Defino los atributos particulares para esta clase y les asigno un tipo.
  numSubjects: number;
  birthyear: number;

  // Defino el formato que tienen los parametros del constructor (nuevos atributos particulares de esta clase).
  constructor(extraData: FullUserData) {
    // Creo variables con el valor que tiene cada parametro:
    const { numSubjects, birthyear } = extraData;
    // Super() ejecuta el constructor de la clase padre:
    super({
      // Estos seran los parametros del constructor de la superclass:
      username: extraData.username,
      password: extraData.password,
      role: extraData.role,
    });

    this.numSubjects = numSubjects;
    this.birthyear = birthyear;
  }
}

class Professor extends AcademicProfile {
  constructor(teacherData: TeacherData) {
    super({
      username: teacherData.username,
      password: teacherData.password,
      role: "teacher",
      numSubjects: teacherData.numSubjects,
      birthyear: teacherData.birthyear,
    });
  }

  rateStudent(studentId: string, score: number): string {
    return `The student ${studentId} got ${score}/10`;
  }
}

class Student extends AcademicProfile {
  constructor(studentData: StudentData) {
    super({
      username: studentData.username, //Podria desestructurar el objeto studentData para no llamarlo por notacion de puntos.
      password: studentData.password,
      role: "student",
      numSubjects: studentData.numSubjects,
      birthyear: studentData.birthyear,
    });
  }
  enrollToSubject(subject: string) {
    return `The student ${this.username} is enrolled in: ${subject}`;
  }
}

class Administrator extends SuperClass {
  constructor(adminData: UserData) {
    const { username, password } = adminData;
    super({ username: username, password: password, role: "admin" });
  }

  createNewSubject(subjectName: string) {
    return "Subject: " + subjectName + " created";
  }
  changeUserPassword(newPassword: string, userId: string) {
    return `The password has been changed successfully`;
  }
  changeUserName(userId: string, newUserName: string) {
    return `Changes successfully completed. A new name has been assigned: ${newUserName}`;
  }
  createNewUser(userData: TeacherData | StudentData) {
    return `${userData.username} created`;
  }
}

//ejemplos:

const tomas = new Professor({
  username: "tomas",
  password: "sarasa",
  numSubjects: 5,
  birthyear: 1955,
});
tomas.rateStudent("xxx2", 8);

const cami = new Student({
  username: "cami",
  password: "abc",
  numSubjects: 2,
  birthyear: 2000,
});
cami.enrollToSubject("Java");
