import DB from '../database/database.json';
import jsonfile from 'jsonfile';
import { randomUUID } from 'node:crypto';
import { findUser } from './utils';

import { FullUserData, UserData, TeacherData, StudentData } from './types';

const PATH = './src/database/database.json';

class SuperClass {
	username;
	password;
	id;
	role;

	constructor(userData: UserData) {
		const { username, password, role } = userData;

		this.username = username;
		this.password = password;
		this.role = role;
		this.id = randomUUID();
	}

	login(username: string, password: string) {
		if (password !== this.password) return 'Wrong credentials';
		// logica del login...
		return 'User logged';
	}

	logout() {
		return 'User logged out';
	}

	changePassword(currentPassword: string, newPassword: string) {
		if (currentPassword !== this.password) return 'Wrong credentials';

		this.password = newPassword;

		return 'Password changed';
	}
}


// atributos: numberSubjectsTaught, dateOfBirth y metodo: markingStudents()
class Teacher extends SuperClass {		// El operador extends trae los atributos y metodos de la superclase y los completa con lo que yo le pase por parametro
	numberSubjectsTaught: number		// Defino los atributos particulares para esta clase.
	dateOfBirth: number					// Aca estoy tipando los atributos

	constructor(teacherData: TeacherData){ // Defino el formato que tienen los parametros del constructor
		 // Creo variables con el valor que tiene cada parametro:
		const {username, password, numberSubjectsTaught, dateOfBirth} = teacherData
		super({username: username, password: password, role: "teacher"})// Super() ejecuta el constructor de la clase padre

		this.numberSubjectsTaught = numberSubjectsTaught,
		this.dateOfBirth = dateOfBirth
	}

	markingStudents(score: number): string {
		return `The student ${this.id} got ${score}`;
	}
	
} 

class Student extends SuperClass {	// atributos: numberSubjectsTaken, dateOfBirth y metodo: enrolmentToSubjects ()
	numberSubjectsTaken: number
	dateOfBirth: number

	constructor(studentData: StudentData){ // 1) constructor  2) super  3) inicializo los atributos 
		const { username,password, numberSubjectsTaken, dateOfBirth } = studentData
		super({username: username, password: password, role: "student"})

		this.numberSubjectsTaken = numberSubjectsTaken,
		this.dateOfBirth = dateOfBirth
	}

	enrolmentToSubjects (subjects: string[]): string {
		return `The student ${this.id} is enrolled in ${subjects}`
	}
}

class Administrator extends SuperClass {	//metodos: createNewSubjects(),changeAllPasswords(),changeAllNames(),registerStudents(),registerTeachers()

	constructor(userData: UserData){
		const { username, password } = userData
		super({username: username, password: password, role: "admin"})
	}

	createNewSubjects(newSubjects: string[]):string{
		return `These are the new subjects: ${newSubjects}`
	}

	changeAllPasswords(newPassword: string): string {
		return `The entered password ${newPassword} is valid`
	}

	changeAllNames(newName: string): string {
		return `Changes successfully completed. A new name has been assigned: ${newName}`
	}

	registerStudents(studentId: number): string{
		return `The registration of a new student has been completed with the id: ${studentId}`
	}

	registerTeachers(teacherId: string): string {
		return `A new teacher has been registered successfully with the Id: ${teacherId}`
	}
}


// Teacher {
// 	username,
// 	password, 
// 	Id, 
// 	role, 
// 	numberSubjectsTaught,  ####
// 	dateOfBirth,
// 	markingStudents () => {},   ####
// 	login () => {},
// 	logout () => {},
// 	changePassword () => {},	
// }




// Student {
// 	username,
// 	password, 
// 	Id, 
// 	role, 
// 	numberSubjectsTaken,  ####
// 	dateOfBirth,
// 	enrolmentToSubjects () => {},   ####   enrolling?
// 	login () => {},
// 	logout () => {},
// 	changePassword () => {},
	
// }


// Manager {
// 	username,
// 	password, 
// 	Id, 
// 	role, 
//
// 	createNewSubjects () => {},	####
// 	login () => {},
// 	logout () => {},
// 	changeAllPasswords () => {},	####
// 	changeAllNames () => {},	####
//  registerStudents () => {},	####
//  registerTeachers () => {},	####
	
// }