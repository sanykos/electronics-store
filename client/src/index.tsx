import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DeviceStore, { IDeviceStore } from './store/DeviceStore';
import UserStore, { IUserStore } from './store/UserStore';

export type IContext = {
  user: IUserStore;
  device: IDeviceStore;
};

export const Context = createContext<IContext>({ user: new UserStore(), device: new DeviceStore() });

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{ user: new UserStore(), device: new DeviceStore() }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
