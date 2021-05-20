import Dexie from '../plugin/dexie.esm.js';
import IDB from './idb.js';
// 实现抽象类
export default class DB extends IDB {
  async getFromIndexedDB(param) {
    let db = new Dexie('MDC');
    db.version(1).stores({
      i18: '[textId+lang]'
    });
    // 复合查询
    let cons = param.textId.map(it => [it,param.lang]);// [['name','zh_CN'],['type','zh_CN']]
    let result = await db.i18.where('[textId+lang]').anyOf(cons).toArray();
    let obj = {}
    result.forEach(it => {
      obj[it.textId] = it.text;
    })
    return obj;
  }

  saveToIndexedDB(data) {
    let db = new Dexie('MDC')
    db.version(1).stores({
      i18: '[textId+lang]'
    })
    db.i18.bulkPut(data);
  }
}