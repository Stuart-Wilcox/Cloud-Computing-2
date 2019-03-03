export class VM {
  // public id: string;
  // public name: string;
  // public processorCores: number; // number of cores
  // public virtualRam: number; // GB
  // public storageSpace: number; // GB
  // public price: number; // cents per minute

  public status: string; // running, stopped

  constructor(
    public _id: string,
    public name: string,
    public type: string,
    public processorCores,
    public virtualRam,
    public storageSpace,
    public price
  ) {
    this.status = 'running';
  }
}
