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
  docSidebar: [
    {
      type: "category",
      label: "Introduction",
      //collapsed: false,
      link: {
        type: "doc",
        id: "index",
      },
      items: [
        {
          type: "doc",
          id: "why-timeplus",
          customProps: { tag: "Popular" },
        },
        "showcases",
      ],
    },
    {
      type: "category",
      label: "Quickstart",
      items: ["quickstart", "proton-howto"],
    },
    {
      type: "category",
      label: "Key Features",
      items: [
        "stream-query",
        "history",
        "joins",
        "proton-create-view",
        {
          type: "doc",
          id: "mutable-stream",
          customProps: { tag: "Enterprise" },
        },
        {
          type: "category",
          label: "External Streams",
          collapsed: false,
          link: {
            type: "doc",
            id: "external-stream",
          },
          items: [
            "proton-kafka",
            {
              type: "doc",
              id: "timeplus-external-stream",
              customProps: { tag: "Enterprise" },
            },
            {
              type: "doc",
              id: "pulsar-external-stream",
              customProps: { tag: "Enterprise" },
            },
          ],
        },
        "proton-schema-registry",
        "proton-format-schema",
        "proton-clickhouse-external-table",
        {
          type: "category",
          label: "User Defined Functions",
          collapsed: false,
          link: {
            type: "doc",
            id: "udf",
          },
          items: [
            {
              type: "doc",
              id: "remote-udf",
            },
            "js-udf",
          ],
        },
        {
          type: "category",
          label: "Web Console",
          customProps: { tag: "Enterprise" },
          items: [
            {
              type: "doc",
              label: "Data Visualization",
              id: "viz",
            },
            {
              type: "doc",
              id: "destination",
            },
            {
              type: "doc",
              id: "alert",
            },
            {
              type: "doc",
              id: "apikey",
            },
          ],
        },
      ],
    },
    /*"timeplus-enterprise",*/
    {
      type: "category",
      label: "Deployment & Operations",
      items: [
        "install",
        {
          type: "doc",
          id: "timeplus-cloud",
          customProps: { tag: "Enterprise" },
        },
        {
          type: "category",
          //collapsed: false,
          label: "Timeplus Enterprise Self-hosted",
          link: {
            type: "doc",
            id: "timeplus-self-host",
          },
          items: ["singlenode_install", "cluster_install", "k8s-helm"],
        },
        {
          type: "doc",
          id: "server_config",
          customProps: { tag: "Enterprise" },
        },
        "proton-ports",
        {
          type: "doc",
          id: "rbac",
          customProps: { tag: "Enterprise" },
        },
        {
          type: "doc",
          id: "terraform",
          customProps: { tag: "Enterprise" },
        },
      ],
    },
    {
      type: "category",
      label: "Guides & Tutorials",
      items: [
        "tutorial-sql-kafka",
        "tutorial-github",
        "tutorial-sql-connect-kafka",
        "tutorial-sql-connect-ch",
        {
          type: "category",
          label: "More Data Collection Guides",
          //collapsed: false,
          link: {
            type: "doc",
            id: "ingestion",
          },
          items: [
            "kafka-source",
            "confluent-cloud-source",
            /*"pulsar-source",*/
            {
              type: "doc",
              id: "ingest-api",
              customProps: { tag: "Enterprise" },
            },
          ],
        },
        {
          type: "category",
          label: "Streaming ETL",
          items: [
            "tutorial-sql-etl",
            "tutorial-sql-etl-kafka-to-ch",
            "tutorial-sql-etl-mysql-to-ch",
          ],
        },
        "tutorial-sql-join",
        "sql-pattern-topn",
        "usecases",
        "tutorial-kv",
        "tutorial-sql-read-avro",
        "tutorial-testcontainers-java",
      ],
    },
    {
      type: "category",
      label: "Open Source",
      items: [
        "proton",
        "proton-architecture",
        "proton-create-stream",
        "proton-manage-stream",
        "proton-faq",
      ],
    },
    {
      type: "category",
      label: "Query & SQL Reference",
      customProps: { tag: "Popular" },
      items: [
        "query-syntax",
        "query-settings",
        "datatypes",
        {
          type: "category",
          label: "SQL Commands",
          items: [
            "sql-create-stream",
            "sql-create-random-stream",
            "sql-create-external-stream",
            {
              type: "doc",
              id: "sql-create-mutable-stream",
              customProps: { tag: "Enterprise" },
            },
            "sql-alter-stream",
            "sql-show-streams",
            "sql-drop-stream",
            "sql-create-format-schema",
            "sql-show-format-schemas",
            "sql-drop-format-schema",

            "sql-create-view",
            "sql-create-materialized-view",
            "sql-alter-view",
            "sql-drop-view",
            "sql-create-external-table",
            "sql-create-function",
            "sql-show-functions",
            "sql-drop-function",
            "sql-create-remote-function",
            "sql-show-create",

            "sql-system-pause",
            "sql-system-unpause",
            // "sql-system-abort",
            // "sql-system-recover",
          ],
        },
        {
          type: "category",
          label: "Built-in Functions",
          collapsed: true,
          link: { type: "doc", id: "functions" },
          items: [
            "functions_for_type",
            "functions_for_comp",
            "functions_for_datetime",
            "functions_for_url",
            "functions_for_json",
            "functions_for_text",
            "functions_for_hash",
            "functions_for_random",
            "functions_for_agg",
            "functions_for_logic",
            "functions_for_math",
            "functions_for_fin",
            "functions_for_geo",
            "functions_for_streaming",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Concepts",
      //collapsed: false,
      link: {
        type: "doc",
        id: "glossary",
      },
      items: [
        {
          type: "category",
          label: "Stream",
          //collapsed: false,
          link: {
            type: "doc",
            id: "working-with-streams",
          },
          items: ["changelog-stream", "versioned-stream", "substream"],
        },
        "eventtime",
        "view",
      ],
    },
    {
      type: "category",
      label: "Clients, APIs & SDKs",
      items: [
        "proton-client",
        {
          type: "doc",
          id: "timeplusd-client",
          customProps: { tag: "Enterprise" },
        },
        {
          type: "category",
          label: "Timeplus CLI",
          customProps: { tag: "Enterprise" },
          link: {
            type: "doc",
            id: "cli-reference",
          },
          items: [
            "cli-backup",
            "cli-diag",
            "cli-help",
            "cli-license",
            "cli-migrate",
            "cli-restart",
            "cli-restore",
            "cli-service",
            "cli-start",
            "cli-status",
            "cli-stop",
            "cli-sync",
            "cli-user",
            "cli-version",
          ],
        },
        "jdbc",
        {
          label: "ODBC Driver",
          type: "link",
          href: "https://github.com/timeplus-io/proton-odbc",
        },
        {
          label: "Python Driver",
          type: "link",
          href: "https://github.com/timeplus-io/proton-python-driver",
        },
        {
          label: "Go Driver",
          type: "link",
          href: "https://github.com/timeplus-io/proton-go-driver",
        },
        {
          label: "C++ Client",
          type: "link",
          href: "https://github.com/timeplus-io/timeplus-cpp",
        },
        {
          label: "Rust Client",
          type: "link",
          href: "https://crates.io/crates/proton_client",
        },
        {
          label: "Timeplus REST API",
          type: "link",
          href: "https://docs.timeplus.com/rest",
        },
        "proton-ingest-api",
        {
          type: "doc",
          id: "query-api",
          customProps: { tag: "Enterprise" },
        },
      ],
    },
    {
      type: "category",
      label: "Third-party Tools",
      //collapsed: false,
      link: {
        type: "doc",
        id: "glossary",
      },
      items: [
        "integration-grafana",
        "integration-metabase",
        "sling",
        "kafka-connect",
        {
          label: "Push data to Timeplus via Airbyte",
          type: "link",
          href: "https://airbyte.com/connectors/timeplus",
        },
        {
          label: "Push data to Timeplus via Meltano",
          type: "link",
          href: "https://www.timeplus.com/post/meltano-timeplus-target",
        },
        "datapm",
        {
          label: "Timeplus Terraform Provider",
          type: "link",
          href: "https://docs.timeplus.com/terraform",
        },
      ],
    },
    /*"faq" */
    {
      type: "category",
      label: "Release Notes",
      //collapsed: false,
      link: {
        type: "doc",
        id: "release-notes",
      },
      items: [
        // "enterprise-v2.5",
        "enterprise-v2.4",
        "enterprise-v2.3",
        "v2-release-notes",
        "v1-release-notes",
        "public-beta-2",
        "public-beta-1",
        "private-beta-2",
        "private-beta-1",
      ],
    },
    {
      type: "category",
      label: "Additional Resources",
      items: ["getting-help", "credits"],
    },
  ],
};

module.exports = sidebars;
