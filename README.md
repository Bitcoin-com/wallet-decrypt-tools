# Bitcoin.com wallet backup decryption tools

Tools to decrypt the bitcoin.com wallet.

**Never share your recovery phrase or wallet.data with anyone you do not trus**

**Bitcoin.com will never ask you for your recovery phrase or password**

---

## Usage
### Browser decrypt

In-browser decryption tool.

1. Open `dist/index.html` in a web browser
2. Select wallet backup file (`wallet.data`)
3. Enter password
4. Click decrypt button

### NodeJS decrypt

Use NodeJS to decrypt wallet.

1. Clone this repo.
2. Run `yarn install` or `npm install`
3. Copy wallet backup file to root directory (same place as this readme file)
4. Edit `password.txt` with your password
5. Run `yarn decrypt` or `npm run decrypt`