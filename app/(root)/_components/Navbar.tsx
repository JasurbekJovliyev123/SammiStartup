import Logo from '@/components/shared/logo'
import ModeToggle from '@/components/shared/modtoogle'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/constans'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import GlobalSearch from './globalsearch'
import Dropdown from '@/components/shared/Dropdown'

const Navbar = () => {
	return (
		<div className='fixed inset-0 z-40 h-20 bg-background/70 backdrop-blur-xl'>
			<div className='container mx-auto flex h-full max-w-7xl items-center justify-between border-b'>
				<div className='flex items-center gap-4'>
					<Logo />
					<div className='flex items-center gap-4 border-l pl-2'>
						{navLinks.map(nav => {
							return (
								<Link
									href={`/${nav.route}`}
									key={nav.route}
									className='font-medium transition-all hover:text-blue-500 hover:underline'
								>
									{nav.name}
								</Link>
							)
						})}
					</div>
				</div>
				<div className='flex items-center gap-2'>
					<div className='flex items-center gap-2 border-r pr-3'>
            <GlobalSearch/>
            <Dropdown/>
            <Button size={'icon'} variant={"ghost"}>
               <ShoppingCart/>
            </Button>
             <ModeToggle/>
          </div>
					<Button variant={'ghost'} size={'lg'} className='rounded-full'>
						Log in
					</Button>
					<Button size={'lg'} className='rounded-full'>
						Sign Up
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Navbar
