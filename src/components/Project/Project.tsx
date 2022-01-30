import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiFillGithub } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import styles from './Project.module.scss'
import Tag from '@components/Tag'

const Project = ({ project }: any) => {
  return (
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
      <div className={styles.tag}>
        {project?.node?.tags.map((tag: { tag: string }, i: number) => (
          <Tag key={i} tag={tag.tag} />
        ))}
      </div>
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
  )
}

export default Project
