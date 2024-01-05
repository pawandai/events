export const headerLinks = [
  {
    label: 'Home',
    route: '/',
    id: '1'
  },
  {
    label: 'Create Event',
    route: '/events/create',
    id: '2'
  },
  {
    label: 'My Profile',
    route: '/profile',
    id: '3'
  },
]

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}