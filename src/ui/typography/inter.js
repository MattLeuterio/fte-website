import React from 'react';
import PropTypes from 'prop-types';
import Typeface, { TypefaceInterface } from './index';
import { FontBase } from '../../const';
import theme from '../theme';

const baseConfig = {
  color: 'unset',
  fontFamily: theme.fontset.inter,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 1,
  letterSpacing: 'unset',
  fontSize: FontBase
};

const types = {
  italic: {
    fontStyle: 'italic'
  },
  bold: {
    fontWeight: 700
  },
  boldItalic: {
    fontStyle: 'italic',
    fontWeight: 700
  },
  h1: {
    fontSize: 21,
    fontWeight: 400
  },
  h2: {
    color: theme.colors.primary.lightblack,
    fontSize: 18,
    fontWeight: 400
  },
  h3: {
    fontSize: 14,
    lineHeight: 1.14
  },
  pageTitle: {
    fontSize: 42,
    fontWeight: 700
  },
  pageTitleSub: {
    fontSize: 16,
    color: `${theme.colors.primary.green}`
  },
  slogan: {
    fontSize: 36,
    lineHeight: 1.30,
    fontWeight: 700
  },
  pageSubtitleLarge: {
    fontSize: 24,
    lineHeight: 1.30,
    color: `${theme.colors.primary.green}`
  },
  label: {
    fontSize: 12,
    lineHeight: 1.17,
    letterSpacing: 'normal'
  },
  label1: {
    fontSize: 12,
    letterSpacing: '0.5px',
    fontWeight: 400,
    color: theme.colors.primary.gray
  },
  boldLabel: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1.14
  },
  linkButton: {
    fontSize: 16,
    fontWeight: 700
  }
}  


const Inter = ({
  type, configuration, children, htmlAttribute, onClick
}) => <Typeface htmlAttribute={htmlAttribute} configuration={{ ...baseConfig, ...types[type], ...configuration }} onClick={onClick}>{children}</Typeface>;

Inter.propTypes = {
  htmlAttribute: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(Object.keys(types)),
  configuration: TypefaceInterface,
  onClick: PropTypes.func
};

export default Inter;