/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/getProjects";
exports.ids = ["pages/api/getProjects"];
exports.modules = {

/***/ "./pages/api/getProjects.js":
/*!**********************************!*\
  !*** ./pages/api/getProjects.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst Project = __webpack_require__(/*! ./models/Project.js */ \"./pages/api/models/Project.js\");\n\nconst connectDB = async () => {\n  try {\n    const conn = await mongoose.connect(process.env.MONGO_URI, {\n      useUnifiedTopology: true,\n      useNewUrlParser: true,\n      useCreateIndex: true\n    });\n    console.log(`MongoDB Connect: ${conn.connection.host}`);\n  } catch (err) {\n    console.error(`Error: ${err.message}`);\n    process.exit(1);\n  }\n};\n\nconst getProjects = async () => {\n  const projects = await Project.find({});\n  return projects;\n};\n\nasync function handler(req, res) {\n  try {\n    connectDB();\n    const projects = await getProjects();\n    res.status(200).json({\n      projects: projects\n    });\n  } catch (error) {\n    res.status(500).json({\n      error\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9wYWdlcy9hcGkvZ2V0UHJvamVjdHMuanM/Nzk2OCJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJQcm9qZWN0IiwiY29ubmVjdERCIiwiY29ubiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlQ3JlYXRlSW5kZXgiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdGlvbiIsImhvc3QiLCJlcnIiLCJlcnJvciIsIm1lc3NhZ2UiLCJleGl0IiwiZ2V0UHJvamVjdHMiLCJwcm9qZWN0cyIsImZpbmQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQywwQkFBRCxDQUF4Qjs7QUFDQSxNQUFNQyxPQUFPLEdBQUdELG1CQUFPLENBQUMsMERBQUQsQ0FBdkI7O0FBRUEsTUFBTUUsU0FBUyxHQUFHLFlBQVk7QUFDNUIsTUFBSTtBQUNGLFVBQU1DLElBQUksR0FBRyxNQUFNSixRQUFRLENBQUNLLE9BQVQsQ0FBaUJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxTQUE3QixFQUF3QztBQUN6REMsd0JBQWtCLEVBQUUsSUFEcUM7QUFFekRDLHFCQUFlLEVBQUUsSUFGd0M7QUFHekRDLG9CQUFjLEVBQUU7QUFIeUMsS0FBeEMsQ0FBbkI7QUFLQUMsV0FBTyxDQUFDQyxHQUFSLENBQWEsb0JBQW1CVCxJQUFJLENBQUNVLFVBQUwsQ0FBZ0JDLElBQUssRUFBckQ7QUFFRCxHQVJELENBUUUsT0FBT0MsR0FBUCxFQUFZO0FBQ1pKLFdBQU8sQ0FBQ0ssS0FBUixDQUFlLFVBQVNELEdBQUcsQ0FBQ0UsT0FBUSxFQUFwQztBQUNBWixXQUFPLENBQUNhLElBQVIsQ0FBYSxDQUFiO0FBQ0Q7QUFDRixDQWJEOztBQWVBLE1BQU1DLFdBQVcsR0FBRyxZQUFZO0FBQzlCLFFBQU1DLFFBQVEsR0FBRyxNQUFNbkIsT0FBTyxDQUFDb0IsSUFBUixDQUFhLEVBQWIsQ0FBdkI7QUFDQSxTQUFPRCxRQUFQO0FBQ0QsQ0FIRDs7QUFNZSxlQUFlRSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDOUMsTUFBSTtBQUNGdEIsYUFBUztBQUNULFVBQU1rQixRQUFRLEdBQUcsTUFBTUQsV0FBVyxFQUFsQztBQUNBSyxPQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFTixjQUFRLEVBQUVBO0FBQVosS0FBckI7QUFDRCxHQUpELENBSUUsT0FBT0osS0FBUCxFQUFjO0FBQ2RRLE9BQUcsQ0FBQ0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNWO0FBQUQsS0FBckI7QUFDRDtBQUNGIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2dldFByb2plY3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xuY29uc3QgUHJvamVjdCA9IHJlcXVpcmUoJy4vbW9kZWxzL1Byb2plY3QuanMnKVxuXG5jb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29ubiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJLCB7XG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZVxuICAgIH0pXG4gICAgY29uc29sZS5sb2coYE1vbmdvREIgQ29ubmVjdDogJHtjb25uLmNvbm5lY3Rpb24uaG9zdH1gKVxuXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yOiAke2Vyci5tZXNzYWdlfWApO1xuICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgfVxufVxuXG5jb25zdCBnZXRQcm9qZWN0cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBhd2FpdCBQcm9qZWN0LmZpbmQoe30pXG4gIHJldHVybiBwcm9qZWN0cztcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIHRyeSB7XG4gICAgY29ubmVjdERCKCk7XG4gICAgY29uc3QgcHJvamVjdHMgPSBhd2FpdCBnZXRQcm9qZWN0cygpXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBwcm9qZWN0czogcHJvamVjdHMgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyb3J9KVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/getProjects.js\n");

/***/ }),

/***/ "./pages/api/models/Project.js":
/*!*************************************!*\
  !*** ./pages/api/models/Project.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst projectSchema = mongoose.Schema({\n  title: {\n    type: String,\n    required: true\n  },\n  description: {\n    type: String,\n    required: true\n  },\n  image: {\n    type: String,\n    default: 'https://raw.githubusercontent.com/cdthomp1/portfolio-site/master/images/coming-soon.png'\n  },\n  repoLink: {\n    type: String,\n    required: true\n  },\n  liveLink: {\n    type: String,\n    default: \"na\"\n  },\n  public: {\n    type: Boolean,\n    default: false\n  }\n});\nconst Project = mongoose.model('project', projectSchema);\nmodule.exports = Project;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9wYWdlcy9hcGkvbW9kZWxzL1Byb2plY3QuanM/NTBiMyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJwcm9qZWN0U2NoZW1hIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiZGVmYXVsdCIsInJlcG9MaW5rIiwibGl2ZUxpbmsiLCJwdWJsaWMiLCJCb29sZWFuIiwiUHJvamVjdCIsIm1vZGVsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLDBCQUFELENBQXhCOztBQUVBLE1BQU1DLGFBQWEsR0FBR0YsUUFBUSxDQUFDRyxNQUFULENBQWdCO0FBQ2xDQyxPQUFLLEVBQUU7QUFDSEMsUUFBSSxFQUFFQyxNQURIO0FBRUhDLFlBQVEsRUFBRTtBQUZQLEdBRDJCO0FBS2xDQyxhQUFXLEVBQUU7QUFDVEgsUUFBSSxFQUFFQyxNQURHO0FBRVRDLFlBQVEsRUFBRTtBQUZELEdBTHFCO0FBU2xDRSxPQUFLLEVBQUU7QUFDSEosUUFBSSxFQUFFQyxNQURIO0FBRUhJLFdBQU8sRUFBRTtBQUZOLEdBVDJCO0FBYWxDQyxVQUFRLEVBQUU7QUFDTk4sUUFBSSxFQUFFQyxNQURBO0FBRU5DLFlBQVEsRUFBRTtBQUZKLEdBYndCO0FBaUJsQ0ssVUFBUSxFQUFFO0FBQ05QLFFBQUksRUFBRUMsTUFEQTtBQUVOSSxXQUFPLEVBQUU7QUFGSCxHQWpCd0I7QUFxQmxDRyxRQUFNLEVBQUU7QUFDSlIsUUFBSSxFQUFFUyxPQURGO0FBRUpKLFdBQU8sRUFBRTtBQUZMO0FBckIwQixDQUFoQixDQUF0QjtBQTJCQSxNQUFNSyxPQUFPLEdBQUdmLFFBQVEsQ0FBQ2dCLEtBQVQsQ0FBZSxTQUFmLEVBQTBCZCxhQUExQixDQUFoQjtBQUVBZSxNQUFNLENBQUNDLE9BQVAsR0FBaUJILE9BQWpCIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL21vZGVscy9Qcm9qZWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xuXG5jb25zdCBwcm9qZWN0U2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hKHtcbiAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgaW1hZ2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2NkdGhvbXAxL3BvcnRmb2xpby1zaXRlL21hc3Rlci9pbWFnZXMvY29taW5nLXNvb24ucG5nJyBcbiAgICB9LFxuICAgIHJlcG9MaW5rOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGxpdmVMaW5rOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogXCJuYVwiXG4gICAgfSwgXG4gICAgcHVibGljOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfVxufSlcblxuY29uc3QgUHJvamVjdCA9IG1vbmdvb3NlLm1vZGVsKCdwcm9qZWN0JywgcHJvamVjdFNjaGVtYSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvamVjdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/models/Project.js\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("mongoose");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/getProjects.js"));
module.exports = __webpack_exports__;

})();