export function className(...cls: Array<string | boolean | undefined | null>) {
  return cls.filter(Boolean).join(" ")
}
