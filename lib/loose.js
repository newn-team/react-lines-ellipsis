"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var React = require('react');

function LinesEllipsisLoose(props) {
  var Component = props.component,
      text = props.text,
      lineHeight = props.lineHeight,
      maxLine = props.maxLine,
      style = props.style,
      overflowFallback = props.overflowFallback,
      rest = _objectWithoutProperties(props, ["component", "text", "lineHeight", "maxLine", "style", "overflowFallback"]);

  var maxLineNumber = +maxLine || 1;

  var usedStyle = _objectSpread(_objectSpread({}, style), {}, {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: maxLineNumber
  });

  if (overflowFallback && lineHeight) {
    var lineHeightNumber = parseFloat(lineHeight);
    var unit = typeof lineHeight === 'string' && lineHeight.trim().endsWith('em') ? 'em' : 'px';
    usedStyle = _objectSpread(_objectSpread({}, usedStyle), {}, {
      lineHeight: "".concat(lineHeightNumber).concat(unit),
      maxHeight: "".concat(maxLineNumber * lineHeightNumber).concat(unit),
      overflow: 'hidden'
    });
  }

  return /*#__PURE__*/React.createElement(Component, _extends({}, rest, {
    style: usedStyle
  }), text);
}

LinesEllipsisLoose.defaultProps = {
  component: 'div',
  maxLine: 1,
  style: {},
  overflowFallback: true
};
module.exports = LinesEllipsisLoose;

