import { prisma } from "../../../prisma/db";
import { NextApiRequest, NextApiResponse } from "next";

type bodyType = {
    id: string,
    title: string
    data: {
        title: string,
        date: Date,
        content: string,
        image: string,
        media: string[],
        category: string
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const requestMethod = req.method;
    const body: bodyType = JSON.parse(req.body)
    const query = req.query

    try {
        switch (requestMethod) {
            case 'GET':
                let articles = await prisma.article.findMany({
                    where: {
                        title: {
                            contains: query.title?.toString() || '',
                            mode: 'insensitive'
                        }
                    },

                    orderBy: {
                        date: 'asc'
                    }
                })

                if (articles.length) return res.status(200).send(articles)
                else return res.status(404).json({ msg: 'No articles found.'})
            case 'POST':
                let articleCreated = await prisma.article.create({
                    data: body.data
                })

                if (articleCreated) return res.status(200).json({ msg: `Created article: ${body.data.title}`})
                else return res.status(400).json({ msg: 'Could not create article.'})
            case 'PUT':
                let articleUpdated = await prisma.article.update({
                    where: {
                        id: body.id
                    },

                    data: {
                        title: body.data.title.length ? body.data.title : undefined,
                        content: body.data.content.length ? body.data.content : undefined,
                        image: body.data.image.length ? body.data.image : undefined,
                        category: body.data.category.length ? body.data.category : undefined,
                    }
                })

                if (articleUpdated) return res.status(200).json({ msg: `Updated article.`})
                else return res.status(400).json({ msg: 'Could not update article.'})
            case 'DELETE':
                let articleDeleted = await prisma.article.delete({
                    where: {
                        id: body.id
                    }
                })

                if (articleDeleted) return res.status(200).json({ msg: `Deleted article.`})
                else return res.status(400).json({ msg: 'Could not delete article.'})
            default:
                return res.status(200).json({ msg: 'Welcome to AspinRock!'})
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'There was an unexpected error.',
            error
        })
    }
}