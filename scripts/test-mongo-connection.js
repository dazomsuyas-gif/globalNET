const { MongoClient } = require('mongodb');

async function testConnection() {
  const url = 'mongodb://127.0.0.1:27017/globalnet';
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log('connected');
  } catch (err) {
    console.error('connect error:', err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

testConnection();
