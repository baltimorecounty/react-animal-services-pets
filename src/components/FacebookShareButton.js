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
  /** Button text */
  text: PropTypes.string,
  /** Url of the item you want to share */
  url: PropTypes.string.isRequired,
  /** Title that will be displayed  */
  title: PropTypes.string.isRequired,
  /** A brief description of the item you want to share */
  description: PropTypes.string,
  /** The image that will be shared with the post */
  thumbnail: PropTypes.string
};

FacebookShareButton.defaultProps = {
  text: "Share on Facebook"
};

export default FacebookShareButton;
