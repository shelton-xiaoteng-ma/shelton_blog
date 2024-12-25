'use client'

import AuthorLayout from '@/layouts/AuthorLayout'
import { allAuthors, Authors } from 'contentlayer/generated'
import { useLang } from 'feature/lang/store'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'

export const About = () => {
  const { lang } = useLang()
  const author = allAuthors.find((p) => p.lang === lang) as Authors
  const mainContent = coreContent(author)

  return (
    <AuthorLayout content={mainContent}>
      <MDXLayoutRenderer code={author.body.code} />
    </AuthorLayout>
  )
}
