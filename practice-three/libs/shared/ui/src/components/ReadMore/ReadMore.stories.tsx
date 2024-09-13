import type { Meta, StoryObj } from '@storybook/react'

import ReadMore from './ReadMore'

const meta: Meta<typeof ReadMore> = {
  component: ReadMore,
  title: 'components/Read More',
}

export default meta

type Story = StoryObj<typeof ReadMore>

export const Default: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam tristique mauris non varius. Donec at blandit nibh. Duis nec vestibulum leo. Nunc vitae odio ut dui sodales consequat. Nullam condimentum, ex vitae ullamcorper pulvinar, enim enim congue purus, nec ultricies sem diam a purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lacus odio, viverra posuere justo ut, finibus sagittis mi. Integer id malesuada lectus.Donec euismod ultrices est. Donec euismod blandit enim, scelerisque ultrices felis tempor aliquam. Nulla hendrerit, dui non euismod mattis, elit urna tempus arcu, et posuere erat felis a velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur ac ultrices lacus. Curabitur porta consectetur nisl ac efficitur. Cras gravida turpis eu nisl accumsan tempor. Fusce at enim nisl. Morbi ante purus, iaculis non eros eget, ultrices gravida felis. Donec vel sagittis eros, nec gravida mauris. Nunc laoreet pulvinar arcu, nec fringilla erat vestibulum nec. Fusce accumsan odio felis, ut congue tortor condimentum at. Pellentesque a ex ac dolor hendrerit semper. Suspendisse scelerisque vitae turpis vel maximus. Morbi tincidunt metus vitae libero efficitur, imperdiet lacinia ligula fringilla. Ut eget vestibulum tortor.Nam congue metus tellus, quis pulvinar turpis egestas eu. Vivamus tristique, lacus a rhoncus scelerisque, ante enim interdum mi, sit amet suscipit purus ante id odio. Vestibulum sed magna est. Nulla vulputate velit erat, vel eleifend est eleifend vitae. Aliquam elit mauris, fermentum ut venenatis quis, bibendum a odio. Donec fermentum lorem at luctus malesuada. Suspendisse ullamcorper, est quis efficitur dapibus, est augue iaculis velit, vel molestie neque sem ac metus. Etiam pharetra purus ac iaculis tristique. Ut eget urna elit. Sed euismod lacus et convallis ultrices. Pellentesque accumsan lobortis magna vitae elementum. Integer sit amet augue eu risus ullamcorper pellentesque.Donec vitae malesuada diam. Sed ut rutrum turpis, at malesuada arcu. Etiam vestibulum congue orci, vel posuere sem semper ac. Curabitur varius urna ut turpis posuere ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris commodo bibendum ipsum, sit amet consequat augue scelerisque quis. In rhoncus vehicula lorem, non dictum sem. Praesent mi sem, scelerisque ac urna eget, pharetra venenatis massa. Nulla dapibus ex a blandit pellentesque. Etiam congue, tortor non vulputate vehicula, massa ante cursus velit, ac fringilla mauris tortor vel est. In dapibus ornare turpis sit amet condimentum.Morbi fringilla rutrum faucibus. Aenean sed velit fermentum, scelerisque risus in, consectetur turpis. Nulla et dui neque. Sed consectetur, purus eget aliquam vulputate, elit ipsum tincidunt risus, eu gravida magna arcu eu dolor. Integer sagittis maximus diam, a tincidunt augue fermentum a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ac dolor ac massa placerat tincidunt. Donec a nisi sit amet libero tempus commodo. Aliquam mollis aliquet tellus, interdum posuere eros dignissim non. Maecenas mattis sapien vitae rutrum fringilla.',
  },
}
