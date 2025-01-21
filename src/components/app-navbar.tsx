"use client"

import Image from "next/image"
import { useState } from "react";
import { Avatar, Button, CommandMenu, Menu, Navbar, Separator } from "ui"
import { Link } from 'react-aria-components';

export default function AppNavbar({ children, ...props }: React.ComponentProps<typeof Navbar>) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Navbar intent="inset" {...props}>
                <Navbar.Nav>
                    <Navbar.Logo
                        aria-label="Go to Home Page"
                        href="/"
                    >
                        {/* Main Icon */}
                        <svg width="30" height="30" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_133_2)">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M50.7143 0H0.71429V50C0.71429 75.462 19.7466 96.4788 44.361 99.6002C19.4015 102.402 4.22025e-06 123.578 2.18557e-06 149.286L0 199.286H50C75.462 199.286 96.4788 180.253 99.6002 155.639C102.402 180.599 123.578 200 149.286 200H199.286V150C199.286 124.538 180.253 103.521 155.639 100.4C180.599 97.5984 200 76.422 200 50.7143V0.714286L150 0.714284C124.538 0.714282 103.521 19.7466 100.4 44.361C97.5984 19.4015 76.422 0 50.7143 0Z"
                                    fill="url(#paint0_linear_133_2)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_133_2" x1="27.5" y1="19" x2="149" y2="174.5" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD9A0" />
                                    <stop offset="1" stopColor="#FFE5C2" />
                                </linearGradient>
                                <clipPath id="clip0_133_2">
                                    <rect width="200" height="200" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Navbar.Logo>
                    <Navbar.Section>
                        <Navbar.Item
                            isCurrent
                            href="/about"
                            className="py-2 px-3 bg-transparent rounded-[0.5em] transition-all duration-200 ease-in-out hover:py-3 hover:px-4 hover:bg-neutral-150"
                        >
                            {/* Person Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 6.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM12 13.25c-3.796 0-6.566 2.524-7.328 5.916-.13.575.337 1.084.926 1.084h12.804c.589 0 1.056-.51.926-1.084-.762-3.393-3.532-5.916-7.328-5.916Z"></path></svg> Présentation
                        </Navbar.Item>
                        <Navbar.Item
                            href="/projects"
                            className="py-2 px-3 bg-transparent rounded-[0.5em] transition-all duration-200 ease-in-out hover:py-3 hover:px-4 hover:bg-neutral-150">
                            {/* Folders Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.29 16.25h2.96a1 1 0 0 0 1-1v-8.5a1 1 0 0 0-1-1h-6.836a1 1 0 0 1-.707-.293l-1.414-1.414a1 1 0 0 0-.707-.293H6.75a1 1 0 0 0-1 1v3m-4 11.5V8.75a1 1 0 0 1 1-1h4.836a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 0 0 .707.293h6.836a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1H2.75a1 1 0 0 1-1-1"></path></svg> Projets
                        </Navbar.Item>
                        <Navbar.Item
                            href="/working"
                            className="py-2 px-3 bg-transparent rounded-[0.5em] transition-all duration-200 ease-in-out hover:py-3 hover:px-4 hover:bg-neutral-150">
                            {/* PaperSearch Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.75 14.75h1.5m-1.5-8h7.5m-7.5 4h3.5m8.121 9.614a3 3 0 1 1-4.242-4.243 3 3 0 0 1 4.242 4.243m0 0 1.879 1.879m-2-9.743V3.745a1 1 0 0 0-1-1H4.755a1 1 0 0 0-1 1v16.501a1 1 0 0 0 1 1H12"></path></svg> Veille Technologique
                        </Navbar.Item>
                        <Navbar.Item
                            href="/working"
                            className="py-2 px-3 bg-transparent rounded-[0.5em] transition-all duration-200 ease-in-out hover:py-3 hover:px-4 hover:bg-neutral-150">
                            {/* Star Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.55 2.033a.5.5 0 0 1 .9 0l2.569 5.354a.5.5 0 0 0 .385.279l5.911.775a.497.497 0 0 1 .278.855l-4.322 4.082a.5.5 0 0 0-.148.452l1.086 5.83a.499.499 0 0 1-.729.529l-5.242-2.83a.5.5 0 0 0-.476 0l-5.242 2.83a.499.499 0 0 1-.729-.529l1.086-5.83a.5.5 0 0 0-.148-.453L2.407 9.296a.497.497 0 0 1 .278-.855l5.91-.775a.5.5 0 0 0 .386-.279z"></path></svg> Avis
                        </Navbar.Item>
                    </Navbar.Section>
                    <Navbar.Section className="ml-auto hidden sm:flex">
                        <Navbar.Flex>
                            <Button appearance="plain" size="square-petite" aria-label="Search for products" className="cursor-default rounded-[0.5em]" onPress={() => setIsOpen(true)}>
                                {/* Search Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="size-4 hover:-rotate-12 hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m20.25 20.25-4.123-4.123m0 0A7.25 7.25 0 1 0 5.873 5.873a7.25 7.25 0 0 0 10.253 10.253Z"></path></svg>
                            </Button>
                            <Link href="https://github.com/FMenoni/portfolio-design/tree/main" target="_blank">
                                <Button appearance="plain" size="square-petite" aria-label="Search for products" className="cursor-default rounded-[0.5em]">
                                    {/* GitHub Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 25" className="justd-icons size-4 cursor-pointer hover:-rotate-12 hover:scale-110 transition-all duration-200 ease-in-out" data-slot="icon" aria-hidden="true"><path fill="currentColor" d="M12 2.7c5.525 0 10 4.476 10 10a10.02 10.02 0 0 1-6.813 9.488c-.5.1-.687-.212-.687-.475 0-.337.012-1.412.012-2.75 0-.937-.312-1.537-.675-1.85 2.226-.25 4.563-1.1 4.563-4.937 0-1.1-.387-1.988-1.025-2.688.1-.25.45-1.275-.1-2.65 0 0-.837-.275-2.75 1.025a9.3 9.3 0 0 0-2.5-.337c-.85 0-1.7.112-2.5.337-1.913-1.287-2.75-1.025-2.75-1.025-.55 1.375-.2 2.4-.1 2.65-.638.7-1.025 1.6-1.025 2.688 0 3.825 2.325 4.687 4.55 4.937-.287.25-.55.688-.637 1.338-.575.262-2.013.687-2.913-.825-.188-.3-.75-1.038-1.538-1.025-.837.012-.337.475.013.662.425.238.912 1.125 1.025 1.413.2.562.85 1.637 3.362 1.175 0 .837.013 1.625.013 1.862 0 .263-.188.563-.688.475A9.99 9.99 0 0 1 2 12.701c0-5.525 4.475-10 10-10Z"></path></svg>
                                </Button>
                            </Link>
                        </Navbar.Flex>
                        <Separator orientation="vertical" color="light" className="mr-3 ml-1 h-6" />
                        <Menu>
                            <Menu.Trigger aria-label="Open Menu">
                                <Image src="https://randomuser.me/api/portraits/men/18.jpg" width={30} height={30} className="rounded-full hover:ring-2" alt="User Photo" />
                            </Menu.Trigger>
                            <Menu.Content placement="bottom right" className="sm:min-w-56 bg-neutral-50" style={{ borderRadius: '0.5em' }}>
                                <Menu.Section>
                                    <Menu.Header separator>
                                        <span className="block">Fabian Menoni</span>
                                        <span className="font-normal text-muted-fg">2ème année BTS SIO</span>
                                    </Menu.Header>
                                </Menu.Section>
                                <Menu.Item className="cursor-pointer hover:bg-neutral-100 hover:rounded-[0.5em] transition-all duration-200 ease-in-out" target="_blank" href="https://www.google.com/maps/place/Annecy/@45.8898726,6.0873037,13z/data=!3m1!4b1!4m6!3m5!1s0x478b8ffa1c0551c9:0x42781681620534ba!8m2!3d45.899247!4d6.129384!16zL20vMDJqc3I5?entry=ttu&g_ep=EgoyMDI1MDExNC4wIKXMDSoASAFQAw%3D%3D">
                                    {/* Location Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M14.75 10a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0Z"></path><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 10c0 5.028-4.965 9.537-6.678 10.942a.89.89 0 0 1-1.144 0C9.715 19.537 4.75 15.028 4.75 10a7.25 7.25 0 0 1 14.5 0Z"></path></svg>
                                    Annecy
                                </Menu.Item>
                                <Menu.Item className="cursor-pointer hover:bg-neutral-100 hover:rounded-[0.5em] transition-all duration-200 ease-in-out" target="_blank" href="https://www.google.com/calendar/render?action=TEMPLATE&text=Anniversaire+Fabian+Menoni+🗿&dates=20251118T120000Z/20251118T130000Z&details=Anniversaire+de+Fabian+Menoni&location=&sf=true&output=xml">
                                    {/* Birthday Cake Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 15.5v4.75a1 1 0 0 0 1 1h12.5a1 1 0 0 0 1-1V15.5M12 7.25a2.25 2.25 0 0 1-1.593-3.841l1.591-1.591 1.591 1.59A2.25 2.25 0 0 1 12 7.25m0 0v2.5m0 0H5.25a1 1 0 0 0-1 1v3.406a1 1 0 0 0 .521.878l1.726.942a1 1 0 0 0 .994-.02l1.495-.897a1 1 0 0 1 1.028 0l1.472.882a1 1 0 0 0 1.028 0l1.472-.883a1 1 0 0 1 1.028 0l1.495.897a1 1 0 0 0 .994.02l1.726-.94a1 1 0 0 0 .521-.879V10.75a1 1 0 0 0-1-1z"></path></svg>
                                    19 ans
                                </Menu.Item>
                                <Menu.Item className="cursor-pointer hover:bg-neutral-100 hover:rounded-[0.5em] transition-all duration-200 ease-in-out" target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn">
                                    {/* Chevrons Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9.75 20.25 4.5-16.5m4 4 3.355 3.565a1 1 0 0 1 0 1.37L18.25 16.25m-12.5 0-3.355-3.565a1 1 0 0 1 0-1.37L5.75 7.75"></path></svg>
                                    Fullstack
                                </Menu.Item>
                                <Menu.Separator />
                                <Menu.Item className="cursor-pointer hover:bg-neutral-100 hover:rounded-[0.5em] transition-all duration-200 ease-in-out" target="_blank" href="https://github.com/OmegazonCMoi">
                                    {/* GitHub Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 25" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path fill="currentColor" d="M12 2.7c5.525 0 10 4.476 10 10a10.02 10.02 0 0 1-6.813 9.488c-.5.1-.687-.212-.687-.475 0-.337.012-1.412.012-2.75 0-.937-.312-1.537-.675-1.85 2.226-.25 4.563-1.1 4.563-4.937 0-1.1-.387-1.988-1.025-2.688.1-.25.45-1.275-.1-2.65 0 0-.837-.275-2.75 1.025a9.3 9.3 0 0 0-2.5-.337c-.85 0-1.7.112-2.5.337-1.913-1.287-2.75-1.025-2.75-1.025-.55 1.375-.2 2.4-.1 2.65-.638.7-1.025 1.6-1.025 2.688 0 3.825 2.325 4.687 4.55 4.937-.287.25-.55.688-.637 1.338-.575.262-2.013.687-2.913-.825-.188-.3-.75-1.038-1.538-1.025-.837.012-.337.475.013.662.425.238.912 1.125 1.025 1.413.2.562.85 1.637 3.362 1.175 0 .837.013 1.625.013 1.862 0 .263-.188.563-.688.475A9.99 9.99 0 0 1 2 12.701c0-5.525 4.475-10 10-10Z"></path></svg>
                                    GitHub
                                </Menu.Item>
                                <Menu.Separator />
                                <Menu.Item className="cursor-pointer hover:bg-neutral-100 hover:rounded-[0.5em] transition-all duration-200 ease-in-out" target="_blank" href="mailto:zitoune69420@gmail.com">
                                    {/* Bubble Dots Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 12c0-5.156-3.792-8.25-9.75-8.25S2.25 6.844 2.25 12c0 1.337.92 3.605 1.064 3.952l.038.091c.099.27.505 1.71-1.102 3.84 2.167 1.031 4.468-.664 4.468-.664 1.592.84 3.486 1.031 5.282 1.031 5.958 0 9.75-3.094 9.75-8.25Z"></path><path fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth="0.5" d="M6.75 12a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm4.5 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm4.5 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg>
                                    Contact
                                </Menu.Item>
                                <Menu.Separator />
                                <Menu.Item className="cursor-pointer hover:bg-neutral-100 hover:rounded-[0.5em] transition-all duration-200 ease-in-out" target="_blank" href="https://www.google.com/maps/place/Annecy/@45.8898726,6.0873037,13z/data=!3m1!4b1!4m6!3m5!1s0x478b8ffa1c0551c9:0x42781681620534ba!8m2!3d45.899247!4d6.129384!16zL20vMDJqc3I5?entry=ttu&g_ep=EgoyMDI1MDExNC4wIKXMDSoASAFQAw%3D%3D">
                                    {/* Star Lines Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9.25 15.75-4.5 4.5m2.5-9.5-4.5 4.5m13.5.5-4.5 4.5m1.322-15.26-3.182.737a.5.5 0 0 0-.265.815l2.141 2.466a.5.5 0 0 1 .12.371l-.282 3.254a.5.5 0 0 0 .694.504l3.007-1.274a.5.5 0 0 1 .39 0l3.008 1.274a.5.5 0 0 0 .693-.504l-.283-3.254a.5.5 0 0 1 .12-.37l2.142-2.467a.5.5 0 0 0-.265-.815l-3.182-.737a.5.5 0 0 1-.315-.23l-1.685-2.798a.5.5 0 0 0-.856 0L13.387 4.76a.5.5 0 0 1-.315.23"></path></svg>
                                    Laisser un avis
                                </Menu.Item>
                            </Menu.Content>
                        </Menu>
                    </Navbar.Section>
                </Navbar.Nav>

                <Navbar.Compact>
                    <Navbar.Flex>
                        <Navbar.Trigger className="-ml-2" />
                        <Separator orientation="vertical" className="h-6 sm:mx-1" />
                        <Navbar.Logo
                            aria-label="Goto documenation of Navbar"
                            href="/"
                        >
                            <svg width="20" height="20" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_133_2)">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M50.7143 0H0.71429V50C0.71429 75.462 19.7466 96.4788 44.361 99.6002C19.4015 102.402 4.22025e-06 123.578 2.18557e-06 149.286L0 199.286H50C75.462 199.286 96.4788 180.253 99.6002 155.639C102.402 180.599 123.578 200 149.286 200H199.286V150C199.286 124.538 180.253 103.521 155.639 100.4C180.599 97.5984 200 76.422 200 50.7143V0.714286L150 0.714284C124.538 0.714282 103.521 19.7466 100.4 44.361C97.5984 19.4015 76.422 0 50.7143 0Z"
                                        fill="url(#paint0_linear_133_2)" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_133_2" x1="27.5" y1="19" x2="149" y2="174.5" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FFD9A0" />
                                        <stop offset="1" stopColor="#FFE5C2" />
                                    </linearGradient>
                                    <clipPath id="clip0_133_2">
                                        <rect width="200" height="200" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Navbar.Logo>
                    </Navbar.Flex>
                    <Navbar.Flex>
                        <Navbar.Flex>
                            <Button appearance="plain" className="hover:bg-neutral-150 hover:rounded-[0.5em] hover:py-3 hover:px-4" size="square-petite" aria-label="Search for products">
                                {/* Search Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m20.25 20.25-4.123-4.123m0 0A7.25 7.25 0 1 0 5.873 5.873a7.25 7.25 0 0 0 10.253 10.253Z"></path></svg>
                            </Button>
                            <Button appearance="plain" size="square-petite" aria-label="Your Bag">
                                {/* Bag Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M15.25 7.75V6a3.25 3.25 0 0 0-6.5 0v1.75m-3.34 13.5h13.18a1 1 0 0 0 .99-1.146l-1.704-11.5a1 1 0 0 0-.99-.854H7.113a1 1 0 0 0-.99.853l-1.703 11.5a1 1 0 0 0 .99 1.147Z"></path></svg>
                            </Button>
                        </Navbar.Flex>
                        <Separator orientation="vertical" color="light" className="mr-3 ml-1 h-6" />
                        <UserMenu />
                    </Navbar.Flex>
                </Navbar.Compact>

                <Navbar.Inset>{children}</Navbar.Inset>
            </Navbar>


            <CommandMenu isOpen={isOpen} onOpenChange={setIsOpen}>
                <CommandMenu.Input placeholder="Search for products" />
                <CommandMenu.Section>
                    <CommandMenu.Item>
                        {/* Person Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 6.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM12 13.25c-3.796 0-6.566 2.524-7.328 5.916-.13.575.337 1.084.926 1.084h12.804c.589 0 1.056-.51.926-1.084-.762-3.393-3.532-5.916-7.328-5.916Z"></path></svg>
                        Présentation
                    </CommandMenu.Item>
                    <CommandMenu.Item>
                        {/* Box Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12v8.5m0-8.5L4.5 7.781m7.5 4.22 7.263-4.086m.987.03v8.11a1 1 0 0 1-.51.872l-7.25 4.079a1 1 0 0 1-.98 0l-7.25-4.079a1 1 0 0 1-.51-.871V7.944a1 1 0 0 1 .51-.871l7.25-4.078a1 1 0 0 1 .98 0l7.25 4.078a1 1 0 0 1 .51.871Z"></path></svg>
                        Projets
                    </CommandMenu.Item>
                    <CommandMenu.Item>
                        {/* Paper Plane Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M9 11.75 1.966 5.497c-.687-.61-.255-1.747.664-1.747h18.65a1 1 0 0 1 .868 1.495l-9.146 16.039c-.45.79-1.636.617-1.843-.269zm0 0L22.586 4"></path></svg>
                        Contact
                    </CommandMenu.Item>
                </CommandMenu.Section>
                <CommandMenu.Separator className="mb-2" />
                <CommandMenu.Section>
                    <CommandMenu.Item>
                        {/* Star Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.55 2.033a.5.5 0 0 1 .9 0l2.569 5.354a.5.5 0 0 0 .385.279l5.911.775a.497.497 0 0 1 .278.855l-4.322 4.082a.5.5 0 0 0-.148.452l1.086 5.83a.499.499 0 0 1-.729.529l-5.242-2.83a.5.5 0 0 0-.476 0l-5.242 2.83a.499.499 0 0 1-.729-.529l1.086-5.83a.5.5 0 0 0-.148-.453L2.407 9.296a.497.497 0 0 1 .278-.855l5.91-.775a.5.5 0 0 0 .386-.279z"></path></svg>
                        Laisser un avis
                    </CommandMenu.Item>
                    <CommandMenu.Item>
                        {/* Exclamation Triangle Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 25 25" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12.5 9.5v4M9.95 5.126 3.58 15.422C2.345 17.421 3.783 20 6.133 20h12.735c2.35 0 3.787-2.58 2.551-4.578L15.052 5.126c-1.173-1.896-3.929-1.896-5.102 0Z"></path><path fill="currentColor" d="M12.5 17.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path></svg>
                        Signaler un problème
                    </CommandMenu.Item>
                </CommandMenu.Section>
            </CommandMenu>
        </>
    )
}

function UserMenu() {
    return (
        <Menu>
            <Menu.Trigger aria-label="Open Menu">
                <Avatar alt="cobain" size="small" shape="square" src="https://randomuser.me/api/portraits/men/18.jpg" />
            </Menu.Trigger>
            <Menu.Content placement="top right" className="w-60 bg-neutral-100">
                <Menu.Section>
                    <Menu.Header separator>
                        <span className="block">Fabian Menoni</span>
                        <span className="font-normal text-muted-fg">2ème année BTS SIO</span>
                    </Menu.Header>
                </Menu.Section>
                <Menu.Item className="cursor-pointer hover:bg-neutral-100 hover:rounded-[0.5em] transition-all duration-200 ease-in-out" target="_blank" href="https://www.google.com/maps/place/Annecy/@45.8898726,6.0873037,13z/data=!3m1!4b1!4m6!3m5!1s0x478b8ffa1c0551c9:0x42781681620534ba!8m2!3d45.899247!4d6.129384!16zL20vMDJqc3I5?entry=ttu&g_ep=EgoyMDI1MDExNC4wIKXMDSoASAFQAw%3D%3D">
                    {/* Location Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M14.75 10a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0Z"></path><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 10c0 5.028-4.965 9.537-6.678 10.942a.89.89 0 0 1-1.144 0C9.715 19.537 4.75 15.028 4.75 10a7.25 7.25 0 0 1 14.5 0Z"></path></svg>
                    Annecy
                </Menu.Item>
                <Menu.Item className="cursor-pointer hover:bg-neutral-100 hover:rounded-[0.5em] transition-all duration-200 ease-in-out" target="_blank" href="https://www.google.com/calendar/render?action=TEMPLATE&text=Anniversaire+Fabian+Menoni+🗿&dates=20251118T120000Z/20251118T130000Z&details=Anniversaire+de+Fabian+Menoni&location=&sf=true&output=xml">
                    {/* Birthday Cake Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 15.5v4.75a1 1 0 0 0 1 1h12.5a1 1 0 0 0 1-1V15.5M12 7.25a2.25 2.25 0 0 1-1.593-3.841l1.591-1.591 1.591 1.59A2.25 2.25 0 0 1 12 7.25m0 0v2.5m0 0H5.25a1 1 0 0 0-1 1v3.406a1 1 0 0 0 .521.878l1.726.942a1 1 0 0 0 .994-.02l1.495-.897a1 1 0 0 1 1.028 0l1.472.882a1 1 0 0 0 1.028 0l1.472-.883a1 1 0 0 1 1.028 0l1.495.897a1 1 0 0 0 .994.02l1.726-.94a1 1 0 0 0 .521-.879V10.75a1 1 0 0 0-1-1z"></path></svg>
                    19 ans
                </Menu.Item>
                <Menu.Item className="cursor-pointer hover:bg-neutral-100 hover:rounded-[0.5em] transition-all duration-200 ease-in-out" target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn">
                    {/* Chevrons Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9.75 20.25 4.5-16.5m4 4 3.355 3.565a1 1 0 0 1 0 1.37L18.25 16.25m-12.5 0-3.355-3.565a1 1 0 0 1 0-1.37L5.75 7.75"></path></svg>
                    Fullstack
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item className="cursor-pointer hover:bg-neutral-100 hover:rounded-[0.5em] transition-all duration-200 ease-in-out" target="_blank" href="https://github.com/OmegazonCMoi">
                    {/* GitHub Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 25" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path fill="currentColor" d="M12 2.7c5.525 0 10 4.476 10 10a10.02 10.02 0 0 1-6.813 9.488c-.5.1-.687-.212-.687-.475 0-.337.012-1.412.012-2.75 0-.937-.312-1.537-.675-1.85 2.226-.25 4.563-1.1 4.563-4.937 0-1.1-.387-1.988-1.025-2.688.1-.25.45-1.275-.1-2.65 0 0-.837-.275-2.75 1.025a9.3 9.3 0 0 0-2.5-.337c-.85 0-1.7.112-2.5.337-1.913-1.287-2.75-1.025-2.75-1.025-.55 1.375-.2 2.4-.1 2.65-.638.7-1.025 1.6-1.025 2.688 0 3.825 2.325 4.687 4.55 4.937-.287.25-.55.688-.637 1.338-.575.262-2.013.687-2.913-.825-.188-.3-.75-1.038-1.538-1.025-.837.012-.337.475.013.662.425.238.912 1.125 1.025 1.413.2.562.85 1.637 3.362 1.175 0 .837.013 1.625.013 1.862 0 .263-.188.563-.688.475A9.99 9.99 0 0 1 2 12.701c0-5.525 4.475-10 10-10Z"></path></svg>
                    GitHub
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item className="cursor-pointer hover:bg-neutral-100 hover:rounded-[0.5em] transition-all duration-200 ease-in-out" target="_blank" href="mailto:zitoune69420@gmail.com">
                    {/* Bubble Dots Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 12c0-5.156-3.792-8.25-9.75-8.25S2.25 6.844 2.25 12c0 1.337.92 3.605 1.064 3.952l.038.091c.099.27.505 1.71-1.102 3.84 2.167 1.031 4.468-.664 4.468-.664 1.592.84 3.486 1.031 5.282 1.031 5.958 0 9.75-3.094 9.75-8.25Z"></path><path fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth="0.5" d="M6.75 12a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm4.5 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm4.5 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg>
                    Contact
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item className="cursor-pointer hover:bg-neutral-100 hover:rounded-[0.5em] transition-all duration-200 ease-in-out" target="_blank" href="https://www.google.com/maps/place/Annecy/@45.8898726,6.0873037,13z/data=!3m1!4b1!4m6!3m5!1s0x478b8ffa1c0551c9:0x42781681620534ba!8m2!3d45.899247!4d6.129384!16zL20vMDJqc3I5?entry=ttu&g_ep=EgoyMDI1MDExNC4wIKXMDSoASAFQAw%3D%3D">
                    {/* Star Lines Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="justd-icons size-4" data-slot="icon" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9.25 15.75-4.5 4.5m2.5-9.5-4.5 4.5m13.5.5-4.5 4.5m1.322-15.26-3.182.737a.5.5 0 0 0-.265.815l2.141 2.466a.5.5 0 0 1 .12.371l-.282 3.254a.5.5 0 0 0 .694.504l3.007-1.274a.5.5 0 0 1 .39 0l3.008 1.274a.5.5 0 0 0 .693-.504l-.283-3.254a.5.5 0 0 1 .12-.37l2.142-2.467a.5.5 0 0 0-.265-.815l-3.182-.737a.5.5 0 0 1-.315-.23l-1.685-2.798a.5.5 0 0 0-.856 0L13.387 4.76a.5.5 0 0 1-.315.23"></path></svg>
                    Laisser un avis
                </Menu.Item>
            </Menu.Content>
        </Menu>
    )
}
