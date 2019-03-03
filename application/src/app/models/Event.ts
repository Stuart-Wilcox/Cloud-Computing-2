export class Event {
  constructor(
    public type: string,
    public timestamp: number,
    public vmId: string
  ) {}
}
