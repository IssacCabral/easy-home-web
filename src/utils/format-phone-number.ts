export function formatPhoneNumber(phone: string): string {
  return phone.replace(/[^+\d]/g, "");
}
