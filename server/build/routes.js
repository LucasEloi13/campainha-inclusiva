"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const prisma_feedbacks_repository_1 = require("./repositories/prisma/prisma-feedbacks-repository");
const submit_feedback_use_case_1 = require("./use-cases/submit-feedback-use-case");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.routes = express_1.default.Router();
exports.routes.post('/feedbacks', async (req, res) => {
    const { name, screenshot } = req.body;
    const prismaFeedbacksRepository = new prisma_feedbacks_repository_1.PrismaFeedbacksRepository();
    const submitFeedbackUseCase = new submit_feedback_use_case_1.SubmitFeedbackUseCase(prismaFeedbacksRepository);
    await submitFeedbackUseCase.execute({
        name,
        screenshot,
    });
    return res.status(201).send();
});
exports.routes.get('/feedbacks', async (req, res) => {
    const feedbacks = await prisma.feedback.findMany();
    return res.status(201).send();
});
exports.routes.delete(`/feedbacks/:id`, async (req, res) => {
    const { id } = req.params;
    const feedbacks = await prisma.feedback.delete({
        where: { id: String(id) },
    });
    return res.status(201).send();
});
