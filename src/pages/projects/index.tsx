import { client } from '../../gql/apollo-client'
import gql from 'graphql-tag'
import { GraphQLError } from 'graphql'
import styles from '../../styles/Projects.module.scss'

import Meta from '@components/Meta'
import { MetaTags, PageType, RobotsContent } from '@components/PropTypes/Tags'
import { ProjectConnectionConnection, Query } from '../../../src/types/generated/graphql'
import useHasMounted from '@components/hooks/useHasMounted'
import Project from '@components/Project'

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
            <Project key={project?.node._meta.id} project={project} />
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

export async function getStaticProps() {
  const { data, errors = null } = await client.query<{ allProjects: Query['allProjects'] }>({
    query: ProjectPageQuery,
  })

  return {
    props: {
      data: data?.allProjects,
      errors: errors,
    },
    revalidate: 60,
  }
}

export default Projects
