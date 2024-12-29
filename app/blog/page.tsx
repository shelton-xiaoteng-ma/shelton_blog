import ListLayout from '@/layouts/ListLayoutWithTags'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Blog' })

export default async function BlogPage(props: { searchParams: Promise<{ page: string }> }) {
  const searchParams = await props.searchParams
  const pageNumber = parseInt(searchParams.page || '1')
  return <ListLayout title="All Posts" pageNumber={pageNumber} />
}
