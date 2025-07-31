import { defineType, defineField } from 'sanity'

export const accommodation = defineType({
  name: 'accommodation',
  title: 'Accommodation',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'it', title: 'Italian', type: 'string' },
        { name: 'de', title: 'German', type: 'string' }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'text' },
        { name: 'it', title: 'Italian', type: 'text' },
        { name: 'de', title: 'German', type: 'text' }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'price',
      title: 'Price per Night',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'discoverMoreLink',
      title: 'Discover More Link',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    })
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'subtitle.en',
      media: 'image'
    }
  }
})