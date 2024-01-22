export default (
  val: number,
  decimal: number = 2,
  country: string = 'zh-TW',
  style: string = 'currency',
  currency: string = 'TWD'
) => {
  const options = {
    style,
    currency,
    minimumFractionDigits: decimal
  }
  return val.toLocaleString(country, options)
}
