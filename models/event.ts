type Date = number

export interface Event {
  date: Date
  id: number
  title: string
  image: {
    url: string
    height: number
    width: number
  }
}
