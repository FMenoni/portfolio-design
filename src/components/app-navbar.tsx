"use client"

import {
    IconBirthdayCake,
    IconBrandGithub,
    IconCodeBrackets,
    IconCube,
    IconFolders,
    IconLocation,
    IconMessageDots,
    IconPerson,
    IconSearch,
    IconSearchSketchbook,
    IconSend3,
    IconShoppingBag,
    IconStar,
    IconStarLines,
    IconTriangleExclamation,
} from "justd-icons"
import Image from "next/image"
import { useState } from "react";
import { Avatar, Button, CommandMenu, Menu, Navbar, Separator } from "ui"

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
                            <IconPerson /> Présentation
                        </Navbar.Item>
                        <Navbar.Item
                            href="/projects"
                            className="py-2 px-3 bg-transparent rounded-[0.5em] transition-all duration-200 ease-in-out hover:py-3 hover:px-4 hover:bg-neutral-150">
                            <IconFolders /> Projets
                        </Navbar.Item>
                        <Navbar.Item
                            href="/working"
                            className="py-2 px-3 bg-transparent rounded-[0.5em] transition-all duration-200 ease-in-out hover:py-3 hover:px-4 hover:bg-neutral-150">
                            <IconSearchSketchbook /> Veille Technologique
                        </Navbar.Item>
                        <Navbar.Item
                            href="/working"
                            className="py-2 px-3 bg-transparent rounded-[0.5em] transition-all duration-200 ease-in-out hover:py-3 hover:px-4 hover:bg-neutral-150">
                            <IconStar /> Avis
                        </Navbar.Item>
                    </Navbar.Section>
                    <Navbar.Section className="ml-auto hidden sm:flex">
                        <Navbar.Flex>
                            <Button appearance="plain" size="square-petite" aria-label="Search for products" className="cursor-default rounded-[0.5em]" onPress={() => setIsOpen(true)}>
                                <IconSearch className="hover:-rotate-12 hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer" />
                            </Button>
                            <Button appearance="plain" size="square-petite" aria-label="Search for products" className="cursor-default rounded-[0.5em]">
                                <IconShoppingBag className="cursor-pointer hover:-rotate-12 hover:scale-110 transition-all duration-200 ease-in-out" />
                            </Button>
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
                                    <IconLocation />
                                    Annecy
                                </Menu.Item>
                                <Menu.Item className="cursor-pointer hover:bg-neutral-100 hover:rounded-[0.5em] transition-all duration-200 ease-in-out" target="_blank" href="https://www.google.com/calendar/render?action=TEMPLATE&text=Anniversaire+Fabian+Menoni+🗿&dates=20251118T120000Z/20251118T130000Z&details=Anniversaire+de+Fabian+Menoni&location=&sf=true&output=xml">
                                    <IconBirthdayCake />
                                    19 ans
                                </Menu.Item>
                                <Menu.Item className="cursor-pointer hover:bg-neutral-100 hover:rounded-[0.5em] transition-all duration-200 ease-in-out" target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn">
                                    <IconCodeBrackets />
                                    Fullstack
                                </Menu.Item>
                                <Menu.Separator />
                                <Menu.Item className="cursor-pointer hover:bg-neutral-100 hover:rounded-[0.5em] transition-all duration-200 ease-in-out" target="_blank" href="https://github.com/OmegazonCMoi">
                                    <IconBrandGithub />
                                    GitHub
                                </Menu.Item>
                                <Menu.Separator />
                                <Menu.Item className="cursor-pointer hover:bg-neutral-100 hover:rounded-[0.5em] transition-all duration-200 ease-in-out" target="_blank" href="mailto:zitoune69420@gmail.com">
                                    <IconMessageDots />
                                    Contact
                                </Menu.Item>
                                <Menu.Separator />
                                <Menu.Item className="cursor-pointer hover:bg-neutral-100 hover:rounded-[0.5em] transition-all duration-200 ease-in-out" target="_blank" href="https://www.google.com/maps/place/Annecy/@45.8898726,6.0873037,13z/data=!3m1!4b1!4m6!3m5!1s0x478b8ffa1c0551c9:0x42781681620534ba!8m2!3d45.899247!4d6.129384!16zL20vMDJqc3I5?entry=ttu&g_ep=EgoyMDI1MDExNC4wIKXMDSoASAFQAw%3D%3D">
                                    <IconStarLines />
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
                                <IconSearch />
                            </Button>
                            <Button appearance="plain" size="square-petite" aria-label="Your Bag">
                                <IconShoppingBag />
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
                        <IconPerson />
                        Présentation
                    </CommandMenu.Item>
                    <CommandMenu.Item>
                        <IconCube />
                        Projets
                    </CommandMenu.Item>
                    <CommandMenu.Item>
                        <IconSend3 />
                        Contact
                    </CommandMenu.Item>
                </CommandMenu.Section>
                <CommandMenu.Separator className="mb-2" />
                <CommandMenu.Section>
                    <CommandMenu.Item>
                        <IconStar />
                        Laisser un avis
                    </CommandMenu.Item>
                    <CommandMenu.Item>
                        <IconTriangleExclamation />
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
                    <IconLocation />
                    Annecy
                </Menu.Item>
                <Menu.Item className="cursor-pointer hover:bg-neutral-100 hover:rounded-[0.5em] transition-all duration-200 ease-in-out" target="_blank" href="https://www.google.com/calendar/render?action=TEMPLATE&text=Anniversaire+Fabian+Menoni+🗿&dates=20251118T120000Z/20251118T130000Z&details=Anniversaire+de+Fabian+Menoni&location=&sf=true&output=xml">
                    <IconBirthdayCake />
                    19 ans
                </Menu.Item>
                <Menu.Item className="cursor-pointer hover:bg-neutral-100 hover:rounded-[0.5em] transition-all duration-200 ease-in-out" target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn">
                    <IconCodeBrackets />
                    Fullstack
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item className="cursor-pointer hover:bg-neutral-100 hover:rounded-[0.5em] transition-all duration-200 ease-in-out" target="_blank" href="https://github.com/OmegazonCMoi">
                    <IconBrandGithub />
                    GitHub
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item className="cursor-pointer hover:bg-neutral-100 hover:rounded-[0.5em] transition-all duration-200 ease-in-out" target="_blank" href="mailto:zitoune69420@gmail.com">
                    <IconMessageDots />
                    Contact
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item className="cursor-pointer hover:bg-neutral-100 hover:rounded-[0.5em] transition-all duration-200 ease-in-out" target="_blank" href="https://www.google.com/maps/place/Annecy/@45.8898726,6.0873037,13z/data=!3m1!4b1!4m6!3m5!1s0x478b8ffa1c0551c9:0x42781681620534ba!8m2!3d45.899247!4d6.129384!16zL20vMDJqc3I5?entry=ttu&g_ep=EgoyMDI1MDExNC4wIKXMDSoASAFQAw%3D%3D">
                    <IconStarLines />
                    Laisser un avis
                </Menu.Item>
            </Menu.Content>
        </Menu>
    )
}
