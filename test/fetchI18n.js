export function getFromHttp(param){
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