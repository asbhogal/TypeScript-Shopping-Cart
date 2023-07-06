const CURRENCY_CONVERTER = new Intl.NumberFormat(undefined, {
  currency: "EUR",
  style: "currency",
});

export function formatCurrency(number: number) {
  return CURRENCY_CONVERTER.format(number);
}
