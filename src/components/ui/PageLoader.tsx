export function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-surface-border border-t-primary" role="status" aria-label="Carregando" />
    </div>
  );
}
