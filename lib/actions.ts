"use server";

import { revalidatePath } from "next/cache";

import { createExpense } from "@/lib/expenses";

export const createExpenseAction = async (state: any, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());

  const title = data.title as string;

  if (typeof title !== "string") {
    throw new Error("Título precisa ser uma string");
  }

  const amount = parseFloat(data.amount as string);

  if (isNaN(amount)) {
    throw new Error("Quantidade precisa ser um número");
  }

  await createExpense({ title, amount });

  revalidatePath("/");
};
