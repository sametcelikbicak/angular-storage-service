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

  constructor(private storageService: StorageService) {}

  public addToLocalStorage(): void {
    this.storageService.addToLocalStorage(this.key, this.value);
  }

  public addToSessionStorage(): void {}

  public getFromLocalStorage(): any {}

  public getFromSessionStorage(): any {}

  public removeFromLocalStorage(): void {}

  public removeFromSessionStorage(): void {}

  public clearLocalStorage(): void {}

  public clearSessionStorage(): void {}

  public clearStorage(): void {}
}
