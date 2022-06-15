export interface FeedbackCreateData {
    name: string;
    screenshot: string;
}

export interface FeedbacksRepository {
    create: (data: FeedbackCreateData) => Promise<void>;
}