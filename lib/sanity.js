import { config } from "./config";
import createImageUrlBuilder from "@sanity/image-url";
/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = source => createImageUrlBuilder(config).image(source);

// Set up the live preview subscription hook
//   export const usePreviewSubscription = createPreviewSubscriptionHook(config)

// Set up Portable Text serialization
export const PortableText = props => (
  <PortableTextComponent components={{}} {...props} />
);

//   // Helper function for using the current logged in user account
//   export const useCurrentUser = createCurrentUserHook(config)
