import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private httpClient: HttpClient) { }

  public createUser(customer) {
    return this.httpClient.post(`https://jsonplaceholder.typicode.com/users`, customer);
  }
  public editUser(customer,id) {
    return this.httpClient.patch(`https://jsonplaceholder.typicode.com/users/:id`,customer, id);
  }

  public listUsers() {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/users`);
  }
  public deleteUser(id) {
    return this.httpClient.delete(`https://jsonplaceholder.typicode.com/users/:id`, id);
  }
}
