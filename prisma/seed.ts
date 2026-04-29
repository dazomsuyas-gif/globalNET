import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Users
  await prisma.user.upsert({
    where: { email: 'admin@globalnet.com' },
    update: {},
    create: {
      email: 'admin@globalnet.com',
      name: 'Admin User',
      emailVerified: new Date(),
      role: 'ADMIN'
    }
  });

  await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      email: 'user@example.com',
      name: 'Demo User',
      emailVerified: new Date(),
      role: 'USER'
    }
  });

  // Seed Articles (12)
  const articlesData = [
    { title: 'Mastering AI for Business Growth', slug: 'ai-business-growth', excerpt: 'Leverage AI tools...', category: 'business', content: '<p>Full article content...</p>', views: 1250 },
    // Add 10 more...
  ];

  for (const article of articlesData) {
    await prisma.article.upsert({
      where: { slug: article.slug },
      update: {},
      create: { ...article, authorId: 'admin_user_id_placeholder', published: true, publishedAt: new Date() }
    });
  }

  // Seed Courses (8)
  const coursesData = [
    { title: 'Swahili for Beginners', slug: 'swahili-beginners', language: 'Swahili', level: 'A1', lessons: 20, description: 'Complete...', price: 49, published: true },
    // Add more...
  ];

  for (const course of coursesData) {
    await prisma.course.upsert({
      where: { slug: course.slug },
      update: {},
      create: course
    });
  }

  // Seed Products (16)
  const productsData = [
    { name: 'AI Script Generator Pro', slug: 'ai-script-gen', description: 'Generate...', price: 97, category: 'digital', images: ['/products/script.jpg'], stock: 999, published: true },
    // Add more...
  ];

  for (const product of productsData) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product
    });
  }

  // Seed Orders (5)
  for (let i = 1; i <= 5; i++) {
    await prisma.order.create({
      data: {
        userId: 'user_id_placeholder',
        products: { name: `Product ${i}`, price: 50 + i * 10 },
        total: 50 + i * 10,
        status: 'completed',
        paymentId: `pay_${i}`
      }
    });
  }

  console.log('Seeding completed');
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());

