import { defineType, defineField } from 'sanity'

export const ctaContent = defineType({
  name: 'ctaContent',
  title: 'CTA Content',
  type: 'document',
  fields: [
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'text' },
        { name: 'it', title: 'Italian', type: 'text' },
        { name: 'de', title: 'German', type: 'text' }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'it', title: 'Italian', type: 'string' },
        { name: 'de', title: 'German', type: 'string' }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'buttonHref',
      title: 'Button Link',
      type: 'string',
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
    })
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'subtitle.en',
      media: 'backgroundImage'
    }
  }
})