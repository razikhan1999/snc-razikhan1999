import { Person, User } from "@/utils/common/person";
import { mockUsers } from "@/utils/server/mock-users";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: mockUsers[Person.PersonA] as unknown as User,
  });
  await prisma.user.create({
    data: mockUsers[Person.PersonB] as unknown as User,
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
