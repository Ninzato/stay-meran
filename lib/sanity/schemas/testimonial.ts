import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'guestName',
      title: 'Guest Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'guestPhoto',
      title: 'Guest Photo',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'text' },
        { name: 'it', title: 'Italian', type: 'text' },
        { name: 'de', title: 'German', type: 'text' }
      ],
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
      title: 'guestName',
      subtitle: 'quote.en',
      media: 'guestPhoto'
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? `"${subtitle.slice(0, 60)}..."` : '',
        media
      }
    }
  }
})