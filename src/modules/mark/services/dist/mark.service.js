"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.MarkService = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var mark_schema_1 = require("src/models/mark.schema");
var fs = require("fs");
var PDFTableDocument = require("pdfkit-table");
var pdf_lib_1 = require("pdf-lib");
var fontkit = require("@pdf-lib/fontkit");
var constants_1 = require("src/public/constants");
var jsonData = [
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    }, {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
    {
        "index": "2",
        "studentId": "20194099",
        "name": "Lê Thành Long",
        "className": "Khoa Học Máy Tính",
        "mark": "1",
        "studentSign": "Long",
        "note": "Tạch"
    },
];
function splitDataToBatch(data) {
    var n = data.length;
    var res = [];
    console.log(constants_1.numOfRowPerPage);
    var batch = [];
    for (var i = 1; i <= n; i++) {
        ;
        batch.push(data[i - 1]);
        if (i % constants_1.numOfRowPerPage == 0) {
            res.push(batch);
            batch = [];
        }
    }
    res.push(batch);
    return res;
}
var batches = splitDataToBatch(jsonData);
var MarkService = /** @class */ (function () {
    function MarkService(MarkModel) {
        this.MarkModel = MarkModel;
    }
    MarkService.prototype.drawTextUtil = function (page, customFont, text, x_coordinate, y_coordinate, textSize, options) {
        page.drawText(text, __assign({ x: x_coordinate, y: y_coordinate, size: textSize, font: customFont }, options));
    };
    MarkService.prototype.generatePageIndex = function () {
        return __awaiter(this, void 0, Promise, function () {
            var customFontPath, pdfBytes, pdfDoc, customFont, fontBytes, pages, numOfPage, i, page, height, width, options, modifiedPdfBytes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        customFontPath = 'src/public/fonts/Crimson-Roman.otf';
                        pdfBytes = fs.readFileSync("src/public/pdfs/mark/test copy2.pdf");
                        return [4 /*yield*/, pdf_lib_1.PDFDocument.load(pdfBytes)];
                    case 1:
                        pdfDoc = _a.sent();
                        pdfDoc.registerFontkit(fontkit);
                        return [4 /*yield*/, new Promise(function (resolve) {
                                return fs.readFile(customFontPath, function (err, data) {
                                    if (err)
                                        resolve(null);
                                    else
                                        resolve(data);
                                });
                            })];
                    case 2:
                        fontBytes = _a.sent();
                        if (!fontBytes) return [3 /*break*/, 4];
                        return [4 /*yield*/, pdfDoc.embedFont(fontBytes)];
                    case 3:
                        customFont = _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, pdfDoc.embedFont(pdf_lib_1.StandardFonts.TimesRoman)];
                    case 5:
                        customFont = _a.sent();
                        _a.label = 6;
                    case 6:
                        pages = pdfDoc.getPages();
                        numOfPage = pages.length;
                        for (i = 0; i < numOfPage; i++) {
                            page = pages[i];
                            height = page.getHeight();
                            width = page.getWidth();
                            options = {
                                color: pdf_lib_1.rgb(0, 0, 0)
                            };
                            this.drawTextUtil(page, customFont, i + 1 + " / " + numOfPage, width / 2 - 10, 20, 9, options);
                        }
                        return [4 /*yield*/, pdfDoc.save()];
                    case 7:
                        modifiedPdfBytes = _a.sent();
                        fs.writeFileSync("src/public/pdfs/mark/test copy3.pdf", modifiedPdfBytes);
                        return [2 /*return*/];
                }
            });
        });
    };
    MarkService.prototype.generateTitle = function () {
        return __awaiter(this, void 0, Promise, function () {
            var customFontPath, pdfBytes, pdfDoc, customFont, fontBytes, _i, _a, page, height, width, options, modifiedPdfBytes;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        customFontPath = 'src/public/fonts/Crimson-Roman.otf';
                        pdfBytes = fs.readFileSync("src/public/pdfs/mark/test.pdf");
                        return [4 /*yield*/, pdf_lib_1.PDFDocument.load(pdfBytes)];
                    case 1:
                        pdfDoc = _b.sent();
                        pdfDoc.registerFontkit(fontkit);
                        return [4 /*yield*/, new Promise(function (resolve) {
                                return fs.readFile(customFontPath, function (err, data) {
                                    if (err)
                                        resolve(null);
                                    else
                                        resolve(data);
                                });
                            })];
                    case 2:
                        fontBytes = _b.sent();
                        if (!fontBytes) return [3 /*break*/, 4];
                        return [4 /*yield*/, pdfDoc.embedFont(fontBytes)];
                    case 3:
                        customFont = _b.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, pdfDoc.embedFont(pdf_lib_1.StandardFonts.TimesRoman)];
                    case 5:
                        customFont = _b.sent();
                        _b.label = 6;
                    case 6:
                        for (_i = 0, _a = pdfDoc.getPages(); _i < _a.length; _i++) {
                            page = _a[_i];
                            height = page.getHeight();
                            width = page.getWidth();
                            options = {
                                color: pdf_lib_1.rgb(0, 0, 0)
                            };
                            this.drawTextUtil(page, customFont, "TRƯỜNG ĐẠI HỌC BÁCH KHOA HÀ NỘI", 50, height - 30, 12, options);
                            this.drawTextUtil(page, customFont, "BẢNG ĐIỂM QUÁ TRÌNH", width / 2 - customFont.widthOfTextAtSize("BẢNG ĐIỂM QUÁ TRÌNH", 12) / 2, height - 60, 12, options);
                            this.drawTextUtil(page, customFont, "Học kỳ 20222", width / 2 - customFont.widthOfTextAtSize("Học kỳ 20222", 12) / 2, height - 75, 12, options);
                            this.drawTextUtil(page, customFont, "Khoa/Viện: Viện Công nghệ Thông tin và Truyền thông", 40, height - 90, 9, options);
                            this.drawTextUtil(page, customFont, "Giảng viên: Ký ở đây", width - 200, height - 90, 9, options);
                            this.drawTextUtil(page, customFont, "EM1800    Nhập môn phân tích kinh doanh    **CTTT PTKD-K65S    LT+BT      Mã lớp: QT123389     nhóm: CTTT", 30, height - 107, 9, options);
                            this.drawTextUtil(page, customFont, "Phân tích KD 01-K65S", 30, height - 117, 9, options);
                        }
                        return [4 /*yield*/, pdfDoc.save()];
                    case 7:
                        modifiedPdfBytes = _b.sent();
                        fs.writeFileSync("src/public/pdfs/mark/test copy.pdf", modifiedPdfBytes);
                        return [2 /*return*/];
                }
            });
        });
    };
    MarkService.prototype.generateFooter = function () {
        return __awaiter(this, void 0, Promise, function () {
            var customFontPath, pdfBytes, pdfDoc, customFont, fontBytes, options, num, page, height, width, page, height, width, startY, modifiedPdfBytes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        customFontPath = 'src/public/fonts/Crimson-Roman.otf';
                        pdfBytes = fs.readFileSync("src/public/pdfs/mark/test copy.pdf");
                        return [4 /*yield*/, pdf_lib_1.PDFDocument.load(pdfBytes)];
                    case 1:
                        pdfDoc = _a.sent();
                        pdfDoc.registerFontkit(fontkit);
                        return [4 /*yield*/, new Promise(function (resolve) {
                                return fs.readFile(customFontPath, function (err, data) {
                                    if (err)
                                        resolve(null);
                                    else
                                        resolve(data);
                                });
                            })];
                    case 2:
                        fontBytes = _a.sent();
                        if (!fontBytes) return [3 /*break*/, 4];
                        return [4 /*yield*/, pdfDoc.embedFont(fontBytes)];
                    case 3:
                        customFont = _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, pdfDoc.embedFont(pdf_lib_1.StandardFonts.TimesRoman)];
                    case 5:
                        customFont = _a.sent();
                        _a.label = 6;
                    case 6:
                        options = {
                            color: pdf_lib_1.rgb(0, 0, 0)
                        };
                        if (this.checkRemainSpaceInTheLastPage(batches[batches.length - 1])) {
                            num = batches[batches.length - 1].length;
                            console.log(num);
                            page = pdfDoc.getPages()[pdfDoc.getPages().length - 1];
                            height = page.getHeight();
                            width = page.getWidth();
                            this.drawTextUtil(page, customFont, "Ngày in: 12/4/2021           Hạn cuối nộp điểm sau khi kết thúc học phần 7 ngày", 100, height - num * 30 - 130, 9, options);
                            this.drawTextUtil(page, customFont, "Đơn vị quản lý đào tạo", 60, height - num * 30 - 130 - 15, 9, options);
                            this.drawTextUtil(page, customFont, "Cán bộ giảng dạy", 180, height - num * 30 - 130 - 15, 9, options);
                            this.drawTextUtil(page, customFont, "Cán bộ vào bảng điểm", width - 300, height - num * 30 - 130 - 15, 9, options);
                            this.drawTextUtil(page, customFont, "Bộ môn phụ trách học phần", width - 150, height - num * 30 - 130 - 15, 9, options);
                            this.drawTextUtil(page, customFont, "(nếu có)", width - 150 + customFont.widthOfTextAtSize("Bộ môn phụ trách học phần", 9) / 2 - 5, height - num * 30 - 130 - 25, 9, options);
                        }
                        else {
                            page = pdfDoc.addPage();
                            height = page.getHeight();
                            width = page.getWidth();
                            startY = height - 20;
                            this.drawTextUtil(page, customFont, "Ngày in: 12/4/2021           Hạn cuối nộp điểm sau khi kết thúc học phần 7 ngày", 100, startY, 9, options);
                            this.drawTextUtil(page, customFont, "Đơn vị quản lý đào tạo", 60, startY - 15, 9, options);
                            this.drawTextUtil(page, customFont, "Cán bộ giảng dạy", 180, startY - 15, 9, options);
                            this.drawTextUtil(page, customFont, "Cán bộ vào bảng điểm", width - 300, startY - 15, 9, options);
                            this.drawTextUtil(page, customFont, "Bộ môn phụ trách học phần", width - 150, startY - 15, 9, options);
                            this.drawTextUtil(page, customFont, "(nếu có)", width - 150 + customFont.widthOfTextAtSize("Bộ môn phụ trách học phần", 9) / 2 - 5, startY - 25, 9, options);
                        }
                        return [4 /*yield*/, pdfDoc.save()];
                    case 7:
                        modifiedPdfBytes = _a.sent();
                        fs.writeFileSync("src/public/pdfs/mark/test copy2.pdf", modifiedPdfBytes);
                        return [2 /*return*/];
                }
            });
        });
    };
    MarkService.prototype.checkRemainSpaceInTheLastPage = function (batch) {
        if (constants_1.numOfRowPerPage - batch.length >= 6)
            return true;
        else
            return false;
    };
    MarkService.prototype.generateStudentTranscript = function () {
        return __awaiter(this, void 0, Promise, function () {
            var customFontPath, doc, height, i, _i, batches_1, batch, table;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        customFontPath = 'src/public/fonts/Crimson-Roman.otf';
                        doc = new PDFTableDocument({ margin: 30., size: 'A4' });
                        doc.pipe(fs.createWriteStream("src/public/pdfs/mark/test.pdf"));
                        height = doc.page.height;
                        i = 0;
                        _i = 0, batches_1 = batches;
                        _a.label = 1;
                    case 1:
                        if (!(_i < batches_1.length)) return [3 /*break*/, 7];
                        batch = batches_1[_i];
                        table = {
                            subTitle: "SubTitle",
                            headers: [
                                { label: "STT", property: "index", width: 30, align: 'center' },
                                { label: "Mã SV", property: "studentId", width: 60, align: 'center' },
                                { label: "Họ và tên", property: "name", width: 90 },
                                { label: "Lớp SV", property: "className", width: 120, align: 'center' },
                                { label: "Điểm QT", property: "mark", width: 40, align: 'center' },
                                { label: "Chữ ký SV", property: "studentSign", width: 60, align: 'center' },
                                { label: "Ghi chú", property: "note", width: 100, align: 'center' },
                            ],
                            datas: batch
                        };
                        if (!(i == 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, doc.table(table, {
                                y: 130,
                                divider: {
                                    header: { disabled: false, width: 1 },
                                    horizontal: { disabled: false, width: 1 }
                                },
                                prepareHeader: function () { return doc.font(customFontPath).fontSize(10); },
                                prepareRow: function (row, indexColumn, indexRow, rectRow, rectCell) {
                                    doc.font(customFontPath).fontSize(8);
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        doc = doc.addPage({
                            layout: doc.page.layout,
                            size: doc.page.size,
                            margins: { top: 130, bottom: -10, right: 30, left: 30 }
                        });
                        return [4 /*yield*/, doc.table(table, {
                                divider: {
                                    header: { disabled: false, width: 1 },
                                    horizontal: { disabled: false, width: 1 }
                                },
                                prepareHeader: function () { return doc.font(customFontPath).fontSize(10); },
                                prepareRow: function (row, indexColumn, indexRow, rectRow, rectCell) {
                                    doc.font(customFontPath).fontSize(8);
                                }
                            })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i = i + 1;
                        _a.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 1];
                    case 7:
                        doc.end();
                        return [2 /*return*/];
                }
            });
        });
    };
    MarkService.prototype.test = function () {
        return __awaiter(this, void 0, Promise, function () {
            var ____;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.generatePageIndex()];
                    case 1:
                        ____ = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MarkService = __decorate([
        common_1.Injectable(),
        __param(0, mongoose_1.InjectModel(mark_schema_1.Mark.name))
    ], MarkService);
    return MarkService;
}());
exports.MarkService = MarkService;
