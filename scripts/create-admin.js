const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createAdmin() {
  try {
    const hashedPassword = await bcrypt.hash('@Kelvin1998', 10);

    const admin = await prisma.user.upsert({
      where: { email: 'dazomsuyas@gmail.com' },
      update: {
        password: hashedPassword,
        name: 'Kelvin Juma Msuya',
        role: 'ADMIN',
        xp: 10000,
      },
      create: {
        email: 'dazomsuyas@gmail.com',
        password: hashedPassword,
        name: 'Kelvin Juma Msuya',
        role: 'ADMIN',
        xp: 10000,
        referralCode: 'GLOBALNET_ADMIN',
      },
    });

    console.log('✅ Admin user created or updated:', admin.email);
    console.log('✅ Role set to:', admin.role);
  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();
