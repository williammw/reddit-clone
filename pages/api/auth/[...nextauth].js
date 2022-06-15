import NextAuth from "next-auth"
import RedditProvider from "next-auth/providers/reddit"


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    RedditProvider({
      clientId: "rrT_kkrhtxkxtiHkwR2g8A",
      clientSecret:"jIzQ0IH1KtlmKNX0qElxjI33ld1dTQ"
    }),
  ]
})