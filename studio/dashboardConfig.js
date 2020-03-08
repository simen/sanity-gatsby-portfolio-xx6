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
                  buildHookId: '5e6559d0e412f87551083d7c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-xx6-studio',
                  apiId: '9c7a0cca-2e72-44ea-a3da-5feb6eab8663'
                },
                {
                  buildHookId: '5e6559d046c3243d79f0575f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-xx6',
                  apiId: 'edbeb3f6-f006-487c-9766-3cece7982532'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-gatsby-portfolio-xx6',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-xx6.netlify.com',
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
