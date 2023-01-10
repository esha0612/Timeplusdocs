/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  docSidebar:[
    /*{'Internal Docs':['usecases','internal-tptime']},
    {type:'category',
     label:'User Guide',
     link: {
      type: 'doc',
      id:'index'
     },collapsed: false,items:[
       */
       'index',
       {
        type:'category',
        label:'Quickstart',
        //collapsed: false,
        link: {
          type: 'doc',
          id:'quickstart'
        },
        items:[{
          type: 'doc',
          id:'quickstart-confluent',
          label:'with Confluent Cloud'
        },{
          type: 'doc',
          id:'quickstart-sample',
          label:'with stream generator'
        }]
       },
       {
        type:'category',
        label:'Concepts',
        //collapsed: false,
        link: {
          type: 'generated-index',
        },
        items:['working-with-streams','eventtime','stream-query','history','view','source','destination','alert']
       },
       {
        type:'category',
        label:'Data Ingestion',
        //collapsed: false,
        link: {
          type: 'doc',
          id:'ingestion'
        },
        items:['kafka-source','kafka-connect','pulsar-source','stream-generator','ingest-api','datapm']
       },
       {
        type:'category',
        label:'Query Guide',
        //collapsed: false,
        link: {
          type: 'doc',
          id:'query-guide'
        },
        items:['datatypes','query-syntax','functions','udf','usecases']
       },
       'transformation',
       'viz',
       'faq',
       'issues',
       {
        type:'category',
        label:'Release Notes',
        //collapsed: false,
        link: {
          type: 'doc',
          id:'changelog'
        },
        items:['private-beta-2','private-beta-1']
       },
       'getting-help',
       'glossary',
       /*
      ],
    }*/
  ]
};

module.exports = sidebars;
