/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("quill"));
	else if(typeof define === 'function' && define.amd)
		define(["quill"], factory);
	else if(typeof exports === 'object')
		exports["quillBetterTable"] = factory(require("quill"));
	else
		root["quillBetterTable"] = factory(root["Quill"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_quill__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./demo/js/demo1.js":
/*!**************************!*\
  !*** ./demo/js/demo1.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var src_quill_better_table_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/quill-better-table.js */ \"./src/quill-better-table.js\");\n/* harmony import */ var src_assets_quill_better_table_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/quill-better-table.scss */ \"./src/assets/quill-better-table.scss\");\n\n// import better-table styles file\n\nQuill.register({\n  'modules/better-table': src_quill_better_table_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, true);\nwindow.onload = () => {\n  const quill = new Quill('#editor-wrapper', {\n    theme: 'snow',\n    modules: {\n      table: false,\n      'better-table': {\n        operationMenu: {\n          items: {\n            unmergeCells: {\n              text: 'Another unmerge cells name'\n            }\n          },\n          color: {\n            colors: ['red', 'green', 'yellow', 'white', 'red', 'green', 'yellow', 'white']\n          }\n        }\n      },\n      keyboard: {\n        bindings: src_quill_better_table_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].keyboardBindings\n      }\n    }\n  });\n  let tableModule = quill.getModule('better-table');\n  document.body.querySelector('#insert-table').onclick = () => {\n    tableModule.insertTable(3, 3);\n  };\n  document.body.querySelector('#get-table').onclick = () => {\n    console.log(tableModule.getTable());\n  };\n  document.body.querySelector('#get-contents').onclick = () => {\n    console.log(quill.getContents());\n  };\n};\n\n//# sourceURL=webpack://quillBetterTable/./demo/js/demo1.js?");

/***/ }),

/***/ "./src/formats/header.js":
/*!*******************************!*\
  !*** ./src/formats/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill */ \"quill\");\n/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table */ \"./src/formats/table.js\");\n\n\nconst Block = quill__WEBPACK_IMPORTED_MODULE_0___default()[\"import\"](\"blots/block\");\nclass Header extends Block {\n  static create(value) {\n    if (typeof value === 'string') {\n      value = {\n        value\n      };\n    }\n    const node = super.create(value.value);\n    _table__WEBPACK_IMPORTED_MODULE_1__.CELL_IDENTITY_KEYS.forEach(key => {\n      if (value[key]) node.setAttribute(`data-${key}`, value[key]);\n    });\n    _table__WEBPACK_IMPORTED_MODULE_1__.CELL_ATTRIBUTES.forEach(key => {\n      if (value[key]) node.setAttribute(`data-${key}`, value[key]);\n    });\n    return node;\n  }\n  static formats(domNode) {\n    const formats = {};\n    formats.value = this.tagName.indexOf(domNode.tagName) + 1;\n    return _table__WEBPACK_IMPORTED_MODULE_1__.CELL_ATTRIBUTES.concat(_table__WEBPACK_IMPORTED_MODULE_1__.CELL_IDENTITY_KEYS).reduce((formats, attribute) => {\n      if (domNode.hasAttribute(`data-${attribute}`)) {\n        formats[attribute] = domNode.getAttribute(`data-${attribute}`) || undefined;\n      }\n      return formats;\n    }, formats);\n  }\n  format(name, value) {\n    const {\n      row,\n      cell,\n      rowspan,\n      colspan\n    } = Header.formats(this.domNode);\n    if (name === Header.blotName) {\n      if (value) {\n        super.format(name, {\n          value,\n          row,\n          cell,\n          rowspan,\n          colspan\n        });\n      } else {\n        if (row) {\n          this.replaceWith(_table__WEBPACK_IMPORTED_MODULE_1__.TableCellLine.blotName, {\n            row,\n            cell,\n            rowspan,\n            colspan\n          });\n        } else {\n          super.format(name, value);\n        }\n      }\n    } else {\n      super.format(name, value);\n    }\n  }\n  optimize(context) {\n    const {\n      row,\n      rowspan,\n      colspan\n    } = Header.formats(this.domNode);\n    if (row && !(this.parent instanceof _table__WEBPACK_IMPORTED_MODULE_1__.TableCell)) {\n      this.wrap(_table__WEBPACK_IMPORTED_MODULE_1__.TableCell.blotName, {\n        row,\n        colspan,\n        rowspan\n      });\n    }\n\n    // ShadowBlot optimize\n    this.enforceAllowedChildren();\n    if (this.uiNode != null && this.uiNode !== this.domNode.firstChild) {\n      this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);\n    }\n    if (this.children.length === 0) {\n      if (this.statics.defaultChild != null) {\n        const child = this.scroll.create(this.statics.defaultChild.blotName);\n        this.appendChild(child);\n        // TODO double check if necessary\n        // child.optimize(context);\n      } else {\n        this.remove();\n      }\n    }\n    // Block optimize\n    this.cache = {};\n  }\n}\nHeader.blotName = 'header';\nHeader.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://quillBetterTable/./src/formats/header.js?");

/***/ }),

/***/ "./src/formats/table.js":
/*!******************************!*\
  !*** ./src/formats/table.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CELL_ATTRIBUTES: () => (/* binding */ CELL_ATTRIBUTES),\n/* harmony export */   CELL_IDENTITY_KEYS: () => (/* binding */ CELL_IDENTITY_KEYS),\n/* harmony export */   TableBody: () => (/* binding */ TableBody),\n/* harmony export */   TableCell: () => (/* binding */ TableCell),\n/* harmony export */   TableCellLine: () => (/* binding */ TableCellLine),\n/* harmony export */   TableCol: () => (/* binding */ TableCol),\n/* harmony export */   TableColGroup: () => (/* binding */ TableColGroup),\n/* harmony export */   TableContainer: () => (/* binding */ TableContainer),\n/* harmony export */   TableRow: () => (/* binding */ TableRow),\n/* harmony export */   TableViewWrapper: () => (/* binding */ TableViewWrapper),\n/* harmony export */   cellId: () => (/* binding */ cellId),\n/* harmony export */   rowId: () => (/* binding */ rowId)\n/* harmony export */ });\n/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill */ \"quill\");\n/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ \"./src/formats/header.js\");\n\n\n\nconst Break = quill__WEBPACK_IMPORTED_MODULE_0___default()[\"import\"](\"blots/break\");\nconst Block = quill__WEBPACK_IMPORTED_MODULE_0___default()[\"import\"](\"blots/block\");\nconst Container = quill__WEBPACK_IMPORTED_MODULE_0___default()[\"import\"](\"blots/container\");\nconst COL_ATTRIBUTES = [\"width\"];\nconst COL_DEFAULT = {\n  width: 100\n};\nconst CELL_IDENTITY_KEYS = [\"row\", \"cell\"];\nconst CELL_ATTRIBUTES = [\"rowspan\", \"colspan\"];\nconst CELL_DEFAULT = {\n  rowspan: 1,\n  colspan: 1\n};\nconst ERROR_LIMIT = 5;\nclass TableCellLine extends Block {\n  static create(value) {\n    const node = super.create(value);\n    CELL_IDENTITY_KEYS.forEach(key => {\n      let identityMaker = key === 'row' ? rowId : cellId;\n      node.setAttribute(`data-${key}`, value[key] || identityMaker());\n    });\n    CELL_ATTRIBUTES.forEach(attrName => {\n      node.setAttribute(`data-${attrName}`, value[attrName] || CELL_DEFAULT[attrName]);\n    });\n    if (value['cell-bg']) {\n      node.setAttribute('data-cell-bg', value['cell-bg']);\n    }\n    return node;\n  }\n  static formats(domNode) {\n    const formats = {};\n    return CELL_ATTRIBUTES.concat(CELL_IDENTITY_KEYS).concat(['cell-bg']).reduce((formats, attribute) => {\n      if (domNode.hasAttribute(`data-${attribute}`)) {\n        formats[attribute] = domNode.getAttribute(`data-${attribute}`) || undefined;\n      }\n      return formats;\n    }, formats);\n  }\n  format(name, value) {\n    if (CELL_ATTRIBUTES.concat(CELL_IDENTITY_KEYS).indexOf(name) > -1) {\n      if (value) {\n        this.domNode.setAttribute(`data-${name}`, value);\n      } else {\n        this.domNode.removeAttribute(`data-${name}`);\n      }\n    } else if (name === 'cell-bg') {\n      if (value) {\n        this.domNode.setAttribute('data-cell-bg', value);\n      } else {\n        this.domNode.removeAttribute('data-cell-bg');\n      }\n    } else if (name === 'header') {\n      if (!value) return;\n      const {\n        row,\n        cell,\n        rowspan,\n        colspan\n      } = TableCellLine.formats(this.domNode);\n      super.format(name, {\n        value,\n        row,\n        cell,\n        rowspan,\n        colspan\n      });\n    } else {\n      super.format(name, value);\n    }\n  }\n  optimize(context) {\n    // cover shadowBlot's wrap call, pass params parentBlot initialize\n    // needed\n    const rowId = this.domNode.getAttribute('data-row');\n    const rowspan = this.domNode.getAttribute('data-rowspan');\n    const colspan = this.domNode.getAttribute('data-colspan');\n    const cellBg = this.domNode.getAttribute('data-cell-bg');\n    if (this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer)) {\n      this.wrap(this.statics.requiredContainer.blotName, {\n        row: rowId,\n        colspan,\n        rowspan,\n        'cell-bg': cellBg\n      });\n    }\n    super.optimize(context);\n  }\n  tableCell() {\n    return this.parent;\n  }\n}\nTableCellLine.blotName = \"table-cell-line\";\nTableCellLine.className = \"qlbt-cell-line\";\nTableCellLine.tagName = \"P\";\nclass TableCell extends Container {\n  checkMerge() {\n    if (super.checkMerge() && this.next.children.head != null) {\n      const thisHead = this.children.head.formats()[this.children.head.statics.blotName];\n      const thisTail = this.children.tail.formats()[this.children.tail.statics.blotName];\n      const nextHead = this.next.children.head.formats()[this.next.children.head.statics.blotName];\n      const nextTail = this.next.children.tail.formats()[this.next.children.tail.statics.blotName];\n      return thisHead.cell === thisTail.cell && thisHead.cell === nextHead.cell && thisHead.cell === nextTail.cell;\n    }\n    return false;\n  }\n  static create(value) {\n    const node = super.create(value);\n    node.setAttribute(\"data-row\", value.row);\n    CELL_ATTRIBUTES.forEach(attrName => {\n      if (value[attrName]) {\n        node.setAttribute(attrName, value[attrName]);\n      }\n    });\n    if (value['cell-bg']) {\n      node.setAttribute('data-cell-bg', value['cell-bg']);\n      node.style.backgroundColor = value['cell-bg'];\n    }\n    return node;\n  }\n  static formats(domNode) {\n    const formats = {};\n    if (domNode.hasAttribute(\"data-row\")) {\n      formats[\"row\"] = domNode.getAttribute(\"data-row\");\n    }\n    if (domNode.hasAttribute(\"data-cell-bg\")) {\n      formats[\"cell-bg\"] = domNode.getAttribute(\"data-cell-bg\");\n    }\n    return CELL_ATTRIBUTES.reduce((formats, attribute) => {\n      if (domNode.hasAttribute(attribute)) {\n        formats[attribute] = domNode.getAttribute(attribute);\n      }\n      return formats;\n    }, formats);\n  }\n  cellOffset() {\n    if (this.parent) {\n      return this.parent.children.indexOf(this);\n    }\n    return -1;\n  }\n  formats() {\n    const formats = {};\n    if (this.domNode.hasAttribute(\"data-row\")) {\n      formats[\"row\"] = this.domNode.getAttribute(\"data-row\");\n    }\n    if (this.domNode.hasAttribute(\"data-cell-bg\")) {\n      formats[\"cell-bg\"] = this.domNode.getAttribute(\"data-cell-bg\");\n    }\n    return CELL_ATTRIBUTES.reduce((formats, attribute) => {\n      if (this.domNode.hasAttribute(attribute)) {\n        formats[attribute] = this.domNode.getAttribute(attribute);\n      }\n      return formats;\n    }, formats);\n  }\n  toggleAttribute(name, value) {\n    if (value) {\n      this.domNode.setAttribute(name, value);\n    } else {\n      this.domNode.removeAttribute(name);\n    }\n  }\n  formatChildren(name, value) {\n    this.children.forEach(child => {\n      child.format(name, value);\n    });\n  }\n  format(name, value) {\n    if (CELL_ATTRIBUTES.indexOf(name) > -1) {\n      this.toggleAttribute(name, value);\n      this.formatChildren(name, value);\n    } else if (['row'].indexOf(name) > -1) {\n      this.toggleAttribute(`data-${name}`, value);\n      this.formatChildren(name, value);\n    } else if (name === 'cell-bg') {\n      this.toggleAttribute('data-cell-bg', value);\n      this.formatChildren(name, value);\n      if (value) {\n        this.domNode.style.backgroundColor = value;\n      } else {\n        this.domNode.style.backgroundColor = 'initial';\n      }\n    } else {\n      super.format(name, value);\n    }\n  }\n  optimize(context) {\n    const rowId = this.domNode.getAttribute(\"data-row\");\n    if (this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer)) {\n      this.wrap(this.statics.requiredContainer.blotName, {\n        row: rowId\n      });\n    }\n    super.optimize(context);\n  }\n  row() {\n    return this.parent;\n  }\n  rowOffset() {\n    if (this.row()) {\n      return this.row().rowOffset();\n    }\n    return -1;\n  }\n  table() {\n    return this.row() && this.row().table();\n  }\n}\nTableCell.blotName = \"table\";\nTableCell.tagName = \"TD\";\nclass TableRow extends Container {\n  checkMerge() {\n    if (super.checkMerge() && this.next.children.head != null) {\n      const thisHead = this.children.head.formats();\n      const thisTail = this.children.tail.formats();\n      const nextHead = this.next.children.head.formats();\n      const nextTail = this.next.children.tail.formats();\n      return thisHead.row === thisTail.row && thisHead.row === nextHead.row && thisHead.row === nextTail.row;\n    }\n    return false;\n  }\n  static create(value) {\n    const node = super.create(value);\n    node.setAttribute(\"data-row\", value.row);\n    return node;\n  }\n  formats() {\n    return [\"row\"].reduce((formats, attrName) => {\n      if (this.domNode.hasAttribute(`data-${attrName}`)) {\n        formats[attrName] = this.domNode.getAttribute(`data-${attrName}`);\n      }\n      return formats;\n    }, {});\n  }\n  optimize(context) {\n    // optimize function of ShadowBlot\n    if (this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer)) {\n      this.wrap(this.statics.requiredContainer.blotName);\n    }\n\n    // optimize function of ParentBlot\n    // note: modified this optimize function because\n    // TableRow should not be removed when the length of its children was 0\n    this.enforceAllowedChildren();\n    if (this.uiNode != null && this.uiNode !== this.domNode.firstChild) {\n      this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);\n    }\n\n    // optimize function of ContainerBlot\n    if (this.children.length > 0 && this.next != null && this.checkMerge()) {\n      this.next.moveChildren(this);\n      this.next.remove();\n    }\n  }\n  rowOffset() {\n    if (this.parent) {\n      return this.parent.children.indexOf(this);\n    }\n    return -1;\n  }\n  table() {\n    return this.parent && this.parent.parent;\n  }\n}\nTableRow.blotName = \"table-row\";\nTableRow.tagName = \"TR\";\nclass TableBody extends Container {}\nTableBody.blotName = \"table-body\";\nTableBody.tagName = \"TBODY\";\nclass TableCol extends Block {\n  static create(value) {\n    let node = super.create(value);\n    COL_ATTRIBUTES.forEach(attrName => {\n      node.setAttribute(`${attrName}`, value[attrName] || COL_DEFAULT[attrName]);\n    });\n    return node;\n  }\n  static formats(domNode) {\n    return COL_ATTRIBUTES.reduce((formats, attribute) => {\n      if (domNode.hasAttribute(`${attribute}`)) {\n        formats[attribute] = domNode.getAttribute(`${attribute}`) || undefined;\n      }\n      return formats;\n    }, {});\n  }\n  format(name, value) {\n    if (COL_ATTRIBUTES.indexOf(name) > -1) {\n      this.domNode.setAttribute(`${name}`, value || COL_DEFAULT[name]);\n    } else {\n      super.format(name, value);\n    }\n  }\n  html() {\n    return this.domNode.outerHTML;\n  }\n}\nTableCol.blotName = \"table-col\";\nTableCol.tagName = \"col\";\nclass TableColGroup extends Container {}\nTableColGroup.blotName = \"table-col-group\";\nTableColGroup.tagName = \"colgroup\";\nclass TableContainer extends Container {\n  static create() {\n    let node = super.create();\n    return node;\n  }\n  constructor(scroll, domNode) {\n    super(scroll, domNode);\n    this.updateTableWidth();\n  }\n  updateTableWidth() {\n    setTimeout(() => {\n      const colGroup = this.colGroup();\n      if (!colGroup) return;\n      const tableWidth = colGroup.children.reduce((sumWidth, col) => {\n        sumWidth = sumWidth + parseInt(col.formats()[TableCol.blotName].width, 10);\n        return sumWidth;\n      }, 0);\n      this.domNode.style.width = `${tableWidth}px`;\n    }, 0);\n  }\n  cells(column) {\n    return this.rows().map(row => row.children.at(column));\n  }\n  colGroup() {\n    return this.children.head;\n  }\n  deleteColumns(compareRect) {\n    let delIndexes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n    let editorWrapper = arguments.length > 2 ? arguments[2] : undefined;\n    const [body] = this.descendants(TableBody);\n    if (body == null || body.children.head == null) return;\n    const tableCells = this.descendants(TableCell);\n    const removedCells = [];\n    const modifiedCells = [];\n    tableCells.forEach(cell => {\n      const cellRect = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRelativeRect)(cell.domNode.getBoundingClientRect(), editorWrapper);\n      if (cellRect.x + ERROR_LIMIT > compareRect.x && cellRect.x1 - ERROR_LIMIT < compareRect.x1) {\n        removedCells.push(cell);\n      } else if (cellRect.x < compareRect.x + ERROR_LIMIT && cellRect.x1 > compareRect.x1 - ERROR_LIMIT) {\n        modifiedCells.push(cell);\n      }\n    });\n    if (removedCells.length === tableCells.length) {\n      this.tableDestroy();\n      return true;\n    }\n\n    // remove the matches column tool cell\n    delIndexes.forEach(delIndex => {\n      this.colGroup().children.at(delIndexes[0]).remove();\n    });\n    removedCells.forEach(cell => {\n      cell.remove();\n    });\n    modifiedCells.forEach(cell => {\n      const cellColspan = parseInt(cell.formats().colspan, 10);\n      const cellWidth = parseInt(cell.formats().width, 10);\n      cell.format('colspan', cellColspan - delIndexes.length);\n    });\n    this.updateTableWidth();\n  }\n  deleteRow(compareRect, editorWrapper) {\n    const [body] = this.descendants(TableBody);\n    if (body == null || body.children.head == null) return;\n    const tableCells = this.descendants(TableCell);\n    const tableRows = this.descendants(TableRow);\n    const removedCells = []; // cells to be removed\n    const modifiedCells = []; // cells to be modified\n    const fallCells = []; // cells to fall into next row\n\n    // compute rows to remove\n    // bugfix: #21 There will be a empty tr left if delete the last row of a table\n    const removedRows = tableRows.filter(row => {\n      const rowRect = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRelativeRect)(row.domNode.getBoundingClientRect(), editorWrapper);\n      return rowRect.y > compareRect.y - ERROR_LIMIT && rowRect.y1 < compareRect.y1 + ERROR_LIMIT;\n    });\n    tableCells.forEach(cell => {\n      const cellRect = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRelativeRect)(cell.domNode.getBoundingClientRect(), editorWrapper);\n      if (cellRect.y > compareRect.y - ERROR_LIMIT && cellRect.y1 < compareRect.y1 + ERROR_LIMIT) {\n        removedCells.push(cell);\n      } else if (cellRect.y < compareRect.y + ERROR_LIMIT && cellRect.y1 > compareRect.y1 - ERROR_LIMIT) {\n        modifiedCells.push(cell);\n        if (Math.abs(cellRect.y - compareRect.y) < ERROR_LIMIT) {\n          fallCells.push(cell);\n        }\n      }\n    });\n    if (removedCells.length === tableCells.length) {\n      this.tableDestroy();\n      return;\n    }\n\n    // compute length of removed rows\n    const removedRowsLength = this.rows().reduce((sum, row) => {\n      let rowRect = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRelativeRect)(row.domNode.getBoundingClientRect(), editorWrapper);\n      if (rowRect.y > compareRect.y - ERROR_LIMIT && rowRect.y1 < compareRect.y1 + ERROR_LIMIT) {\n        sum += 1;\n      }\n      return sum;\n    }, 0);\n\n    // it must excute before the table layout changed with other operation\n    fallCells.forEach(cell => {\n      const cellRect = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRelativeRect)(cell.domNode.getBoundingClientRect(), editorWrapper);\n      const nextRow = cell.parent.next;\n      const cellsInNextRow = nextRow.children;\n      const refCell = cellsInNextRow.reduce((ref, compareCell) => {\n        const compareRect = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRelativeRect)(compareCell.domNode.getBoundingClientRect(), editorWrapper);\n        if (Math.abs(cellRect.x1 - compareRect.x) < ERROR_LIMIT) {\n          ref = compareCell;\n        }\n        return ref;\n      }, null);\n      nextRow.insertBefore(cell, refCell);\n      cell.format('row', nextRow.formats().row);\n    });\n    removedCells.forEach(cell => {\n      cell.remove();\n    });\n    modifiedCells.forEach(cell => {\n      const cellRowspan = parseInt(cell.formats().rowspan, 10);\n      cell.format(\"rowspan\", cellRowspan - removedRowsLength);\n    });\n\n    // remove selected rows\n    removedRows.forEach(row => row.remove());\n  }\n  tableDestroy() {\n    const quill = quill__WEBPACK_IMPORTED_MODULE_0___default().find(this.scroll.domNode.parentNode);\n    const tableModule = quill.getModule(\"better-table\");\n    this.remove();\n    tableModule.hideTableTools();\n    quill.update((quill__WEBPACK_IMPORTED_MODULE_0___default().sources).USER);\n  }\n  insertCell(tableRow, ref) {\n    const id = cellId();\n    const rId = tableRow.formats().row;\n    const tableCell = this.scroll.create(TableCell.blotName, Object.assign({}, CELL_DEFAULT, {\n      row: rId\n    }));\n    const cellLine = this.scroll.create(TableCellLine.blotName, {\n      row: rId,\n      cell: id\n    });\n    tableCell.appendChild(cellLine);\n    if (ref) {\n      tableRow.insertBefore(tableCell, ref);\n    } else {\n      tableRow.appendChild(tableCell);\n    }\n  }\n  insertColumn(compareRect, colIndex) {\n    let isRight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n    let editorWrapper = arguments.length > 3 ? arguments[3] : undefined;\n    const [body] = this.descendants(TableBody);\n    const [tableColGroup] = this.descendants(TableColGroup);\n    const tableCols = this.descendants(TableCol);\n    let addAsideCells = [];\n    let modifiedCells = [];\n    let affectedCells = [];\n    if (body == null || body.children.head == null) return;\n    const tableCells = this.descendants(TableCell);\n    tableCells.forEach(cell => {\n      const cellRect = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRelativeRect)(cell.domNode.getBoundingClientRect(), editorWrapper);\n      if (isRight) {\n        if (Math.abs(cellRect.x1 - compareRect.x1) < ERROR_LIMIT) {\n          // the right of selected boundary equal to the right of table cell,\n          // add a new table cell right aside this table cell\n          addAsideCells.push(cell);\n        } else if (compareRect.x1 - cellRect.x > ERROR_LIMIT && compareRect.x1 - cellRect.x1 < -ERROR_LIMIT) {\n          // the right of selected boundary is inside this table cell\n          // colspan of this table cell will increase 1\n          modifiedCells.push(cell);\n        }\n      } else {\n        if (Math.abs(cellRect.x - compareRect.x) < ERROR_LIMIT) {\n          // left of selected boundary equal to left of table cell,\n          // add a new table cell left aside this table cell\n          addAsideCells.push(cell);\n        } else if (compareRect.x - cellRect.x > ERROR_LIMIT && compareRect.x - cellRect.x1 < -ERROR_LIMIT) {\n          // the left of selected boundary is inside this table cell\n          // colspan of this table cell will increase 1\n          modifiedCells.push(cell);\n        }\n      }\n    });\n    addAsideCells.forEach(cell => {\n      const ref = isRight ? cell.next : cell;\n      const id = cellId();\n      const tableRow = cell.parent;\n      const rId = tableRow.formats().row;\n      const cellFormats = cell.formats();\n      const tableCell = this.scroll.create(TableCell.blotName, Object.assign({}, CELL_DEFAULT, {\n        row: rId,\n        rowspan: cellFormats.rowspan\n      }));\n      const cellLine = this.scroll.create(TableCellLine.blotName, {\n        row: rId,\n        cell: id,\n        rowspan: cellFormats.rowspan\n      });\n      tableCell.appendChild(cellLine);\n      if (ref) {\n        tableRow.insertBefore(tableCell, ref);\n      } else {\n        tableRow.appendChild(tableCell);\n      }\n      affectedCells.push(tableCell);\n    });\n\n    // insert new tableCol\n    const tableCol = this.scroll.create(TableCol.blotName, true);\n    let colRef = isRight ? tableCols[colIndex].next : tableCols[colIndex];\n    if (colRef) {\n      tableColGroup.insertBefore(tableCol, colRef);\n    } else {\n      tableColGroup.appendChild(tableCol);\n    }\n    modifiedCells.forEach(cell => {\n      const cellColspan = cell.formats().colspan;\n      cell.format('colspan', parseInt(cellColspan, 10) + 1);\n      affectedCells.push(cell);\n    });\n    affectedCells.sort((cellA, cellB) => {\n      let y1 = cellA.domNode.getBoundingClientRect().y;\n      let y2 = cellB.domNode.getBoundingClientRect().y;\n      return y1 - y2;\n    });\n    this.updateTableWidth();\n    return affectedCells;\n  }\n  insertRow(compareRect, isDown, editorWrapper) {\n    const [body] = this.descendants(TableBody);\n    if (body == null || body.children.head == null) return;\n    const tableCells = this.descendants(TableCell);\n    const rId = rowId();\n    const newRow = this.scroll.create(TableRow.blotName, {\n      row: rId\n    });\n    let addBelowCells = [];\n    let modifiedCells = [];\n    let affectedCells = [];\n    tableCells.forEach(cell => {\n      const cellRect = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRelativeRect)(cell.domNode.getBoundingClientRect(), editorWrapper);\n      if (isDown) {\n        if (Math.abs(cellRect.y1 - compareRect.y1) < ERROR_LIMIT) {\n          addBelowCells.push(cell);\n        } else if (compareRect.y1 - cellRect.y > ERROR_LIMIT && compareRect.y1 - cellRect.y1 < -ERROR_LIMIT) {\n          modifiedCells.push(cell);\n        }\n      } else {\n        if (Math.abs(cellRect.y - compareRect.y) < ERROR_LIMIT) {\n          addBelowCells.push(cell);\n        } else if (compareRect.y - cellRect.y > ERROR_LIMIT && compareRect.y - cellRect.y1 < -ERROR_LIMIT) {\n          modifiedCells.push(cell);\n        }\n      }\n    });\n\n    // ordered table cells with rect.x, fix error for inserting\n    // new table cell in complicated table with wrong order.\n    const sortFunc = (cellA, cellB) => {\n      let x1 = cellA.domNode.getBoundingClientRect().x;\n      let x2 = cellB.domNode.getBoundingClientRect().x;\n      return x1 - x2;\n    };\n    addBelowCells.sort(sortFunc);\n    addBelowCells.forEach(cell => {\n      const cId = cellId();\n      const cellFormats = cell.formats();\n      const tableCell = this.scroll.create(TableCell.blotName, Object.assign({}, CELL_DEFAULT, {\n        row: rId,\n        colspan: cellFormats.colspan\n      }));\n      const cellLine = this.scroll.create(TableCellLine.blotName, {\n        row: rId,\n        cell: cId,\n        colspan: cellFormats.colspan\n      });\n      const empty = this.scroll.create(Break.blotName);\n      cellLine.appendChild(empty);\n      tableCell.appendChild(cellLine);\n      newRow.appendChild(tableCell);\n      affectedCells.push(tableCell);\n    });\n    modifiedCells.forEach(cell => {\n      const cellRowspan = parseInt(cell.formats().rowspan, 10);\n      cell.format(\"rowspan\", cellRowspan + 1);\n      affectedCells.push(cell);\n    });\n    const refRow = this.rows().find(row => {\n      let rowRect = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRelativeRect)(row.domNode.getBoundingClientRect(), editorWrapper);\n      if (isDown) {\n        return Math.abs(rowRect.y - compareRect.y - compareRect.height) < ERROR_LIMIT;\n      } else {\n        return Math.abs(rowRect.y - compareRect.y) < ERROR_LIMIT;\n      }\n    });\n    body.insertBefore(newRow, refRow);\n\n    // reordering affectedCells\n    affectedCells.sort(sortFunc);\n    return affectedCells;\n  }\n  mergeCells(compareRect, mergingCells, rowspan, colspan, editorWrapper) {\n    const mergedCell = mergingCells.reduce((result, tableCell, index) => {\n      if (index !== 0) {\n        result && tableCell.moveChildren(result);\n        tableCell.remove();\n      } else {\n        tableCell.format('colspan', colspan);\n        tableCell.format('rowspan', rowspan);\n        result = tableCell;\n      }\n      return result;\n    }, null);\n    let rowId = mergedCell.domNode.getAttribute('data-row');\n    let cellId = mergedCell.children.head.domNode.getAttribute('data-cell');\n    mergedCell.children.forEach(cellLine => {\n      cellLine.format('cell', cellId);\n      cellLine.format('row', rowId);\n      cellLine.format('colspan', colspan);\n      cellLine.format('rowspan', rowspan);\n    });\n    return mergedCell;\n  }\n  unmergeCells(unmergingCells, editorWrapper) {\n    let cellFormats = {};\n    let cellRowspan = 1;\n    let cellColspan = 1;\n    unmergingCells.forEach(tableCell => {\n      cellFormats = tableCell.formats();\n      cellRowspan = cellFormats.rowspan;\n      cellColspan = cellFormats.colspan;\n      if (cellColspan > 1) {\n        let ref = tableCell.next;\n        let row = tableCell.row();\n        tableCell.format('colspan', 1);\n        for (let i = cellColspan; i > 1; i--) {\n          this.insertCell(row, ref);\n        }\n      }\n      if (cellRowspan > 1) {\n        let i = cellRowspan;\n        let nextRow = tableCell.row().next;\n        while (i > 1) {\n          let refInNextRow = nextRow.children.reduce((result, cell) => {\n            let compareRect = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRelativeRect)(tableCell.domNode.getBoundingClientRect(), editorWrapper);\n            let cellRect = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRelativeRect)(cell.domNode.getBoundingClientRect(), editorWrapper);\n            if (Math.abs(compareRect.x1 - cellRect.x) < ERROR_LIMIT) {\n              result = cell;\n            }\n            return result;\n          }, null);\n          for (let i = cellColspan; i > 0; i--) {\n            this.insertCell(nextRow, refInNextRow);\n          }\n          i -= 1;\n          nextRow = nextRow.next;\n        }\n        tableCell.format('rowspan', 1);\n      }\n    });\n  }\n  rows() {\n    const body = this.children.tail;\n    if (body == null) return [];\n    return body.children.map(row => row);\n  }\n}\nTableContainer.blotName = \"table-container\";\nTableContainer.className = \"quill-better-table\";\nTableContainer.tagName = \"TABLE\";\nclass TableViewWrapper extends Container {\n  constructor(scroll, domNode) {\n    super(scroll, domNode);\n    const quill = quill__WEBPACK_IMPORTED_MODULE_0___default().find(scroll.domNode.parentNode);\n    domNode.addEventListener('scroll', e => {\n      const tableModule = quill.getModule('better-table');\n      if (tableModule.columnTool) {\n        tableModule.columnTool.domNode.scrollLeft = e.target.scrollLeft;\n      }\n      if (tableModule.tableSelection && tableModule.tableSelection.selectedTds.length > 0) {\n        tableModule.tableSelection.repositionHelpLines();\n      }\n    }, false);\n  }\n  table() {\n    return this.children.head;\n  }\n}\nTableViewWrapper.blotName = \"table-view\";\nTableViewWrapper.className = \"quill-better-table-wrapper\";\nTableViewWrapper.tagName = \"DIV\";\nTableViewWrapper.allowedChildren = [TableContainer];\nTableContainer.requiredContainer = TableViewWrapper;\nTableContainer.allowedChildren = [TableBody, TableColGroup];\nTableBody.requiredContainer = TableContainer;\nTableBody.allowedChildren = [TableRow];\nTableRow.requiredContainer = TableBody;\nTableRow.allowedChildren = [TableCell];\nTableCell.requiredContainer = TableRow;\nTableCell.allowedChildren = [TableCellLine, _header__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\nTableCellLine.requiredContainer = TableCell;\nTableColGroup.allowedChildren = [TableCol];\nTableColGroup.requiredContainer = TableContainer;\nTableCol.requiredContainer = TableColGroup;\nfunction rowId() {\n  const id = Math.random().toString(36).slice(2, 6);\n  return `row-${id}`;\n}\nfunction cellId() {\n  const id = Math.random().toString(36).slice(2, 6);\n  return `cell-${id}`;\n}\n\n\n//# sourceURL=webpack://quillBetterTable/./src/formats/table.js?");

/***/ }),

/***/ "./src/modules/table-column-tool.js":
/*!******************************************!*\
  !*** ./src/modules/table-column-tool.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TableColumnTool)\n/* harmony export */ });\n/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill */ \"quill\");\n/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\n\nconst COL_TOOL_HEIGHT = 12;\nconst COL_TOOL_CELL_HEIGHT = 12;\nconst ROW_TOOL_WIDTH = 12;\nconst CELL_MIN_WIDTH = 50;\nconst PRIMARY_COLOR = '#35A7ED';\nclass TableColumnTool {\n  constructor(table, quill, options) {\n    if (!table) return null;\n    this.table = table;\n    this.quill = quill;\n    this.options = options;\n    this.domNode = null;\n    this.initColTool();\n  }\n  initColTool() {\n    const parent = this.quill.root.parentNode;\n    const tableRect = this.table.getBoundingClientRect();\n    const containerRect = parent.getBoundingClientRect();\n    const tableViewRect = this.table.parentNode.getBoundingClientRect();\n    this.domNode = document.createElement('div');\n    this.domNode.classList.add('qlbt-col-tool');\n    this.updateToolCells();\n    parent.appendChild(this.domNode);\n    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.css)(this.domNode, {\n      width: `${tableViewRect.width}px`,\n      height: `${COL_TOOL_HEIGHT}px`,\n      left: `${tableViewRect.left - containerRect.left + parent.scrollLeft}px`,\n      top: `${tableViewRect.top - containerRect.top + parent.scrollTop - COL_TOOL_HEIGHT - 5}px`\n    });\n  }\n  createToolCell() {\n    const toolCell = document.createElement('div');\n    toolCell.classList.add('qlbt-col-tool-cell');\n    const resizeHolder = document.createElement('div');\n    resizeHolder.classList.add('qlbt-col-tool-cell-holder');\n    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.css)(toolCell, {\n      'height': `${COL_TOOL_CELL_HEIGHT}px`\n    });\n    toolCell.appendChild(resizeHolder);\n    return toolCell;\n  }\n  updateToolCells() {\n    const tableContainer = quill__WEBPACK_IMPORTED_MODULE_0___default().find(this.table);\n    const CellsInFirstRow = tableContainer.children.tail.children.head.children;\n    const tableCols = tableContainer.colGroup().children;\n    const cellsNumber = computeCellsNumber(CellsInFirstRow);\n    let existCells = Array.from(this.domNode.querySelectorAll('.qlbt-col-tool-cell'));\n    for (let index = 0; index < Math.max(cellsNumber, existCells.length); index++) {\n      let col = tableCols.at(index);\n      let colWidth = col && parseInt(col.formats()[col.statics.blotName].width, 10);\n      // if cell already exist\n      let toolCell = null;\n      if (!existCells[index]) {\n        toolCell = this.createToolCell();\n        this.domNode.appendChild(toolCell);\n        this.addColCellHolderHandler(toolCell);\n        // set tool cell min-width\n        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.css)(toolCell, {\n          'min-width': `${colWidth}px`\n        });\n      } else if (existCells[index] && index >= cellsNumber) {\n        existCells[index].remove();\n      } else {\n        toolCell = existCells[index];\n        // set tool cell min-width\n        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.css)(toolCell, {\n          'min-width': `${colWidth}px`\n        });\n      }\n    }\n  }\n  destroy() {\n    this.domNode.remove();\n    return null;\n  }\n  addColCellHolderHandler(cell) {\n    const tableContainer = quill__WEBPACK_IMPORTED_MODULE_0___default().find(this.table);\n    const $holder = cell.querySelector(\".qlbt-col-tool-cell-holder\");\n    let dragging = false;\n    let x0 = 0;\n    let x = 0;\n    let delta = 0;\n    let width0 = 0;\n    // helpLine relation varrible\n    let tableRect = {};\n    let cellRect = {};\n    let $helpLine = null;\n    const handleDrag = e => {\n      e.preventDefault();\n      if (dragging) {\n        x = e.clientX;\n        if (width0 + x - x0 >= CELL_MIN_WIDTH) {\n          delta = x - x0;\n        } else {\n          delta = CELL_MIN_WIDTH - width0;\n        }\n        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.css)($helpLine, {\n          'left': `${cellRect.left + cellRect.width - 1 + delta}px`\n        });\n      }\n    };\n    const handleMouseup = e => {\n      e.preventDefault();\n      const existCells = Array.from(this.domNode.querySelectorAll('.qlbt-col-tool-cell'));\n      const colIndex = existCells.indexOf(cell);\n      const colBlot = tableContainer.colGroup().children.at(colIndex);\n      if (dragging) {\n        colBlot.format('width', width0 + delta);\n        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.css)(cell, {\n          'min-width': `${width0 + delta}px`\n        });\n        x0 = 0;\n        x = 0;\n        delta = 0;\n        width0 = 0;\n        dragging = false;\n        $holder.classList.remove('dragging');\n      }\n      document.removeEventListener('mousemove', handleDrag, false);\n      document.removeEventListener('mouseup', handleMouseup, false);\n      tableRect = {};\n      cellRect = {};\n      $helpLine.remove();\n      $helpLine = null;\n      tableContainer.updateTableWidth();\n      const tableSelection = this.quill.getModule('better-table').tableSelection;\n      tableSelection && tableSelection.clearSelection();\n    };\n    const handleMousedown = e => {\n      document.addEventListener('mousemove', handleDrag, false);\n      document.addEventListener('mouseup', handleMouseup, false);\n      tableRect = this.table.getBoundingClientRect();\n      cellRect = cell.getBoundingClientRect();\n      $helpLine = document.createElement('div');\n      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.css)($helpLine, {\n        position: 'fixed',\n        top: `${cellRect.top}px`,\n        left: `${cellRect.left + cellRect.width - 1}px`,\n        zIndex: '100',\n        height: `${tableRect.height + COL_TOOL_HEIGHT + 4}px`,\n        width: '1px',\n        backgroundColor: PRIMARY_COLOR\n      });\n      document.body.appendChild($helpLine);\n      dragging = true;\n      x0 = e.clientX;\n      width0 = cellRect.width;\n      $holder.classList.add('dragging');\n    };\n    $holder.addEventListener('mousedown', handleMousedown, false);\n  }\n  colToolCells() {\n    return Array.from(this.domNode.querySelectorAll('.qlbt-col-tool-cell'));\n  }\n}\nfunction computeCellsNumber(CellsInFirstRow) {\n  return CellsInFirstRow.reduce((sum, cell) => {\n    const cellColspan = cell.formats().colspan;\n    sum = sum + parseInt(cellColspan, 10);\n    return sum;\n  }, 0);\n}\n\n//# sourceURL=webpack://quillBetterTable/./src/modules/table-column-tool.js?");

/***/ }),

/***/ "./src/modules/table-operation-menu.js":
/*!*********************************************!*\
  !*** ./src/modules/table-operation-menu.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TableOperationMenu)\n/* harmony export */ });\n/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill */ \"quill\");\n/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _assets_icons_icon_operation_1_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/icon_operation_1.svg */ \"./src/assets/icons/icon_operation_1.svg\");\n/* harmony import */ var _assets_icons_icon_operation_2_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/icon_operation_2.svg */ \"./src/assets/icons/icon_operation_2.svg\");\n/* harmony import */ var _assets_icons_icon_operation_3_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/icon_operation_3.svg */ \"./src/assets/icons/icon_operation_3.svg\");\n/* harmony import */ var _assets_icons_icon_operation_4_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/icon_operation_4.svg */ \"./src/assets/icons/icon_operation_4.svg\");\n/* harmony import */ var _assets_icons_icon_operation_5_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/icon_operation_5.svg */ \"./src/assets/icons/icon_operation_5.svg\");\n/* harmony import */ var _assets_icons_icon_operation_6_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/icon_operation_6.svg */ \"./src/assets/icons/icon_operation_6.svg\");\n/* harmony import */ var _assets_icons_icon_operation_7_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/icons/icon_operation_7.svg */ \"./src/assets/icons/icon_operation_7.svg\");\n/* harmony import */ var _assets_icons_icon_operation_8_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/icons/icon_operation_8.svg */ \"./src/assets/icons/icon_operation_8.svg\");\n/* harmony import */ var _assets_icons_icon_operation_9_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/icons/icon_operation_9.svg */ \"./src/assets/icons/icon_operation_9.svg\");\n\n\n\n// svg icons\n\n\n\n\n\n\n\n\n\nconst MENU_MIN_HEIHGT = 150;\nconst MENU_WIDTH = 200;\nconst ERROR_LIMIT = 5;\nconst DEFAULT_CELL_COLORS = ['white', 'red', 'yellow', 'blue'];\nconst DEFAULT_COLOR_SUBTITLE = 'Background Colors';\nconst MENU_ITEMS_DEFAULT = {\n  insertColumnRight: {\n    text: 'Insert column right',\n    iconSrc: _assets_icons_icon_operation_1_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    handler() {\n      const tableContainer = quill__WEBPACK_IMPORTED_MODULE_0___default().find(this.table);\n      let colIndex = getColToolCellIndexByBoundary(this.columnToolCells, this.boundary, (cellRect, boundary) => {\n        return Math.abs(cellRect.x + cellRect.width - boundary.x1) <= ERROR_LIMIT;\n      }, this.quill.root.parentNode);\n      const newColumn = tableContainer.insertColumn(this.boundary, colIndex, true, this.quill.root.parentNode);\n      this.tableColumnTool.updateToolCells();\n      this.quill.update((quill__WEBPACK_IMPORTED_MODULE_0___default().sources).USER);\n      this.quill.setSelection(this.quill.getIndex(newColumn[0]), 0, (quill__WEBPACK_IMPORTED_MODULE_0___default().sources).SILENT);\n      this.tableSelection.setSelection(newColumn[0].domNode.getBoundingClientRect(), newColumn[0].domNode.getBoundingClientRect());\n    }\n  },\n  insertColumnLeft: {\n    text: 'Insert column left',\n    iconSrc: _assets_icons_icon_operation_2_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    handler() {\n      const tableContainer = quill__WEBPACK_IMPORTED_MODULE_0___default().find(this.table);\n      let colIndex = getColToolCellIndexByBoundary(this.columnToolCells, this.boundary, (cellRect, boundary) => {\n        return Math.abs(cellRect.x - boundary.x) <= ERROR_LIMIT;\n      }, this.quill.root.parentNode);\n      const newColumn = tableContainer.insertColumn(this.boundary, colIndex, false, this.quill.root.parentNode);\n      this.tableColumnTool.updateToolCells();\n      this.quill.update((quill__WEBPACK_IMPORTED_MODULE_0___default().sources).USER);\n      this.quill.setSelection(this.quill.getIndex(newColumn[0]), 0, (quill__WEBPACK_IMPORTED_MODULE_0___default().sources).SILENT);\n      this.tableSelection.setSelection(newColumn[0].domNode.getBoundingClientRect(), newColumn[0].domNode.getBoundingClientRect());\n    }\n  },\n  insertRowUp: {\n    text: 'Insert row up',\n    iconSrc: _assets_icons_icon_operation_3_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    handler() {\n      const tableContainer = quill__WEBPACK_IMPORTED_MODULE_0___default().find(this.table);\n      const affectedCells = tableContainer.insertRow(this.boundary, false, this.quill.root.parentNode);\n      this.quill.update((quill__WEBPACK_IMPORTED_MODULE_0___default().sources).USER);\n      this.quill.setSelection(this.quill.getIndex(affectedCells[0]), 0, (quill__WEBPACK_IMPORTED_MODULE_0___default().sources).SILENT);\n      this.tableSelection.setSelection(affectedCells[0].domNode.getBoundingClientRect(), affectedCells[0].domNode.getBoundingClientRect());\n    }\n  },\n  insertRowDown: {\n    text: 'Insert row down',\n    iconSrc: _assets_icons_icon_operation_4_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    handler() {\n      const tableContainer = quill__WEBPACK_IMPORTED_MODULE_0___default().find(this.table);\n      const affectedCells = tableContainer.insertRow(this.boundary, true, this.quill.root.parentNode);\n      this.quill.update((quill__WEBPACK_IMPORTED_MODULE_0___default().sources).USER);\n      this.quill.setSelection(this.quill.getIndex(affectedCells[0]), 0, (quill__WEBPACK_IMPORTED_MODULE_0___default().sources).SILENT);\n      this.tableSelection.setSelection(affectedCells[0].domNode.getBoundingClientRect(), affectedCells[0].domNode.getBoundingClientRect());\n    }\n  },\n  mergeCells: {\n    text: 'Merge selected cells',\n    iconSrc: _assets_icons_icon_operation_5_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    handler() {\n      const tableContainer = quill__WEBPACK_IMPORTED_MODULE_0___default().find(this.table);\n      // compute merged Cell rowspan, equal to length of selected rows\n      const rowspan = tableContainer.rows().reduce((sum, row) => {\n        let rowRect = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRelativeRect)(row.domNode.getBoundingClientRect(), this.quill.root.parentNode);\n        if (rowRect.y > this.boundary.y - ERROR_LIMIT && rowRect.y + rowRect.height < this.boundary.y + this.boundary.height + ERROR_LIMIT) {\n          sum += 1;\n        }\n        return sum;\n      }, 0);\n\n      // compute merged cell colspan, equal to length of selected cols\n      const colspan = this.columnToolCells.reduce((sum, cell) => {\n        let cellRect = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRelativeRect)(cell.getBoundingClientRect(), this.quill.root.parentNode);\n        if (cellRect.x > this.boundary.x - ERROR_LIMIT && cellRect.x + cellRect.width < this.boundary.x + this.boundary.width + ERROR_LIMIT) {\n          sum += 1;\n        }\n        return sum;\n      }, 0);\n      const mergedCell = tableContainer.mergeCells(this.boundary, this.selectedTds, rowspan, colspan, this.quill.root.parentNode);\n      this.quill.update((quill__WEBPACK_IMPORTED_MODULE_0___default().sources).USER);\n      this.tableSelection.setSelection(mergedCell.domNode.getBoundingClientRect(), mergedCell.domNode.getBoundingClientRect());\n    }\n  },\n  unmergeCells: {\n    text: 'Unmerge cells',\n    iconSrc: _assets_icons_icon_operation_6_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    handler() {\n      const tableContainer = quill__WEBPACK_IMPORTED_MODULE_0___default().find(this.table);\n      tableContainer.unmergeCells(this.selectedTds, this.quill.root.parentNode);\n      this.quill.update((quill__WEBPACK_IMPORTED_MODULE_0___default().sources).USER);\n      this.tableSelection.clearSelection();\n    }\n  },\n  deleteColumn: {\n    text: 'Delete selected columns',\n    iconSrc: _assets_icons_icon_operation_7_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    handler() {\n      const tableContainer = quill__WEBPACK_IMPORTED_MODULE_0___default().find(this.table);\n      let colIndexes = getColToolCellIndexesByBoundary(this.columnToolCells, this.boundary, (cellRect, boundary) => {\n        return cellRect.x + ERROR_LIMIT > boundary.x && cellRect.x + cellRect.width - ERROR_LIMIT < boundary.x1;\n      }, this.quill.root.parentNode);\n      let isDeleteTable = tableContainer.deleteColumns(this.boundary, colIndexes, this.quill.root.parentNode);\n      if (!isDeleteTable) {\n        this.tableColumnTool.updateToolCells();\n        this.quill.update((quill__WEBPACK_IMPORTED_MODULE_0___default().sources).USER);\n        this.tableSelection.clearSelection();\n      }\n    }\n  },\n  deleteRow: {\n    text: 'Delete selected rows',\n    iconSrc: _assets_icons_icon_operation_8_svg__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    handler() {\n      const tableContainer = quill__WEBPACK_IMPORTED_MODULE_0___default().find(this.table);\n      tableContainer.deleteRow(this.boundary, this.quill.root.parentNode);\n      this.quill.update((quill__WEBPACK_IMPORTED_MODULE_0___default().sources).USER);\n      this.tableSelection.clearSelection();\n    }\n  },\n  deleteTable: {\n    text: 'Delete table',\n    iconSrc: _assets_icons_icon_operation_9_svg__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    handler() {\n      const betterTableModule = this.quill.getModule('better-table');\n      const tableContainer = quill__WEBPACK_IMPORTED_MODULE_0___default().find(this.table);\n      betterTableModule.hideTableTools();\n      tableContainer.remove();\n      this.quill.update((quill__WEBPACK_IMPORTED_MODULE_0___default().sources).USER);\n    }\n  }\n};\nclass TableOperationMenu {\n  constructor(params, quill, options) {\n    const betterTableModule = quill.getModule('better-table');\n    this.tableSelection = betterTableModule.tableSelection;\n    this.table = params.table;\n    this.quill = quill;\n    this.options = options;\n    this.menuItems = Object.assign({}, MENU_ITEMS_DEFAULT, options.items);\n    this.width = options.width === undefined ? '${MENU_WIDTH}px' : options.width;\n    this.tableColumnTool = betterTableModule.columnTool;\n    this.boundary = this.tableSelection.boundary;\n    this.selectedTds = this.tableSelection.selectedTds;\n    this.destroyHandler = this.destroy.bind(this);\n    this.columnToolCells = this.tableColumnTool.colToolCells();\n    this.colorSubTitle = options.color && options.color.text ? options.color.text : DEFAULT_COLOR_SUBTITLE;\n    this.cellColors = options.color && options.color.colors ? options.color.colors : DEFAULT_CELL_COLORS;\n    this.menuInitial(params);\n    var display = false;\n    if (options.display) {\n      display = options.display;\n    }\n    if (display) {\n      this.mount();\n      document.addEventListener(\"click\", this.destroyHandler, false);\n    }\n  }\n  insertColumnLeft() {\n    this.menuItems.insertColumnLeft.handler.bind(this)();\n    this.destroy();\n  }\n  insertColumnRight() {\n    this.menuItems.insertColumnRight.handler.bind(this)();\n    this.destroy();\n  }\n  insertRowUp() {\n    this.menuItems.insertRowUp.handler.bind(this)();\n    this.destroy();\n  }\n  insertRowDown() {\n    this.menuItems.insertRowDown.handler.bind(this)();\n    this.destroy();\n  }\n  mergeCells() {\n    this.menuItems.mergeCells.handler.bind(this)();\n    this.destroy();\n  }\n  unmergeCells() {\n    this.menuItems.unmergeCells.handler.bind(this)();\n    this.destroy();\n  }\n  deleteColumn() {\n    this.menuItems.deleteColumn.handler.bind(this)();\n    this.destroy();\n  }\n  deleteRow() {\n    this.menuItems.deleteRow.handler.bind(this)();\n    this.destroy();\n  }\n  deleteTable() {\n    this.menuItems.deleteTable.handler.bind(this)();\n    this.destroy();\n  }\n  setBgColor(color) {\n    const selectedTds = this.tableSelection.selectedTds;\n    if (selectedTds && selectedTds.length > 0) {\n      selectedTds.forEach(tableCell => {\n        tableCell.format('cell-bg', color);\n      });\n    }\n  }\n  mount() {\n    document.body.appendChild(this.domNode);\n    var width = this.domNode.offsetWidth;\n    var height = this.domNode.offsetHeight;\n    var window_width = window.innerWidth;\n    var window_height = window.innerHeight;\n    var x = this.domNode.offsetLeft;\n    var y = this.domNode.offsetTop;\n    var move = false;\n    if (x > window_width - width) {\n      move = true;\n      x = window_width - width;\n    }\n    if (y > window_height - height) {\n      move = true;\n      y = window_height - height;\n    }\n    if (move) {\n      this.domNode.style.left = x + 'px';\n      this.domNode.style.top = y + 'px';\n    }\n  }\n  destroy() {\n    this.domNode.remove();\n    document.removeEventListener(\"click\", this.destroyHandler, false);\n    return null;\n  }\n  static getDefaultMenuItems() {\n    return MENU_ITEMS_DEFAULT;\n  }\n  menuInitial(_ref) {\n    let {\n      table,\n      left,\n      top\n    } = _ref;\n    this.domNode = document.createElement('div');\n    this.domNode.classList.add('qlbt-operation-menu');\n    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.css)(this.domNode, {\n      position: 'absolute',\n      left: `${left}px`,\n      top: `${top}px`,\n      'min-height': `${MENU_MIN_HEIHGT}px`,\n      width: `${this.width}px`\n    });\n    for (let name in this.menuItems) {\n      if (this.menuItems[name]) {\n        if (name.match(/sep_[0-9]+/)) {\n          this.domNode.appendChild(dividingCreator());\n        } else {\n          this.domNode.appendChild(this.menuItemCreator(Object.assign({}, MENU_ITEMS_DEFAULT[name], this.menuItems[name])));\n          if (['insertRowDown', 'unmergeCells'].indexOf(name) > -1) {\n            this.domNode.appendChild(dividingCreator());\n          }\n        }\n      }\n    }\n\n    // if colors option is false, disabled bg color\n    if (this.options.color && this.options.color !== false) {\n      this.domNode.appendChild(dividingCreator());\n      this.domNode.appendChild(subTitleCreator(this.colorSubTitle));\n      this.domNode.appendChild(this.colorsItemCreator(this.cellColors));\n    }\n\n    // create dividing line\n    function dividingCreator() {\n      //const dividing = document.createElement('div')\n      //dividing.classList.add('qlbt-operation-menu-dividing')\n      const dividing = document.createElement('hr');\n      return dividing;\n    }\n\n    // create subtitle for menu\n    function subTitleCreator(title) {\n      const subTitle = document.createElement('div');\n      subTitle.classList.add('qlbt-operation-menu-subtitle');\n      subTitle.innerText = title;\n      return subTitle;\n    }\n  }\n  colorsItemCreator(colors) {\n    const self = this;\n    const node = document.createElement('div');\n    node.classList.add('qlbt-operation-color-picker');\n    colors.forEach(color => {\n      let colorBox = colorBoxCreator(color);\n      node.appendChild(colorBox);\n    });\n    function colorBoxCreator(color) {\n      const box = document.createElement('div');\n      box.classList.add('qlbt-operation-color-picker-item');\n      box.setAttribute('data-color', color);\n      box.style.backgroundColor = color;\n      box.addEventListener('click', function () {\n        const selectedTds = self.tableSelection.selectedTds;\n        if (selectedTds && selectedTds.length > 0) {\n          selectedTds.forEach(tableCell => {\n            tableCell.format('cell-bg', color);\n          });\n        }\n      }, false);\n      return box;\n    }\n    return node;\n  }\n  menuItemCreator(_ref2) {\n    let {\n      text,\n      iconSrc,\n      handler\n    } = _ref2;\n    const node = document.createElement('div');\n    node.classList.add('qlbt-operation-menu-item');\n    const iconSpan = document.createElement('span');\n    iconSpan.classList.add('qlbt-operation-menu-icon');\n    iconSpan.innerHTML = iconSrc;\n    const textSpan = document.createElement('span');\n    textSpan.classList.add('qlbt-operation-menu-text');\n    textSpan.innerText = text;\n    node.appendChild(iconSpan);\n    node.appendChild(textSpan);\n    node.addEventListener('click', handler.bind(this), false);\n    return node;\n  }\n}\nfunction getColToolCellIndexByBoundary(cells, boundary, conditionFn, container) {\n  return cells.reduce((findIndex, cell) => {\n    let cellRect = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRelativeRect)(cell.getBoundingClientRect(), container);\n    if (conditionFn(cellRect, boundary)) {\n      findIndex = cells.indexOf(cell);\n    }\n    return findIndex;\n  }, false);\n}\nfunction getColToolCellIndexesByBoundary(cells, boundary, conditionFn, container) {\n  return cells.reduce((findIndexes, cell) => {\n    let cellRect = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRelativeRect)(cell.getBoundingClientRect(), container);\n    if (conditionFn(cellRect, boundary)) {\n      findIndexes.push(cells.indexOf(cell));\n    }\n    return findIndexes;\n  }, []);\n}\n\n//# sourceURL=webpack://quillBetterTable/./src/modules/table-operation-menu.js?");

/***/ }),

/***/ "./src/modules/table-selection.js":
/*!****************************************!*\
  !*** ./src/modules/table-selection.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TableSelection)\n/* harmony export */ });\n/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill */ \"quill\");\n/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _formats_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formats/table */ \"./src/formats/table.js\");\n\n\n\nconst PRIMARY_COLOR = '#0589f3';\nconst LINE_POSITIONS = ['left', 'right', 'top', 'bottom'];\nconst ERROR_LIMIT = 2;\nclass TableSelection {\n  constructor(table, quill, options) {\n    if (!table) return null;\n    this.table = table;\n    this.quill = quill;\n    this.options = options;\n    this.boundary = {}; // params for selected square\n    this.selectedTds = []; // array for selected table-cells\n    this.dragging = false;\n    this.selectingHandler = this.mouseDownHandler.bind(this);\n    this.clearSelectionHandler = this.clearSelection.bind(this);\n    this.helpLinesInitial();\n    this.quill.root.addEventListener('mousedown', this.selectingHandler, false);\n    this.quill.on('text-change', this.clearSelectionHandler);\n  }\n  helpLinesInitial() {\n    let parent = this.quill.root.parentNode;\n    LINE_POSITIONS.forEach(direction => {\n      this[direction] = document.createElement('div');\n      this[direction].classList.add('qlbt-selection-line');\n      this[direction].classList.add('qlbt-selection-line-' + direction);\n      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.css)(this[direction], {\n        position: 'absolute',\n        display: 'none',\n        'background-color': PRIMARY_COLOR\n      });\n      parent.appendChild(this[direction]);\n    });\n  }\n  mouseDownHandler(e) {\n    if (e.button !== 0 || !e.target.closest(\".quill-better-table\")) return;\n    this.quill.root.addEventListener('mousemove', mouseMoveHandler, false);\n    this.quill.root.addEventListener('mouseup', mouseUpHandler, false);\n    const self = this;\n    const startTd = e.target.closest('td[data-row]');\n    const startTdRect = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRelativeRect)(startTd.getBoundingClientRect(), this.quill.root.parentNode);\n    this.dragging = true;\n    this.boundary = computeBoundaryFromRects(startTdRect, startTdRect);\n    this.correctBoundary();\n    this.selectedTds = this.computeSelectedTds();\n    this.repositionHelpLines();\n    function mouseMoveHandler(e) {\n      if (e.button !== 0 || !e.target.closest(\".quill-better-table\")) return;\n      const endTd = e.target.closest('td[data-row]');\n      const endTdRect = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRelativeRect)(endTd.getBoundingClientRect(), self.quill.root.parentNode);\n      self.boundary = computeBoundaryFromRects(startTdRect, endTdRect);\n      self.correctBoundary();\n      self.selectedTds = self.computeSelectedTds();\n      self.repositionHelpLines();\n\n      // avoid select text in multiple table-cell\n      if (startTd !== endTd) {\n        self.quill.blur();\n      }\n    }\n    function mouseUpHandler(e) {\n      self.quill.root.removeEventListener('mousemove', mouseMoveHandler, false);\n      self.quill.root.removeEventListener('mouseup', mouseUpHandler, false);\n      self.dragging = false;\n    }\n  }\n  correctBoundary() {\n    const tableContainer = quill__WEBPACK_IMPORTED_MODULE_0___default().find(this.table);\n    const tableCells = tableContainer.descendants(_formats_table__WEBPACK_IMPORTED_MODULE_2__.TableCell);\n    tableCells.forEach(tableCell => {\n      let {\n        x,\n        y,\n        width,\n        height\n      } = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRelativeRect)(tableCell.domNode.getBoundingClientRect(), this.quill.root.parentNode);\n      let isCellIntersected = (x + ERROR_LIMIT >= this.boundary.x && x + ERROR_LIMIT <= this.boundary.x1 || x - ERROR_LIMIT + width >= this.boundary.x && x - ERROR_LIMIT + width <= this.boundary.x1) && (y + ERROR_LIMIT >= this.boundary.y && y + ERROR_LIMIT <= this.boundary.y1 || y - ERROR_LIMIT + height >= this.boundary.y && y - ERROR_LIMIT + height <= this.boundary.y1);\n      if (isCellIntersected) {\n        this.boundary = computeBoundaryFromRects(this.boundary, {\n          x,\n          y,\n          width,\n          height\n        });\n      }\n    });\n  }\n  computeSelectedTds() {\n    const tableContainer = quill__WEBPACK_IMPORTED_MODULE_0___default().find(this.table);\n    const tableCells = tableContainer.descendants(_formats_table__WEBPACK_IMPORTED_MODULE_2__.TableCell);\n    return tableCells.reduce((selectedCells, tableCell) => {\n      let {\n        x,\n        y,\n        width,\n        height\n      } = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRelativeRect)(tableCell.domNode.getBoundingClientRect(), this.quill.root.parentNode);\n      let isCellIncluded = x + ERROR_LIMIT >= this.boundary.x && x - ERROR_LIMIT + width <= this.boundary.x1 && y + ERROR_LIMIT >= this.boundary.y && y - ERROR_LIMIT + height <= this.boundary.y1;\n      if (isCellIncluded) {\n        selectedCells.push(tableCell);\n      }\n      return selectedCells;\n    }, []);\n  }\n  repositionHelpLines() {\n    const tableViewScrollLeft = this.table.parentNode.scrollLeft;\n    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.css)(this.left, {\n      display: 'block',\n      left: `${this.boundary.x - tableViewScrollLeft - 1}px`,\n      top: `${this.boundary.y}px`,\n      height: `${this.boundary.height + 1}px`,\n      width: '1px'\n    });\n    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.css)(this.right, {\n      display: 'block',\n      left: `${this.boundary.x1 - tableViewScrollLeft}px`,\n      top: `${this.boundary.y}px`,\n      height: `${this.boundary.height + 1}px`,\n      width: '1px'\n    });\n    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.css)(this.top, {\n      display: 'block',\n      left: `${this.boundary.x - 1 - tableViewScrollLeft}px`,\n      top: `${this.boundary.y}px`,\n      width: `${this.boundary.width + 1}px`,\n      height: '1px'\n    });\n    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.css)(this.bottom, {\n      display: 'block',\n      left: `${this.boundary.x - 1 - tableViewScrollLeft}px`,\n      top: `${this.boundary.y1 + 1}px`,\n      width: `${this.boundary.width + 1}px`,\n      height: '1px'\n    });\n  }\n\n  // based on selectedTds compute positions of help lines\n  // It is useful when selectedTds are not changed\n  refreshHelpLinesPosition() {\n    const startRect = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRelativeRect)(this.selectedTds[0].domNode.getBoundingClientRect(), this.quill.root.parentNode);\n    const endRect = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRelativeRect)(this.selectedTds[this.selectedTds.length - 1].domNode.getBoundingClientRect(), this.quill.root.parentNode);\n    this.boundary = computeBoundaryFromRects(startRect, endRect);\n    this.repositionHelpLines();\n  }\n  destroy() {\n    LINE_POSITIONS.forEach(direction => {\n      this[direction].remove();\n      this[direction] = null;\n    });\n    this.quill.root.removeEventListener('mousedown', this.selectingHandler, false);\n    this.quill.off('text-change', this.clearSelectionHandler);\n    return null;\n  }\n  setSelection(startRect, endRect) {\n    this.boundary = computeBoundaryFromRects((0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRelativeRect)(startRect, this.quill.root.parentNode), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRelativeRect)(endRect, this.quill.root.parentNode));\n    this.correctBoundary();\n    this.selectedTds = this.computeSelectedTds();\n    this.repositionHelpLines();\n  }\n  clearSelection() {\n    this.boundary = {};\n    this.selectedTds = [];\n    LINE_POSITIONS.forEach(direction => {\n      this[direction] && (0,_utils__WEBPACK_IMPORTED_MODULE_1__.css)(this[direction], {\n        display: 'none'\n      });\n    });\n  }\n}\nfunction computeBoundaryFromRects(startRect, endRect) {\n  let x = Math.min(startRect.x, endRect.x, startRect.x + startRect.width - 1, endRect.x + endRect.width - 1);\n  let x1 = Math.max(startRect.x, endRect.x, startRect.x + startRect.width - 1, endRect.x + endRect.width - 1);\n  let y = Math.min(startRect.y, endRect.y, startRect.y + startRect.height - 1, endRect.y + endRect.height - 1);\n  let y1 = Math.max(startRect.y, endRect.y, startRect.y + startRect.height - 1, endRect.y + endRect.height - 1);\n  let width = x1 - x;\n  let height = y1 - y;\n  return {\n    x,\n    x1,\n    y,\n    y1,\n    width,\n    height\n  };\n}\n\n//# sourceURL=webpack://quillBetterTable/./src/modules/table-selection.js?");

/***/ }),

/***/ "./src/quill-better-table.js":
/*!***********************************!*\
  !*** ./src/quill-better-table.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill */ \"quill\");\n/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_table_column_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/table-column-tool */ \"./src/modules/table-column-tool.js\");\n/* harmony import */ var _modules_table_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/table-selection */ \"./src/modules/table-selection.js\");\n/* harmony import */ var _modules_table_operation_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/table-operation-menu */ \"./src/modules/table-operation-menu.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/index */ \"./src/utils/index.js\");\n/* harmony import */ var _utils_node_matchers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/node-matchers */ \"./src/utils/node-matchers.js\");\n/* harmony import */ var _formats_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formats/table */ \"./src/formats/table.js\");\n\n\n\n\n\n\n// import table node matchers\n\n\nconst Module = quill__WEBPACK_IMPORTED_MODULE_0___default()[\"import\"]('core/module');\nconst Delta = quill__WEBPACK_IMPORTED_MODULE_0___default()[\"import\"]('delta');\n\nclass BetterTable extends Module {\n  static register() {\n    quill__WEBPACK_IMPORTED_MODULE_0___default().register(_formats_table__WEBPACK_IMPORTED_MODULE_6__.TableCol, true);\n    quill__WEBPACK_IMPORTED_MODULE_0___default().register(_formats_table__WEBPACK_IMPORTED_MODULE_6__.TableColGroup, true);\n    quill__WEBPACK_IMPORTED_MODULE_0___default().register(_formats_table__WEBPACK_IMPORTED_MODULE_6__.TableCellLine, true);\n    quill__WEBPACK_IMPORTED_MODULE_0___default().register(_formats_table__WEBPACK_IMPORTED_MODULE_6__.TableCell, true);\n    quill__WEBPACK_IMPORTED_MODULE_0___default().register(_formats_table__WEBPACK_IMPORTED_MODULE_6__.TableRow, true);\n    quill__WEBPACK_IMPORTED_MODULE_0___default().register(_formats_table__WEBPACK_IMPORTED_MODULE_6__.TableBody, true);\n    quill__WEBPACK_IMPORTED_MODULE_0___default().register(_formats_table__WEBPACK_IMPORTED_MODULE_6__.TableContainer, true);\n    quill__WEBPACK_IMPORTED_MODULE_0___default().register(_formats_table__WEBPACK_IMPORTED_MODULE_6__.TableViewWrapper, true);\n    quill__WEBPACK_IMPORTED_MODULE_0___default().register(_formats_table__WEBPACK_IMPORTED_MODULE_6__.TableViewWrapper, true);\n    // register customized Header，overwriting quill built-in Header\n    // Quill.register('formats/header', Header, true);\n  }\n\n  constructor(quill, options) {\n    super(quill, options);\n    this.hd_composed_paths = [];\n    this.hd_quill = quill;\n    this.hd_options = options;\n    this.hd_table_node = null;\n    this.hd_cell_node = null;\n    this.hd_row_node = null;\n    this.select_table = function (evt, use_move) {\n      // bugfix: evt.path is undefined in Safari, FF, Micro Edge\n      const path = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getEventComposedPath)(evt);\n      if (!path || path.length <= 0) return;\n      const tableNode = path.filter(node => {\n        return node.tagName && node.tagName.toUpperCase() === 'TABLE' && node.classList.contains('quill-better-table');\n      })[0];\n      const rowNode = path.filter(node => {\n        return node.tagName && node.tagName.toUpperCase() === 'TR' && node.getAttribute('data-row');\n      })[0];\n      const cellNode = path.filter(node => {\n        return node.tagName && node.tagName.toUpperCase() === 'TD' && node.getAttribute('data-row');\n      })[0];\n      this.hd_table_node = tableNode;\n      this.hd_row_node = rowNode;\n      this.hd_cell_node = cellNode;\n      this.hd_composed_path = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getEventComposedPath)(evt);\n      if (tableNode) {\n        this.showCurrentCell(tableNode, cellNode);\n        // current table clicked or hovered\n        if (this.table === tableNode) return;\n        // other table clicked or hovered\n        if (this.table) this.hideTableTools();\n        this.showTableTools(tableNode, quill, options);\n      } else if (this.table) {\n        // other clicked or hovered\n        if (use_move) {\n          // if we are moving and not clicking and we're not far enough away from the table\n          // we don't want to hide the tools.\n          var clientRect = this.table.getBoundingClientRect();\n          var x = evt.clientX;\n          var y = evt.clientY;\n          var left = clientRect.left - 10;\n          var top = clientRect.top - 10;\n          var right = clientRect.right + 10;\n          var bottom = clientRect.bottom + 10;\n          if (x >= left && x <= right && y >= top && y <= bottom) {\n            return;\n          }\n        }\n        this.hideTableTools();\n        this.showCurrentCell(this.table, null);\n      }\n    }.bind(this);\n\n    // handle move on quill-better-table\n    this.quill.root.addEventListener('mousemove', function (evt) {\n      this.select_table(evt, true);\n    }.bind(this), false);\n\n    // handle click on quill-better-table\n    this.quill.root.addEventListener('click', function (evt) {\n      this.select_table(evt, false);\n    }.bind(this), false);\n\n    // handle right click on quill-better-table\n    if (!options.operationMenu.disabled) {\n      this.quill.root.addEventListener('contextmenu', evt => {\n        if (!this.table) return true;\n        evt.preventDefault();\n        this.tableOperationMenu = this.condTableOperationMenu(evt);\n      }, false);\n    }\n\n    // add keyboard binding：Backspace\n    // prevent user hits backspace to delete table cell\n    const KeyBoard = quill.getModule('keyboard');\n    quill.keyboard.addBinding({\n      key: 'Backspace'\n    }, {}, function (range, context) {\n      if (range.index === 0 || this.quill.getLength() <= 1) return true;\n      const [line] = this.quill.getLine(range.index);\n      if (context.offset === 0) {\n        const [prev] = this.quill.getLine(range.index - 1);\n        if (prev != null) {\n          if (prev.statics.blotName === 'table-cell-line' && line.statics.blotName !== 'table-cell-line') return false;\n        }\n      }\n      return true;\n    });\n    // since only one matched bindings callback will excute.\n    // expected my binding callback excute first\n    // I changed the order of binding callbacks\n    let thisBinding = quill.keyboard.bindings['Backspace'].pop();\n    quill.keyboard.bindings['Backspace'].splice(0, 1, thisBinding);\n\n    // add Matchers to match and render quill-better-table for initialization\n    // or pasting\n    quill.clipboard.addMatcher('td', _utils_node_matchers__WEBPACK_IMPORTED_MODULE_5__.matchTableCell);\n    quill.clipboard.addMatcher('th', _utils_node_matchers__WEBPACK_IMPORTED_MODULE_5__.matchTableHeader);\n    quill.clipboard.addMatcher('table', _utils_node_matchers__WEBPACK_IMPORTED_MODULE_5__.matchTable);\n    // quill.clipboard.addMatcher('h1, h2, h3, h4, h5, h6', matchHeader)\n\n    // remove matcher for tr tag\n    quill.clipboard.matchers = quill.clipboard.matchers.filter(matcher => {\n      return matcher[0] !== 'tr';\n    });\n  }\n  condTableOperationMenu(evt) {\n    let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n    let use_hd_composed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n    // bugfix: evt.path is undefined in Safari, FF, Micro Edge\n    var path;\n    if (use_hd_composed) {\n      path = this.hd_composed_path;\n    } else {\n      path = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getEventComposedPath)(evt);\n    }\n    if (!path || path.length <= 0) return;\n    const tableNode = path.filter(node => {\n      return node.tagName && node.tagName.toUpperCase() === 'TABLE' && node.classList.contains('quill-better-table');\n    })[0];\n    const rowNode = path.filter(node => {\n      return node.tagName && node.tagName.toUpperCase() === 'TR' && node.getAttribute('data-row');\n    })[0];\n    const cellNode = path.filter(node => {\n      return node.tagName && node.tagName.toUpperCase() === 'TD' && node.getAttribute('data-row');\n    })[0];\n    if (!tableNode || !rowNode || !cellNode) {\n      return;\n    }\n    let isTargetCellSelected = this.tableSelection.selectedTds.map(tableCell => tableCell.domNode).includes(cellNode);\n    if (this.tableSelection.selectedTds.length <= 0 || !isTargetCellSelected) {\n      if (cellNode !== undefined) {\n        this.tableSelection.setSelection(cellNode.getBoundingClientRect(), cellNode.getBoundingClientRect());\n      }\n    }\n    var options = this.hd_options;\n    var quill = this.hd_quill;\n    if (this.tableOperationMenu) this.tableOperationMenu = this.tableOperationMenu.destroy();\n    if (tableNode) {\n      options.operationMenu.display = display;\n      var tableOperationMenu = new _modules_table_operation_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n        table: tableNode,\n        row: rowNode,\n        cell: cellNode,\n        left: evt.pageX,\n        top: evt.pageY\n      }, quill, options.operationMenu);\n      return tableOperationMenu;\n    }\n    return null;\n  }\n  getTable() {\n    let range = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.quill.getSelection();\n    if (range == null) return [null, null, null, -1];\n    const [cellLine, offset] = this.quill.getLine(range.index);\n    if (cellLine == null || cellLine.statics.blotName !== _formats_table__WEBPACK_IMPORTED_MODULE_6__.TableCellLine.blotName) {\n      return [null, null, null, -1];\n    }\n    const cell = cellLine.tableCell();\n    const row = cell.row();\n    const table = row.table();\n    return [table, row, cell, offset];\n  }\n  isTable() {\n    let range = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.quill.getSelection();\n    if (range === null) {\n      return false;\n    }\n\n    // Do we have the table itself selected?\n    // If so, there may be not any text selected. \n\n    var retval = {\n      tableSelected: false,\n      tableCells: 0,\n      otherBlots: 0\n    };\n    if (this.tableSelection) {\n      retval.tableSelected = true;\n      retval.tableCells = -1;\n      retval.otherBlots = -1;\n      return retval;\n    }\n\n    // Next check if we have some table cell in the\n    // selected text. \n    var blots;\n    if (range.length === 0) {\n      blots = [this.quill.getLine(range.index)[0]];\n    } else {\n      blots = this.quill.getLines(range.index, range.length);\n    }\n    var i, N;\n    for (i = 0, N = blots.length; i < N; i++) {\n      var blot = blots[i];\n      if (blot !== null) {\n        if (blot.statics.blotName === _formats_table__WEBPACK_IMPORTED_MODULE_6__.TableCellLine.blotName) {\n          retval.tableCells++;\n        } else {\n          retval.otherBlots++;\n        }\n      }\n    }\n    return retval;\n  }\n  insertColumnLeft(evt) {\n    var op_menu = this.condTableOperationMenu(evt, false, true);\n    if (op_menu) {\n      op_menu.insertColumnLeft();\n    }\n  }\n  insertColumnRight(evt) {\n    var op_menu = this.condTableOperationMenu(evt, false, true);\n    if (op_menu) {\n      op_menu.insertColumnRight();\n    }\n  }\n  insertRowUp(evt) {\n    var op_menu = this.condTableOperationMenu(evt, false, true);\n    if (op_menu) {\n      op_menu.insertRowUp();\n    }\n  }\n  insertRowDown(evt) {\n    var op_menu = this.condTableOperationMenu(evt, false, true);\n    if (op_menu) {\n      op_menu.insertRowDown();\n    }\n  }\n  deleteColumn(evt) {\n    var op_menu = this.condTableOperationMenu(evt, false, true);\n    if (op_menu) {\n      op_menu.deleteColumn();\n    }\n  }\n  deleteRow(evt) {\n    var op_menu = this.condTableOperationMenu(evt, false, true);\n    if (op_menu) {\n      op_menu.deleteRow();\n    }\n  }\n  deleteTable(evt) {\n    var op_menu = this.condTableOperationMenu(evt, false, true);\n    if (op_menu) {\n      op_menu.deleteTable();\n    }\n  }\n  mergeCells(evt) {\n    var op_menu = this.condTableOperationMenu(evt, false, true);\n    if (op_menu) {\n      op_menu.mergeCells();\n    }\n  }\n  splitCell(evt) {\n    var op_menu = this.condTableOperationMenu(evt, false, true);\n    if (op_menu) {\n      op_menu.splitCell();\n    }\n  }\n  setBgColor(evt, color) {\n    var op_menu = this.condTableOperationMenu(evt, false, true);\n    if (op_menu) {\n      op_menu.setBgColor(color);\n    }\n  }\n  insertTable(rows, columns) {\n    const range = this.quill.getSelection(true);\n    if (range == null) return;\n    let currentBlot = this.quill.getLeaf(range.index)[0];\n    let delta = new Delta().retain(range.index);\n    if (isInTableCell(currentBlot)) {\n      console.warn(`Can not insert table into a table cell.`);\n      return;\n    }\n    delta.insert('\\n');\n    // insert table column\n    delta = new Array(columns).fill('\\n').reduce((memo, text) => {\n      memo.insert(text, {\n        'table-col': true\n      });\n      return memo;\n    }, delta);\n    // insert table cell line with empty line\n    delta = new Array(rows).fill(0).reduce(memo => {\n      let tableRowId = (0,_formats_table__WEBPACK_IMPORTED_MODULE_6__.rowId)();\n      return new Array(columns).fill('\\n').reduce((memo, text) => {\n        memo.insert(text, {\n          'table-cell-line': {\n            row: tableRowId,\n            cell: (0,_formats_table__WEBPACK_IMPORTED_MODULE_6__.cellId)()\n          }\n        });\n        return memo;\n      }, memo);\n    }, delta);\n    this.quill.updateContents(delta, (quill__WEBPACK_IMPORTED_MODULE_0___default().sources).USER);\n    this.quill.setSelection(range.index + columns + 1, (quill__WEBPACK_IMPORTED_MODULE_0___default().sources).API);\n  }\n  showTableTools(table, quill, options) {\n    this.table = table;\n    this.columnTool = new _modules_table_column_tool__WEBPACK_IMPORTED_MODULE_1__[\"default\"](table, quill, options);\n    this.tableSelection = new _modules_table_selection__WEBPACK_IMPORTED_MODULE_2__[\"default\"](table, quill, options);\n  }\n  hideTableTools() {\n    this.columnTool && this.columnTool.destroy();\n    this.tableSelection && this.tableSelection.destroy();\n    this.tableOperationMenu && this.tableOperationMenu.destroy();\n    this.columnTool = null;\n    this.tableSelection = null;\n    this.tableOperationMenu = null;\n    this.table = null;\n  }\n  showCurrentCell(table, cell) {\n    if (this.shown_cell) {\n      if (this.shown_cell !== cell) {\n        this.shown_cell.style['border'] = this.prev_border_style;\n      }\n    }\n    if (cell) {\n      if (this.shown_cell !== cell) {\n        this.prev_border_style = cell.style['border'];\n        cell.style['border'] = '1px solid #17b017';\n        this.shown_cell = cell;\n      }\n    } else {\n      this.shown_cell = null;\n      this.prev_border_style = '';\n    }\n  }\n}\nBetterTable.keyboardBindings = {\n  'table-cell-line backspace': {\n    key: 'Backspace',\n    format: ['table-cell-line'],\n    collapsed: true,\n    offset: 0,\n    handler(range, context) {\n      const [line, offset] = this.quill.getLine(range.index);\n      if (!line.prev || line.prev.statics.blotName !== 'table-cell-line') {\n        return false;\n      }\n      return true;\n    }\n  },\n  'table-cell-line delete': {\n    key: 'Delete',\n    format: ['table-cell-line'],\n    collapsed: true,\n    suffix: /^$/,\n    handler() {}\n  },\n  'table-cell-line enter': {\n    key: 'Enter',\n    shiftKey: null,\n    format: ['table-cell-line'],\n    handler(range, context) {\n      // bugfix: a unexpected new line inserted when user compositionend with hitting Enter\n      if (this.quill.selection && this.quill.selection.composing) return;\n      const Scope = (quill__WEBPACK_IMPORTED_MODULE_0___default().imports).parchment.Scope;\n      if (range.length > 0) {\n        this.quill.scroll.deleteAt(range.index, range.length); // So we do not trigger text-change\n      }\n\n      const lineFormats = Object.keys(context.format).reduce((formats, format) => {\n        if (this.quill.scroll.query(format, Scope.BLOCK) && !Array.isArray(context.format[format])) {\n          formats[format] = context.format[format];\n        }\n        return formats;\n      }, {});\n      // insert new cellLine with lineFormats\n      this.quill.insertText(range.index, '\\n', lineFormats['table-cell-line'], (quill__WEBPACK_IMPORTED_MODULE_0___default().sources).USER);\n      // Earlier scroll.deleteAt might have messed up our selection,\n      // so insertText's built in selection preservation is not reliable\n      this.quill.setSelection(range.index + 1, (quill__WEBPACK_IMPORTED_MODULE_0___default().sources).SILENT);\n      this.quill.focus();\n      Object.keys(context.format).forEach(name => {\n        if (lineFormats[name] != null) return;\n        if (Array.isArray(context.format[name])) return;\n        if (name === 'link') return;\n        this.quill.format(name, context.format[name], (quill__WEBPACK_IMPORTED_MODULE_0___default().sources).USER);\n      });\n    }\n  },\n  'table-cell-line up': makeTableArrowHandler(true),\n  'table-cell-line down': makeTableArrowHandler(false),\n  'down-to-table': {\n    key: 'ArrowDown',\n    collapsed: true,\n    handler(range, context) {\n      const target = context.line.next;\n      if (target && target.statics.blotName === 'table-view') {\n        const targetCell = target.table().rows()[0].children.head;\n        const targetLine = targetCell.children.head;\n        this.quill.setSelection(targetLine.offset(this.quill.scroll), 0, (quill__WEBPACK_IMPORTED_MODULE_0___default().sources).USER);\n        return false;\n      }\n      return true;\n    }\n  },\n  'up-to-table': {\n    key: 'ArrowUp',\n    collapsed: true,\n    handler(range, context) {\n      const target = context.line.prev;\n      if (target && target.statics.blotName === 'table-view') {\n        const rows = target.table().rows();\n        const targetCell = rows[rows.length - 1].children.head;\n        const targetLine = targetCell.children.head;\n        this.quill.setSelection(targetLine.offset(this.quill.scroll), 0, (quill__WEBPACK_IMPORTED_MODULE_0___default().sources).USER);\n        return false;\n      }\n      return true;\n    }\n  }\n};\nfunction makeTableArrowHandler(up) {\n  return {\n    key: up ? 'ArrowUp' : 'ArrowDown',\n    collapsed: true,\n    format: ['table-cell-line'],\n    handler(range, context) {\n      // TODO move to table module\n      const key = up ? 'prev' : 'next';\n      const targetLine = context.line[key];\n      if (targetLine != null) return true;\n      const cell = context.line.parent;\n      const targetRow = cell.parent[key];\n      if (targetRow != null && targetRow.statics.blotName === 'table-row') {\n        let targetCell = targetRow.children.head;\n        let totalColspanOfTargetCell = parseInt(targetCell.formats()['colspan'], 10);\n        let cur = cell;\n        let totalColspanOfCur = parseInt(cur.formats()['colspan'], 10);\n\n        // get targetCell above current cell depends on colspan\n        while (cur.prev != null) {\n          cur = cur.prev;\n          totalColspanOfCur += parseInt(cur.formats()['colspan'], 10);\n        }\n        while (targetCell.next != null && totalColspanOfTargetCell < totalColspanOfCur) {\n          targetCell = targetCell.next;\n          totalColspanOfTargetCell += parseInt(targetCell.formats()['colspan'], 10);\n        }\n        const index = targetCell.offset(this.quill.scroll);\n        this.quill.setSelection(index, 0, (quill__WEBPACK_IMPORTED_MODULE_0___default().sources).USER);\n      } else {\n        const targetLine = cell.table().parent[key];\n        if (targetLine != null) {\n          if (up) {\n            this.quill.setSelection(targetLine.offset(this.quill.scroll) + targetLine.length() - 1, 0, (quill__WEBPACK_IMPORTED_MODULE_0___default().sources).USER);\n          } else {\n            this.quill.setSelection(targetLine.offset(this.quill.scroll), 0, (quill__WEBPACK_IMPORTED_MODULE_0___default().sources).USER);\n          }\n        }\n      }\n      return false;\n    }\n  };\n}\nfunction isTableCell(blot) {\n  return blot.statics.blotName === _formats_table__WEBPACK_IMPORTED_MODULE_6__.TableCell.blotName;\n}\nfunction isInTableCell(current) {\n  return current && current.parent ? isTableCell(current.parent) ? true : isInTableCell(current.parent) : false;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BetterTable);\n\n//# sourceURL=webpack://quillBetterTable/./src/quill-better-table.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   _omit: () => (/* binding */ _omit),\n/* harmony export */   convertToHex: () => (/* binding */ convertToHex),\n/* harmony export */   css: () => (/* binding */ css),\n/* harmony export */   getEventComposedPath: () => (/* binding */ getEventComposedPath),\n/* harmony export */   getRelativeRect: () => (/* binding */ getRelativeRect)\n/* harmony export */ });\nfunction css(domNode, rules) {\n  if (typeof rules === 'object') {\n    for (let prop in rules) {\n      domNode.style[prop] = rules[prop];\n    }\n  }\n}\n\n/**\n * getRelativeRect\n * @param  {Object} targetRect  rect data for target element\n * @param  {Element} container  container element\n * @return {Object}             an object with rect data\n */\nfunction getRelativeRect(targetRect, container) {\n  let containerRect = container.getBoundingClientRect();\n  return {\n    x: targetRect.x - containerRect.x - container.scrollLeft,\n    y: targetRect.y - containerRect.y - container.scrollTop,\n    x1: targetRect.x - containerRect.x - container.scrollLeft + targetRect.width,\n    y1: targetRect.y - containerRect.y - container.scrollTop + targetRect.height,\n    width: targetRect.width,\n    height: targetRect.height\n  };\n}\n\n/**\n * _omit\n * @param  {Object} obj         target Object\n * @param  {Array} uselessKeys  keys of removed properties\n * @return {Object}             new Object without useless properties\n */\nfunction _omit(obj, uselessKeys) {\n  return obj && Object.keys(obj).reduce((acc, key) => {\n    return uselessKeys.includes(key) ? acc : Object.assign({}, acc, {\n      [key]: obj[key]\n    });\n  }, {});\n}\n\n/**\n * getEventComposedPath\n *  compatibility fixed for Event.path/Event.composedPath\n *  Event.path is only for chrome/opera\n *  Event.composedPath is for Safari, FF\n *  Neither for Micro Edge\n * @param {Event} evt\n * @return {Array} an array of event.path\n */\nfunction getEventComposedPath(evt) {\n  let path;\n  // chrome, opera, safari, firefox\n  path = evt.path || evt.composedPath && evt.composedPath();\n\n  // other: edge\n  if (path == undefined && evt.target) {\n    path = [];\n    let target = evt.target;\n    path.push(target);\n    while (target && target.parentNode) {\n      target = target.parentNode;\n      path.push(target);\n    }\n  }\n  return path;\n}\nfunction convertToHex(rgb) {\n  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;\n  // if rgb\n  if (/^(rgb|RGB)/.test(rgb)) {\n    var color = rgb.toString().match(/\\d+/g);\n    var hex = \"#\";\n    for (var i = 0; i < 3; i++) {\n      hex += (\"0\" + Number(color[i]).toString(16)).slice(-2);\n    }\n    return hex;\n  } else if (reg.test(rgb)) {\n    var aNum = rgb.replace(/#/, \"\").split(\"\");\n    if (aNum.length === 6) {\n      return rgb;\n    } else if (aNum.length === 3) {\n      var numHex = \"#\";\n      for (var i = 0; i < aNum.length; i += 1) {\n        numHex += aNum[i] + aNum[i];\n      }\n      return numHex;\n    }\n  }\n  return rgb;\n}\n\n//# sourceURL=webpack://quillBetterTable/./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/node-matchers.js":
/*!************************************!*\
  !*** ./src/utils/node-matchers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   matchTable: () => (/* binding */ matchTable),\n/* harmony export */   matchTableCell: () => (/* binding */ matchTableCell),\n/* harmony export */   matchTableHeader: () => (/* binding */ matchTableHeader)\n/* harmony export */ });\n/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill */ \"quill\");\n/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/utils/index.js\");\n\n\nconst Delta = quill__WEBPACK_IMPORTED_MODULE_0___default()[\"import\"]('delta');\n\n// rebuild delta\nfunction matchTableCell(node, delta, scroll) {\n  const row = node.parentNode;\n  const table = row.parentNode.tagName === 'TABLE' ? row.parentNode : row.parentNode.parentNode;\n  const rows = Array.from(table.querySelectorAll('tr'));\n  const cells = Array.from(row.querySelectorAll('td'));\n  const rowId = rows.indexOf(row) + 1;\n  const cellId = cells.indexOf(node) + 1;\n  const colspan = node.getAttribute('colspan') || false;\n  const rowspan = node.getAttribute('rowspan') || false;\n  const cellBg = node.getAttribute('data-cell-bg') || node.style.backgroundColor; // The td from external table has no 'data-cell-bg' \n\n  // bugfix: empty table cells copied from other place will be removed unexpectedly\n  if (delta.length() === 0) {\n    delta = new Delta().insert('\\n', {\n      'table-cell-line': {\n        row: rowId,\n        cell: cellId,\n        rowspan,\n        colspan\n      }\n    });\n    return delta;\n  }\n  delta = delta.reduce((newDelta, op) => {\n    if (op.insert && typeof op.insert === 'string') {\n      const lines = [];\n      let insertStr = op.insert;\n      let start = 0;\n      for (let i = 0; i < op.insert.length; i++) {\n        if (insertStr.charAt(i) === '\\n') {\n          if (i === 0) {\n            lines.push('\\n');\n          } else {\n            lines.push(insertStr.substring(start, i));\n            lines.push('\\n');\n          }\n          start = i + 1;\n        }\n      }\n      const tailStr = insertStr.substring(start);\n      if (tailStr) lines.push(tailStr);\n      lines.forEach(text => {\n        text === '\\n' ? newDelta.insert('\\n', op.attributes) : newDelta.insert(text, (0,_index__WEBPACK_IMPORTED_MODULE_1__._omit)(op.attributes, ['table', 'table-cell-line']));\n      });\n    } else {\n      newDelta.insert(op.insert, op.attributes);\n    }\n    return newDelta;\n  }, new Delta());\n  return delta.reduce((newDelta, op) => {\n    if (op.insert && typeof op.insert === 'string' && op.insert.startsWith('\\n')) {\n      newDelta.insert(op.insert, Object.assign({}, Object.assign({}, {\n        row: rowId\n      }, op.attributes.table), {\n        'table-cell-line': {\n          row: rowId,\n          cell: cellId,\n          rowspan,\n          colspan,\n          'cell-bg': cellBg\n        }\n      }, (0,_index__WEBPACK_IMPORTED_MODULE_1__._omit)(op.attributes, ['table'])));\n    } else {\n      // bugfix: remove background attr from the delta of table cell\n      //         to prevent unexcepted background attr append.\n      if (op.attributes && op.attributes.background && op.attributes.background === (0,_index__WEBPACK_IMPORTED_MODULE_1__.convertToHex)(cellBg)) {\n        newDelta.insert(op.insert, Object.assign({}, (0,_index__WEBPACK_IMPORTED_MODULE_1__._omit)(op.attributes, ['table', 'table-cell-line', 'background'])));\n      } else {\n        newDelta.insert(op.insert, Object.assign({}, (0,_index__WEBPACK_IMPORTED_MODULE_1__._omit)(op.attributes, ['table', 'table-cell-line'])));\n      }\n    }\n    return newDelta;\n  }, new Delta());\n}\n\n// replace th tag with td tag\nfunction matchTableHeader(node, delta, scroll) {\n  const row = node.parentNode;\n  const table = row.parentNode.tagName === 'TABLE' ? row.parentNode : row.parentNode.parentNode;\n  const rows = Array.from(table.querySelectorAll('tr'));\n  const cells = Array.from(row.querySelectorAll('th'));\n  const rowId = rows.indexOf(row) + 1;\n  const cellId = cells.indexOf(node) + 1;\n  const colspan = node.getAttribute('colspan') || false;\n  const rowspan = node.getAttribute('rowspan') || false;\n\n  // bugfix: empty table cells copied from other place will be removed unexpectedly\n  if (delta.length() === 0) {\n    delta = new Delta().insert('\\n', {\n      'table-cell-line': {\n        row: rowId,\n        cell: cellId,\n        rowspan,\n        colspan\n      }\n    });\n    return delta;\n  }\n  delta = delta.reduce((newDelta, op) => {\n    if (op.insert && typeof op.insert === 'string') {\n      const lines = [];\n      let insertStr = op.insert;\n      let start = 0;\n      for (let i = 0; i < op.insert.length; i++) {\n        if (insertStr.charAt(i) === '\\n') {\n          if (i === 0) {\n            lines.push('\\n');\n          } else {\n            lines.push(insertStr.substring(start, i));\n            lines.push('\\n');\n          }\n          start = i + 1;\n        }\n      }\n      const tailStr = insertStr.substring(start);\n      if (tailStr) lines.push(tailStr);\n\n      // bugfix: no '\\n' in op.insert, push a '\\n' to lines\n      if (lines.indexOf('\\n') < 0) {\n        lines.push('\\n');\n      }\n      lines.forEach(text => {\n        text === '\\n' ? newDelta.insert('\\n', {\n          'table-cell-line': {\n            row: rowId,\n            cell: cellId,\n            rowspan,\n            colspan\n          }\n        }) : newDelta.insert(text, op.attributes);\n      });\n    } else {\n      newDelta.insert(op.insert, op.attributes);\n    }\n    return newDelta;\n  }, new Delta());\n  return delta.reduce((newDelta, op) => {\n    if (op.insert && typeof op.insert === 'string' && op.insert.startsWith('\\n')) {\n      newDelta.insert(op.insert, Object.assign({}, {\n        'table-cell-line': {\n          row: rowId,\n          cell: cellId,\n          rowspan,\n          colspan\n        }\n      }));\n    } else {\n      newDelta.insert(op.insert, Object.assign({}, (0,_index__WEBPACK_IMPORTED_MODULE_1__._omit)(op.attributes, ['table', 'table-cell-line'])));\n    }\n    return newDelta;\n  }, new Delta());\n}\n\n// supplement colgroup and col\nfunction matchTable(node, delta, scroll) {\n  let newColDelta = new Delta();\n  const topRow = node.querySelector('tr');\n\n  // bugfix: empty table will return empty delta\n  if (topRow === null) return newColDelta;\n  const cellsInTopRow = Array.from(topRow.querySelectorAll('td')).concat(Array.from(topRow.querySelectorAll('th')));\n  const maxCellsNumber = cellsInTopRow.reduce((sum, cell) => {\n    const cellColspan = cell.getAttribute('colspan') || 1;\n    sum = sum + parseInt(cellColspan, 10);\n    return sum;\n  }, 0);\n  const colsNumber = node.querySelectorAll('col').length;\n\n  // issue #2\n  // bugfix: the table copied from Excel had some default col tags missing\n  //         add missing col tags\n  if (colsNumber === maxCellsNumber) {\n    return delta;\n  } else {\n    for (let i = 0; i < maxCellsNumber - colsNumber; i++) {\n      newColDelta.insert('\\n', {\n        'table-col': true\n      });\n    }\n    if (colsNumber === 0) return newColDelta.concat(delta);\n    let lastNumber = 0;\n    return delta.reduce((finalDelta, op) => {\n      finalDelta.insert(op.insert, op.attributes);\n      if (op.attributes && op.attributes['table-col']) {\n        lastNumber += op.insert.length;\n        if (lastNumber === colsNumber) {\n          finalDelta = finalDelta.concat(newColDelta);\n        }\n      }\n      return finalDelta;\n    }, new Delta());\n  }\n}\n\n//# sourceURL=webpack://quillBetterTable/./src/utils/node-matchers.js?");

/***/ }),

/***/ "./src/assets/icons/icon_operation_1.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/icon_operation_1.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<?xml version=\\\"1.0\\\" standalone=\\\"no\\\"?><!DOCTYPE svg PUBLIC \\\"-//W3C//DTD SVG 1.1//EN\\\" \\\"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\\\"><svg class=\\\"icon\\\" width=\\\"20px\\\" height=\\\"20px\\\" viewBox=\\\"0 0 1024 1024\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path fill=\\\"#595959\\\" d=\\\"M73.142857 336.64h526.628572v43.885714H73.142857zM73.142857 643.657143h526.628572v43.885714H73.142857zM336.457143 117.028571h43.885714v789.942858h-43.885714zM204.8 73.142857h614.4a131.657143 131.657143 0 0 1 131.657143 131.657143v614.4a131.657143 131.657143 0 0 1-131.657143 131.657143H204.8A131.657143 131.657143 0 0 1 73.142857 819.2V204.8A131.84 131.84 0 0 1 204.8 73.142857z m0 43.885714a87.771429 87.771429 0 0 0-87.771429 87.771429v614.4a87.771429 87.771429 0 0 0 87.771429 87.771429h614.4a87.771429 87.771429 0 0 0 87.771429-87.771429V204.8a87.771429 87.771429 0 0 0-87.771429-87.771429zM819.2 73.142857h-219.428571v877.714286h219.428571a131.657143 131.657143 0 0 0 131.657143-131.657143V204.8A131.84 131.84 0 0 0 819.2 73.142857z m44.068571 460.982857h-65.828571v65.828572H753.371429v-65.828572h-65.828572V490.057143h65.828572v-65.828572h44.068571v65.828572h65.828571z\\\"/></svg>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://quillBetterTable/./src/assets/icons/icon_operation_1.svg?");

/***/ }),

/***/ "./src/assets/icons/icon_operation_2.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/icon_operation_2.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<?xml version=\\\"1.0\\\" standalone=\\\"no\\\"?><!DOCTYPE svg PUBLIC \\\"-//W3C//DTD SVG 1.1//EN\\\" \\\"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\\\"><svg class=\\\"icon\\\" width=\\\"20px\\\" height=\\\"20.00px\\\" viewBox=\\\"0 0 1024 1024\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path fill=\\\"#595959\\\" d=\\\"M380.342857 336.457143h526.811429v43.885714H380.342857z m0 307.2h526.811429v43.885714H380.342857zM643.657143 117.028571h43.885714v789.942858h-43.885714zM204.8 73.142857h614.582857A131.474286 131.474286 0 0 1 950.857143 204.8v614.4a131.657143 131.657143 0 0 1-131.657143 131.657143H204.8A131.657143 131.657143 0 0 1 73.142857 819.2V204.8A131.657143 131.657143 0 0 1 204.8 73.142857z m0 43.885714a87.588571 87.588571 0 0 0-87.588571 87.771429v614.4a87.588571 87.588571 0 0 0 87.588571 87.771429h614.582857a87.771429 87.771429 0 0 0 87.771429-87.771429V204.8a87.771429 87.771429 0 0 0-87.771429-87.771429zM204.8 73.142857A131.657143 131.657143 0 0 0 73.142857 204.8v614.4a131.657143 131.657143 0 0 0 131.657143 131.657143h219.428571V73.142857z m131.84 460.8h-65.828571v65.828572h-43.885715v-65.828572h-65.828571v-43.885714h65.828571v-65.828572h43.885715v65.828572h65.828571z\\\"/></svg>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://quillBetterTable/./src/assets/icons/icon_operation_2.svg?");

/***/ }),

/***/ "./src/assets/icons/icon_operation_3.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/icon_operation_3.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<?xml version=\\\"1.0\\\" standalone=\\\"no\\\"?><!DOCTYPE svg PUBLIC \\\"-//W3C//DTD SVG 1.1//EN\\\" \\\"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\\\"><svg class=\\\"icon\\\" width=\\\"20px\\\" height=\\\"20.00px\\\" viewBox=\\\"0 0 1024 1024\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path fill=\\\"#595959\\\" d=\\\"M73.142857 599.771429h877.714286v43.885714H73.142857zM336.457143 380.342857h43.885714v526.628572h-43.885714z m307.2 0h43.885714v526.628572h-43.885714zM204.8 73.142857h614.4a131.657143 131.657143 0 0 1 131.657143 131.657143v614.4a131.657143 131.657143 0 0 1-131.657143 131.657143H204.8A131.657143 131.657143 0 0 1 73.142857 819.2V204.8A131.657143 131.657143 0 0 1 204.8 73.142857z m0 43.885714a87.771429 87.771429 0 0 0-87.771429 87.771429v614.4a87.588571 87.588571 0 0 0 87.771429 87.771429h614.4a87.588571 87.588571 0 0 0 87.771429-87.771429V204.8a87.771429 87.771429 0 0 0-87.771429-87.771429zM819.2 73.142857H204.8A131.657143 131.657143 0 0 0 73.142857 204.8v219.428571h877.714286v-219.428571A131.657143 131.657143 0 0 0 819.2 73.142857z m-219.428571 197.485714h-65.828572v65.828572h-43.885714v-65.828572h-65.828572v-43.885714h65.828572V160.914286h43.885714v65.828571h65.828572z\\\"/></svg>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://quillBetterTable/./src/assets/icons/icon_operation_3.svg?");

/***/ }),

/***/ "./src/assets/icons/icon_operation_4.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/icon_operation_4.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<?xml version=\\\"1.0\\\" standalone=\\\"no\\\"?><!DOCTYPE svg PUBLIC \\\"-//W3C//DTD SVG 1.1//EN\\\" \\\"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\\\"><svg class=\\\"icon\\\" width=\\\"20px\\\" height=\\\"20.00px\\\" viewBox=\\\"0 0 1024 1024\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path fill=\\\"#595959\\\" d=\\\"M204.8 73.142857h614.4a131.657143 131.657143 0 0 1 131.657143 131.657143v614.4a131.657143 131.657143 0 0 1-131.657143 131.657143H204.8A131.657143 131.657143 0 0 1 73.142857 819.2V204.8A131.84 131.84 0 0 1 204.8 73.142857z m0 43.885714a87.771429 87.771429 0 0 0-87.771429 87.771429v614.4a87.771429 87.771429 0 0 0 87.771429 87.771429h614.4a87.771429 87.771429 0 0 0 87.771429-87.771429V204.8a87.771429 87.771429 0 0 0-87.771429-87.771429zM73.142857 336.457143h877.714286v44.068571H73.142857zM336.64 117.028571h43.885714v526.628572h-43.885714z m307.017143 0h44.068571v526.628572H643.657143zM73.142857 599.771429v219.428571a131.657143 131.657143 0 0 0 131.657143 131.657143h614.4a131.657143 131.657143 0 0 0 131.657143-131.657143v-219.428571z m526.628572 197.485714h-65.645715v65.828571H490.057143v-65.828571h-65.828572v-43.885714h65.828572v-65.828572h44.068571v65.828572h65.645715z\\\"/></svg>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://quillBetterTable/./src/assets/icons/icon_operation_4.svg?");

/***/ }),

/***/ "./src/assets/icons/icon_operation_5.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/icon_operation_5.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<?xml version=\\\"1.0\\\" standalone=\\\"no\\\"?><!DOCTYPE svg PUBLIC \\\"-//W3C//DTD SVG 1.1//EN\\\" \\\"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\\\"><svg class=\\\"icon\\\" width=\\\"20px\\\" height=\\\"20.00px\\\" viewBox=\\\"0 0 1024 1024\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path fill=\\\"#595959\\\" d=\\\"M925.99596 99.038384c-25.470707-25.6-60.121212-39.822222-96.323233-39.822222H194.19798c-36.072727 0-70.723232 14.351515-96.323233 39.822222-25.6 25.6-39.822222 60.121212-39.822222 96.323232v635.474748c0 36.072727 14.351515 70.723232 39.822222 96.323232C123.474747 952.759596 158.125253 967.111111 194.19798 967.111111h635.474747c36.072727 0 70.723232-14.351515 96.323233-39.951515 25.6-25.6 39.951515-60.121212 39.951515-96.323232V195.361616c0-36.072727-14.351515-70.723232-39.951515-96.323232z m-277.850505 5.559596v226.909091H375.725253V104.59798h272.420202zM103.434343 195.361616c0-24.048485 9.567677-47.191919 26.634344-64.129293 17.066667-17.066667 40.080808-26.634343 64.129293-26.634343h136.145454v226.909091H103.434343V195.361616z m90.763637 726.367677c-24.048485 0-47.191919-9.567677-64.129293-26.634344-17.066667-17.066667-26.634343-40.080808-26.634344-64.129292V649.309091h226.909091v272.420202H194.19798z m181.527273 0V649.309091h272.290909v272.420202H375.725253z m544.711111-90.892929c0 24.048485-9.567677 47.191919-26.634344 64.129293-17.066667 17.066667-40.080808 26.634343-64.129293 26.634343H693.527273V649.309091h226.909091v181.527273zM693.527273 331.507071V104.59798h136.145454c24.048485 0 47.191919 9.567677 64.129293 26.634343 17.066667 17.066667 26.634343 40.080808 26.634344 64.129293v136.145455H693.527273z\\\"/></svg>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://quillBetterTable/./src/assets/icons/icon_operation_5.svg?");

/***/ }),

/***/ "./src/assets/icons/icon_operation_6.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/icon_operation_6.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<?xml version=\\\"1.0\\\" standalone=\\\"no\\\"?><!DOCTYPE svg PUBLIC \\\"-//W3C//DTD SVG 1.1//EN\\\" \\\"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\\\"><svg class=\\\"icon\\\" width=\\\"20px\\\" height=\\\"20.00px\\\" viewBox=\\\"0 0 1024 1024\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path fill=\\\"#595959\\\" d=\\\"M336.457143 73.142857h43.885714v877.714286h-43.885714z m307.382857 0h43.702857v877.714286h-43.702857z m-438.857143 0h614.4A131.657143 131.657143 0 0 1 950.857143 204.8v614.4a131.474286 131.474286 0 0 1-131.474286 131.657143h-614.4A131.657143 131.657143 0 0 1 73.142857 819.2V204.8A131.84 131.84 0 0 1 204.982857 73.142857z m0 43.885714a87.588571 87.588571 0 0 0-87.771428 87.771429v614.4a87.588571 87.588571 0 0 0 87.771428 87.771429h614.4a87.771429 87.771429 0 0 0 87.771429-87.771429V204.8a87.771429 87.771429 0 0 0-87.771429-87.771429zM73.142857 336.457143h877.714286v307.2H73.142857z m292.571429 43.885714v219.428572h292.571428v-219.428572z\\\"/></svg>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://quillBetterTable/./src/assets/icons/icon_operation_6.svg?");

/***/ }),

/***/ "./src/assets/icons/icon_operation_7.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/icon_operation_7.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<?xml version=\\\"1.0\\\" standalone=\\\"no\\\"?><!DOCTYPE svg PUBLIC \\\"-//W3C//DTD SVG 1.1//EN\\\" \\\"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\\\"><svg class=\\\"icon\\\" width=\\\"20px\\\" height=\\\"20.00px\\\" viewBox=\\\"0 0 1024 1024\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path fill=\\\"#595959\\\" d=\\\"M925.996 99.038c-25.47-25.6-60.121-39.822-96.323-39.822H194.198c-75.12 0.13-136.016 61.026-136.145 136.146v635.345c0 36.073 14.351 70.723 39.822 96.323 25.6 25.73 60.25 40.081 96.323 40.081h635.475c36.072 0 70.723-14.351 96.323-39.951 25.6-25.6 39.951-60.122 39.951-96.324V195.362c0-36.073-14.351-70.724-39.951-96.324z m-365.77 494.287L512 545.228l-48.226 48.097-32.194-31.935 48.355-48.226-48.226-48.097 32.194-32.194L512 480.97l48.097-48.097 32.194 32.194-48.097 48.097 48.226 48.226-32.194 31.935zM103.434 195.362c0-24.049 9.568-47.192 26.635-64.13 17.066-17.066 40.08-26.634 64.129-26.634h136.145v226.91H103.434V195.361z m0 181.656h226.91V649.31h-226.91V377.02z m90.764 544.84c-24.049 0-47.192-9.567-64.13-26.634-17.066-17.066-26.634-40.08-26.634-64.258V694.69h226.91v227.168H194.197z m726.238-90.763c0 24.048-9.438 47.192-26.505 64.259-17.066 17.066-40.21 26.634-64.258 26.505H693.527V694.69h226.91v136.404z m0-181.786H693.527V377.02h226.91v272.29zM693.527 331.507V104.598h136.146c24.048 0 47.192 9.438 64.258 26.505 17.067 17.067 26.635 40.21 26.505 64.259v136.145H693.527z\\\"/></svg>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://quillBetterTable/./src/assets/icons/icon_operation_7.svg?");

/***/ }),

/***/ "./src/assets/icons/icon_operation_8.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/icon_operation_8.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<?xml version=\\\"1.0\\\" standalone=\\\"no\\\"?><!DOCTYPE svg PUBLIC \\\"-//W3C//DTD SVG 1.1//EN\\\" \\\"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\\\"><svg class=\\\"icon\\\" width=\\\"20px\\\" height=\\\"20.00px\\\" viewBox=\\\"0 0 1024 1024\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path fill=\\\"#595959\\\" d=\\\"M925.99596 99.038384c-25.470707-25.6-60.121212-39.822222-96.323233-39.822222H194.19798c-36.072727 0-70.723232 14.351515-96.323233 39.822222-25.6 25.6-39.822222 60.121212-39.822222 96.323232v635.474748c0 36.072727 14.351515 70.723232 39.822222 96.323232C123.474747 952.759596 158.125253 967.111111 194.19798 967.111111h635.474747c36.072727 0 70.723232-14.351515 96.323233-39.951515 25.6-25.6 39.951515-60.121212 39.951515-96.323232V195.361616c0-36.072727-14.351515-70.723232-39.951515-96.323232z m-550.270707 5.559596h272.290909v227.167677H375.725253V104.59798z m56.242424 360.468687l31.935353-32.19394 48.09697 48.226263 48.09697-48.226263 32.193939 32.19394-48.09697 48.096969 48.226263 48.226263-32.193939 31.935354-48.226263-48.09697-48.226263 48.09697-31.935353-31.935354 48.226262-48.226263-48.096969-48.096969zM103.434343 195.361616c0-24.048485 9.567677-47.191919 26.634344-64.129293 17.066667-17.066667 40.080808-26.634343 64.129293-26.634343h136.145454v227.167677H103.434343V195.361616z m817.002021 635.733333c0 24.048485-9.567677 47.191919-26.634344 64.258586-17.066667 17.066667-40.080808 26.634343-64.129293 26.634344H194.19798c-24.048485 0-47.191919-9.567677-64.258586-26.634344C112.872727 878.157576 103.434343 855.014141 103.434343 830.836364V694.690909h226.909091v226.909091h45.381819V694.690909h272.290909v226.909091h45.381818V694.690909h226.909091v136.40404z m0-499.329292H693.527273V104.59798h136.145454c24.048485 0 47.191919 9.567677 64.129293 26.634343 17.066667 17.066667 26.634343 40.080808 26.634344 64.129293v136.404041z\\\"/></svg>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://quillBetterTable/./src/assets/icons/icon_operation_8.svg?");

/***/ }),

/***/ "./src/assets/icons/icon_operation_9.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/icon_operation_9.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<?xml version=\\\"1.0\\\" standalone=\\\"no\\\"?><!DOCTYPE svg PUBLIC \\\"-//W3C//DTD SVG 1.1//EN\\\" \\\"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\\\"><svg class=\\\"icon\\\" width=\\\"20px\\\" height=\\\"20.00px\\\" viewBox=\\\"0 0 1024 1024\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path fill=\\\"#595959\\\" d=\\\"M764.42168889 830.5152c0 30.23530667-24.61013333 54.84430222-54.84316444 54.84430222H314.42147555c-30.23416889 0-54.84316445-24.61013333-54.84316444-54.84430222V248.32796445h504.84337778v582.18723555zM369.26577778 149.89084445c0-6.32832 4.92202667-11.25034667 11.25034667-11.25034667H644.18702222c6.32832 0 11.25034667 4.92202667 11.25034667 11.25034667v33.04675555H369.26577778V149.89084445z m559.68768 33.04675555H720.82773333V149.89084445c0-42.1888-34.45191111-76.64071111-76.64071111-76.64071112H380.51612445c-42.1888 0-76.64071111 34.45191111-76.64071112 76.64071112v33.04675555h-208.82773333c-18.28181333 0-33.04789333 14.76608-33.04789333 33.04675555s14.76608 33.04675555 33.04675555 33.04675556h98.43825778v581.48408889c0 66.79779555 54.14001778 120.93781333 120.93667555 120.93781333h395.1570489c66.79665778 0 120.93667555-54.14001778 120.93667555-120.93781333V248.32796445h98.43825778c18.28067555 0 33.04675555-14.76494222 33.04675555-33.04675556s-14.76608-32.34360889-33.04675555-32.34360889zM512 786.21923555c18.28181333 0 33.04675555-14.76608 33.04675555-33.04789333v-351.56195555c0-18.28181333-14.76494222-33.04675555-33.04675555-33.04675556s-33.04675555 14.76494222-33.04675555 33.04675556v351.56195555c0 18.28181333 14.76494222 33.04789333 33.04675555 33.04789333m-153.98456889 0c18.28181333 0 33.04675555-14.76608 33.04675556-33.04789333v-351.56195555c0-18.28181333-14.76494222-33.04675555-33.04675556-33.04675556s-33.04675555 14.76494222-33.04675556 33.04675556v351.56195555c0.70314667 18.28181333 15.46922667 33.04789333 33.04675556 33.04789333m307.96913778 0c18.28067555 0 33.04675555-14.76608 33.04675556-33.04789333v-351.56195555c0-18.28181333-14.76608-33.04675555-33.04675556-33.04675556s-33.04675555 14.76494222-33.04675556 33.04675556v351.56195555c0 18.28181333 14.76494222 33.04789333 33.04675556 33.04789333\\\"/></svg>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://quillBetterTable/./src/assets/icons/icon_operation_9.svg?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* eslint-env browser */\n/*\n  eslint-disable\n  no-console,\n  func-names\n*/\n\n/** @typedef {any} TODO */\n\nvar normalizeUrl = __webpack_require__(/*! ./normalize-url */ \"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js\");\nvar srcByModuleId = Object.create(null);\nvar noDocument = typeof document === \"undefined\";\nvar forEach = Array.prototype.forEach;\n\n/**\n * @param {function} fn\n * @param {number} time\n * @returns {(function(): void)|*}\n */\nfunction debounce(fn, time) {\n  var timeout = 0;\n  return function () {\n    // @ts-ignore\n    var self = this;\n    // eslint-disable-next-line prefer-rest-params\n    var args = arguments;\n    var functionCall = function functionCall() {\n      return fn.apply(self, args);\n    };\n    clearTimeout(timeout);\n\n    // @ts-ignore\n    timeout = setTimeout(functionCall, time);\n  };\n}\nfunction noop() {}\n\n/**\n * @param {TODO} moduleId\n * @returns {TODO}\n */\nfunction getCurrentScriptUrl(moduleId) {\n  var src = srcByModuleId[moduleId];\n  if (!src) {\n    if (document.currentScript) {\n      src = /** @type {HTMLScriptElement} */document.currentScript.src;\n    } else {\n      var scripts = document.getElementsByTagName(\"script\");\n      var lastScriptTag = scripts[scripts.length - 1];\n      if (lastScriptTag) {\n        src = lastScriptTag.src;\n      }\n    }\n    srcByModuleId[moduleId] = src;\n  }\n\n  /**\n   * @param {string} fileMap\n   * @returns {null | string[]}\n   */\n  return function (fileMap) {\n    if (!src) {\n      return null;\n    }\n    var splitResult = src.split(/([^\\\\/]+)\\.js$/);\n    var filename = splitResult && splitResult[1];\n    if (!filename) {\n      return [src.replace(\".js\", \".css\")];\n    }\n    if (!fileMap) {\n      return [src.replace(\".js\", \".css\")];\n    }\n    return fileMap.split(\",\").map(function (mapRule) {\n      var reg = new RegExp(\"\".concat(filename, \"\\\\.js$\"), \"g\");\n      return normalizeUrl(src.replace(reg, \"\".concat(mapRule.replace(/{fileName}/g, filename), \".css\")));\n    });\n  };\n}\n\n/**\n * @param {TODO} el\n * @param {string} [url]\n */\nfunction updateCss(el, url) {\n  if (!url) {\n    if (!el.href) {\n      return;\n    }\n\n    // eslint-disable-next-line\n    url = el.href.split(\"?\")[0];\n  }\n  if (!isUrlRequest( /** @type {string} */url)) {\n    return;\n  }\n  if (el.isLoaded === false) {\n    // We seem to be about to replace a css link that hasn't loaded yet.\n    // We're probably changing the same file more than once.\n    return;\n  }\n  if (!url || !(url.indexOf(\".css\") > -1)) {\n    return;\n  }\n\n  // eslint-disable-next-line no-param-reassign\n  el.visited = true;\n  var newEl = el.cloneNode();\n  newEl.isLoaded = false;\n  newEl.addEventListener(\"load\", function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.addEventListener(\"error\", function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.href = \"\".concat(url, \"?\").concat(Date.now());\n  if (el.nextSibling) {\n    el.parentNode.insertBefore(newEl, el.nextSibling);\n  } else {\n    el.parentNode.appendChild(newEl);\n  }\n}\n\n/**\n * @param {string} href\n * @param {TODO} src\n * @returns {TODO}\n */\nfunction getReloadUrl(href, src) {\n  var ret;\n\n  // eslint-disable-next-line no-param-reassign\n  href = normalizeUrl(href);\n  src.some(\n  /**\n   * @param {string} url\n   */\n  // eslint-disable-next-line array-callback-return\n  function (url) {\n    if (href.indexOf(src) > -1) {\n      ret = url;\n    }\n  });\n  return ret;\n}\n\n/**\n * @param {string} [src]\n * @returns {boolean}\n */\nfunction reloadStyle(src) {\n  if (!src) {\n    return false;\n  }\n  var elements = document.querySelectorAll(\"link\");\n  var loaded = false;\n  forEach.call(elements, function (el) {\n    if (!el.href) {\n      return;\n    }\n    var url = getReloadUrl(el.href, src);\n    if (!isUrlRequest(url)) {\n      return;\n    }\n    if (el.visited === true) {\n      return;\n    }\n    if (url) {\n      updateCss(el, url);\n      loaded = true;\n    }\n  });\n  return loaded;\n}\nfunction reloadAll() {\n  var elements = document.querySelectorAll(\"link\");\n  forEach.call(elements, function (el) {\n    if (el.visited === true) {\n      return;\n    }\n    updateCss(el);\n  });\n}\n\n/**\n * @param {string} url\n * @returns {boolean}\n */\nfunction isUrlRequest(url) {\n  // An URL is not an request if\n\n  // It is not http or https\n  if (!/^[a-zA-Z][a-zA-Z\\d+\\-.]*:/.test(url)) {\n    return false;\n  }\n  return true;\n}\n\n/**\n * @param {TODO} moduleId\n * @param {TODO} options\n * @returns {TODO}\n */\nmodule.exports = function (moduleId, options) {\n  if (noDocument) {\n    console.log(\"no window.document found, will not HMR CSS\");\n    return noop;\n  }\n  var getScriptSrc = getCurrentScriptUrl(moduleId);\n  function update() {\n    var src = getScriptSrc(options.filename);\n    var reloaded = reloadStyle(src);\n    if (options.locals) {\n      console.log(\"[HMR] Detected local css modules. Reload all css\");\n      reloadAll();\n      return;\n    }\n    if (reloaded) {\n      console.log(\"[HMR] css reload %s\", src.join(\" \"));\n    } else {\n      console.log(\"[HMR] Reload all css\");\n      reloadAll();\n    }\n  }\n  return debounce(update, 50);\n};\n\n//# sourceURL=webpack://quillBetterTable/./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ ((module) => {

eval("\n\n/* eslint-disable */\n\n/**\n * @param {string[]} pathComponents\n * @returns {string}\n */\nfunction normalizeUrl(pathComponents) {\n  return pathComponents.reduce(function (accumulator, item) {\n    switch (item) {\n      case \"..\":\n        accumulator.pop();\n        break;\n      case \".\":\n        break;\n      default:\n        accumulator.push(item);\n    }\n    return accumulator;\n  }, /** @type {string[]} */[]).join(\"/\");\n}\n\n/**\n * @param {string} urlString\n * @returns {string}\n */\nmodule.exports = function (urlString) {\n  urlString = urlString.trim();\n  if (/^data:/i.test(urlString)) {\n    return urlString;\n  }\n  var protocol = urlString.indexOf(\"//\") !== -1 ? urlString.split(\"//\")[0] + \"//\" : \"\";\n  var components = urlString.replace(new RegExp(protocol, \"i\"), \"\").split(\"/\");\n  var host = components[0].toLowerCase().replace(/\\.$/, \"\");\n  components[0] = \"\";\n  var path = normalizeUrl(components);\n  return protocol + host + path;\n};\n\n//# sourceURL=webpack://quillBetterTable/./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js?");

/***/ }),

/***/ "./src/assets/quill-better-table.scss":
/*!********************************************!*\
  !*** ./src/assets/quill-better-table.scss ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1699744413898\n      var cssReload = __webpack_require__(/*! ../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://quillBetterTable/./src/assets/quill-better-table.scss?");

/***/ }),

/***/ "quill":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"quill","commonjs2":"quill","amd":"quill","root":"Quill"} ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_quill__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("demo_demo1_js." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("0786f55d47a30663d7d7")
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "quillBetterTable:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, oldTag, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"demo/demo1.js": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatequillBetterTable"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./demo/js/demo1.js");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});