import type { Meta, StoryObj } from '@storybook/react'

import ImageGallery from './ImageGallery'

const meta: Meta<typeof ImageGallery> = {
  component: ImageGallery,
  title: 'components/Image Gallery',
}

export default meta

type Story = StoryObj<typeof ImageGallery>

export const Default: Story = {
  args: {
    width: 400,
    height: 300,
    images: [
      'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      'https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB0K0XQZKj8dUovTwhcIjK2ZiYt7uF3WsIcnYtImKMo2lLBZMt8VQw2aC0Kg&s',
      'https://images.ctfassets.net/hrltx12pl8hq/01rJn4TormMsGQs1ZRIpzX/16a1cae2440420d0fd0a7a9a006f2dcb/Artboard_Copy_231.jpg?fit=fill&w=600&h=600',
      'https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/file-istockphoto-859550894-170667a-1600430313.jpg',
    ],
  },
}
