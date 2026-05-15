const { MongoClient } = require('mongodb');

async function initReplicaSet() {
  const url = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/globalnet';
  const client = new MongoClient(url);

  try {
    await client.connect();
    const adminDb = client.db().admin();
    const status = await adminDb.command({ replSetGetStatus: 1 }).catch(() => null);

    if (status && status.ok === 1) {
      console.log('✅ Replica set already initialized.');
      return;
    }

    const config = {
      _id: 'rs0',
      members: [{ _id: 0, host: '127.0.0.1:27017' }],
    };

    const result = await adminDb.command({ replSetInitiate: config });
    console.log('✅ Replica set initiated:', JSON.stringify(result));
  } catch (error) {
    console.error('Error initializing replica set:', error);
  } finally {
    await client.close();
  }
}

initReplicaSet();