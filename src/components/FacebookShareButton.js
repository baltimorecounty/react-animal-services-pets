import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Button = styled.button`
  background: #4267b2;
  border: 1px solid #4267b2;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  -webkit-user-select: none;
  white-space: nowrap;
  font-size: 13px;
  height: 28px;
  padding: 0 4px 0 6px;
`;

const FacebookShareIcon = styled(FontAwesomeIcon)`
  background: white;
  color: #4267b2;
  display: inline-block;
  font-size: 10px;
  margin-right: 5px;
  padding: 2.5px 5px;
`;

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
    <Button type="button" onClick={handleClick}>
      <FacebookShareIcon icon={faFacebookF} /> {text}
    </Button>
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
