import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await prisma.users.findMany();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({
            message: `Error retrieving users: ${error.message}`,
        });
    }
};

export const getUser = async (req: Request, res: Response): Promise<void> => {
    const { user_id } = req.params;
    try {
        const user = await prisma.users.findUnique({
            where: {
                user_id: Number(user_id),
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
        const { username, email = "" } = req.body;
        const newUser = await prisma.users.create({
            data: {
                username,
                email,
            },
        });
        res.json({ message: "User Created Successfully", newUser });
    } catch (error: any) {
        res.status(500).json({
            message: `Error retrieving users: ${error.message}`,
        });
    }
};
