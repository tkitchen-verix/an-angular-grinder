import {AppConfig} from "@angular/pwa/utility/config";
import {AppConfigModel} from "../app/@core/models/application";
import {ComponentType} from "../app/@core/models/layout/component";
import {_LOREM_PARAGRAPH} from "../app/@core/mock-data/mock-data";



export interface AnNgxAppConfig {
  title: string;
  subTitle: string;
  brandUrl: string;
  v1_config: AppConfigModel;
}

export const _APP_CONFIG_V_1: AppConfigModel = {
  id: 'an-ag-01',
  app_id: '',
  title: 'Angular Grinder',
  description: 'PWA Blogging Starter Kit',
  version: '0.0.1',
  landingConfig: {
    id: '01',
    carouselConfig: {},
    actionConfig: [
      {
        id: 'ro',
        text: 'Latest Articles',
        path: '/articles',
        imgLink: '',
        offSet: true,
        offSetValue: '1rem'
      }
    ]
  },
  nav: [
    {
      id: '01',
      title: 'Home',
      description: 'The Home Page',
      version: '0.0.1',
      active: true,
      default: true,
      url: 'Summary',
      guardRole: ''
    },
    {
      id: '02',
      title: 'Articles',
      description: 'Overview Report',
      version: '0.0.1',
      active: false,
      default: false,
      url: 'Overview',
      guardRole: ''
    }
  ],
  views: [
    {
      article_id: 'test',
      title: 'new',
      sections: [
        {
          id: 'vol-01',
          title: '',
          description: 'An Introduction',
          version: '0.0.1',
          layoutClass: '',
          blocks: [
            {
              id: 'ov-s1-b1',
              title: 'Greeting',
              description: 'Welcome to The Show',
              version: '0.0.1',
              layoutClass:  {
                type: 'grid-wrapper-span-1',
                xs: {
                  display: true,
                  width: '100%'
                },
                sm: {
                  display: true,
                  width: '30%'
                },
                md: {
                  display: true,
                  width: '30%'
                },
                lg: {
                  display: true,
                  width: '30%'
                },
                xl: {
                  display: true,
                  width: '30%'
                }
              },
              components: [
                {
                  id: 'greeting',
                  title: 'G',
                  description: 'TO ADD',
                  version: '0.0.1',
                  template: ComponentType.Information,
                  text: {
                    title: 'Learning the basics',
                    paragraphs: [
                      {
                        body: _LOREM_PARAGRAPH
                      },
                    ]
                  },
                  layoutClass:
                    {
                      type: 'measure-block',
                      xs: {
                        display: true,
                        width: '100%'
                      },
                      sm: {
                        display: true,
                        width: '30%'
                      },
                      md: {
                        display: true,
                        width: '30%'
                      },
                      lg: {
                        display: true,
                        width: '30%'
                      },
                      xl: {
                        display: true,
                        width: '30%'
                      }
                    },
                }
              ]
            },
            //
            {
              id: 'ov-s1-b1',
              title: 'Customer',
              description: 'Primary Headline Count Block cards',
              version: '0.0.1',
              layoutClass:  {
                type: 'grid-wrapper-span-1',
                xs: {
                  display: true,
                  width: '100%'
                },
                sm: {
                  display: true,
                  width: '30%'
                },
                md: {
                  display: true,
                  width: '30%'
                },
                lg: {
                  display: true,
                  width: '30%'
                },
                xl: {
                  display: true,
                  width: '30%'
                }
              },
              components: [
                {
                  id: 'greeting',
                  title: 'G',
                  description: 'TO ADD',
                  version: '0.0.1',
                  template: ComponentType.Information,
                  text: {
                    title: 'Learning the basics',
                    paragraphs: [
                      {
                        body: _LOREM_PARAGRAPH
                      },
                      {
                        body: _LOREM_PARAGRAPH
                      },
                      {
                        body: _LOREM_PARAGRAPH
                      },
                      {
                        body: _LOREM_PARAGRAPH
                      },
                      {
                        body: _LOREM_PARAGRAPH
                      }
                    ]
                  },
                  layoutClass:
                    {
                      type: 'measure-block',
                      xs: {
                        display: true,
                        width: '100%'
                      },
                      sm: {
                        display: true,
                        width: '30%'
                      },
                      md: {
                        display: true,
                        width: '30%'
                      },
                      lg: {
                        display: true,
                        width: '30%'
                      },
                      xl: {
                        display: true,
                        width: '30%'
                      }
                    },
                }
              ]
            }
          ]
        },
      ]
    },
    {
      article_id: 'test',
      title: 'articles',
      sections: [
        {
          id: 'vol-01',
          title: '',
          description: 'An Introduction',
          version: '0.0.1',
          layoutClass: '',
          blocks: [
            {
              id: 'ov-s1-b1',
              title: 'Its new',
              description: 'Welcome to The Show',
              version: '0.0.1',
              layoutClass:  {
                type: 'grid-wrapper-span-1',
                xs: {
                  display: true,
                  width: '100%'
                },
                sm: {
                  display: true,
                  width: '30%'
                },
                md: {
                  display: true,
                  width: '30%'
                },
                lg: {
                  display: true,
                  width: '30%'
                },
                xl: {
                  display: true,
                  width: '30%'
                }
              },
              components: [
                {
                  id: 'greeting',
                  title: 'G',
                  description: 'TO ADD',
                  version: '0.0.1',
                  template: ComponentType.Information,
                  text: {
                    title: 'Learning the sasdas',
                    paragraphs: [
                      {
                        body: _LOREM_PARAGRAPH
                      },
                    ]
                  },
                  layoutClass:
                    {
                      type: 'measure-block',
                      xs: {
                        display: true,
                        width: '100%'
                      },
                      sm: {
                        display: true,
                        width: '30%'
                      },
                      md: {
                        display: true,
                        width: '30%'
                      },
                      lg: {
                        display: true,
                        width: '30%'
                      },
                      xl: {
                        display: true,
                        width: '30%'
                      }
                    },
                }
              ]
            },
            //
            {
              id: 'ov-s1-b1',
              title: 'Customer',
              description: 'Primary Headline Count Block cards',
              version: '0.0.1',
              layoutClass:  {
                type: 'grid-wrapper-span-1',
                xs: {
                  display: true,
                  width: '100%'
                },
                sm: {
                  display: true,
                  width: '30%'
                },
                md: {
                  display: true,
                  width: '30%'
                },
                lg: {
                  display: true,
                  width: '30%'
                },
                xl: {
                  display: true,
                  width: '30%'
                }
              },
              components: [
                {
                  id: 'greeting',
                  title: 'G',
                  description: 'TO ADD',
                  version: '0.0.1',
                  template: ComponentType.Information,
                  text: {
                    title: 'Learning the basics',
                    paragraphs: [
                      {
                        body: _LOREM_PARAGRAPH
                      },
                      {
                        body: _LOREM_PARAGRAPH
                      },
                      {
                        body: _LOREM_PARAGRAPH
                      },
                      {
                        body: _LOREM_PARAGRAPH
                      },
                      {
                        body: _LOREM_PARAGRAPH
                      }
                    ]
                  },
                  layoutClass:
                    {
                      type: 'measure-block',
                      xs: {
                        display: true,
                        width: '100%'
                      },
                      sm: {
                        display: true,
                        width: '30%'
                      },
                      md: {
                        display: true,
                        width: '30%'
                      },
                      lg: {
                        display: true,
                        width: '30%'
                      },
                      xl: {
                        display: true,
                        width: '30%'
                      }
                    },
                }
              ]
            }
          ]
        },
      ]
    },
  ]
};

export const _APP_CONFIG: AnNgxAppConfig = {
  title: 'Angular Grinder',
  subTitle: '*ng + ts + firebase',
  brandUrl: 'https://user-images.githubusercontent.com/5389035/27643779-a108039c-5c3f-11e7-83fe-2f57fba40887.png',
  v1_config: _APP_CONFIG_V_1
};
