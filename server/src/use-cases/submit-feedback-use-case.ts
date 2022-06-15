import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
    name: string;
    screenshot: string;
}

export class SubmitFeedbackUseCase {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
    ){}


    async execute(request: SubmitFeedbackUseCaseRequest) {
        const { name, screenshot } = request;

        await this.feedbacksRepository.create({
            name,
            screenshot,
        })
    }
}