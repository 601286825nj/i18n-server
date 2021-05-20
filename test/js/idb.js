export default class IDB {
  async getI18n(param) {
    let iDB = await this.getFromIndexedDB(param);
    console.log('indexDB:', iDB);
    // indexDB()不存在时
    // if (!Object.keys(iDB).length) {
    let result = await this.getFromHttp(param)
    this.saveToIndexedDB(result.data);
    iDB = {};
    result.data.forEach(it => {
      iDB[it.textId] = it.text;
    })
    console.log('mongoDB:', iDB);
    // }
    return iDB
  }
  getFromHttp(param){
    return fetch('http://localhost:8081/getI18n',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(param)
    }).then(res => {
      if(res.ok){
        return res.json();
      }
    })
  }

  async getFromIndexedDB() { }
  saveToIndexedDB() { }
}