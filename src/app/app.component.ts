import { Component, VERSION } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = `Angular ${VERSION.major} Storage Servis Kullanımı`;
  private key = 'StorageKey';
  private value = 'StorageValue';
  public label: string;
  public result: string;

  constructor(private storageService: StorageService) {}

  public addToLocalStorage(): void {
    this.storageService.addToLocalStorage(this.key, this.value);
  }

  public addToSessionStorage(): void {
    this.storageService.addToSessionStorage(this.key, this.value);
  }

  public getFromLocalStorage(): any {
    this.label = 'Get from Local Storage';
    this.result = this.storageService.getFromLocalStorage(this.key);
  }

  public getFromSessionStorage(): any {
    this.label = 'Get from Session Storage';
    this.result = this.storageService.getFromSessionStorage(this.key);
  }

  public removeFromLocalStorage(): void {
    this.storageService.removeFromLocalStorage(this.key);
  }

  public removeFromSessionStorage(): void {
    this.storageService.removeFromSessionStorage(this.key);
  }

  public clearLocalStorage(): void {
    this.storageService.clearLocalStorage();
  }

  public clearSessionStorage(): void {
    this.storageService.clearSessionStorage();
  }

  public clearStorage(): void {
    this.storageService.clearStorage();
  }
}
