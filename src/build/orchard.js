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
var Rotation;
(function (Rotation) {
    Rotation[Rotation["Up"] = 1] = "Up";
    Rotation[Rotation["Right"] = 2] = "Right";
    Rotation[Rotation["Down"] = 3] = "Down";
    Rotation[Rotation["Left"] = 4] = "Left";
})(Rotation || (Rotation = {}));
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Purple"] = 2] = "Purple";
    Color[Color["Yellow"] = 3] = "Yellow";
})(Color || (Color = {}));
var cards = {
    "cards": [
        {
            "id": 1,
            "img": "",
            "pos": null,
            "rotation": 1,
            "trees": [1, 2, 3, 1, 2, 3]
        },
        {
            "id": 2,
            "img": "",
            "pos": null,
            "rotation": 1,
            "trees": [1, 2, 3, 1, 2, 3]
        },
        {
            "id": 3,
            "img": "",
            "pos": null,
            "rotation": 1,
            "trees": [1, 2, 3, 1, 2, 3]
        },
        {
            "id": 4,
            "img": "",
            "pos": null,
            "rotation": 1,
            "trees": [1, 2, 3, 1, 2, 3]
        }
    ]
};
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
        _jsx("ul", { children: cards.cards.map(function (z) {
                return (_jsx("li", { value: z.id }));
            }) });
        return (_jsxs("div", { children: [_jsx("div", __assign({ className: "status" }, { children: status })), _jsxs("div", __assign({ className: "board-row" }, { children: [this.renderSquare(0), this.renderSquare(1), this.renderSquare(2), this.renderSquare(3)] })), _jsxs("div", __assign({ className: "board-row" }, { children: [this.renderSquare(4), this.renderSquare(5), this.renderSquare(6), this.renderSquare(7)] })), _jsxs("div", __assign({ className: "board-row" }, { children: [this.renderSquare(8), this.renderSquare(9), this.renderSquare(10), this.renderSquare(11)] })), _jsxs("div", __assign({ className: "board-row" }, { children: [this.renderSquare(12), this.renderSquare(13), this.renderSquare(14), this.renderSquare(15)] }))] }));
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
