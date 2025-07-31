import { defineType, defineField } from 'sanity'

export const heroContent = defineType({
  name: 'heroContent',
  title: 'Hero Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title1',
      title: 'Title Line 1',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'it', title: 'Italian', type: 'string' },
        { name: 'de', title: 'German', type: 'string' }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'title2',
      title: 'Title Line 2',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'it', title: 'Italian', type: 'string' },
        { name: 'de', title: 'German', type: 'string' }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'it', title: 'Italian', type: 'string' },
        { name: 'de', title: 'German', type: 'string' }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }),
  ],
  preview: {
    select: {
      title: 'title1.en',
      subtitle: 'title2.en',
      media: 'backgroundImage'
    }
  }
})