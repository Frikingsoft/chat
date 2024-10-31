import  http  from 'http'

// Los datos que quieres enviar
const postData = JSON.stringify({
  password: 'password123',
  email: 'lucianocaetano@gmail.com'
})

// Configuración de la petición
const options = {
  hostname: '192.168.139.106',
  port: 8000,
  path: '/user',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
  }
};

// Realiza la petición
const req = http.request(options, (res) => {
  let data = '';

  // Recibe los datos en chunks
  res.on('data', (chunk) => {
    data += chunk;
  });

  // Al finalizar la respuesta
  res.on('end', () => {
    console.log('Respuesta completa:', data);
  });
});

// Manejo de errores
req.on('error', (error) => {
  console.error('Error en la petición:', error);
});

// Envía los datos en la petición
req.write(postData);

// Finaliza la petición
req.end();
