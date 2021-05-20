import { getFromHttp } from './fetchI18n.js';
export default class IDB {
  async getI18n() {
    let param = {
      lang: 'zh_CN',
      textId: ['name','type']
    }
    let iDB = await getFromIndexedDB(param);
    console.log('indexDB:', iDB);
    // indexDB()不存在时
    if (!Object.keys(iDB).length) {
      let result = await getFromHttp(param)
      saveToIndexedDB(result.data);
      let iDB = {};
      result.data.forEach(it => {
        iDB[it.textId] = it.text;
      })
      console.log('mongoDB:', iDB);
    }
  }
  async getFromIndexedDB(){}
  saveToIndexedDB(){}
}