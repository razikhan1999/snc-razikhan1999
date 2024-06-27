import { Person } from "@/utils/common/person";

import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

/**
 * Retrieves a person from the database based on the provided person name.
 *
 * @param {Person} person - The name of the person to retrieve.
 * @return {Promise<User | null>} A promise that resolves to the fetched person or null if not found.
 */
export const getPersonFromDB = async (person: Person) => {
  const fetchedPerson = await prisma.user.findFirst({
    where: { name: person },
  });
  return fetchedPerson;
};
