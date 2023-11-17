
import { app, firestore } from "@/lib/firebase";
import { supabase } from "@/lib/superbase";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import { doc, getDoc, setDoc } from "firebase/firestore";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions:any =  {
    providers:[GoogleProvider({
        clientId:'358744646323-lkvbikceb1o9frciq3oov3fn2qn3uh3i.apps.googleusercontent.com',
        clientSecret:'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'
    })],
    adapter: SupabaseAdapter({
        url: 'https://efbptbzminacsvkbvcrm.supabase.co',
        secret: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmYnB0YnptaW5hY3N2a2J2Y3JtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTg2OTAyMiwiZXhwIjoyMDE1NDQ1MDIyfQ.kSvwohxFKMvpvLXWuSyOXbd-8UOilZRtZFQH-Y9kRPk'
      }),
      callbacks: {
        async session(session:any, user:any) {
    
          return session;
        },
    }
    
};

const handler = NextAuth(authOptions);



export {handler as GET,handler as POST}