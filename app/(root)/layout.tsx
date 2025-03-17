import React from 'react'
import Navbar from './_components/Navbar'
import { ChildProps } from '@/types'

const layout = ({children}:ChildProps) => {
	return <div>
		<header>
			<Navbar/>
		</header>
		<main>
			{children}
		</main>
	</div>
}

export default layout
