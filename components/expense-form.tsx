"use client";

import { useActionState } from "react";

import { createExpenseAction } from "@/lib/actions";

export function ExpenseForm() {
  const [state, action] = useActionState(createExpenseAction, null);

  return (
    <div className="lg:w-1/3">
      <h3 className="text-lg font-medium">Adicionar novo</h3>
      <form className="mt-3 flex flex-col gap-4" action={action}>
        <input
          type="text"
          name="title"
          placeholder="Título da despesa"
          className="border border-gray-200 p-2 outline-none text-sm"
        />
        <input
          type="number"
          name="amount"
          placeholder="Valor (R$)"
          className="border border-gray-200 p-2 outline-none text-sm"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 outline-none text-sm"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}
