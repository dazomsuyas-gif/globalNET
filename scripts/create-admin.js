const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

async function createAdmin() {
  const url = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/globalnet';
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const users = db.collection('User');

    const hashedPassword = await bcrypt.hash('@Kelvin1998', 10);
    const email = 'dazomsuyas@gmail.com';

    const result = await users.updateOne(
      { email },
      {
        $set: {
          email,
          password: hashedPassword,
          name: 'Kelvin Juma Msuya',
          role: 'ADMIN',
          xp: 10000,
          referralCode: 'GLOBALNET_ADMIN',
          updatedAt: new Date(),
        },
        $setOnInsert: {
          createdAt: new Date(),
        },
      },
      { upsert: true }
    );

    if (result.upsertedCount > 0) {
      console.log('✅ Admin user created:', email);
    } else {
      console.log('✅ Admin user updated:', email);
    }
  } catch (error) {
    console.error('Error creating admin:', error);
    process.exit(1);
  } finally {
    await client.close();
  }
}

createAdmin();
