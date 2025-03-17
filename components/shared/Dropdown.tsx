import React from 'react'
import { DropdownMenu, DropdownMenuGroup } from '../ui/dropdown-menu'
import {
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { Button } from '../ui/button'
import { Languages } from 'lucide-react'
import Image from 'next/image'
import { lngs } from '@/constans'

const Dropdown = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='ghost' size={'icon'}>
					<Languages />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56'>
				<DropdownMenuGroup className='mt-2 rounded-md border p-3'>
					{lngs.map(item => {
						return (
							<DropdownMenuItem
								className='mb-[2px] flex w-full cursor-pointer items-center rounded-lg p-2 hover:border-none hover:bg-slate-800'
								key={item.route}
							>
								<Image
									src={`/assets/${item.route}.png`}
									alt='ad'
									width={30}
									height={30}
								/>
								<span className='ml-2 font-space-grotesk font-medium'>
									{item.label}
								</span>
							</DropdownMenuItem>
						)
					})}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default Dropdown
