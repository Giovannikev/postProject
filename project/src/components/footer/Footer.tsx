import { Link } from "react-router-dom";
import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";
import { useState, useEffect } from "react";

export const Footer = () => {
    const [isDarkMode, ] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white text-left">
                            Subscribe to our newsletter to get updates.
                        </h1>
                        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <input
                                id="email"
                                type="text"
                                className="px-4 py-2 text-gray-900 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600"
                                placeholder="Email Address"
                            />
                            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-900 rounded-lg hover:bg-transparent hover:text-black border-2 border-transparent hover:border-black">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white text-left">Quick Links</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <Link to="/" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400 hover:underline hover:text-primary-600">
                                Home
                            </Link>
                            <Link to="/" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400 hover:underline hover:text-primary-600">
                                Who We Are
                            </Link>
                            <Link to="/" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400 hover:underline hover:text-primary-600">
                                Our Philosophy
                            </Link>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white text-left">Industries</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <Link to="/" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400 hover:underline hover:text-primary-600">
                                Retail & E-Commerce
                            </Link>
                            <Link to="/" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400 hover:underline hover:text-primary-600">
                                Information Technology
                            </Link>
                            <Link to="/" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400 hover:underline hover:text-primary-600">
                                Finance & Insurance
                            </Link>
                        </div>
                    </div>
                </div>
                
                <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700"/>
                
                <div className="flex items-center justify-between">
                    <div className="dark:text-white max-sm:hidden">
                        <p>© 2024. All Rights Reserved. Designed by <span className="underline cursor-pointer hover:text-primary-600">Team Ovy</span></p>
                    </div>
                    
                    <div className="flex -mx-2">
                        <Link to="/" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400" aria-label="LinkedIn">
                            <BsLinkedin/>
                        </Link>
                        <Link to="/" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400" aria-label="Facebook">
                            <BsFacebook />
                        </Link>
                        <Link to="/" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400" aria-label="Github">
                            <BsGithub />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
