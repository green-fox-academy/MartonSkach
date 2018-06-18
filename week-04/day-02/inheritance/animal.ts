'use strit';

 export class Animal {
  protected belly: number = 0;

  public eat(): void {
    this.belly++;
  }

  public poop(): boolean {
    if (this.belly > 0) {
      this.belly--;
      return true;
    }
    return false;
  }
}