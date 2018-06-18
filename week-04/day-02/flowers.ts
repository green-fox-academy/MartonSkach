export class Flower {
  private flower: Garden;

  constructor(name: string) {
    this.flower = new Garden(name, 5);
  }

  public watering(): void {
    this.flower.watering();
  }

  public needWater(): boolean {
    return this.flower.needWater();
  }
}