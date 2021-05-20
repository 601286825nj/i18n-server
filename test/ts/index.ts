import { getFromHttp } from '../fetchI18n.js';
interface IDBI {
  getI18n();
  getFromIndexedDB();
  saveToIndexedDB();
}

class IDB implements IDBI{
  getFromIndexedDB() {
    throw new Error('Method not implemented.');
  }
  saveToIndexedDB() {
    throw new Error('Method not implemented.');
  }
  getI18n(){ 

  }
}