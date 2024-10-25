import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({
            message: `Error retrieving users: ${error.message}`,
        });
    }
};

export const getUser = async (req: Request, res: Response): Promise<void> => {
    const { cognitoId } = req.params;
    try {
        const user = await prisma.user.findUnique({
            where: {
                cognitoId: cognitoId,
            },
        });

        res.status(200).json(user);
    } catch (error: any) {
        res.status(500).json({
            message: `Error retrieving user: ${error.message}`,
        });
    }
};

// FIXME: handle user team assign

export const createUser = async (req: Request, res: Response) => {
    try {
        const { username, cognitoId } = req.body;
        const newUser = await prisma.user.create({
            data: {
                username,
                cognitoId,
            },
        });
        res.json({ message: "User Created Successfully", newUser });
    } catch (error: any) {
        res.status(500).json({
            message: `Error retrieving users: ${error.message}`,
        });
    }
};
