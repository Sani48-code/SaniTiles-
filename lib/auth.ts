import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

function buildAuth() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI environment variable is not set");
  }

  const client = new MongoClient(uri);

  return betterAuth({
    database: mongodbAdapter(client.db()),
    secret: process.env.BETTER_AUTH_SECRET ?? "dev-secret-key",
    baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL ?? "http://localhost:3000",
    emailAndPassword: {
      enabled: true,
      autoSignIn: true,
    },
    socialProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      },
    },
  });
}

type AuthInstance = ReturnType<typeof buildAuth>;

let _auth: AuthInstance | null = null;

export function getAuth(): AuthInstance {
  if (!_auth) _auth = buildAuth();
  return _auth!;
}

export const auth = getAuth();

export type Session = AuthInstance["$Infer"]["Session"];
