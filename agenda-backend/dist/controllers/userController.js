"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUserById = exports.createUser = exports.deleteUser = exports.getUsers = void 0;
const database_1 = require("../models/database");
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const orgid = req.params.orgId;
            const connection = yield (0, database_1.connect)();
            const [orgExists] = yield connection.query('SELECT * FROM assessment.organisation WHERE idOrganisation = ?', [orgid]);
            if (orgExists.length === 0) {
                return res.status(404).json({ error: `Organisation ${orgid} not found` });
            }
            const users = yield connection.query('SELECT * FROM assessment.user WHERE org_id = ? AND phone_number is not null', [orgid]);
            res.status(200).json(users[0]);
        }
        catch (error) {
            console.error("Error fetching users:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });
}
exports.getUsers = getUsers;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const iduser = req.params.orgId;
            const connection = yield (0, database_1.connect)();
            const [userExists] = yield connection.query('SELECT * FROM assessment.user WHERE iduser = ?', [iduser]);
            if (userExists.length === 0) {
                return res.status(404).json({ error: `User ${iduser} not found` });
            }
            yield connection.query('DELETE FROM assessment.user WHERE iduser = ?', [iduser]);
            return res.status(200).json({ message: `User ${iduser} deleted` });
        }
        catch (error) {
            console.error("Error deleting user:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });
}
exports.deleteUser = deleteUser;
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = req.body;
            const connection = yield (0, database_1.connect)();
            yield connection.query('INSERT INTO assessment.user SET ?', [user]);
            return res.status(200).json({ message: `Created user ${user.iduser}` });
        }
        catch (error) {
            console.error("Error creating user:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });
}
exports.createUser = createUser;
function getUserById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const iduser = req.params.userId;
            const connection = yield (0, database_1.connect)();
            const user = yield connection.query('SELECT * FROM assessment.user WHERE iduser = ?', [iduser]);
            if (user[0].length === 0) {
                return res.status(404).json({ error: `User ${iduser} not found` });
            }
            res.status(200).json(user[0]);
        }
        catch (error) {
            console.error("Error fetching user by ID:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });
}
exports.getUserById = getUserById;
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = req.body;
            const connection = yield (0, database_1.connect)();
            const [userExists] = yield connection.query('SELECT * FROM assessment.user WHERE iduser = ?', [user.iduser]);
            if (userExists.length === 0) {
                return res.status(404).json({ error: `User ${user.iduser} not found` });
            }
            yield connection.query('UPDATE assessment.user SET name = ?, surname = ?, org_id = ?, phone_number = ? WHERE iduser = ?', [user.name, user.surname, user.org_id, user === null || user === void 0 ? void 0 : user.phone_number, user.iduser]);
            return res.status(200).json({ message: `Updated user ${user.iduser}` });
        }
        catch (error) {
            console.error("Error updating user:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });
}
exports.updateUser = updateUser;
