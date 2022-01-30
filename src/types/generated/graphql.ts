export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** Date */
  Date: any
  /** DateTime */
  DateTime: any
  /** Raw JSON value */
  Json: any
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any
}

export type Author = _Document &
  _Linkable & {
    __typename?: 'Author'
    _linkType?: Maybe<Scalars['String']>
    _meta: Meta
    bio?: Maybe<Scalars['Json']>
    fullname?: Maybe<Scalars['Json']>
    profile_picture?: Maybe<Scalars['Json']>
    social_media?: Maybe<Array<AuthorSocial_Media>>
  }

/** A connection to a list of items. */
export type AuthorConnectionConnection = {
  __typename?: 'AuthorConnectionConnection'
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AuthorConnectionEdge>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  totalCount: Scalars['Long']
}

/** An edge in a connection. */
export type AuthorConnectionEdge = {
  __typename?: 'AuthorConnectionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Author
}

export type AuthorSocial_Media = {
  __typename?: 'AuthorSocial_media'
  link?: Maybe<_Linkable>
  name?: Maybe<Scalars['String']>
}

export type Blog_Post = _Document &
  _Linkable & {
    __typename?: 'Blog_post'
    _linkType?: Maybe<Scalars['String']>
    _meta: Meta
    author?: Maybe<_Linkable>
    category?: Maybe<_Linkable>
    description?: Maybe<Scalars['String']>
    featured?: Maybe<Scalars['Boolean']>
    release_date?: Maybe<Scalars['Date']>
    tags?: Maybe<Array<Blog_PostTags>>
    text?: Maybe<Scalars['Json']>
    title?: Maybe<Scalars['Json']>
  }

/** A connection to a list of items. */
export type Blog_PostConnectionConnection = {
  __typename?: 'Blog_postConnectionConnection'
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<Blog_PostConnectionEdge>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  totalCount: Scalars['Long']
}

/** An edge in a connection. */
export type Blog_PostConnectionEdge = {
  __typename?: 'Blog_postConnectionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Blog_Post
}

export type Blog_PostTags = {
  __typename?: 'Blog_postTags'
  tag?: Maybe<Scalars['String']>
}

export type Category = _Document &
  _Linkable & {
    __typename?: 'Category'
    _linkType?: Maybe<Scalars['String']>
    _meta: Meta
    category_description?: Maybe<Scalars['Json']>
    category_name?: Maybe<Scalars['Json']>
    hero_image?: Maybe<Scalars['Json']>
  }

/** A connection to a list of items. */
export type CategoryConnectionConnection = {
  __typename?: 'CategoryConnectionConnection'
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CategoryConnectionEdge>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  totalCount: Scalars['Long']
}

/** An edge in a connection. */
export type CategoryConnectionEdge = {
  __typename?: 'CategoryConnectionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Category
}

export type Meta = {
  __typename?: 'Meta'
  /** Alternate languages the document. */
  alternateLanguages: Array<RelatedDocument>
  /** The first publication date of the document. */
  firstPublicationDate?: Maybe<Scalars['DateTime']>
  /** The id of the document. */
  id: Scalars['String']
  /** The language of the document. */
  lang: Scalars['String']
  /** The last publication date of the document. */
  lastPublicationDate?: Maybe<Scalars['DateTime']>
  /** The tags of the document. */
  tags: Array<Scalars['String']>
  /** The type of the document. */
  type: Scalars['String']
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>
}

export type Project = _Document &
  _Linkable & {
    __typename?: 'Project'
    _linkType?: Maybe<Scalars['String']>
    _meta: Meta
    demourl?: Maybe<_Linkable>
    description?: Maybe<Scalars['Json']>
    githuburl?: Maybe<_Linkable>
    image?: Maybe<Scalars['Json']>
    release_date?: Maybe<Scalars['Date']>
    tags?: Maybe<Array<ProjectTags>>
    title?: Maybe<Scalars['Json']>
  }

/** A connection to a list of items. */
export type ProjectConnectionConnection = {
  __typename?: 'ProjectConnectionConnection'
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProjectConnectionEdge>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  totalCount: Scalars['Long']
}

/** An edge in a connection. */
export type ProjectConnectionEdge = {
  __typename?: 'ProjectConnectionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Project
}

export type ProjectTags = {
  __typename?: 'ProjectTags'
  tag?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  _allDocuments: _DocumentConnection
  allAuthors: AuthorConnectionConnection
  allBlog_posts: Blog_PostConnectionConnection
  allCategorys: CategoryConnectionConnection
  allProjects: ProjectConnectionConnection
  blog_post?: Maybe<Blog_Post>
  category?: Maybe<Category>
  project?: Maybe<Project>
}

export type Query_AllDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>
  fulltext?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  id_in?: InputMaybe<Array<Scalars['String']>>
  lang?: InputMaybe<Scalars['String']>
  last?: InputMaybe<Scalars['Int']>
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>
  similar?: InputMaybe<Similar>
  sortBy?: InputMaybe<SortDocumentsBy>
  tags?: InputMaybe<Array<Scalars['String']>>
  tags_in?: InputMaybe<Array<Scalars['String']>>
  type?: InputMaybe<Scalars['String']>
  type_in?: InputMaybe<Array<Scalars['String']>>
}

export type QueryAllAuthorsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>
  fulltext?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  id_in?: InputMaybe<Array<Scalars['String']>>
  lang?: InputMaybe<Scalars['String']>
  last?: InputMaybe<Scalars['Int']>
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>
  similar?: InputMaybe<Similar>
  sortBy?: InputMaybe<SortAuthory>
  tags?: InputMaybe<Array<Scalars['String']>>
  tags_in?: InputMaybe<Array<Scalars['String']>>
  uid?: InputMaybe<Scalars['String']>
  uid_in?: InputMaybe<Array<Scalars['String']>>
  where?: InputMaybe<WhereAuthor>
}

export type QueryAllBlog_PostsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>
  fulltext?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  id_in?: InputMaybe<Array<Scalars['String']>>
  lang?: InputMaybe<Scalars['String']>
  last?: InputMaybe<Scalars['Int']>
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>
  similar?: InputMaybe<Similar>
  sortBy?: InputMaybe<SortBlog_Posty>
  tags?: InputMaybe<Array<Scalars['String']>>
  tags_in?: InputMaybe<Array<Scalars['String']>>
  uid?: InputMaybe<Scalars['String']>
  uid_in?: InputMaybe<Array<Scalars['String']>>
  where?: InputMaybe<WhereBlog_Post>
}

export type QueryAllCategorysArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>
  fulltext?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  id_in?: InputMaybe<Array<Scalars['String']>>
  lang?: InputMaybe<Scalars['String']>
  last?: InputMaybe<Scalars['Int']>
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>
  similar?: InputMaybe<Similar>
  sortBy?: InputMaybe<SortCategoryy>
  tags?: InputMaybe<Array<Scalars['String']>>
  tags_in?: InputMaybe<Array<Scalars['String']>>
  uid?: InputMaybe<Scalars['String']>
  uid_in?: InputMaybe<Array<Scalars['String']>>
  where?: InputMaybe<WhereCategory>
}

export type QueryAllProjectsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>
  fulltext?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  id_in?: InputMaybe<Array<Scalars['String']>>
  lang?: InputMaybe<Scalars['String']>
  last?: InputMaybe<Scalars['Int']>
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>
  similar?: InputMaybe<Similar>
  sortBy?: InputMaybe<SortProjecty>
  tags?: InputMaybe<Array<Scalars['String']>>
  tags_in?: InputMaybe<Array<Scalars['String']>>
  uid?: InputMaybe<Scalars['String']>
  uid_in?: InputMaybe<Array<Scalars['String']>>
  where?: InputMaybe<WhereProject>
}

export type QueryBlog_PostArgs = {
  lang: Scalars['String']
  uid: Scalars['String']
}

export type QueryCategoryArgs = {
  lang: Scalars['String']
  uid: Scalars['String']
}

export type QueryProjectArgs = {
  lang: Scalars['String']
  uid: Scalars['String']
}

export type RelatedDocument = {
  __typename?: 'RelatedDocument'
  /** The id of the document. */
  id: Scalars['String']
  /** The language of the document. */
  lang: Scalars['String']
  /** The type of the document. */
  type: Scalars['String']
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>
}

export enum SortAuthory {
  BioAsc = 'bio_ASC',
  BioDesc = 'bio_DESC',
  FullnameAsc = 'fullname_ASC',
  FullnameDesc = 'fullname_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
}

export enum SortBlog_Posty {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  ReleaseDateAsc = 'release_date_ASC',
  ReleaseDateDesc = 'release_date_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum SortCategoryy {
  CategoryDescriptionAsc = 'category_description_ASC',
  CategoryDescriptionDesc = 'category_description_DESC',
  CategoryNameAsc = 'category_name_ASC',
  CategoryNameDesc = 'category_name_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
}

export enum SortDocumentsBy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
}

export enum SortProjecty {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  ReleaseDateAsc = 'release_date_ASC',
  ReleaseDateDesc = 'release_date_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type WhereAuthor = {
  /** bio */
  bio_fulltext?: InputMaybe<Scalars['String']>
  /** fullname */
  fullname_fulltext?: InputMaybe<Scalars['String']>
  social_media?: InputMaybe<WhereAuthorSocial_Media>
}

export type WhereAuthorSocial_Media = {
  /** link */
  link?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  name_fulltext?: InputMaybe<Scalars['String']>
}

export type WhereBlog_Post = {
  /** author */
  author?: InputMaybe<Scalars['String']>
  /** category */
  category?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  description_fulltext?: InputMaybe<Scalars['String']>
  featured?: InputMaybe<Scalars['Boolean']>
  /** release_date */
  release_date?: InputMaybe<Scalars['Date']>
  /** release_date */
  release_date_after?: InputMaybe<Scalars['Date']>
  /** release_date */
  release_date_before?: InputMaybe<Scalars['Date']>
  tags?: InputMaybe<WhereBlog_PostTags>
  /** text */
  text_fulltext?: InputMaybe<Scalars['String']>
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']>
}

export type WhereBlog_PostTags = {
  tag?: InputMaybe<Scalars['String']>
  tag_fulltext?: InputMaybe<Scalars['String']>
}

export type WhereCategory = {
  /** category_description */
  category_description_fulltext?: InputMaybe<Scalars['String']>
  /** category_name */
  category_name_fulltext?: InputMaybe<Scalars['String']>
}

export type WhereProject = {
  /** demourl */
  demourl?: InputMaybe<Scalars['String']>
  /** description */
  description_fulltext?: InputMaybe<Scalars['String']>
  /** githuburl */
  githuburl?: InputMaybe<Scalars['String']>
  /** release_date */
  release_date?: InputMaybe<Scalars['Date']>
  /** release_date */
  release_date_after?: InputMaybe<Scalars['Date']>
  /** release_date */
  release_date_before?: InputMaybe<Scalars['Date']>
  tags?: InputMaybe<WhereProjectTags>
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']>
}

export type WhereProjectTags = {
  tag?: InputMaybe<Scalars['String']>
  tag_fulltext?: InputMaybe<Scalars['String']>
}

/** A prismic document */
export type _Document = {
  _meta: Meta
}

/** A connection to a list of items. */
export type _DocumentConnection = {
  __typename?: '_DocumentConnection'
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<_DocumentEdge>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  totalCount: Scalars['Long']
}

/** An edge in a connection. */
export type _DocumentEdge = {
  __typename?: '_DocumentEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: _Document
}

/** An external link */
export type _ExternalLink = _Linkable & {
  __typename?: '_ExternalLink'
  _linkType?: Maybe<Scalars['String']>
  target?: Maybe<Scalars['String']>
  url: Scalars['String']
}

/** A linked file */
export type _FileLink = _Linkable & {
  __typename?: '_FileLink'
  _linkType?: Maybe<Scalars['String']>
  name: Scalars['String']
  size: Scalars['Long']
  url: Scalars['String']
}

/** A linked image */
export type _ImageLink = _Linkable & {
  __typename?: '_ImageLink'
  _linkType?: Maybe<Scalars['String']>
  height: Scalars['Int']
  name: Scalars['String']
  size: Scalars['Long']
  url: Scalars['String']
  width: Scalars['Int']
}

/** A prismic link */
export type _Linkable = {
  _linkType?: Maybe<Scalars['String']>
  url: string
}

export type Similar = {
  documentId: Scalars['String']
  max: Scalars['Int']
}
