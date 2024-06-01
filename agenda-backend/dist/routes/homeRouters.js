"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.route('/:orgId').get(userController_1.getUsers).delete(userController_1.deleteUser);
exports.default = router;
