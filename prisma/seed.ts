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
      role: 'ADMIN',
      referralCode: 'admin-globalnet'
    }
  });

  await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      email: 'user@example.com',
      name: 'Demo User',
      emailVerified: new Date(),
      role: 'USER',
      referralCode: 'user-globalnet'
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

  // Seed Products (16)
  const productsData = [
    {
      name: 'AI Script Generator Pro',
      slug: 'ai-script-gen',
      description: 'Generate scripts faster using AI-powered workflows.',
      price: 97,
      priceTZS: 270000,
      category: 'digital',
      images: ['/products/script.jpg'],
      stock: 999,
      sellerId: 'seller_globalnet',
      sellerName: 'globalNET Store',
      published: true
    },
    // Add more...
  ];

  for (const product of productsData) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product
    });
  }

  // Skip order seeding - requires proper OrderItem relationships
  console.log('Seeding completed');
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());

