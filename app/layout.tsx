import type { Metadata } from 'next'
import './globals.css'
import { ChildProps } from '@/types'
import { Roboto, Space_Grotesk as spaceGrotesk } from 'next/font/google'
import { ThemeProvider } from '@/components/provider/themeprovider'
const roboto = Roboto({
	subsets: ['latin', 'cyrillic'],
	weight: ['100', '300', '400', '500', '700', '900'],
	variable: '--font-roboto',
})
const SpaceGrotesk = spaceGrotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-space-grotesk',
})
export const metadata: Metadata = {
	title: 'Startup-Praktikum NextJS',
	description: 'Startup-Praktikum NextJS project',
  icons:['./logo.svg']
}

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${roboto.variable} ${SpaceGrotesk.variable} antialiased`} 
        suppressHydrationWarning
			>
				 <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
			</body>
		</html>
	)
}
export default RootLayout
