class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string) {
    this.name = name;
  }
  public complete() {
    this.completed = true;
  }

  public identify(): string {
    return this.name;
  }

  public sortCompleted(): boolean {
    return this.completed
  }
}

export { Thing };