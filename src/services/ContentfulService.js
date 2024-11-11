// @ts-nocheck
import axios from "axios";
const SPACE = "u4qum221y6gl";
const ENVIRONMENT = "master";
const PREVIEW_TOKEN = "zV2mdfXr8BNgFBunPpYLhQW_ulgfpFA3ZBhetWnU3dQ";
const DELIVERY_TOKEN = "7j0sDfmLapKooqk_cs-WYNDYn8_UCOTNWyGsoHHuxGg";
const PREVIEW_SETTING = true;

const _contentfulClient = axios.create({
  baseURL: `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENVIRONMENT}`,
});

const _contentfulData = async (query, queryPreview) => {
  const data = await _contentfulClient({
    method: "POST",
    data: {
      query,
    },
    headers: {
      Authorization: `Bearer ${queryPreview ? PREVIEW_TOKEN : DELIVERY_TOKEN}`,
    },
  }).catch((err) => console.error("Failed to fetch contentful data", err));
  return data?.data?.data;
};

export const getContentfulByNameQuery = async (
  queryName,
  queryId,
  queryData = "",
  queryPreview = PREVIEW_SETTING
) => {
  const query = `{
    ${queryName}(id: "${queryId}", preview: ${queryPreview}) {
      sys {
        id
      }
      ${queryData}
    }
  }`;

  return await _contentfulData(query, queryPreview);
};

export const getContentfulByQuery = async (
  queryName,
  innerQuery,
  queryData = "",
  queryLimit = 1,
  queryPreview = PREVIEW_SETTING
) => {
  const query = `{
    ${queryName}(limit: ${queryLimit}, ${
    innerQuery ? `where: ${innerQuery},` : ""
  } preview: ${queryPreview}) {
      ${queryData}
    }
  }`;

  return await _contentfulData(query, queryPreview);
};
