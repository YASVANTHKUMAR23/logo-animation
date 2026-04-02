const https = require('https');

https.get('https://cdn.21st.dev/ravikatiyar162/minimalist-hero/default/bundle.1753540592718.html?theme=light', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(data);
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
