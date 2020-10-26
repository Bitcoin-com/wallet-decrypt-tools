const fs = require("fs");
const crypto = require("crypto");

const file = fs.readFileSync(__dirname + "/wallet.data", "utf-8");
const PASSWORD = fs.readFileSync(__dirname + "/password.txt", "utf-8");

const CIPHER_TYPE = "aes-256-gcm";

function decipherWallet(content, password) {
  // convert file contents to buffer
  const hexContent = Buffer.from(content, "hex");

  // extract IV/nonce
  const iv = hexContent.slice(0, 12);

  // extract cypher text
  const cipherText = hexContent.slice(12, hexContent.length - 16);

  // extract auth tag
  const authTag = hexContent.slice(hexContent.length - 16);

  // create sha256 hash of password
  const key = crypto.createHash("sha256").update(password).digest();

  // create decipher
  const decipher = crypto
    .createDecipheriv(CIPHER_TYPE, key, iv)
    .setAuthTag(authTag);

  // decode ciphertext
  const decoded = decipher.update(cipherText, "hex", "utf8");

  // parse string to json
  const final = JSON.parse(decoded + decipher.final("utf8"));

  return final;
}

console.log(decipherWallet(file, PASSWORD));
