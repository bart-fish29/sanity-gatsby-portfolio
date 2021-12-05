export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61ad47cee27107b9984bf062',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-pg4t4qhn',
                  apiId: '2d571394-1f69-47c2-bfa1-29b38f7332e0'
                },
                {
                  buildHookId: '61ad47ce920f5fe05d4deb6f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-114oc454',
                  apiId: 'eb1ac3a2-999a-4015-b5f3-7f583b2e0bfd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bart-fish29/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-114oc454.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
