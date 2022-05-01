import React from 'react';
import PropTypes from 'prop-types';
import {
  IconGithub,
  IconLinkedin,
  IconBlogger,
  IconCodepen,
  IconInstagram,
  IconTwitter,
} from '@components/icons';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'Github':
      return <IconGithub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Blogger':
      return <IconBlogger />;
    case 'Codepen':
      return <IconCodepen />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconGithub />;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;
