import React from "react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import { PortableText } from "../../lib/sanity";

const serializers = {
  types: {
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube videoId={id} />;
    },
  },
};

export default function Body({ blocks }) {
  return <PortableText blocks={blocks} serializers={serializers} />;
}
