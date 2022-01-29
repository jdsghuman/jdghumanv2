import Link from 'next/link'
import Image from 'next/image'
import { client } from '../../gql/apollo-client'
import gql from 'graphql-tag'
import { GraphQLError } from 'graphql'
import blImage from '../../../public/images/bobbieleelicious.jpg'
import styles from './Projects.module.scss'
import { AiFillGithub } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import Meta from '@components/Meta'
import { MetaTags, PageType, RobotsContent } from '@components/PropTypes/Tags'
import { ProjectConnectionConnection, Query } from '../../../src/types/generated/graphql'
import useHasMounted from '@components/hooks/useHasMounted'

interface HomeProps {
  data?: ProjectConnectionConnection
  errors?: GraphQLError
}

const Projects = ({ data, errors }: HomeProps) => {
  const hasMounted = useHasMounted()
  const postMetaTags: MetaTags = {
    canonical: 'https://www.jdghuman.com',
    description: `Software Engineer | Front End Engingeer based out of Houston, TX`,
    image: 'https://www.jdghuman.com/images/JD-Develop.png',
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    title: `jdGhuman | Projects`,
    type: PageType.website,
  }

  if (!hasMounted) {
    return null
  }

  if (!data && !errors) return <p>Loading...</p>

  if (errors) {
    return <h1>Error</h1>
  }

  return (
    <>
      <Meta tags={postMetaTags} />
      <div className={styles.section}>
        <div className={styles.section__container}>
          {data?.edges?.map((project) => (
            <div className={styles.project} key={project?.node._meta.id}>
              <h2 className={styles.name}>{project?.node.title[0].text}</h2>
              <div className={styles.project__image}>
                <Image
                  src={project?.node.image.url}
                  alt={project?.node?.image?.alt}
                  width={project?.node.image.dimensions.width}
                  height={project?.node.image.dimensions.height}
                  blurDataURL="blur"
                />
              </div>
              <p className={styles.detail}>{project?.node.description[0].text}</p>
              <div className={styles.link__container}>
                {project?.node?.demourl && (
                  <Link href={project.node.demourl.url}>
                    <a target="_blank">
                      <BiLinkExternal className={styles.icons} />
                    </a>
                  </Link>
                )}
                {project?.node?.githuburl && (
                  <Link href={project?.node.githuburl?.url}>
                    <a target="_blank">
                      <AiFillGithub className={styles.icons} />
                    </a>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const ProjectPageQuery = gql`
  query {
    allProjects(sortBy: release_date_DESC) {
      edges {
        node {
          title
          image
          description
          release_date
          githuburl {
            __typename
            ... on _ExternalLink {
              url
            }
          }
          demourl {
            __typename
            ... on _ExternalLink {
              url
            }
          }
          tags {
            tag
          }
          _meta {
            uid
            id
          }
        }
      }
    }
  }
`

interface ResultProps {
  allProjects: Query['allProjects']
}

export async function getStaticProps() {
  const { data, errors = null } = await client.query<{ allProjects: Query['allProjects'] }>({
    query: ProjectPageQuery,
  })
  console.log('data in getStaticProps', data)

  return {
    props: {
      data: data?.allProjects,
      errors: errors,
    },
  }
}

export default Projects
