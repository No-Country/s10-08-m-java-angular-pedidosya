import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'src/environment/environment';
import { User, UserModel } from '@models/user.model';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	apiUrl: string = env.apiURL;

	userList: UserModel[] = [];

	constructor(private httpClient: HttpClient) { }

	getUsers() {
		return this.userList.slice();
	}

	// getUser(index: number) {
	// 	return this.userList[index];
	// }    

	getUser(): Observable<any> {
		let auth_token = this.getToken();
		const headers = new HttpHeaders({
			'Authorization': `Bearer ${auth_token}`
		});
		return this.httpClient.get(`${this.apiUrl}/clients/user`, { headers });
	}

	addUser(user: UserModel) {

	}

	editUser(user: UserModel, index: number) {

	}

	removeUser(index: number) {

	}

	getToken() {
		return localStorage.getItem('jwt');
	}
}