import { prisma } from "../../prisma";
import { FeedbacksRepository, FeedbackCreateData } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository{
   async create({ name, screenshot }: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                name,
                screenshot,
            }
        })
   }
}