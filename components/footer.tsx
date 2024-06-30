export function Footer() {
  return (
    <footer className="py-4 px-6">
      <div className="container mx-auto">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} leandrordg. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
