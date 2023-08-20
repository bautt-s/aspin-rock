import prisma from "../../../prisma/db";
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
    const query = req.query

    let body: bodyType = {
        id: '',
        title: '',
        data: {
            title: '',
            date: new Date(),
            content: '',
            image: '',
            media: [],
            category: ''
        }
    }

    if (requestMethod !== 'GET') body = JSON.parse(req.body)

    try {
        switch (requestMethod) {
            case 'GET':
                let updates = await prisma.update.findMany({
                    where: {
                        title: {
                            contains: query.title?.toString() || '',
                            mode: 'insensitive'
                        }
                    },

                    orderBy: {
                        date: 'desc'
                    }
                })

                if (updates.length) return res.status(200).send(updates)
                else return res.status(404).json({ msg: 'No updates found.'})
            case 'POST':
                let updateCreated = await prisma.update.create({
                    data: {
                        ...body.data,
                        image: body.data.image
                    }
                })

                if (updateCreated) return res.status(200).json({ msg: `Created update: ${body.data.title}`})
                else return res.status(400).json({ msg: 'Could not create update.'})
            case 'PUT':
                let updateUpdated = await prisma.update.update({
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

                if (updateUpdated) return res.status(200).json({ msg: `Updated updated (lol).`})
                else return res.status(400).json({ msg: 'Could not update update.'})
            case 'DELETE':
                let updateDeleted = await prisma.update.delete({
                    where: {
                        id: body.id
                    }
                })

                if (updateDeleted) return res.status(200).json({ msg: `Deleted update.`})
                else return res.status(400).json({ msg: 'Could not delete update.'})
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