/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var bops__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bops */ \"./node_modules/bops/index.js\");\n/* harmony import */ var bops__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bops__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar passDiv = document.getElementById(\"password\");\nvar passError = document.getElementById(\"password-error\");\nvar fileDiv = document.getElementById(\"file\");\nvar fileError = document.getElementById(\"file-error\");\nvar walletsDiv = document.getElementById(\"wallets\");\nvar decodeError = document.getElementById(\"error\");\nvar submitButton = document.getElementById(\"submit\");\nvar formElement = document.getElementById(\"form\");\nvar fileContent = \"\";\n\nfunction decipherWallet(_x) {\n  return _decipherWallet.apply(this, arguments);\n}\n\nfunction _decipherWallet() {\n  _decipherWallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ev) {\n    var hexContent, password, iv, cipherText, hash, key, decipher, decoded;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            hexContent = bops__WEBPACK_IMPORTED_MODULE_2___default().from(fileContent, \"hex\");\n            password = passDiv.value;\n            iv = hexContent.slice(0, 12);\n            cipherText = hexContent.slice(12);\n            _context.next = 7;\n            return crypto.subtle.digest(\"SHA-256\", bops__WEBPACK_IMPORTED_MODULE_2___default().from(password));\n\n          case 7:\n            hash = _context.sent;\n            _context.next = 10;\n            return crypto.subtle.importKey(\"raw\", hash, \"AES-GCM\", true, [\"decrypt\"]);\n\n          case 10:\n            key = _context.sent;\n            _context.next = 13;\n            return crypto.subtle.decrypt({\n              name: \"AES-GCM\",\n              iv: iv\n            }, key, cipherText);\n\n          case 13:\n            decipher = _context.sent;\n            decoded = new TextDecoder().decode(decipher);\n            return _context.abrupt(\"return\", JSON.parse(decoded));\n\n          case 18:\n            _context.prev = 18;\n            _context.t0 = _context[\"catch\"](0);\n            console.error(_context.t0);\n            return _context.abrupt(\"return\", undefined);\n\n          case 22:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 18]]);\n  }));\n  return _decipherWallet.apply(this, arguments);\n}\n\nfunction loadFile(ev) {\n  var file = ev.target.files[0];\n  fileError.innerHTML = \"\";\n\n  if (!file) {\n    fileError.innerHTML = \"No file\";\n    return;\n  }\n\n  var reader = new FileReader();\n\n  reader.onerror = function () {\n    return fileError.innerHTML = \"Error reading file\";\n  };\n\n  reader.onload = function (ev) {\n    return fileContent = ev.target.result;\n  };\n\n  reader.readAsText(file);\n}\n\nfunction handleSubmit(ev) {\n  ev.preventDefault();\n\n  if (!fileDiv.files[0]) {\n    fileError.innerHTML = \"Must load file\";\n  }\n\n  if (!passDiv.value) {\n    passError.innerHTML = \"Must have password\";\n  }\n\n  if (!passDiv.value || !fileDiv.files[0]) return;\n  decipherWallet().then(function (res) {\n    console.log(res);\n\n    if (!res) {\n      decodeError.innerHTML = \"Something went wrong, try again\";\n      return;\n    }\n\n    if (res.wallets.length > 0) {\n      walletsDiv.style.display = \"block\";\n      walletsDiv.innerHTML = \"<h2>Wallets</h2>\";\n      walletsDiv.innerHTML += \"\\n          <div class=\\\"wallet-row\\\">\\n\\n            <div>Coin</div>\\n\\n            <div>Wallet ID</div>\\n\\n            <div>Derivation Path</div>\\n\\n            <div>Mnemonic</div>\\n\\n          </div>\";\n      res.wallets.forEach(function (element) {\n        walletsDiv.innerHTML += \"\\n        <div class=\\\"wallet-row\\\">\\n\\n        <div>\".concat(element.coin, \"</div>\\n\\n        <div>\").concat(element.walletId, \"</div>\\n\\n        <div>\").concat(element.derivationPath, \"</div>\\n\\n        <div>\").concat(element.mnemonic, \"</div>\\n\\n        </div>\\n        \");\n      });\n    }\n  });\n}\n\nformElement.addEventListener(\"submit\", handleSubmit, false);\nfileDiv.addEventListener(\"change\", loadFile);\npassDiv.addEventListener(\"change\", function () {\n  passError.innerHTML = \"\";\n}); // submitButton.addEventListener(\"click\", handleSubmit, false);\n\n//# sourceURL=webpack://wallet-decrypt-tools/./src/index.js?");

/***/ }),

/***/ "./node_modules/base64-js/lib/b64.js":
/*!*******************************************!*\
  !*** ./node_modules/base64-js/lib/b64.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__ */
/*! CommonJS bailout: exports is used directly at 118:58-65 */
/***/ ((__unused_webpack_module, exports) => {

eval(";(function (exports) {\n  'use strict'\n\n  var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'\n\n  var Arr = (typeof Uint8Array !== 'undefined')\n    ? Uint8Array\n    : Array\n\n  var PLUS = '+'.charCodeAt(0)\n  var SLASH = '/'.charCodeAt(0)\n  var NUMBER = '0'.charCodeAt(0)\n  var LOWER = 'a'.charCodeAt(0)\n  var UPPER = 'A'.charCodeAt(0)\n  var PLUS_URL_SAFE = '-'.charCodeAt(0)\n  var SLASH_URL_SAFE = '_'.charCodeAt(0)\n\n  function decode (elt) {\n    var code = elt.charCodeAt(0)\n    if (code === PLUS || code === PLUS_URL_SAFE) return 62 // '+'\n    if (code === SLASH || code === SLASH_URL_SAFE) return 63 // '/'\n    if (code < NUMBER) return -1 // no match\n    if (code < NUMBER + 10) return code - NUMBER + 26 + 26\n    if (code < UPPER + 26) return code - UPPER\n    if (code < LOWER + 26) return code - LOWER + 26\n  }\n\n  function b64ToByteArray (b64) {\n    var i, j, l, tmp, placeHolders, arr\n\n    if (b64.length % 4 > 0) {\n      throw new Error('Invalid string. Length must be a multiple of 4')\n    }\n\n    // the number of equal signs (place holders)\n    // if there are two placeholders, than the two characters before it\n    // represent one byte\n    // if there is only one, then the three characters before it represent 2 bytes\n    // this is just a cheap hack to not do indexOf twice\n    var len = b64.length\n    placeHolders = b64.charAt(len - 2) === '=' ? 2 : b64.charAt(len - 1) === '=' ? 1 : 0\n\n    // base64 is 4/3 + up to two characters of the original data\n    arr = new Arr(b64.length * 3 / 4 - placeHolders)\n\n    // if there are placeholders, only get up to the last complete 4 chars\n    l = placeHolders > 0 ? b64.length - 4 : b64.length\n\n    var L = 0\n\n    function push (v) {\n      arr[L++] = v\n    }\n\n    for (i = 0, j = 0; i < l; i += 4, j += 3) {\n      tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))\n      push((tmp & 0xFF0000) >> 16)\n      push((tmp & 0xFF00) >> 8)\n      push(tmp & 0xFF)\n    }\n\n    if (placeHolders === 2) {\n      tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)\n      push(tmp & 0xFF)\n    } else if (placeHolders === 1) {\n      tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)\n      push((tmp >> 8) & 0xFF)\n      push(tmp & 0xFF)\n    }\n\n    return arr\n  }\n\n  function uint8ToBase64 (uint8) {\n    var i\n    var extraBytes = uint8.length % 3 // if we have 1 byte left, pad 2 bytes\n    var output = ''\n    var temp, length\n\n    function encode (num) {\n      return lookup.charAt(num)\n    }\n\n    function tripletToBase64 (num) {\n      return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)\n    }\n\n    // go through the array every three bytes, we'll deal with trailing stuff later\n    for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {\n      temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])\n      output += tripletToBase64(temp)\n    }\n\n    // pad the end with zeros, but make sure to not forget the extra bytes\n    switch (extraBytes) {\n      case 1:\n        temp = uint8[uint8.length - 1]\n        output += encode(temp >> 2)\n        output += encode((temp << 4) & 0x3F)\n        output += '=='\n        break\n      case 2:\n        temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])\n        output += encode(temp >> 10)\n        output += encode((temp >> 4) & 0x3F)\n        output += encode((temp << 2) & 0x3F)\n        output += '='\n        break\n      default:\n        break\n    }\n\n    return output\n  }\n\n  exports.toByteArray = b64ToByteArray\n  exports.fromByteArray = uint8ToBase64\n}( false ? (0) : exports))\n\n\n//# sourceURL=webpack://wallet-decrypt-tools/./node_modules/base64-js/lib/b64.js?");

/***/ }),

/***/ "./node_modules/bops/index.js":
/*!************************************!*\
  !*** ./node_modules/bops/index.js ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 2:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var proto = {}\nmodule.exports = proto\n\nproto.from = __webpack_require__(/*! ./from.js */ \"./node_modules/bops/typedarray/from.js\")\nproto.to = __webpack_require__(/*! ./to.js */ \"./node_modules/bops/typedarray/to.js\")\nproto.is = __webpack_require__(/*! ./is.js */ \"./node_modules/bops/typedarray/is.js\")\nproto.subarray = __webpack_require__(/*! ./subarray.js */ \"./node_modules/bops/typedarray/subarray.js\")\nproto.join = __webpack_require__(/*! ./join.js */ \"./node_modules/bops/typedarray/join.js\")\nproto.copy = __webpack_require__(/*! ./copy.js */ \"./node_modules/bops/typedarray/copy.js\")\nproto.create = __webpack_require__(/*! ./create.js */ \"./node_modules/bops/typedarray/create.js\")\n\nmix(__webpack_require__(/*! ./read.js */ \"./node_modules/bops/typedarray/read.js\"), proto)\nmix(__webpack_require__(/*! ./write.js */ \"./node_modules/bops/typedarray/write.js\"), proto)\n\nfunction mix(from, into) {\n  for(var key in from) {\n    into[key] = from[key]\n  }\n}\n\n\n//# sourceURL=webpack://wallet-decrypt-tools/./node_modules/bops/index.js?");

/***/ }),

/***/ "./node_modules/bops/typedarray/copy.js":
/*!**********************************************!*\
  !*** ./node_modules/bops/typedarray/copy.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = copy\n\nvar slice = [].slice\n\nfunction copy(source, target, target_start, source_start, source_end) {\n  target_start = arguments.length < 3 ? 0 : target_start\n  source_start = arguments.length < 4 ? 0 : source_start\n  source_end = arguments.length < 5 ? source.length : source_end\n\n  if(source_end === source_start) {\n    return\n  }\n\n  if(target.length === 0 || source.length === 0) {\n    return\n  }\n\n  if(source_end > source.length) {\n    source_end = source.length\n  }\n\n  if(target.length - target_start < source_end - source_start) {\n    source_end = target.length - target_start + source_start\n  }\n\n  if(source.buffer !== target.buffer) {\n    return fast_copy(source, target, target_start, source_start, source_end)\n  }\n  return slow_copy(source, target, target_start, source_start, source_end)\n}\n\nfunction fast_copy(source, target, target_start, source_start, source_end) {\n  var len = (source_end - source_start) + target_start\n\n  for(var i = target_start, j = source_start;\n      i < len;\n      ++i,\n      ++j) {\n    target[i] = source[j]\n  }\n}\n\nfunction slow_copy(from, to, j, i, jend) {\n  // the buffers could overlap.\n  var iend = jend + i\n    , tmp = new Uint8Array(slice.call(from, i, iend))\n    , x = 0\n\n  for(; i < iend; ++i, ++x) {\n    to[j++] = tmp[x]\n  }\n}\n\n\n//# sourceURL=webpack://wallet-decrypt-tools/./node_modules/bops/typedarray/copy.js?");

/***/ }),

/***/ "./node_modules/bops/typedarray/create.js":
/*!************************************************!*\
  !*** ./node_modules/bops/typedarray/create.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = function(size) {\n  return new Uint8Array(size)\n}\n\n\n//# sourceURL=webpack://wallet-decrypt-tools/./node_modules/bops/typedarray/create.js?");

/***/ }),

/***/ "./node_modules/bops/typedarray/from.js":
/*!**********************************************!*\
  !*** ./node_modules/bops/typedarray/from.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = from\n\nvar base64 = __webpack_require__(/*! base64-js */ \"./node_modules/base64-js/lib/b64.js\")\n\nvar decoders = {\n    hex: from_hex\n  , utf8: from_utf\n  , base64: from_base64\n}\n\nfunction from(source, encoding) {\n  if(Array.isArray(source)) {\n    return new Uint8Array(source)\n  }\n\n  return decoders[encoding || 'utf8'](source)\n}\n\nfunction from_hex(str) {\n  var size = str.length / 2\n    , buf = new Uint8Array(size)\n    , character = ''\n\n  for(var i = 0, len = str.length; i < len; ++i) {\n    character += str.charAt(i)\n\n    if(i > 0 && (i % 2) === 1) {\n      buf[i>>>1] = parseInt(character, 16)\n      character = '' \n    }\n  }\n\n  return buf \n}\n\nfunction from_utf(str) {\n  var arr = []\n    , code\n\n  for(var i = 0, len = str.length; i < len; ++i) {\n    code = fixed_cca(str, i)\n\n    if(code === false) {\n      continue\n    }\n\n    if(code < 0x80) {\n      arr[arr.length] = code\n\n      continue\n    }\n\n    codepoint_to_bytes(arr, code)\n  }\n\n  return new Uint8Array(arr)\n}\n\nfunction codepoint_to_bytes(arr, code) {\n  // find MSB, use that to determine byte count\n  var copy_code = code\n    , bit_count = 0\n    , byte_count\n    , prefix\n    , _byte\n    , pos\n\n  do {\n    ++bit_count\n  } while(copy_code >>>= 1)\n\n  byte_count = Math.ceil((bit_count - 1) / 5) | 0\n  prefix = [0, 0, 0xc0, 0xe0, 0xf0, 0xf8, 0xfc][byte_count]\n  pos = [0, 0, 3, 4, 5, 6, 7][byte_count]\n\n  _byte |= prefix\n\n  bit_count = (7 - pos) + 6 * (byte_count - 1)\n\n  while(bit_count) {\n    _byte |= +!!(code & (1 << bit_count)) << (7 - pos)\n    ++pos\n\n    if(pos % 8 === 0) {\n      arr[arr.length] = _byte\n      _byte = 0x80\n      pos = 2\n    }\n\n    --bit_count\n  }\n\n  if(pos) {\n    _byte |= +!!(code & 1) << (7 - pos)\n    arr[arr.length] = _byte\n  }\n}\n\nfunction pad(str) {\n  while(str.length < 8) {\n    str = '0' + str\n  }\n\n  return str\n}\n\nfunction fixed_cca(str, idx) {\n  idx = idx || 0\n\n  var code = str.charCodeAt(idx)\n    , lo\n    , hi\n\n  if(0xD800 <= code && code <= 0xDBFF) {\n    lo = str.charCodeAt(idx + 1)\n    hi = code\n\n    if(isNaN(lo)) {\n      throw new Error('High surrogate not followed by low surrogate')\n    }\n\n    return ((hi - 0xD800) * 0x400) + (lo - 0xDC00) + 0x10000\n  }\n\n  if(0xDC00 <= code && code <= 0xDFFF) {\n    return false\n  }\n\n  return code\n}\n\nfunction from_base64(str) {\n  return new Uint8Array(base64.toByteArray(str)) \n}\n\n\n//# sourceURL=webpack://wallet-decrypt-tools/./node_modules/bops/typedarray/from.js?");

/***/ }),

/***/ "./node_modules/bops/typedarray/is.js":
/*!********************************************!*\
  !*** ./node_modules/bops/typedarray/is.js ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 2:0-14 */
/***/ ((module) => {

eval("\nmodule.exports = function(buffer) {\n  return buffer instanceof Uint8Array;\n}\n\n\n//# sourceURL=webpack://wallet-decrypt-tools/./node_modules/bops/typedarray/is.js?");

/***/ }),

/***/ "./node_modules/bops/typedarray/join.js":
/*!**********************************************!*\
  !*** ./node_modules/bops/typedarray/join.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = join\n\nfunction join(targets, hint) {\n  if(!targets.length) {\n    return new Uint8Array(0)\n  }\n\n  var len = hint !== undefined ? hint : get_length(targets)\n    , out = new Uint8Array(len)\n    , cur = targets[0]\n    , curlen = cur.length\n    , curidx = 0\n    , curoff = 0\n    , i = 0\n\n  while(i < len) {\n    if(curoff === curlen) {\n      curoff = 0\n      ++curidx\n      cur = targets[curidx]\n      curlen = cur && cur.length\n      continue\n    }\n    out[i++] = cur[curoff++] \n  }\n\n  return out\n}\n\nfunction get_length(targets) {\n  var size = 0\n  for(var i = 0, len = targets.length; i < len; ++i) {\n    size += targets[i].byteLength\n  }\n  return size\n}\n\n\n//# sourceURL=webpack://wallet-decrypt-tools/./node_modules/bops/typedarray/join.js?");

/***/ }),

/***/ "./node_modules/bops/typedarray/mapped.js":
/*!************************************************!*\
  !*** ./node_modules/bops/typedarray/mapped.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("var proto\n  , map\n\nmodule.exports = proto = {}\n\nmap = typeof WeakMap === 'undefined' ? null : new WeakMap\n\nproto.get = !map ? no_weakmap_get : get\n\nfunction no_weakmap_get(target) {\n  return new DataView(target.buffer, 0)\n}\n\nfunction get(target) {\n  var out = map.get(target.buffer)\n  if(!out) {\n    map.set(target.buffer, out = new DataView(target.buffer, 0))\n  }\n  return out\n}\n\n\n//# sourceURL=webpack://wallet-decrypt-tools/./node_modules/bops/typedarray/mapped.js?");

/***/ }),

/***/ "./node_modules/bops/typedarray/read.js":
/*!**********************************************!*\
  !*** ./node_modules/bops/typedarray/read.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\n    readUInt8:      read_uint8\n  , readInt8:       read_int8\n  , readUInt16LE:   read_uint16_le\n  , readUInt32LE:   read_uint32_le\n  , readInt16LE:    read_int16_le\n  , readInt32LE:    read_int32_le\n  , readFloatLE:    read_float_le\n  , readDoubleLE:   read_double_le\n  , readUInt16BE:   read_uint16_be\n  , readUInt32BE:   read_uint32_be\n  , readInt16BE:    read_int16_be\n  , readInt32BE:    read_int32_be\n  , readFloatBE:    read_float_be\n  , readDoubleBE:   read_double_be\n}\n\nvar map = __webpack_require__(/*! ./mapped.js */ \"./node_modules/bops/typedarray/mapped.js\")\n\nfunction read_uint8(target, at) {\n  return target[at]\n}\n\nfunction read_int8(target, at) {\n  var v = target[at];\n  return v < 0x80 ? v : v - 0x100\n}\n\nfunction read_uint16_le(target, at) {\n  var dv = map.get(target);\n  return dv.getUint16(at + target.byteOffset, true)\n}\n\nfunction read_uint32_le(target, at) {\n  var dv = map.get(target);\n  return dv.getUint32(at + target.byteOffset, true)\n}\n\nfunction read_int16_le(target, at) {\n  var dv = map.get(target);\n  return dv.getInt16(at + target.byteOffset, true)\n}\n\nfunction read_int32_le(target, at) {\n  var dv = map.get(target);\n  return dv.getInt32(at + target.byteOffset, true)\n}\n\nfunction read_float_le(target, at) {\n  var dv = map.get(target);\n  return dv.getFloat32(at + target.byteOffset, true)\n}\n\nfunction read_double_le(target, at) {\n  var dv = map.get(target);\n  return dv.getFloat64(at + target.byteOffset, true)\n}\n\nfunction read_uint16_be(target, at) {\n  var dv = map.get(target);\n  return dv.getUint16(at + target.byteOffset, false)\n}\n\nfunction read_uint32_be(target, at) {\n  var dv = map.get(target);\n  return dv.getUint32(at + target.byteOffset, false)\n}\n\nfunction read_int16_be(target, at) {\n  var dv = map.get(target);\n  return dv.getInt16(at + target.byteOffset, false)\n}\n\nfunction read_int32_be(target, at) {\n  var dv = map.get(target);\n  return dv.getInt32(at + target.byteOffset, false)\n}\n\nfunction read_float_be(target, at) {\n  var dv = map.get(target);\n  return dv.getFloat32(at + target.byteOffset, false)\n}\n\nfunction read_double_be(target, at) {\n  var dv = map.get(target);\n  return dv.getFloat64(at + target.byteOffset, false)\n}\n\n\n//# sourceURL=webpack://wallet-decrypt-tools/./node_modules/bops/typedarray/read.js?");

/***/ }),

/***/ "./node_modules/bops/typedarray/subarray.js":
/*!**************************************************!*\
  !*** ./node_modules/bops/typedarray/subarray.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = subarray\n\nfunction subarray(buf, from, to) {\n  return buf.subarray(from || 0, to || buf.length)\n}\n\n\n//# sourceURL=webpack://wallet-decrypt-tools/./node_modules/bops/typedarray/subarray.js?");

/***/ }),

/***/ "./node_modules/bops/typedarray/to.js":
/*!********************************************!*\
  !*** ./node_modules/bops/typedarray/to.js ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = to\n\nvar base64 = __webpack_require__(/*! base64-js */ \"./node_modules/base64-js/lib/b64.js\")\n  , toutf8 = __webpack_require__(/*! to-utf8 */ \"./node_modules/to-utf8/index.js\")\n\nvar encoders = {\n    hex: to_hex\n  , utf8: to_utf\n  , base64: to_base64\n}\n\nfunction to(buf, encoding) {\n  return encoders[encoding || 'utf8'](buf)\n}\n\nfunction to_hex(buf) {\n  var str = ''\n    , byt\n\n  for(var i = 0, len = buf.length; i < len; ++i) {\n    byt = buf[i]\n    str += ((byt & 0xF0) >>> 4).toString(16)\n    str += (byt & 0x0F).toString(16)\n  }\n\n  return str\n}\n\nfunction to_utf(buf) {\n  return toutf8(buf)\n}\n\nfunction to_base64(buf) {\n  return base64.fromByteArray(buf)\n}\n\n\n\n//# sourceURL=webpack://wallet-decrypt-tools/./node_modules/bops/typedarray/to.js?");

/***/ }),

/***/ "./node_modules/bops/typedarray/write.js":
/*!***********************************************!*\
  !*** ./node_modules/bops/typedarray/write.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\n    writeUInt8:      write_uint8\n  , writeInt8:       write_int8\n  , writeUInt16LE:   write_uint16_le\n  , writeUInt32LE:   write_uint32_le\n  , writeInt16LE:    write_int16_le\n  , writeInt32LE:    write_int32_le\n  , writeFloatLE:    write_float_le\n  , writeDoubleLE:   write_double_le\n  , writeUInt16BE:   write_uint16_be\n  , writeUInt32BE:   write_uint32_be\n  , writeInt16BE:    write_int16_be\n  , writeInt32BE:    write_int32_be\n  , writeFloatBE:    write_float_be\n  , writeDoubleBE:   write_double_be\n}\n\nvar map = __webpack_require__(/*! ./mapped.js */ \"./node_modules/bops/typedarray/mapped.js\")\n\nfunction write_uint8(target, value, at) {\n  return target[at] = value\n}\n\nfunction write_int8(target, value, at) {\n  return target[at] = value < 0 ? value + 0x100 : value\n}\n\nfunction write_uint16_le(target, value, at) {\n  var dv = map.get(target);\n  return dv.setUint16(at + target.byteOffset, value, true)\n}\n\nfunction write_uint32_le(target, value, at) {\n  var dv = map.get(target);\n  return dv.setUint32(at + target.byteOffset, value, true)\n}\n\nfunction write_int16_le(target, value, at) {\n  var dv = map.get(target);\n  return dv.setInt16(at + target.byteOffset, value, true)\n}\n\nfunction write_int32_le(target, value, at) {\n  var dv = map.get(target);\n  return dv.setInt32(at + target.byteOffset, value, true)\n}\n\nfunction write_float_le(target, value, at) {\n  var dv = map.get(target);\n  return dv.setFloat32(at + target.byteOffset, value, true)\n}\n\nfunction write_double_le(target, value, at) {\n  var dv = map.get(target);\n  return dv.setFloat64(at + target.byteOffset, value, true)\n}\n\nfunction write_uint16_be(target, value, at) {\n  var dv = map.get(target);\n  return dv.setUint16(at + target.byteOffset, value, false)\n}\n\nfunction write_uint32_be(target, value, at) {\n  var dv = map.get(target);\n  return dv.setUint32(at + target.byteOffset, value, false)\n}\n\nfunction write_int16_be(target, value, at) {\n  var dv = map.get(target);\n  return dv.setInt16(at + target.byteOffset, value, false)\n}\n\nfunction write_int32_be(target, value, at) {\n  var dv = map.get(target);\n  return dv.setInt32(at + target.byteOffset, value, false)\n}\n\nfunction write_float_be(target, value, at) {\n  var dv = map.get(target);\n  return dv.setFloat32(at + target.byteOffset, value, false)\n}\n\nfunction write_double_be(target, value, at) {\n  var dv = map.get(target);\n  return dv.setFloat64(at + target.byteOffset, value, false)\n}\n\n\n//# sourceURL=webpack://wallet-decrypt-tools/./node_modules/bops/typedarray/write.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"style.css\");\n\n//# sourceURL=webpack://wallet-decrypt-tools/./src/style.css?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 732:31-45 */
/***/ ((module) => {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nvar runtime = (function (exports) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function define(obj, key, value) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n    return obj[key];\n  }\n  try {\n    // IE 8 has a broken Object.defineProperty that only works on DOM objects.\n    define({}, \"\");\n  } catch (err) {\n    define = function(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  exports.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunction.displayName = define(\n    GeneratorFunctionPrototype,\n    toStringTagSymbol,\n    \"GeneratorFunction\"\n  );\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      define(prototype, method, function(arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n\n  exports.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  exports.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      define(genFun, toStringTagSymbol, \"GeneratorFunction\");\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  exports.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return PromiseImpl.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return PromiseImpl.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new PromiseImpl(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  exports.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    if (PromiseImpl === void 0) PromiseImpl = Promise;\n\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList),\n      PromiseImpl\n    );\n\n    return exports.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  define(Gp, toStringTagSymbol, \"Generator\");\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  exports.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n\n  // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n  return exports;\n\n}(\n  // If this script is executing as a CommonJS module, use module.exports\n  // as the regeneratorRuntime namespace. Otherwise create a new empty\n  // object. Either way, the resulting object will be used to initialize\n  // the regeneratorRuntime variable at the top of this file.\n   true ? module.exports : 0\n));\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you've misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you're not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n}\n\n\n//# sourceURL=webpack://wallet-decrypt-tools/./node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./node_modules/to-utf8/index.js":
/*!***************************************!*\
  !*** ./node_modules/to-utf8/index.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = to_utf8\n\nvar out = []\n  , col = []\n  , fcc = String.fromCharCode\n  , mask = [0x40, 0x20, 0x10, 0x08, 0x04, 0x02, 0x01]\n  , unmask = [\n      0x00\n    , 0x01\n    , 0x02 | 0x01\n    , 0x04 | 0x02 | 0x01\n    , 0x08 | 0x04 | 0x02 | 0x01\n    , 0x10 | 0x08 | 0x04 | 0x02 | 0x01\n    , 0x20 | 0x10 | 0x08 | 0x04 | 0x02 | 0x01\n    , 0x40 | 0x20 | 0x10 | 0x08 | 0x04 | 0x02 | 0x01\n  ]\n\nfunction to_utf8(bytes, start, end) {\n  start = start === undefined ? 0 : start\n  end = end === undefined ? bytes.length : end\n\n  var idx = 0\n    , hi = 0x80\n    , collecting = 0\n    , pos\n    , by\n\n  col.length =\n  out.length = 0\n\n  while(idx < bytes.length) {\n    by = bytes[idx]\n    if(!collecting && by & hi) {\n      pos = find_pad_position(by)\n      collecting += pos\n      if(pos < 8) {\n        col[col.length] = by & unmask[6 - pos]\n      }\n    } else if(collecting) {\n      col[col.length] = by & unmask[6]\n      --collecting\n      if(!collecting && col.length) {\n        out[out.length] = fcc(reduced(col, pos))\n        col.length = 0\n      }\n    } else { \n      out[out.length] = fcc(by)\n    }\n    ++idx\n  }\n  if(col.length && !collecting) {\n    out[out.length] = fcc(reduced(col, pos))\n    col.length = 0\n  }\n  return out.join('')\n}\n\nfunction find_pad_position(byt) {\n  for(var i = 0; i < 7; ++i) {\n    if(!(byt & mask[i])) {\n      break\n    }\n  }\n  return i\n}\n\nfunction reduced(list) {\n  var out = 0\n  for(var i = 0, len = list.length; i < len; ++i) {\n    out |= list[i] << ((len - i - 1) * 6)\n  }\n  return out\n}\n\n\n//# sourceURL=webpack://wallet-decrypt-tools/./node_modules/to-utf8/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;