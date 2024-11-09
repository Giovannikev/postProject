import {
Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
      ArrowPathIcon,
      ChartPieIcon,
      CursorArrowRaysIcon,
      FingerPrintIcon,
      SquaresPlusIcon,
    } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'


const products = [
      { name: 'Analytics', description: 'Analisations de tsaiko', href: '#', icon: ChartPieIcon },
      { name: 'Engagement', description: 'Engagement de tsaiko iany koa', href: '#', icon: CursorArrowRaysIcon },
      { name: 'Security', description: 'tode voaharo elah ral', href: '#', icon: FingerPrintIcon },
      { name: 'Integrations', description: 'de tsaiko ehh', href: '#', icon: SquaresPlusIcon },
      { name: 'Automations', description: 'vitany atram manala ny mony anlah', href: '#', icon: ArrowPathIcon },
    ]
const callsToAction = [
      { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
      { name: 'Contact sales', href: '#', icon: PhoneIcon },
    ]
    
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

export default function PopoverModal() {
      return(
            <PopoverGroup className="hidden lg:flex lg:gap-x-12 ml-60 ">
               <a href="#" className="text-sm/6 font-semibold text-gray-900  dark:text-gray-50">
                     Features
                  </a>
                  <Popover className="relative ">
                     <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 focus:outline-none  dark:text-gray-50">
                     Product
                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-primary-600" />
                     </PopoverButton>

                     <PopoverPanel
                       transition
                       className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                     >
                     <motion.div className="p-4" 
                        variants={container}
                        initial="hidden"
                        animate="visible">
                        {products.map((item) => (
                           <div
                              key={item.name}
                              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                           >
                           <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-primary-600" />
                           </div>
                          <div className="flex-auto">
                            <a href={item.href} className="block font-semibold text-gray-900">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                     </motion.div>
                     
                     
                     <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        {callsToAction.map((item) => (
                           <a
                             key={item.name}
                             href={item.href}
                             className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                           >
                             <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-primary-600" />
                             {item.name}
                           </a>
                        ))}
                     </div>
                     </PopoverPanel>
                  </Popover>

                  
                  <a href="#" className="text-sm/6 font-semibold text-gray-900  dark:text-gray-50">
                     Marketplace
                  </a>
                  <a href="#" className="text-sm/6 font-semibold text-gray-900  dark:text-gray-50">
                     Company
                  </a>
            </PopoverGroup>
         
      )
}