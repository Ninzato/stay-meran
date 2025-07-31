import { defineType, defineField } from 'sanity'

export const sectionContent = defineType({
  name: 'sectionContent',
  title: 'Section Content',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Section ID',
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
      ]
    }),
    defineField({
      name: 'content',
      title: 'Content',
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
      }
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
      subtitle: 'id',
      media: 'image'
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || subtitle,
        subtitle: `Section: ${subtitle}`,
        media
      }
    }
  }
})