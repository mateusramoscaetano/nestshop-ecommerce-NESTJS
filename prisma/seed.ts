import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  const masterRole = await prisma.role.upsert({
    where: { name: 'master' },
    update: {},
    create: {
      name: 'master',
      permissions: {
        create: [
          { action: 'create-product' },
          { action: 'update-product' },
          { action: 'delete-product' },
        ],
      },
    },
  });

  const clientRole = await prisma.role.upsert({
    where: { name: 'client' },
    update: {},
    create: {
      name: 'client',
      permissions: {
        create: [],
      },
    },
  });

  console.log('Data seeding completed.');
}

seed()
  .catch((error) => {
    console.error('Error seeding data:', error);
  })
  .finally(() => {
    prisma.$disconnect();
  });
