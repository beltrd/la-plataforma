import getConfig from 'next/config';

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();

export const publicConfig = publicRuntimeConfig;
export const serverConfig = serverRuntimeConfig;
