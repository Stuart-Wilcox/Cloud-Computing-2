export class VM {
  // public id: string;
  // public name: string;
  // public processorCores: number; // number of cores
  // public virtualRam: number; // GB
  // public storageSpace: number; // GB
  // public price: number; // cents per minute

  public status: string; // starting, stopping, scaling

  constructor(
    public id: string,
    public name: string,
    public type: string,
    public processorCores,
    public virtualRam,
    public storageSpace,
    public price
  ) {}

  public static getBasicInstance(id: string, name: string):VM {
    return new VM(id, name, 'Basic', 8, 16, 20, 5);
  }

  public static getLargeInstance(id: string, name: string):VM {
    return new VM(id, name, 'Large', 32, 64, 20, 10);
  }

  public static getUltraLargeInstance(id: string, name: string):VM {
    return new VM(id, name, 'Ultra Large', 128, 512, 40, 15);
  }
}
