import { GraphQLClient } from 'graphql-request';

interface Options {
  query: string;
  preview: boolean;
}

export function request(options: Options) {
  const { query, preview } = options;

  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`
    }
  });

  return client.request(query);
}