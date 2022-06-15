"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitFeedbackUseCase = void 0;
class SubmitFeedbackUseCase {
    constructor(feedbacksRepository) {
        this.feedbacksRepository = feedbacksRepository;
    }
    async execute(request) {
        const { name, screenshot } = request;
        await this.feedbacksRepository.create({
            name,
            screenshot,
        });
    }
}
exports.SubmitFeedbackUseCase = SubmitFeedbackUseCase;
