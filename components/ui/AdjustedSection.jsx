export default function AdjustedSection({ children }) {
  return (
    <section className="min-h-[calc(100dvh-65px)] flex items-center justify-center">
      {children}
    </section>
  );
}
