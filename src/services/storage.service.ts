import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  /**
   * Store value to Local storage
   *
   * @param key - Stored value key
   * @param value - Stored value
   * @returns void
   */
  public addToLocalStorage(key: string, value: any): void {
    this.addToStorage(localStorage, key, value);
  }

  /**
   * Store value to Session storage
   *
   * @param key - Stored value key
   * @param value - Stored value
   * @returns void
   */
  public addToSessionStorage(key: string, value: any): void {
    this.addToStorage(sessionStorage, key, value);
  }

  /**
   * Get value from Local storage
   *
   * @param key - Stored value key
   * @returns Stored value
   */
  public getFromLocalStorage(key: string): any {
    return this.getFromStorage(localStorage, key);
  }

  /**
   * Get value from Session storage
   *
   * @param key - Stored value key
   * @returns Stored value
   */
  public getFromSessionStorage(key: string): any {
    return this.getFromStorage(sessionStorage, key);
  }

  /**
   * Remove value from Local storage
   *
   * @param key - Stored value key
   * @returns void
   */
  public removeFromLocalStorage(key: string): void {
    this.removeFromStorage(localStorage, key);
  }

  /**
   * Remove value from Session storage
   *
   * @param key - Stored value key
   * @returns void
   */
  public removeFromSessionStorage(key: string): void {
    this.removeFromStorage(sessionStorage, key);
  }

  /**
   * Remove all values from Local storage
   *
   * @returns void
   */
  public clearLocalStorage(): void {
    localStorage.clear();
  }

  /**
   * Remove all values from Session storage
   *
   * @returns void
   */
  public clearSessionStorage(): void {
    sessionStorage.clear();
  }

  /**
   * Remove all values from Local and Session storage
   *
   * @returns void
   */
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
