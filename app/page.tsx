import { getExpenses } from "@/lib/expenses";

import { ExpenseForm } from "@/components/expense-form";

export default async function Page() {
  const expenses = await getExpenses();

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold">Controle de despesas</h1>
        <h2 className="text-gray-500">Utilizando Neon: Serverless Postgres</h2>

        <div className="mt-8 flex flex-col lg:flex-row gap-10">
          <div className="grow">
            <h3 className="text-lg font-medium">Itens</h3>
            <ul className="mt-4 flex flex-col gap-1">
              {expenses.map((expense) => (
                <li key={expense.id} className="flex justify-between">
                  <span>{expense.title}</span>
                  <span>
                    {expense.amount.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <ExpenseForm />
        </div>
      </div>
    </section>
  );
}
