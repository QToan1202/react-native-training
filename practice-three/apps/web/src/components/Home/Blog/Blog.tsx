import { Heading, ScrollView, XStack } from 'tamagui'

import { BLOG_ITEMS_DATA } from '../../../constants'
import { BlogCard } from '../../BlogCard'

const Blog = () => (
  <ScrollView contentContainerStyle={{ flex: 1, gap: 25 }}>
    <Heading color="$black" fontSize="$6" fontWeight="700">
      Featured Blogs
    </Heading>
    <XStack gap={60}>
      {BLOG_ITEMS_DATA.map((itemProps, index) => (
        <BlogCard key={index} {...itemProps} />
      ))}
    </XStack>
  </ScrollView>
)

export default Blog
