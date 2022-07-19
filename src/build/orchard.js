var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import './index.css';
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.render = function () {
        return (_jsx("button", { className: "square" }));
    };
    return Square;
}(React.Component));
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Board.prototype.renderSquare = function (i) {
        return _jsx(Square, {});
    };
    Board.prototype.render = function () {
        var status = 'Next player: X';
        return (_jsxs("div", { children: [_jsx("div", __assign({ className: "status" }, { children: status })), _jsxs("div", __assign({ className: "board-row" }, { children: [this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)] })), _jsxs("div", __assign({ className: "board-row" }, { children: [this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)] })), _jsxs("div", __assign({ className: "board-row" }, { children: [this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)] }))] }));
    };
    return Board;
}(React.Component));
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Game.prototype.render = function () {
        return (_jsxs("div", __assign({ className: "game" }, { children: [_jsx("div", __assign({ className: "game-board" }, { children: _jsx(Board, {}) })), _jsxs("div", __assign({ className: "game-info" }, { children: [_jsx("div", {}), _jsx("ol", {})] }))] })));
    };
    return Game;
}(React.Component));
// ========================================
export default Game;
