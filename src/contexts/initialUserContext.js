const initialUserContext = {
  user_id: '',
  userType: '',
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  phone: '',
  streetAddress: '',
  city: '',
  state: '',
  zip: '',
  bio: '',
  avatar: '',
  companies: [],
  projects: [],
  reviews: [],
  endorsements: [],
  photos: [
    {
      imageUrl: '',
      imageCaption: '',
      imageUpDate: '',
      imageTags: [],
    },
  ],
  techNotes: [],
  managerNotes: [],
  favoriteTechs: [],
  availability: [],
  schedule: [],
  skills: [
    {
      skillName: '',
      skillRateFull: '',
      skillRateHalf: '',
      skillNegotiable: '',
    },
  ],
}

export default initialUserContext
