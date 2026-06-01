import { createClient } from "@libsql/client/web";

export const turso = createClient({
  url: import.meta.env.TURSO_DATABASE_URL || "libsql://idafe-zixiong.aws-eu-west-1.turso.io",
  authToken: import.meta.env.TURSO_AUTH_TOKEN || "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJleHAiOjE3ODI5MTgxNjgsImlhdCI6MTc4MDMyNjE2OCwiaWQiOiI4NjBkOTcyMS00ZTRkLTRhODQtYWZiOC0yMDYzMGRjMTJmNzYiLCJyaWQiOiI0NTYxYzZmZi1jZTY3LTQwZGYtYjM2MC03NDVjYjk2YmRiNzYifQ.3ix1wc3i4KgmA9XeaWEXZZLcRu_qN1HUQOJfMrNReKaoIK09D7fRfd9IuMePzd_Spbapwt1YvHLxozcEjgFNAg",
});
