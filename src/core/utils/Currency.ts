export default class Currency {
  static formatter(
    val: number, 
    location: string = 'pt-BR', 
    currency: string = 'BRL'
  ): string {
    return (val ?? 0).toLocaleString(location, {
      style: 'currency',
      currency: currency,
    })
  }
}