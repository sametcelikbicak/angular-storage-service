import { Injectable } from '@angular/core';

interface IStorageService {
  /**
   * Store value to Local storage
   *
   * @param key - Stored value key
   * @param value - Stored value
   * @returns void
   */
  addToLocalStorage(key: string, value: any): void;
  /**
   * Store value to Session storage
   *
   * @param key - Stored value key
   * @param value - Stored value
   * @returns void
   */
  addToSessionStorage(key: string, value: any): void;
  /**
   * Get value from Local storage
   *
   * @param key - Stored value key
   * @returns Stored value
   */
  getFromLocalStorage(key: string): any;
  /**
   * Get value from Session storage
   *
   * @param key - Stored value key
   * @returns Stored value
   */
  getFromSessionStorage(key: string): any;
  /**
   * Remove value from Local storage
   *
   * @param key - Stored value key
   * @returns void
   */
  removeFromLocalStorage(key: string): void;
  /**
   * Remove value from Session storage
   *
   * @param key - Stored value key
   * @returns void
   */
  removeFromSessionStorage(key: string): void;
  /**
   * Remove all values from Local storage
   *
   * @returns void
   */
  clearLocalStorage(): void;
  /**
   * Remove all values from Session storage
   *
   * @returns void
   */
  clearSessionStorage(): void;
  /**
   * Remove all values from Local and Session storage
   *
   * @returns void
   */
  clearStorage(): void;
}

@Injectable({ providedIn: 'root' })
export class StorageService implements IStorageService {
  public addToLocalStorage(key: string, value: any): void {
    this.addToStorage(localStorage, key, value);
  }

  public addToSessionStorage(key: string, value: any): void {
    this.addToStorage(sessionStorage, key, value);
  }

  public getFromLocalStorage(key: string): any {
    return this.getFromStorage(localStorage, key);
  }

  public getFromSessionStorage(key: string): any {
    return this.getFromStorage(sessionStorage, key);
  }

  public removeFromLocalStorage(key: string): any {
    this.removeFromStorage(localStorage, key);
  }

  public removeFromSessionStorage(key: string): void {
    this.removeFromStorage(sessionStorage, key);
  }

  public clearLocalStorage(): void {
    localStorage.clear();
  }

  public clearSessionStorage(): void {
    sessionStorage.clear();
  }

  public clearStorage(): void {
    localStorage.clear();
    sessionStorage.clear();
  }

  private addToStorage(storage: Storage, key: string, value: any): void {
    this.checkStorageKey(key);
    storage.setItem(key, JSON.stringify(value));
  }

  private getFromStorage(storage: Storage, key: string): any {
    this.checkStorageKey(key);
    const item = storage.getItem(key);

    if (item && item !== 'undefined') {
      return JSON.parse(item);
    }

    return null;
  }

  private removeFromStorage(storage: Storage, key: string): void {
    this.checkStorageKey(key);
    storage.removeItem(key);
  }

  private checkStorageKey(key: string): void {
    if (key == null || key === '') {
      throw new ReferenceError('storage key must not be null or empty');
    }
  }
}
