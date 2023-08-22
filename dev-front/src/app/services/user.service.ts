import { Injectable } from '@angular/core';
import { UserModel} from '@models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: UserModel[] = [];

  constructor() { }

	getUsers() {
		return this.userList.slice();
	}

	getUser(index: number) {
		return this.userList[index];
	}    

	addUser(user: UserModel) {

	}

  editUser(user: UserModel, index: number) {

	}

	removeUser(index: number) {

	}  
}


