const DEV_URL = "http://localhost:3000";
export const isDev = window.location.hostname === "localhost";
export const BASE_URL = isDev ? DEV_URL : process.env.SANITY_PREVIEW_SITE;
