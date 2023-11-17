import './globals.css'
import { getServerSession } from 'next-auth'
import Login from '@/components/page';
import { authOptions } from './api/auth/[...nextauth]/route';


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions);
  console.log('ss',session)

  return (
    <html lang="en " className='h-full'>
      <body className={'h-full'}>
        <div className="bg-blue-900 h-full">
            {session !== null && children}
            {session === null && <Login/>}
        </div>
      </body>
    </html>
  )
}
