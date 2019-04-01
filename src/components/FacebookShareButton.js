import React, { useEffect } from "react";
import PropTypes from "prop-types";

const FacebookShareButton = props => {
  const { text, url, title, description, thumbnail } = props;

  const handleClick = clickEvent => {
    window.FB.ui(
      {
        method: "share_open_graph",
        action_type: "og.likes",
        action_properties: JSON.stringify({
          object: {
            "og:url": url,
            "og:title": title,
            "og:description": description,
            "og:image": thumbnail
          }
        })
      },
      console.log // callback
    );
  };

  useEffect(() => {
    if (!window.FB) {
      console.error(
        "To use this button must include a reference to https://connect.facebook.net/en_US/sdk.js and initialize the Facebook Javascript API with an AppId"
      );
    }
  });

  return (
    <button type="button" onClick={handleClick}>
      {text}
    </button>
  );
};

FacebookShareButton.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  thumbnail: PropTypes.string
};

FacebookShareButton.defaultProps = {
  text: "Share on Facebook"
};

export default FacebookShareButton;
