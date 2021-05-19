import mongo from 'mongodb';
const { MongoClient } = mongo;
const URL = 'mongodb://localhost:27017';
let db;
try{
  db = await MongoClient.connect(URL);
}catch(e){
  console.error('mongodb connect error');
}

let table = db.db('test').collection('p_sys_code_language');

export async function getData({textId,lang}){
  let query = {
    textId: {
      $in: Array.isArray(textId) ? textId: [textId]
    },
    lang: {
      $in: Array.isArray(lang) ? lang: [lang]
    }
  }
  return table.find(query).toArray()
}
