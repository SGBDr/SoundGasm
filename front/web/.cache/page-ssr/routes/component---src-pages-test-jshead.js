"use strict";
exports.id = "component---src-pages-test-jshead";
exports.ids = ["component---src-pages-test-jshead"];
exports.modules = {

/***/ "./src/components/reader/controller.js":
/*!*********************************************!*\
  !*** ./src/components/reader/controller.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");



const Controller = props => {
  // initialise Ref to manipulate inbuild audio tag
  const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: musicURL,
    1: setMusicURL
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.musicURL);
  const {
    0: currentTime,
    1: setCurrentTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: duration,
    1: setDuration
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: isPlaying,
    1: setIsPlaying
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  //Listen to changes in musicURL in parent component
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setMusicURL(props.musicURL);
  }, [props.musicURL]);

  // Listen to time update in inbuild audio player
  const handleTimeUpdate = () => {
    const newTime = audioRef.current.currentTime;
    setCurrentTime(newTime);
    if (currentTime === duration) setIsPlaying(false);
  };

  // Listen to metadata loading in inbuild audio player
  const handleLoadedMetadata = () => {
    const newDuration = audioRef.current.duration;
    setDuration(newDuration);
  };

  // Play/pause inbuild audio player onClick
  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      audioRef.current.pause();
    } else {
      setIsPlaying(true);
      audioRef.current.play();
    }
  };
  const handleForward = () => {
    let newTime = currentTime + 10;
    newTime = newTime < 0 ? 0 : newTime > duration ? duration : newTime;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };
  const handleBackward = () => {
    let newTime = currentTime - 10;
    newTime = newTime < 0 ? 0 : newTime > duration ? duration : newTime;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };
  // Synchronise range with inbuild audio player
  const handleRangeChange = event => {
    audioRef.current.currentTime = event.target.value;
    setCurrentTime(audioRef.current.currentTime);
  };

  // convert seconds to standard minutes
  const secondsToMinutes = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${minutes}:${formattedSeconds}`;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ControlWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("audio", {
    ref: audioRef,
    preload: "metadata",
    src: musicURL,
    onTimeUpdate: handleTimeUpdate,
    onLoadedMetadata: handleLoadedMetadata
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ControlRangeWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "play-range",
    type: "range",
    min: "0",
    max: audioRef.current ? audioRef.current.duration : 0,
    value: currentTime,
    onChange: handleRangeChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "start-stop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, secondsToMinutes(currentTime)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, secondsToMinutes(duration - currentTime)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ControlTabWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MyButton, {
    id: "b-prev"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    class: "icon",
    alt: "...",
    src: "/images/icons/player/previous.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MyButton, {
    id: "b-back",
    onClick: handleBackward
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    class: "icon",
    alt: "...",
    src: "/images/icons/player/backward.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MyButton, {
    id: "b-play",
    onClick: handlePlayPause
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    class: "icon",
    alt: "...",
    src: isPlaying ? "/images/icons/player/pause.png" : "/images/icons/player/play.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MyButton, {
    id: "b-for",
    onClick: handleForward
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    class: "icon",
    alt: "...",
    src: "/images/icons/player/forward.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MyButton, {
    id: "b-next"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    class: "icon",
    alt: "...",
    src: "/images/icons/player/next.png"
  }))));
};
const ControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "controller__ControlWrapper"
})(["display:flex;flex-direction:column;justify-content:end;align-items:center;height:100%;width:100%;margin:0 20px;"]);
const ControlRangeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "controller__ControlRangeWrapper"
})(["display:flex;flex-direction:column;justify-content:space-between;align-items:center;height:20px;width:100%;*{margin:0;padding:0;}.play-range{width:100%;margin:0 0 5px  0;&:hover{cursor:pointer;}}.start-stop{width:100%;display:flex;justify-content:space-between;font-family:Teko;font-size:13px;font-weight:800;color:white;}"]);
const ControlTabWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "controller__ControlTabWrapper"
})(["display:flex;width:100%;flex-direction:row;justify-content:space-between;align-items:center;height:100px;"]);
const MyButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "controller__MyButton"
})(["background:transparent;border:none;.icon{width:25px;height:25px;}&:hover{cursor:pointer;border:1px solid ", ";border-radius:5px;transition:2ms ease-out;}"], _utils__WEBPACK_IMPORTED_MODULE_1__.COLOR.secondary);

/***/ }),

/***/ "./src/components/reader/index.js":
/*!****************************************!*\
  !*** ./src/components/reader/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Reader": () => (/* binding */ Reader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./src/components/reader/controller.js");




const Reader = () => {
  const [musicURL, setMusicURL] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("/images/icons/Dedicace.mp3");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TitleWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    class: "title"
  }, "Living My Best Life"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    class: "artist"
  }, "By : Ben Hector")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ControlWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Banner, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_controller__WEBPACK_IMPORTED_MODULE_2__.Controller, {
    musicURL: musicURL
  })));
};
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "reader__Wrapper"
})(["display:flex;flex-direction:column;align-items:center;justify-content:space-between;position:absolute;bottom:20px;left:20px;right:20px;min-width:300px;height:200px;border-radius:32px;padding:10px 20px;background-color:", ";"], _utils__WEBPACK_IMPORTED_MODULE_1__.COLOR.darkAlt);
const Banner = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "reader__Banner"
})(["width:200px;height:120px;border-radius:5px;background-color:", ";margin:10px;"], _utils__WEBPACK_IMPORTED_MODULE_1__.COLOR.background);
const TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "reader__TitleWrapper"
})(["padding:10px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;height:60px;p{margin:2px 0px;padding:0;font-family:Teko;&.title{font-weight:900;font-size:25px;color:white;}&.artist{font-weight:300;font-size:18px;color:grey;}}"]);
const ControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "reader__ControlWrapper"
})(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;height:140px;padding:10px;"]);

/***/ }),

/***/ "./src/pages/test.js?export=head":
/*!***************************************!*\
  !*** ./src/pages/test.js?export=head ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/GlobalStyles */ "./src/utils/GlobalStyles.js");
/* harmony import */ var _components_reader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/reader */ "./src/components/reader/index.js");



const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__.GlobalStyles, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_reader__WEBPACK_IMPORTED_MODULE_2__.Reader, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Test");

/***/ }),

/***/ "./src/utils/GlobalStyles.js":
/*!***********************************!*\
  !*** ./src/utils/GlobalStyles.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalStyles": () => (/* binding */ GlobalStyles)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/utils/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
//c'est un composant qui ne peut pas avoir d'enfant et qui permet de donner du style a d'autres composants


const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(["body{background:", ";@media (prefers-color-scheme:dark){background:", ";}}"], _index__WEBPACK_IMPORTED_MODULE_0__.COLOR.background, _index__WEBPACK_IMPORTED_MODULE_0__.COLOR.background);

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COLOR": () => (/* binding */ COLOR),
/* harmony export */   "SIZE": () => (/* binding */ SIZE)
/* harmony export */ });
const COLOR = {
  background: '#1D2123',
  primary: '#307DB8',
  secondary: '#FACD66',
  playButtonCard: 'rgba(124, 141, 181, .7)',
  text: '#EFEEE0',
  darkAlt: '#111516'
};
const SIZE = {
  title: `font-size: 25px
            font-weigth: 900`,
  title1: `font-size: 24px
             font-weigth: 800`,
  title2: `font-size: 20px
             font-weigth: 700`,
  title3: `font-size: 16px
             font-weigth: bold`,
  text: `font-size: 14px`
};

/***/ })

};
;
//# sourceMappingURL=component---src-pages-test-jshead.js.map