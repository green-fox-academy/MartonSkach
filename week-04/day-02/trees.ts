
export class Tree {
  private tree: Garden;

  constructor(name:string) {
    this.tree = new Garden(name, 10);
  }

  public watering(): void {
    this.tree.watering();
  }

  public needWater(): boolean {
    return this.tree.needWater();
  }
}