import express from 'express';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';


import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
    const { name, screenshot } = req.body

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository
    )

    await submitFeedbackUseCase.execute({
        name,
        screenshot,
    })
    return res.status(201).send();
})

routes.delete(`/feedbacks/:id`, async (req, res) => {
    const { id } = req.params

    const feedbacks = await prisma.feedback.delete({
      where: { id: String(id) },
    })
    return res.status(201).send();
  })
