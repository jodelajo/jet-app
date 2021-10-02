import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "js9qaok3", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: "v2021-03-25", // use a UTC date string
  token: '', // or leave blank for unauthenticated usage
  useCdn: true,
});