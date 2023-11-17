/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXTAUTH_SECRET:"say_lalisa_love_me_lalisa_love_me_hey",
      },
      images:{
        domains:['lh3.googleusercontent.com','pbs.twimg.com']
      }

}

module.exports = nextConfig
