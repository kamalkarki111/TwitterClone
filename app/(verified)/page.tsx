import CreatePost from '@/components/tweet/create-tweet.component'
import TwitterPost from '@/components/tweet/tweet-post.component'
import HomeComp from '@/components/tweet/home.component'
import Image from 'next/image'
import SessionProvid from '@/contexts/sessionProvder'

export default function Home() {
  return (
    <SessionProvid>
      <div className="w-3/5 border border-gray-600 h-auto  border-t-0">
        <HomeComp></HomeComp>
        <hr className="border-gray-600"></hr>
        <CreatePost></CreatePost>
        <hr className="border-blue-800 border-4"></hr>
        <TwitterPost></TwitterPost>
      </div>
    </SessionProvid>
    
  )
}
