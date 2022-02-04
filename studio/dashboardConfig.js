export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61fd27e54ba832005ac8c2b2',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-ggu9wv8t',
                  apiId: '2390bb84-0714-4189-97c3-3d024e86dc62'
                },
                {
                  buildHookId: '61fd27e65ceb7a007f211765',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-5dyxu3ng',
                  apiId: '39ec386f-e0fd-4d87-b52f-58bf80f05983'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jennypatrickn/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-5dyxu3ng.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
