export type Contact = {
  gender: Gender
  email: string
  name: {
    title: string
    first: string
    last: string
  }
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
}

export type Gender = 'male' | 'female'
