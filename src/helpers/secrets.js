import crypto from "crypto"
const key= crypto.randomBytes(16).toString("hex")
console.log(`Generated Key:${key}`) //genereates buffer..