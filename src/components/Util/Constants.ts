import { PageType, RobotsContent, MetaTags } from '@components/PropTypes/Tags'
import { concatenateStrings } from './Util'

export const defaultMetaTags: MetaTags = {
  canonical: 'https://www.jdghuman.com',
  description: 'Software Engineer',
  image: 'https://www.jdghuman.com/images/JD-Develop.png',
  robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
  title: 'jdGhuman',
  type: PageType.website,
}
