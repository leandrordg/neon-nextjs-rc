import prisma from "@/lib/prisma";

export const getExpenses = async () => {
  return await prisma.expense.findMany();
};

export const createExpense = async (data: {
  amount: number;
  title: string;
}) => {
  return await prisma.expense.create({ data });
};
