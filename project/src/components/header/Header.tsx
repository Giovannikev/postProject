'use client'
// composant PopoverModal
import PopoverModal from "@/components/header/popover"
import { HiMiniSun, HiMoon  } from "react-icons/hi2";


import { motion } from "framer-motion"
import { useEffect, useState } from 'react'
import {
  Bars3Icon
} from '@heroicons/react/24/outline'

// animation logo 

import {
   Dialog,
   DialogPanel,
   Disclosure,
   DisclosureButton,
   DisclosurePanel,
} from '@headlessui/react'
import {
   ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link } from "react-router-dom"


//liste popover 
const logo = {
   hidden : {
      pathLength: 0,
      fill: "rgba(17, 24, 39, 0)"
   },
   visible: {
      pathLength: 1,
      fill: "rgba(17, 24, 39, 1)"
   }
 }
const products = [
   { name: 'Analytics', description: '', href: '#', icon: ChartPieIcon },
   { name: 'Engagement', description: '', href: '#', icon: CursorArrowRaysIcon },
   { name: 'Security', description: '', href: '#', icon: FingerPrintIcon },
   { name: 'Integrations', description: '', href: '#', icon: SquaresPlusIcon },      { name: 'Automations', description: '', href: '#', icon: ArrowPathIcon },
]

const callsToAction = [
   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
   { name: 'Contact sales', href: '#', icon: PhoneIcon },
]
    


export default function Header() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
   
   
   const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

  return (
   <header>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between lg:px-8">
         <Link to="/Home" className="items-center justify-center p-6 flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="size-10  cursor-pointer">
               <motion.path 
                  variants={logo} 
                  initial="hidden" 
                  animate="visible" 
                  transition={
                     {
                        duration : 2,
                        ease: "easeIn",
                        repeat: Infinity,
                        repeatType: "reverse",
                     }
                  }
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
         </Link>
         
         <div className="flex lg:hidden">
            <button
               type="button"
               onClick={() => setMobileMenuOpen(true)}
               className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary"
            >
               <span className="sr-only">Open main menu</span>
               <Bars3Icon aria-hidden="true" className="h-8 w-8 mr-5" />
            </button>
         </div>
         
         <PopoverModal/>
         
         <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
            <Link to="/register/SignIn" className="text-sm/6 font-bold text-gray-900 border-2 border-black rounded-md px-3 py-2.5 hover:bg-black hover:text-white dark:border-gray-50 dark:border dark:text-gray-50 dark:hover:bg-transparent">
               Sign in <span aria-hidden="true">&rarr;</span>
            </Link>
            
            
            
         </div>
            <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="px-4 py-2 bg-transparent text-black rounded-lg items-center justify-center dark:text-white"
            >
               { isDarkMode ? <HiMiniSun /> : <HiMoon />}
            </button>
         
      </nav>
      
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden"> 
         <div className="fixed inset-0 z-10" />
            <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
               <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                     <span className="sr-only">Your Company</span>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="size-10">
                        <path 
                           d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                     </svg>
                  </a>
                     
                  <button
                     type="button"
                     onClick={() => setMobileMenuOpen(false)}
                     className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  >
                     <span className="sr-only">Close menu</span>
                     <XMarkIcon aria-hidden="true" className="h-6 w-6 text-primary-600" />
                  </button>
               </div>
                  
                  
               <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                     <div className="space-y-2 py-6">
                        <Disclosure as="div" className="-mx-3">
                           <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                             Product
                              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                           </DisclosureButton>
                           
                           <DisclosurePanel className="mt-2 space-y-2">
                             {[...products, ...callsToAction].map((item) => (
                              <DisclosureButton
                                 key={item.name}
                                 as="a"
                                 href={item.href}
                                 className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                              >
                                 {item.name}
                              </DisclosureButton>
                             ))}
                           </DisclosurePanel>
                        </Disclosure>
                        <a
                           href="#"
                           className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                           Features
                        </a>
                        <a
                           href="#"
                           className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                           Marketplace
                        </a>
                        <a
                           href="#"
                           className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                           Company
                        </a>
                     </div>
                     
                     <div className="py-6">
                        <a
                           href="#"
                           className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                           Log in
                        </a>
                     </div>
                  </div>
               </div>
         </DialogPanel>
      </Dialog>
   </header>
  )
}