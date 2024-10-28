"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Icons } from "@/components/icons/Icons";
import Link from "next/link";
import Image from "next/image";

const LoginPage = () => {
    const handleLoginWithGithub = async () => {
        // const { error } = await supabase.auth.signInWithOAuth({
        //     provider: "github",
        //     options: {
        //         redirectTo: process.env.NEXT_PUBLIC_SUPABASE_AUTH_CALLBACK,
        //     },
        // });
        // if (error) {
        //     toast.error(error.message);
        // }
        toast.success("Done");
    };

    const handleLoginWithGoogle = async () => {
        // const { error } = await supabase.auth.signInWithOAuth({
        //     provider: "google",
        //     options: {
        //         redirectTo: process.env.NEXT_PUBLIC_SUPABASE_AUTH_CALLBACK,
        //     },
        // });
        // if (error) {
        //     toast.error(error.message);
        // }
        toast.success("Done");
    };

    return (
        <>
            <section className='w-full h-screen flex items-center justify-between relative text-sm'>
                <div className='hidden lg:flex lg:w-1/2 bg-black h-screen relative'>
                    <h1 className='absolute top-10 left-10 text-white text-2xl font-bold'>
                        Plan-It
                    </h1>
                    <p className='text-white absolute bottom-20 left-10 max-w-[80%] text-sm'>
                        Plan-It is a software tools that help project managers
                        and teams plan, coordinate, and execute tasks for a
                        project
                    </p>
                    <Image
                        src='https://images.unsplash.com/photo-1512551980832-13df02babc9e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='img'
                        width={1920}
                        height={1080}
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='w-full lg:w-1/2 flex items-center justify-center'>
                    <div className='w-4/5 md:w-2/5 lg:w-1/2'>
                        <h1 className='text-3xl font-bold w-full'>Plan-It</h1>
                        <p className='mb-4 w-full'>
                            Login to access your account.
                        </p>
                        <div className='flex items-center justify-between gap-4'>
                            <Button
                                variant={"outline"}
                                className='flex items-center gap-4 border h-[40px] rounded-md mb-2 focus-visible:ring-primary font-normal w-full'
                                onClick={handleLoginWithGithub}
                            >
                                <Icons.gitHub />
                                GitHub
                            </Button>
                            <Button
                                variant={"outline"}
                                className='flex items-center gap-4 border h-[40px] rounded-md mb-2 focus-visible:ring-primary font-normal w-full'
                                onClick={handleLoginWithGoogle}
                            >
                                <Icons.google />
                                Google
                            </Button>
                        </div>
                        <div className='flex items-center justify-between mb-3 gap-2'>
                            <div className='h-[1px] w-full bg-zinc-200' />
                            <span className='text-sm text-zinc-600'>or</span>
                            <div className='h-[1px] w-full bg-zinc-200' />
                        </div>

                        <div className='flex flex-col mb-4'>
                            <Input
                                type='email'
                                placeholder='you@example.com'
                                id='user-email'
                            />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <Input
                                type='password'
                                placeholder='password'
                                id='user-password'
                            />
                        </div>
                        <Button className='w-full focus-visible:ring-primary transition-all duration-200 ease-in disabled:bg-zinc-600 cursor-pointer'>
                            Log In
                        </Button>
                        <p className='mt-4'>
                            Don&#39;t have an account?{" "}
                            <span className='text-primary font-semibold'>
                                <Link href='/auth/register'>Sign up</Link>
                            </span>{" "}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LoginPage;