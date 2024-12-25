import ListLayout from '@/layouts/ListLayoutWithTags'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Blog' })

export default function BlogPage() {
  return <ListLayout title="All Posts" />
}
