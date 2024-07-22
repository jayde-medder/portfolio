import {
  Hand,
  HandHelping,
  HeartHandshake,
  SmilePlus,
  Wrench,
} from 'lucide-react'

export const platformNeeds = [
  { icon: Wrench, text: 'Keep track of repairs' },
  {
    icon: HeartHandshake,
    text: 'Allow users to borrow functional items from the library',
  },
  { icon: HandHelping, text: 'Allow users to claim parts or working items' },
  {
    icon: Hand,
    text: 'Encourage handy people to put their hand up to fix things/teach others to fix things',
  },
  {
    icon: SmilePlus,
    text: 'Encourage participation in our community - whether that be using hardware, donating, teaching, learning or fixing.',
  },
]

export const reGearDemoData = [
  {
    header: 'Inventory',
    description:
      'Created a postgres database to store our items, category tags, and repair logs. ',
    image: '/inventory.png',
  },
  {
    header: 'Item Cards',
    description:
      'Item Cards use an api endpoint to access their state of repair and highlight what a user can do with an item - Borrow, Fix or Claim',
    image: '/item.png',
  },
]
