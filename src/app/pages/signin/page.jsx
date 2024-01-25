'use client'

import Link from 'next/link';
import Image from 'next/image';
import signin_bg_img from '../../../../public/images/signin_bg_img.png';
import overlay from '../../../../public/images/overlay.png';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from "@/components/ui/input"
import { ButtonSecondary } from '@/components/custom_ui/button';
import { motion } from 'framer-motion';

const formSchema = z.object({
    // name: z.string().min(4, { "message": "Username must be at least 4 characters." }),
    emailAddress: z.string().email(),
    password: z.string().min(8, { "message": "Password must be at least 8 characters." }),
    // passwordConform: z.string()
});

const SignIn = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            // name: '',
            emailAddress: '',
            password: '',
            // passwordConform: ''
        }
    });

    const handleSubmit = (values) => { console.log({ values }); }

    return (
        <motion.div
            initial={{ opacity: 0, y: 700 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 700 }}
            transition={{ duration: 0.6}} 
            className="signin w-full h-screen relative overflow-hidden flex justify-center items-center"
            >
            <Image src={signin_bg_img} alt="signup_bg_img.png" className='w-full object-cover absolute top-0 left-0 max-[1550px]:h-full' />
            <Image src={overlay} alt="overlay.png" className='w-full h-full absolute top-0 left-0' />

            <motion.div 
                initial={{ rotate: 180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: 180, scale: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.8,
                    ease: "linear",
                }}
                className='signup_form w-[30rem] relative h-full overflow-y-auto min-[321px]:flex min-[320px]:flex-col min-[320px]:justify-center overflow-x-hidden'
                >
                <h1 
                    className='text-center mb-8 text-4xl font-bold text-white max-[320px]:
                    max-[480px]:text-2xl max-[1200px]:pt-4 max-[1200px]:mb-3'
                >
                    Let's Sign In To <span className='text-yellow-400'> I Love My Six </span> Account
                </h1>
                <Form {...form}>
                    <form action="" onSubmit={form.handleSubmit(handleSubmit)} className='w-full flex flex-col gap-4 max-[640px]:px-5 max-[640px]:pt-0'>

                        {/* Name */}
                        {/* <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel className="text-white text-lg"> Name </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Your name"
                                                {...field}
                                                className="input_bg outline-none focus-visible:ring-offset-0 focus-visible:ring-0 text-white text-base py-6"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        /> */}

                        {/* Email */}
                        <FormField
                            control={form.control}
                            name="emailAddress"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel className="text-white text-lg"> Email </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="Your email address"
                                                {...field}
                                                className="input_bg outline-none focus-visible:ring-offset-0 focus-visible:ring-0 text-white text-base py-6"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />

                        {/* Password */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel className="text-white text-lg"> Password </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="Your password"
                                                {...field}
                                                className="input_bg outline-none focus-visible:ring-offset-0 focus-visible:ring-0 text-white text-base py-6"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />

                        {/* Conform password */}
                        {/* <FormField
                            control={form.control}
                            name="passwordConform"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel className="text-white text-lg"> Conform password </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="Re-type password"
                                                {...field}
                                                className="input_bg outline-none focus-visible:ring-offset-0 focus-visible:ring-0 text-white text-base py-6"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        /> */}

                        {/* Submit Button */}
                        <div className='w-full flex flex-col justify-center items-center max-[320px]:mb-3'>
                            <ButtonSecondary name="Sign In" type="submit" class="input_bg w-52 text-xl text-gray-400 mt-3 font-bold hover:text-gray-100" />
                            <h3 className='text-gray-400 mt-10 text-center'> Do not have an account? <Link href='/pages/signup' className='text-yellow-500 hover:underline'> let's Sign up </Link> </h3>
                        </div>

                    </form>
                </Form>

            </motion.div>

        </motion.div>
    );
}

export default SignIn;