
/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },

    {
      name: 'author',
      title: 'Autheur',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Gepubliceerd op',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
      }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {type: 'block'
        },
        {type: 'youtube'
        },
        {type: 'image'
        },
      ]
    },
  ],

  

  orderings: [
    {
      title: 'Publish Date, New',
      name: 'publishDateDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    },
    {
      title: 'Publish Date, Old',
      name: 'publishDateAsc',
      by: [
        {field: 'publishedAt', direction: 'asc'}
      ]
    }],


  preview: {
    select: {
      title: 'title',
      id: 'id',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },


}
