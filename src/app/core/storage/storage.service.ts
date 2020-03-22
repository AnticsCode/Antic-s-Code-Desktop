import { Injectable } from '@angular/core';
import { STORAGE_CONSTANTS, Storage } from './storage.config';
import { LocalStorage } from 'ngx-webstorage';
import { environment } from '@environments/environment';
import { UserResponse } from '@app/shared/interfaces/interfaces';

@Injectable()

export class StorageService {

  @LocalStorage(STORAGE_CONSTANTS.KEY)
  public storage: Storage;

  constructor() {
    if (!environment.production) { console.log('StorageService'); }
    this.loadStorage();
  }

  loadStorage(): void {
    if (!this.storage) {
      this.reset();
    }
  }

  setKey(key: string, value: any): void {
    this.loadStorage();
    if (value === undefined) { return; }
    this.storage[key] = value;
    this.storage = this.storage;
  }

  get(value: string) {
    if (this.storage[value] === undefined) { return; }
    return this.storage[value];
  }

  userLogin(data: UserResponse, remember: boolean) {
    this.setKey('token', data.token);
    this.setKey('user', data.user._id);
    this.setKey('remember', remember);
  }

  reset(): void {
    this.storage = new Storage();
  }

}
