'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createStyleSideEffect;

var _react = require('react');

var _reactSideEffect = require('react-side-effect');

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createStyleSideEffect(element, name) {
  function StyleSideEffect(_ref) {
    var children = _ref.children;

    return _react.Children.only(children);
  }

  if (name) {
    StyleSideEffect.displayName = name;
  }

  function reducePropsToState(propsList) {
    var classNames = [];
    var style = {};

    propsList.forEach(function (props) {
      if (props.style) {
        style = _extends({}, style, props.style);
      }

      if (props.className) {
        classNames.push(props.className);
      }
    });

    return { classNames: classNames, style: style };
  }

  function handleStateChangeOnClient(_ref2) {
    var classNames = _ref2.classNames;
    var style = _ref2.style;

    element.setAttribute('class', classNames.join(' '));

    for (var key in style) {
      element.style[key] = style[key];
    }
  }

  return (0, _reactSideEffect2.default)(reducePropsToState, handleStateChangeOnClient)(StyleSideEffect);
}