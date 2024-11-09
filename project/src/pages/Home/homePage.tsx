import { Link } from "react-router-dom"


export default function HomePage() {
      return(
        <div className="font-mono mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-primary-600 hover:ring-primary dark:text-white">
              De nouvelles Technologies de pointe pour vous aider.{' '}
              <Link to="/features"  className="font-semibold text-primary-600">
                <span aria-hidden="true" className="absolute inset-0" />
                En savoir plus<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl dark:text-gray-400">
              L'Application qui Maha lasa Propla be leka
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-800 dark:text-gray-700">
              Une approche novatrice pour résoudre ta faiblesses grand mon gars , massage avec finition pour les gagnaat
              
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6"> 
              <Link to="/signin"
                className="rounded-md bg-transparent border border-primary-600 duration-300 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-gray-900 hover:text-gray-50 hover:border-gray-900 dark:text-primary-600 dark:hover:text-gray-50 dark:hover:border-gray-50"
              >
                Commencer !
              </Link>
            </div>
            
          </div>
        </div>
      )
}