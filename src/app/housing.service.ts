import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url = 'assets/db.json';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const response = await fetch(this.url);
    const data = await response.json();
    return data?.locations ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const response = await fetch(this.url);
    const data = await response.json();
    return data.locations.find((item: HousingLocation) => item.id == id) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
