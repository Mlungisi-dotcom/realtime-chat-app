module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Chat.js":
/*!****************************!*\
  !*** ./components/Chat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pusher-js */ \"pusher-js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ChatMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatMessage */ \"./components/ChatMessage.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst SAD_EMOJI = [55357, 56864];\nconst HAPPY_EMOJI = [55357, 56832];\nconst NEUTRAL_EMOJI = [55357, 56848];\n\nclass Chat extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      chats: []\n    });\n\n    _defineProperty(this, \"handleKeyUp\", evt => {\n      const value = evt.target.value;\n\n      if (evt.keyCode === 13 && !evt.shiftKey) {\n        const {\n          activeUser: user\n        } = this.props;\n        const chat = {\n          user,\n          message: value,\n          timestamp: +new Date()\n        };\n        evt.target.value = '';\n        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/message', chat);\n      }\n    });\n  }\n\n  componentDidMount() {\n    this.pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_2___default.a(process.env.PUSHER_APP_KEY, {\n      cluster: process.env.PUSHER_APP_CLUSTER,\n      encrypted: true\n    });\n    this.channel = this.pusher.subscribe('chat-room');\n    this.channel.bind('new-message', ({\n      chat = null\n    }) => {\n      const {\n        chats\n      } = this.state;\n      chat && chats.push(chat);\n      this.setState({\n        chats\n      });\n    });\n    this.pusher.connection.bind('connected', () => {\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/messages').then(response => {\n        const chats = response.data.messages;\n        this.setState({\n          chats\n        });\n      });\n    });\n  }\n\n  componentWillUnmount() {\n    this.pusher.disconnect();\n  }\n\n  render() {\n    return this.props.activeUser && __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, __jsx(\"div\", {\n      className: \"border-bottom border-gray w-100 d-flex align-items-center bg-white\",\n      style: {\n        height: 90\n      }\n    }, __jsx(\"h2\", {\n      className: \"text-dark mb-0 mx-4 px-2\"\n    }, this.props.activeUser)), __jsx(\"div\", {\n      className: \"px-4 pb-4 w-100 d-flex flex-row flex-wrap align-items-start align-content-start position-relative\",\n      style: {\n        height: 'calc(100% - 180px)',\n        overflowY: 'scroll'\n      }\n    }, this.state.chats.map((chat, index) => {\n      const previous = Math.max(0, index - 1);\n      const previousChat = this.state.chats[previous];\n      const position = chat.user === this.props.activeUser ? \"right\" : \"left\";\n      const isFirst = previous === index;\n      const inSequence = chat.user === previousChat.user;\n      const hasDelay = Math.ceil((chat.timestamp - previousChat.timestamp) / (1000 * 60)) > 1;\n      const mood = chat.sentiment > 0 ? HAPPY_EMOJI : chat.sentiment === 0 ? NEUTRAL_EMOJI : SAD_EMOJI;\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        key: index\n      }, (isFirst || !inSequence || hasDelay) && __jsx(\"div\", {\n        className: `d-block w-100 font-weight-bold text-dark mt-4 pb-1 px-1 text-${position}`,\n        style: {\n          fontSize: '0.9rem'\n        }\n      }, __jsx(\"span\", {\n        className: \"d-block\",\n        style: {\n          fontSize: '1.6rem'\n        }\n      }, String.fromCodePoint(...mood)), __jsx(\"span\", null, chat.user || 'Anonymous')), __jsx(_ChatMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        message: chat.message,\n        position: position\n      }));\n    })), __jsx(\"div\", {\n      className: \"border-top border-gray w-100 px-4 d-flex align-items-center bg-light\",\n      style: {\n        minHeight: 90\n      }\n    }, __jsx(\"textarea\", {\n      className: \"form-control px-3 py-2\",\n      onKeyUp: this.handleKeyUp,\n      placeholder: \"Enter a chat message\",\n      style: {\n        resize: 'none'\n      }\n    })));\n  }\n\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXQuanM/ZGVlZiJdLCJuYW1lcyI6WyJTQURfRU1PSkkiLCJIQVBQWV9FTU9KSSIsIk5FVVRSQUxfRU1PSkkiLCJDaGF0IiwiQ29tcG9uZW50IiwiY2hhdHMiLCJldnQiLCJ2YWx1ZSIsInRhcmdldCIsImtleUNvZGUiLCJzaGlmdEtleSIsImFjdGl2ZVVzZXIiLCJ1c2VyIiwicHJvcHMiLCJjaGF0IiwibWVzc2FnZSIsInRpbWVzdGFtcCIsIkRhdGUiLCJheGlvcyIsInBvc3QiLCJjb21wb25lbnREaWRNb3VudCIsInB1c2hlciIsIlB1c2hlciIsInByb2Nlc3MiLCJlbnYiLCJQVVNIRVJfQVBQX0tFWSIsImNsdXN0ZXIiLCJQVVNIRVJfQVBQX0NMVVNURVIiLCJlbmNyeXB0ZWQiLCJjaGFubmVsIiwic3Vic2NyaWJlIiwiYmluZCIsInN0YXRlIiwicHVzaCIsInNldFN0YXRlIiwiY29ubmVjdGlvbiIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJtZXNzYWdlcyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZGlzY29ubmVjdCIsInJlbmRlciIsImhlaWdodCIsIm92ZXJmbG93WSIsIm1hcCIsImluZGV4IiwicHJldmlvdXMiLCJNYXRoIiwibWF4IiwicHJldmlvdXNDaGF0IiwicG9zaXRpb24iLCJpc0ZpcnN0IiwiaW5TZXF1ZW5jZSIsImhhc0RlbGF5IiwiY2VpbCIsIm1vb2QiLCJzZW50aW1lbnQiLCJmb250U2l6ZSIsIlN0cmluZyIsImZyb21Db2RlUG9pbnQiLCJtaW5IZWlnaHQiLCJoYW5kbGVLZXlVcCIsInJlc2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUcsQ0FBQyxLQUFELEVBQVEsS0FBUixDQUFsQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxDQUFDLEtBQUQsRUFBUSxLQUFSLENBQXBCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FBdEI7O0FBRUEsTUFBTUMsSUFBTixTQUFtQkMsK0NBQW5CLENBQTZCO0FBQUE7QUFBQTs7QUFBQSxtQ0FFbkI7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FGbUI7O0FBQUEseUNBK0JiQyxHQUFHLElBQUk7QUFDbkIsWUFBTUMsS0FBSyxHQUFHRCxHQUFHLENBQUNFLE1BQUosQ0FBV0QsS0FBekI7O0FBRUEsVUFBSUQsR0FBRyxDQUFDRyxPQUFKLEtBQWdCLEVBQWhCLElBQXNCLENBQUNILEdBQUcsQ0FBQ0ksUUFBL0IsRUFBeUM7QUFDdkMsY0FBTTtBQUFFQyxvQkFBVSxFQUFFQztBQUFkLFlBQXVCLEtBQUtDLEtBQWxDO0FBQ0EsY0FBTUMsSUFBSSxHQUFHO0FBQUVGLGNBQUY7QUFBUUcsaUJBQU8sRUFBRVIsS0FBakI7QUFBd0JTLG1CQUFTLEVBQUUsQ0FBQyxJQUFJQyxJQUFKO0FBQXBDLFNBQWI7QUFFQVgsV0FBRyxDQUFDRSxNQUFKLENBQVdELEtBQVgsR0FBbUIsRUFBbkI7QUFDQVcsb0RBQUssQ0FBQ0MsSUFBTixDQUFXLFVBQVgsRUFBdUJMLElBQXZCO0FBQ0Q7QUFDRixLQXpDMEI7QUFBQTs7QUFJM0JNLG1CQUFpQixHQUFHO0FBQ2xCLFNBQUtDLE1BQUwsR0FBYyxJQUFJQyxnREFBSixDQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsY0FBdkIsRUFBdUM7QUFDbkRDLGFBQU8sRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLGtCQUQ4QjtBQUVuREMsZUFBUyxFQUFFO0FBRndDLEtBQXZDLENBQWQ7QUFLQSxTQUFLQyxPQUFMLEdBQWUsS0FBS1IsTUFBTCxDQUFZUyxTQUFaLENBQXNCLFdBQXRCLENBQWY7QUFFQSxTQUFLRCxPQUFMLENBQWFFLElBQWIsQ0FBa0IsYUFBbEIsRUFBaUMsQ0FBQztBQUFFakIsVUFBSSxHQUFHO0FBQVQsS0FBRCxLQUFxQjtBQUNwRCxZQUFNO0FBQUVUO0FBQUYsVUFBWSxLQUFLMkIsS0FBdkI7QUFDQWxCLFVBQUksSUFBSVQsS0FBSyxDQUFDNEIsSUFBTixDQUFXbkIsSUFBWCxDQUFSO0FBQ0EsV0FBS29CLFFBQUwsQ0FBYztBQUFFN0I7QUFBRixPQUFkO0FBQ0QsS0FKRDtBQU1BLFNBQUtnQixNQUFMLENBQVljLFVBQVosQ0FBdUJKLElBQXZCLENBQTRCLFdBQTVCLEVBQXlDLE1BQU07QUFDN0NiLGtEQUFLLENBQUNDLElBQU4sQ0FBVyxXQUFYLEVBQ0dpQixJQURILENBQ1FDLFFBQVEsSUFBSTtBQUNoQixjQUFNaEMsS0FBSyxHQUFHZ0MsUUFBUSxDQUFDQyxJQUFULENBQWNDLFFBQTVCO0FBQ0EsYUFBS0wsUUFBTCxDQUFjO0FBQUU3QjtBQUFGLFNBQWQ7QUFDRCxPQUpIO0FBS0QsS0FORDtBQU9EOztBQUVEbUMsc0JBQW9CLEdBQUc7QUFDckIsU0FBS25CLE1BQUwsQ0FBWW9CLFVBQVo7QUFDRDs7QUFjREMsUUFBTSxHQUFHO0FBQ1AsV0FBUSxLQUFLN0IsS0FBTCxDQUFXRixVQUFYLElBQXlCLE1BQUMsOENBQUQsUUFDL0I7QUFBSyxlQUFTLEVBQUMsb0VBQWY7QUFBb0YsV0FBSyxFQUFFO0FBQUVnQyxjQUFNLEVBQUU7QUFBVjtBQUEzRixPQUNFO0FBQUksZUFBUyxFQUFDO0FBQWQsT0FBMEMsS0FBSzlCLEtBQUwsQ0FBV0YsVUFBckQsQ0FERixDQUQrQixFQUkvQjtBQUFLLGVBQVMsRUFBQyxtR0FBZjtBQUFtSCxXQUFLLEVBQUU7QUFBRWdDLGNBQU0sRUFBRSxvQkFBVjtBQUFnQ0MsaUJBQVMsRUFBRTtBQUEzQztBQUExSCxPQUNHLEtBQUtaLEtBQUwsQ0FBVzNCLEtBQVgsQ0FBaUJ3QyxHQUFqQixDQUFxQixDQUFDL0IsSUFBRCxFQUFPZ0MsS0FBUCxLQUFpQjtBQUNyQyxZQUFNQyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWUgsS0FBSyxHQUFHLENBQXBCLENBQWpCO0FBQ0EsWUFBTUksWUFBWSxHQUFHLEtBQUtsQixLQUFMLENBQVczQixLQUFYLENBQWlCMEMsUUFBakIsQ0FBckI7QUFDQSxZQUFNSSxRQUFRLEdBQUdyQyxJQUFJLENBQUNGLElBQUwsS0FBYyxLQUFLQyxLQUFMLENBQVdGLFVBQXpCLEdBQXNDLE9BQXRDLEdBQWdELE1BQWpFO0FBRUEsWUFBTXlDLE9BQU8sR0FBR0wsUUFBUSxLQUFLRCxLQUE3QjtBQUNBLFlBQU1PLFVBQVUsR0FBR3ZDLElBQUksQ0FBQ0YsSUFBTCxLQUFjc0MsWUFBWSxDQUFDdEMsSUFBOUM7QUFDQSxZQUFNMEMsUUFBUSxHQUFHTixJQUFJLENBQUNPLElBQUwsQ0FBVSxDQUFDekMsSUFBSSxDQUFDRSxTQUFMLEdBQWlCa0MsWUFBWSxDQUFDbEMsU0FBL0IsS0FBNkMsT0FBTyxFQUFwRCxDQUFWLElBQXFFLENBQXRGO0FBRUEsWUFBTXdDLElBQUksR0FBRzFDLElBQUksQ0FBQzJDLFNBQUwsR0FBaUIsQ0FBakIsR0FBcUJ4RCxXQUFyQixHQUFvQ2EsSUFBSSxDQUFDMkMsU0FBTCxLQUFtQixDQUFuQixHQUF1QnZELGFBQXZCLEdBQXVDRixTQUF4RjtBQUVBLGFBQ0UsTUFBQyw4Q0FBRDtBQUFVLFdBQUcsRUFBRThDO0FBQWYsU0FDSSxDQUFDTSxPQUFPLElBQUksQ0FBQ0MsVUFBWixJQUEwQkMsUUFBM0IsS0FDQTtBQUFLLGlCQUFTLEVBQUcsZ0VBQStESCxRQUFTLEVBQXpGO0FBQTRGLGFBQUssRUFBRTtBQUFFTyxrQkFBUSxFQUFFO0FBQVo7QUFBbkcsU0FDRTtBQUFNLGlCQUFTLEVBQUMsU0FBaEI7QUFBMEIsYUFBSyxFQUFFO0FBQUVBLGtCQUFRLEVBQUU7QUFBWjtBQUFqQyxTQUEwREMsTUFBTSxDQUFDQyxhQUFQLENBQXFCLEdBQUdKLElBQXhCLENBQTFELENBREYsRUFFRSxvQkFBTzFDLElBQUksQ0FBQ0YsSUFBTCxJQUFhLFdBQXBCLENBRkYsQ0FGSixFQU9FLE1BQUMsb0RBQUQ7QUFBYSxlQUFPLEVBQUVFLElBQUksQ0FBQ0MsT0FBM0I7QUFBb0MsZ0JBQVEsRUFBRW9DO0FBQTlDLFFBUEYsQ0FERjtBQVdELEtBdEJBLENBREgsQ0FKK0IsRUE2Qi9CO0FBQUssZUFBUyxFQUFDLHNFQUFmO0FBQXNGLFdBQUssRUFBRTtBQUFFVSxpQkFBUyxFQUFFO0FBQWI7QUFBN0YsT0FDRTtBQUFVLGVBQVMsRUFBQyx3QkFBcEI7QUFBNkMsYUFBTyxFQUFFLEtBQUtDLFdBQTNEO0FBQXdFLGlCQUFXLEVBQUMsc0JBQXBGO0FBQTJHLFdBQUssRUFBRTtBQUFFQyxjQUFNLEVBQUU7QUFBVjtBQUFsSCxNQURGLENBN0IrQixDQUFqQztBQWlDRDs7QUE3RTBCOztBQStFNUI7QUFFYzVELG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DaGF0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFB1c2hlciBmcm9tICdwdXNoZXItanMnO1xuaW1wb3J0IENoYXRNZXNzYWdlIGZyb20gJy4vQ2hhdE1lc3NhZ2UnO1xuXG5jb25zdCBTQURfRU1PSkkgPSBbNTUzNTcsIDU2ODY0XTtcbmNvbnN0IEhBUFBZX0VNT0pJID0gWzU1MzU3LCA1NjgzMl07XG5jb25zdCBORVVUUkFMX0VNT0pJID0gWzU1MzU3LCA1Njg0OF07XG5cbmNsYXNzIENoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRlID0geyBjaGF0czogW10gfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHVzaGVyID0gbmV3IFB1c2hlcihwcm9jZXNzLmVudi5QVVNIRVJfQVBQX0tFWSwge1xuICAgICAgY2x1c3RlcjogcHJvY2Vzcy5lbnYuUFVTSEVSX0FQUF9DTFVTVEVSLFxuICAgICAgZW5jcnlwdGVkOiB0cnVlXG4gICAgfSk7XG5cbiAgICB0aGlzLmNoYW5uZWwgPSB0aGlzLnB1c2hlci5zdWJzY3JpYmUoJ2NoYXQtcm9vbScpO1xuXG4gICAgdGhpcy5jaGFubmVsLmJpbmQoJ25ldy1tZXNzYWdlJywgKHsgY2hhdCA9IG51bGwgfSkgPT4ge1xuICAgICAgY29uc3QgeyBjaGF0cyB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNoYXQgJiYgY2hhdHMucHVzaChjaGF0KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGF0cyB9KTtcbiAgICB9KTtcbiAgICBcbiAgICB0aGlzLnB1c2hlci5jb25uZWN0aW9uLmJpbmQoJ2Nvbm5lY3RlZCcsICgpID0+IHtcbiAgICAgIGF4aW9zLnBvc3QoJy9tZXNzYWdlcycpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBjb25zdCBjaGF0cyA9IHJlc3BvbnNlLmRhdGEubWVzc2FnZXM7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoYXRzIH0pO1xuICAgICAgICB9KTtcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5wdXNoZXIuZGlzY29ubmVjdCgpO1xuICB9XG5cbiAgaGFuZGxlS2V5VXAgPSBldnQgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZTtcblxuICAgIGlmIChldnQua2V5Q29kZSA9PT0gMTMgJiYgIWV2dC5zaGlmdEtleSkge1xuICAgICAgY29uc3QgeyBhY3RpdmVVc2VyOiB1c2VyIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgY2hhdCA9IHsgdXNlciwgbWVzc2FnZTogdmFsdWUsIHRpbWVzdGFtcDogK25ldyBEYXRlIH07XG4gICAgICBcbiAgICAgIGV2dC50YXJnZXQudmFsdWUgPSAnJztcbiAgICAgIGF4aW9zLnBvc3QoJy9tZXNzYWdlJywgY2hhdCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAodGhpcy5wcm9wcy5hY3RpdmVVc2VyICYmIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWJvdHRvbSBib3JkZXItZ3JheSB3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGJnLXdoaXRlXCIgc3R5bGU9e3sgaGVpZ2h0OiA5MCB9fT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtZGFyayBtYi0wIG14LTQgcHgtMlwiPnt0aGlzLnByb3BzLmFjdGl2ZVVzZXJ9PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHBiLTQgdy0xMDAgZC1mbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBhbGlnbi1pdGVtcy1zdGFydCBhbGlnbi1jb250ZW50LXN0YXJ0IHBvc2l0aW9uLXJlbGF0aXZlXCIgc3R5bGU9e3sgaGVpZ2h0OiAnY2FsYygxMDAlIC0gMTgwcHgpJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cbiAgICAgICAge3RoaXMuc3RhdGUuY2hhdHMubWFwKChjaGF0LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByZXZpb3VzID0gTWF0aC5tYXgoMCwgaW5kZXggLSAxKTtcbiAgICAgICAgICBjb25zdCBwcmV2aW91c0NoYXQgPSB0aGlzLnN0YXRlLmNoYXRzW3ByZXZpb3VzXTtcbiAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGNoYXQudXNlciA9PT0gdGhpcy5wcm9wcy5hY3RpdmVVc2VyID8gXCJyaWdodFwiIDogXCJsZWZ0XCI7XG5cbiAgICAgICAgICBjb25zdCBpc0ZpcnN0ID0gcHJldmlvdXMgPT09IGluZGV4O1xuICAgICAgICAgIGNvbnN0IGluU2VxdWVuY2UgPSBjaGF0LnVzZXIgPT09IHByZXZpb3VzQ2hhdC51c2VyO1xuICAgICAgICAgIGNvbnN0IGhhc0RlbGF5ID0gTWF0aC5jZWlsKChjaGF0LnRpbWVzdGFtcCAtIHByZXZpb3VzQ2hhdC50aW1lc3RhbXApIC8gKDEwMDAgKiA2MCkpID4gMTtcblxuICAgICAgICAgIGNvbnN0IG1vb2QgPSBjaGF0LnNlbnRpbWVudCA+IDAgPyBIQVBQWV9FTU9KSSA6IChjaGF0LnNlbnRpbWVudCA9PT0gMCA/IE5FVVRSQUxfRU1PSkkgOiBTQURfRU1PSkkpO1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgeyAoaXNGaXJzdCB8fCAhaW5TZXF1ZW5jZSB8fCBoYXNEZWxheSkgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZC1ibG9jayB3LTEwMCBmb250LXdlaWdodC1ib2xkIHRleHQtZGFyayBtdC00IHBiLTEgcHgtMSB0ZXh0LSR7cG9zaXRpb259YH0gc3R5bGU9e3sgZm9udFNpemU6ICcwLjlyZW0nIH19PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ibG9ja1wiIHN0eWxlPXt7IGZvbnRTaXplOiAnMS42cmVtJyB9fT57U3RyaW5nLmZyb21Db2RlUG9pbnQoLi4ubW9vZCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2NoYXQudXNlciB8fCAnQW5vbnltb3VzJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkgfVxuICAgICAgICAgICAgICA8Q2hhdE1lc3NhZ2UgbWVzc2FnZT17Y2hhdC5tZXNzYWdlfSBwb3NpdGlvbj17cG9zaXRpb259IC8+XG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10b3AgYm9yZGVyLWdyYXkgdy0xMDAgcHgtNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGJnLWxpZ2h0XCIgc3R5bGU9e3sgbWluSGVpZ2h0OiA5MCB9fT5cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBweC0zIHB5LTJcIiBvbktleVVwPXt0aGlzLmhhbmRsZUtleVVwfSBwbGFjZWhvbGRlcj1cIkVudGVyIGEgY2hhdCBtZXNzYWdlXCIgc3R5bGU9e3sgcmVzaXplOiAnbm9uZScgfX0+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+IClcbiAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Chat.js\n");

/***/ }),

/***/ "./components/ChatMessage.js":
/*!***********************************!*\
  !*** ./components/ChatMessage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nclass ChatMessage extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    const {\n      position = 'left',\n      message\n    } = this.props;\n    const isRight = position.toLowerCase() === 'right';\n    const align = isRight ? 'text-right' : 'text-left';\n    const justify = isRight ? 'justify-content-end' : 'justify-content-start';\n    return __jsx(\"div\", {\n      className: `w-100 my-1 d-flex ${justify}`\n    }, __jsx(\"div\", {\n      className: \"bg-light rounded border border-gray p-2\",\n      style: {\n        maxWidth: '70%',\n        flexGrow: 0\n      }\n    }, __jsx(\"span\", {\n      className: `d-block text-secondary ${align}`,\n      style: {\n        fontWeight: 500,\n        lineHeight: 1.4,\n        whiteSpace: 'pre-wrap'\n      }\n    }, this.props.message)));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatMessage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXRNZXNzYWdlLmpzP2FjZjQiXSwibmFtZXMiOlsiQ2hhdE1lc3NhZ2UiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwb3NpdGlvbiIsIm1lc3NhZ2UiLCJwcm9wcyIsImlzUmlnaHQiLCJ0b0xvd2VyQ2FzZSIsImFsaWduIiwianVzdGlmeSIsIm1heFdpZHRoIiwiZmxleEdyb3ciLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsIndoaXRlU3BhY2UiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQSxNQUFNQSxXQUFOLFNBQTBCQywrQ0FBMUIsQ0FBb0M7QUFFbENDLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRUMsY0FBUSxHQUFHLE1BQWI7QUFBcUJDO0FBQXJCLFFBQWlDLEtBQUtDLEtBQTVDO0FBQ0EsVUFBTUMsT0FBTyxHQUFHSCxRQUFRLENBQUNJLFdBQVQsT0FBMkIsT0FBM0M7QUFFQSxVQUFNQyxLQUFLLEdBQUdGLE9BQU8sR0FBRyxZQUFILEdBQWtCLFdBQXZDO0FBQ0EsVUFBTUcsT0FBTyxHQUFHSCxPQUFPLEdBQUcscUJBQUgsR0FBMkIsdUJBQWxEO0FBRUEsV0FBTztBQUFLLGVBQVMsRUFBRyxxQkFBb0JHLE9BQVE7QUFBN0MsT0FDTDtBQUFLLGVBQVMsRUFBQyx5Q0FBZjtBQUF5RCxXQUFLLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRSxLQUFaO0FBQW1CQyxnQkFBUSxFQUFFO0FBQTdCO0FBQWhFLE9BQ0U7QUFBTSxlQUFTLEVBQUcsMEJBQXlCSCxLQUFNLEVBQWpEO0FBQW9ELFdBQUssRUFBRTtBQUFFSSxrQkFBVSxFQUFFLEdBQWQ7QUFBbUJDLGtCQUFVLEVBQUUsR0FBL0I7QUFBb0NDLGtCQUFVLEVBQUU7QUFBaEQ7QUFBM0QsT0FBMEgsS0FBS1QsS0FBTCxDQUFXRCxPQUFySSxDQURGLENBREssQ0FBUDtBQUtEOztBQWRpQzs7QUFrQnJCSiwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2hhdE1lc3NhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBDaGF0TWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcG9zaXRpb24gPSAnbGVmdCcsIG1lc3NhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaXNSaWdodCA9IHBvc2l0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdyaWdodCc7XG5cbiAgICBjb25zdCBhbGlnbiA9IGlzUmlnaHQgPyAndGV4dC1yaWdodCcgOiAndGV4dC1sZWZ0JztcbiAgICBjb25zdCBqdXN0aWZ5ID0gaXNSaWdodCA/ICdqdXN0aWZ5LWNvbnRlbnQtZW5kJyA6ICdqdXN0aWZ5LWNvbnRlbnQtc3RhcnQnO1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgdy0xMDAgbXktMSBkLWZsZXggJHtqdXN0aWZ5fWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1saWdodCByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheSBwLTJcIiBzdHlsZT17eyBtYXhXaWR0aDogJzcwJScsIGZsZXhHcm93OiAwIH19PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BkLWJsb2NrIHRleHQtc2Vjb25kYXJ5ICR7YWxpZ259YH0gc3R5bGU9e3sgZm9udFdlaWdodDogNTAwLCBsaW5lSGVpZ2h0OiAxLjQsIHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcgfX0+e3RoaXMucHJvcHMubWVzc2FnZX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRNZXNzYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ChatMessage.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Layout = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx(\"meta\", {\n  charSet: \"utf-8\"\n}), __jsx(\"meta\", {\n  name: \"viewport\",\n  content: \"width=device-width, initial-scale=1, shrink-to-fit=no\"\n}), __jsx(\"link\", {\n  rel: \"stylesheet\",\n  href: \"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\",\n  integrity: \"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\",\n  crossOrigin: \"anonymous\"\n}), __jsx(\"title\", null, props.pageTitle || 'Realtime Chat')), props.children);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwicGFnZVRpdGxlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHQyxLQUFLLElBQ2xCLE1BQUMsOENBQUQsUUFDRSxNQUFDLGdEQUFELFFBQ0U7QUFBTSxTQUFPLEVBQUM7QUFBZCxFQURGLEVBRUU7QUFBTSxNQUFJLEVBQUMsVUFBWDtBQUFzQixTQUFPLEVBQUM7QUFBOUIsRUFGRixFQUdFO0FBQU0sS0FBRyxFQUFDLFlBQVY7QUFBdUIsTUFBSSxFQUFDLHVFQUE1QjtBQUFvRyxXQUFTLEVBQUMseUVBQTlHO0FBQXdMLGFBQVcsRUFBQztBQUFwTSxFQUhGLEVBSUUscUJBQVFBLEtBQUssQ0FBQ0MsU0FBTixJQUFtQixlQUEzQixDQUpGLENBREYsRUFPR0QsS0FBSyxDQUFDRSxRQVBULENBREY7O0FBWWVILHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIiAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtR241Mzg0eHFRMWFvV1hBKzA1OFJYUHhQZzZmeTRJV3ZUTmgwRTI2M1htRmNKbFNBd2lHZ0ZBVy9kQWlTNkpYbVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cbiAgICAgIDx0aXRsZT57cHJvcHMucGFnZVRpdGxlIHx8ICdSZWFsdGltZSBDaGF0J308L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvRnJhZ21lbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Chat */ \"./components/Chat.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nclass IndexPage extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      user: null\n    });\n\n    _defineProperty(this, \"handleKeyUp\", evt => {\n      if (evt.keyCode === 13) {\n        const user = evt.target.value;\n        this.setState({\n          user\n        });\n      }\n    });\n  }\n\n  render() {\n    const {\n      user\n    } = this.state;\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      pageTitle: \"Realtime Chat\"\n    }, __jsx(\"main\", {\n      className: \"container-fluid position-absolute h-100 bg-dark\"\n    }, __jsx(\"div\", {\n      className: \"row position-absolute w-100 h-100\"\n    }, __jsx(\"section\", {\n      className: \"col-md-8 d-flex flex-row flex-wrap align-items-center align-content-center px-5\"\n    }, __jsx(\"div\", {\n      className: \"px-5 mx-5\"\n    }, __jsx(\"span\", {\n      className: \"d-block w-100 h1 text-light\",\n      style: {\n        marginTop: -50\n      }\n    }, user ? __jsx(\"span\", null, __jsx(\"span\", {\n      style: {\n        color: '#999'\n      }\n    }, \"Hello!\"), \" \", user) : `What is your name?`), !user && __jsx(\"input\", {\n      type: \"text\",\n      className: \"form-control mt-3 px-3 py-2\",\n      onKeyUp: this.handleKeyUp,\n      autoComplete: \"off\",\n      style: {\n        background: 'transparent',\n        color: '#999',\n        border: 0,\n        borderBottom: '1px solid #666',\n        borderRadius: 0,\n        fontSize: '3rem',\n        fontWeight: 500,\n        boxShadow: 'none !important'\n      }\n    }))), __jsx(\"section\", {\n      className: \"col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0\"\n    }, user && __jsx(_components_Chat__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      activeUser: user\n    })))));\n  }\n\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => __jsx(IndexPage, null));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsIkNvbXBvbmVudCIsInVzZXIiLCJldnQiLCJrZXlDb2RlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsInJlbmRlciIsInN0YXRlIiwibWFyZ2luVG9wIiwiY29sb3IiLCJoYW5kbGVLZXlVcCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJib3JkZXJCb3R0b20iLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJib3hTaGFkb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxTQUFOLFNBQXdCQywrQ0FBeEIsQ0FBa0M7QUFBQTtBQUFBOztBQUFBLG1DQUV4QjtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUZ3Qjs7QUFBQSx5Q0FJbEJDLEdBQUcsSUFBSTtBQUNuQixVQUFJQSxHQUFHLENBQUNDLE9BQUosS0FBZ0IsRUFBcEIsRUFBd0I7QUFDdEIsY0FBTUYsSUFBSSxHQUFJQyxHQUFHLENBQUNFLE1BQUosQ0FBV0MsS0FBekI7QUFDQSxhQUFLQyxRQUFMLENBQWM7QUFBRUw7QUFBRixTQUFkO0FBQ0Q7QUFDRixLQVQrQjtBQUFBOztBQVdoQ00sUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFTjtBQUFGLFFBQVcsS0FBS08sS0FBdEI7QUFFQSxXQUNFLE1BQUMsMERBQUQ7QUFBUSxlQUFTLEVBQUM7QUFBbEIsT0FDRTtBQUFNLGVBQVMsRUFBQztBQUFoQixPQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRTtBQUFTLGVBQVMsRUFBQztBQUFuQixPQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRTtBQUFNLGVBQVMsRUFBQyw2QkFBaEI7QUFBOEMsV0FBSyxFQUFFO0FBQUNDLGlCQUFTLEVBQUUsQ0FBQztBQUFiO0FBQXJELE9BQ0lSLElBQUksR0FBRyxvQkFBTTtBQUFNLFdBQUssRUFBRTtBQUFDUyxhQUFLLEVBQUU7QUFBUjtBQUFiLGdCQUFOLE9BQW1EVCxJQUFuRCxDQUFILEdBQXNFLG9CQUQ5RSxDQURGLEVBSUksQ0FBQ0EsSUFBRCxJQUFTO0FBQU8sVUFBSSxFQUFDLE1BQVo7QUFBbUIsZUFBUyxFQUFDLDZCQUE3QjtBQUEyRCxhQUFPLEVBQUUsS0FBS1UsV0FBekU7QUFBc0Ysa0JBQVksRUFBQyxLQUFuRztBQUF5RyxXQUFLLEVBQUU7QUFBRUMsa0JBQVUsRUFBRSxhQUFkO0FBQTZCRixhQUFLLEVBQUUsTUFBcEM7QUFBNENHLGNBQU0sRUFBRSxDQUFwRDtBQUF1REMsb0JBQVksRUFBRSxnQkFBckU7QUFBdUZDLG9CQUFZLEVBQUUsQ0FBckc7QUFBd0dDLGdCQUFRLEVBQUUsTUFBbEg7QUFBMEhDLGtCQUFVLEVBQUUsR0FBdEk7QUFBMklDLGlCQUFTLEVBQUU7QUFBdEo7QUFBaEgsTUFKYixDQURGLENBREYsRUFTRTtBQUFTLGVBQVMsRUFBQztBQUFuQixPQUNJakIsSUFBSSxJQUFJLE1BQUMsd0RBQUQ7QUFBTSxnQkFBVSxFQUFFQTtBQUFsQixNQURaLENBVEYsQ0FERixDQURGLENBREY7QUFtQkQ7O0FBakMrQjs7QUFtQ2pDO0FBRWMscUVBQ2IsTUFBQyxTQUFELE9BREYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2hhdCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXQnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5cbmNsYXNzIEluZGV4UGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7IHVzZXI6IG51bGwgfVxuXG4gIGhhbmRsZUtleVVwID0gZXZ0ID0+IHtcbiAgICBpZiAoZXZ0LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBjb25zdCB1c2VyID0gIGV2dC50YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXNlciB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1c2VyIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgcGFnZVRpdGxlPVwiUmVhbHRpbWUgQ2hhdFwiPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcG9zaXRpb24tYWJzb2x1dGUgaC0xMDAgYmctZGFya1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHBvc2l0aW9uLWFic29sdXRlIHctMTAwIGgtMTAwXCI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb2wtbWQtOCBkLWZsZXggZmxleC1yb3cgZmxleC13cmFwIGFsaWduLWl0ZW1zLWNlbnRlciBhbGlnbi1jb250ZW50LWNlbnRlciBweC01XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNSBteC01XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMCBoMSB0ZXh0LWxpZ2h0XCIgc3R5bGU9e3ttYXJnaW5Ub3A6IC01MH19PlxuICAgICAgICAgICAgICAgICAgeyB1c2VyID8gPHNwYW4+PHNwYW4gc3R5bGU9e3tjb2xvcjogJyM5OTknfX0+SGVsbG8hPC9zcGFuPiB7dXNlcn08L3NwYW4+IDogYFdoYXQgaXMgeW91ciBuYW1lP2AgfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7ICF1c2VyICYmIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtdC0zIHB4LTMgcHktMlwiIG9uS2V5VXA9e3RoaXMuaGFuZGxlS2V5VXB9IGF1dG9Db21wbGV0ZT1cIm9mZlwiIHN0eWxlPXt7IGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIGNvbG9yOiAnIzk5OScsIGJvcmRlcjogMCwgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICM2NjYnLCBib3JkZXJSYWRpdXM6IDAsIGZvbnRTaXplOiAnM3JlbScsIGZvbnRXZWlnaHQ6IDUwMCwgYm94U2hhZG93OiAnbm9uZSAhaW1wb3J0YW50JyB9fSAvPiB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29sLW1kLTQgcG9zaXRpb24tcmVsYXRpdmUgZC1mbGV4IGZsZXgtd3JhcCBoLTEwMCBhbGlnbi1pdGVtcy1zdGFydCBhbGlnbi1jb250ZW50LWJldHdlZW4gYmctd2hpdGUgcHgtMFwiPlxuICAgICAgICAgICAgICB7IHVzZXIgJiYgPENoYXQgYWN0aXZlVXNlcj17dXNlcn0gLz4gfVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPEluZGV4UGFnZSAvPlxuKTsgXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mlungisi/realtime-chat-app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "pusher-js":
/*!****************************!*\
  !*** external "pusher-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pusher-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwdXNoZXItanNcIj9iMmQ0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InB1c2hlci1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInB1c2hlci1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///pusher-js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });