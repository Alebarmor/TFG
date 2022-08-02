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
    "elements": [
        {
            "id": 1,
            "img": "img/1.png",
            "pos": null,
            "rotation": 1,
            "trees": [2, 1, 1, 2, 3, 3]
        },
        {
            "id": 2,
            "img": "img/2.png",
            "pos": null,
            "rotation": 1,
            "trees": [1, 2, 1, 2, 3, 3]
        },
        {
            "id": 3,
            "img": "img/3.png",
            "pos": null,
            "rotation": 1,
            "trees": [2, 1, 3, 3, 1, 2]
        },
        {
            "id": 4,
            "img": "img/4.png",
            "pos": null,
            "rotation": 1,
            "trees": [1, 2, 3, 3, 1, 2]
        },
        {
            "id": 5,
            "img": "img/5.png",
            "pos": null,
            "rotation": 1,
            "trees": [1, 3, 2, 2, 3, 1]
        },
        {
            "id": 6,
            "img": "img/6.png",
            "pos": null,
            "rotation": 1,
            "trees": [3, 1, 2, 2, 3, 1]
        },
        {
            "id": 7,
            "img": "img/7.png",
            "pos": null,
            "rotation": 1,
            "trees": [3, 1, 3, 2, 1, 2]
        },
        {
            "id": 8,
            "img": "img/8.png",
            "pos": null,
            "rotation": 1,
            "trees": [3, 1, 2, 3, 1, 2]
        },
        {
            "id": 9,
            "img": "img/9.png",
            "pos": null,
            "rotation": 1,
            "trees": [2, 3, 2, 1, 3, 1]
        },
        {
            "id": 10,
            "img": "img/10.png",
            "pos": null,
            "rotation": 1,
            "trees": [2, 3, 1, 2, 3, 1]
        },
        {
            "id": 11,
            "img": "img/11.png",
            "pos": null,
            "rotation": 1,
            "trees": [2, 2, 1, 3, 3, 1]
        },
        {
            "id": 12,
            "img": "img/12.png",
            "pos": null,
            "rotation": 1,
            "trees": [2, 2, 1, 3, 1, 3]
        },
        {
            "id": 13,
            "img": "img/13.png",
            "pos": null,
            "rotation": 1,
            "trees": [1, 2, 1, 3, 2, 3]
        },
        {
            "id": 14,
            "img": "img/14.png",
            "pos": null,
            "rotation": 1,
            "trees": [1, 2, 3, 1, 2, 3]
        },
        {
            "id": 15,
            "img": "img/15.png",
            "pos": null,
            "rotation": 1,
            "trees": [3, 2, 1, 1, 2, 3]
        },
        {
            "id": 16,
            "img": "img/16.png",
            "pos": null,
            "rotation": 1,
            "trees": [2, 3, 1, 1, 2, 3]
        },
        {
            "id": 17,
            "img": "img/17.png",
            "pos": null,
            "rotation": 1,
            "trees": [1, 1, 3, 2, 2, 3]
        },
        {
            "id": 18,
            "img": "img/18.png",
            "pos": null,
            "rotation": 1,
            "trees": [1, 1, 3, 2, 3, 2]
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
        return (_jsxs("div", { children: [_jsx("div", { className: "status" }), _jsxs("div", __assign({ className: "board-row" }, { children: [this.renderSquare(0), this.renderSquare(1), this.renderSquare(2), this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)] })), _jsxs("div", __assign({ className: "board-row" }, { children: [this.renderSquare(6), this.renderSquare(7), this.renderSquare(8), this.renderSquare(9), this.renderSquare(10), this.renderSquare(11)] })), _jsxs("div", __assign({ className: "board-row" }, { children: [this.renderSquare(12), this.renderSquare(13), this.renderSquare(14), this.renderSquare(15), this.renderSquare(16), this.renderSquare(17)] })), _jsxs("div", __assign({ className: "board-row" }, { children: [this.renderSquare(18), this.renderSquare(19), this.renderSquare(20), this.renderSquare(21), this.renderSquare(22), this.renderSquare(23)] })), _jsxs("div", __assign({ className: "board-row" }, { children: [this.renderSquare(24), this.renderSquare(25), this.renderSquare(26), this.renderSquare(27), this.renderSquare(28), this.renderSquare(29)] })), _jsxs("div", __assign({ className: "board-row" }, { children: [this.renderSquare(30), this.renderSquare(31), this.renderSquare(32), this.renderSquare(33), this.renderSquare(34), this.renderSquare(35)] }))] }));
    };
    return Board;
}(React.Component));
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Game.prototype.render = function () {
        return (_jsxs("div", __assign({ className: "game" }, { children: [_jsx("p", __assign({ id: 'title' }, { children: "ORCHARD" })), _jsx("div", __assign({ className: "game-board" }, { children: _jsx(Board, {}) })), _jsx("div", { className: "game-info" }), _jsx("div", __assign({ className: 'cards' }, { children: _jsx("ul", __assign({ id: 'lista1' }, { children: cards.elements.map(function (z) {
                            return (_jsx("img", { src: z.img, alt: "Site Logo", width: 140 }));
                        }) })) }))] })));
    };
    return Game;
}(React.Component));
// ========================================
export default Game;
