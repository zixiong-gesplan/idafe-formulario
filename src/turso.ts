import { createClient } from "@libsql/client/web";

export const turso = createClient({
  url: import.meta.env.TURSO_DATABASE_URL || "libsql://idafe-zixiong.aws-eu-west-1.turso.io",
  authToken: import.meta.env.TURSO_AUTH_TOKEN || "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJnaWQiOiI1NTEyNDI2Mi03MGQ2LTRmZjUtYmEwNC03NGQ3MGMxYjQzN2EiLCJpYXQiOjE3NDg1MDQ1MzcsInJpZCI6IjM4YzU2NmIyLTg5YWMtNDZkOS05ODJkLTk0NmRkZThiZmY1ZCJ9.riXVKtk6CLzPUDMzA75QQsCV04-vhjz0sRmTbAXQ6Eaf4eXWLKTFPET00pp242quUeO7PHF_lUtIdNthDBsxAw",
});
