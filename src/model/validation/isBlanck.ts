export function isBlanck(...value: string[]): boolean {
  if (
    value.every((value) => {
      return value.trim() != "";
    })
  )
    return false;
  return true;
}
