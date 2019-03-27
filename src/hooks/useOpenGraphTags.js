import React, { useState, useEffect } from "react";

function useOpenGraphMetaData(url, title, description, image) {
  const [fbResponse, setfbResponse] = useState(null);

  useEffect(() => {
    window.FB.ui(
      {
        method: "share_open_graph",
        action_type: "og.likes",
        action_properties: JSON.stringify({
          object: {
            "og:url": url,
            "og:title": title,
            "og:description": description,
            "og:image": image
          }
        })
      },
      response => {
        // Action after response
        console.log(response);
        setfbResponse(response);
      }
    );
  });

  return fbResponse;
}

export default useOpenGraphMetaData;
