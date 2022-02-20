import { makeAutoObservable } from 'mobx';

export interface IType {
  id: number;
  name: string;
}

export interface IBrand {
  id: number;
  name: string;
}

export interface IDevice {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
}

export interface IDeviceStore {
  readonly types: Array<IType>;
  readonly brands: Array<IBrand>;
  readonly devices: Array<IDevice>;
}

export default class DeviceStore implements IDeviceStore {
  types: Array<IType>;
  brands: Array<IBrand>;
  devices: Array<IDevice>;

  constructor() {
    this.types = [
      { id: 1, name: 'Холодильники' },
      { id: 2, name: 'Холодильники' },
    ];

    this.brands = [
      {
        id: 1,
        name: 'Apple',
      },
      {
        id: 2,
        name: 'Samsung',
      },
    ];

    this.devices = [
      {
        id: 1,
        name: 'iphone 12 pro',
        price: 100000,
        rating: 5,
        img: '',
      },
      {
        id: 2,
        name: 'Samsung',
        price: 80000,
        rating: 4,
        img: '',
      },
    ];
    makeAutoObservable(this);
  }

  setTypes(types: Array<IType>): void {
    this.types = types;
  }

  setBrands(brands: Array<IBrand>): void {
    this.brands = brands;
  }

  setDevices(devices: Array<IDevice>): void {
    this.devices = devices;
  }

  get getTypes(): Array<IType> {
    return this.types;
  }

  get getBrands(): Array<IBrand> {
    return this.brands;
  }

  get getDevices(): Array<IDevice> {
    return this.devices;
  }
}
