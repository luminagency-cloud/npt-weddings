export function ProseBody({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base leading-8 text-[var(--color-muted)]">{children}</p>
  )
}
