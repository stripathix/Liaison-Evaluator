import {Injectable} from '@angular/core';

@Injectable()
export class ConstantService {
    apiUrl: string = 'http://localhost:8181/';
    requestApi = { login: 'login', register: 'register' };
    getRequestUrl = function (action) {
        return this.apiUrl + this.requestApi[action];
    }
}