"use client";

import { useGetUserByIdQuery } from "@/lib/store/state/api";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface ProtectedLayoutProps {
    children: React.ReactNode;
}

const ProtectedLayout: React.FC<ProtectedLayoutProps> = ({ children }) => {
    const {
        data: user,
        isLoading,
        error,
    } = useGetUserByIdQuery({ userId: Number(1) });
    const navigate = useRouter();

    useEffect(() => {
        if (!user) {
            navigate.push("/auth/login");
        }
    }, [navigate, user]);

    if (error) {
        console.log("Error", error);
        return;
    }
    return isLoading ? <div>loading...</div> : children;
};

export default ProtectedLayout;
