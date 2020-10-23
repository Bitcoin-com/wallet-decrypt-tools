import "regenerator-runtime/runtime";
import "./style.css";
import bops from "bops";

const passDiv = document.getElementById("password");
const passError = document.getElementById("password-error");
const fileDiv = document.getElementById("file");
const fileError = document.getElementById("file-error");
const walletsDiv = document.getElementById("wallets");
const decodeError = document.getElementById("error");
const submitButton = document.getElementById("submit");
const formElement = document.getElementById("form");
let fileContent = "";

async function decipherWallet(ev) {
  try {
    const hexContent = bops.from(fileContent, "hex");
    const password = passDiv.value;
    const iv = hexContent.slice(0, 12);
    const cipherText = hexContent.slice(12);
    const hash = await crypto.subtle.digest("SHA-256", bops.from(password));
    const key = await crypto.subtle.importKey("raw", hash, "AES-GCM", true, [
      "decrypt",
    ]);
    const decipher = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv },
      key,
      cipherText
    );

    const decoded = new TextDecoder().decode(decipher);

    return JSON.parse(decoded);
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function loadFile(ev) {
  const file = ev.target.files[0];
  fileError.innerHTML = "";
  if (!file) {
    fileError.innerHTML = "No file";
    return;
  }
  const reader = new FileReader();
  reader.onerror = () => (fileError.innerHTML = "Error reading file");
  reader.onload = (ev) => (fileContent = ev.target.result);
  reader.readAsText(file);
}

function handleSubmit(ev) {
  ev.preventDefault();
  if (!fileDiv.files[0]) {
    fileError.innerHTML = "Must load file";
  }
  if (!passDiv.value) {
    passError.innerHTML = "Must have password";
  }

  if (!passDiv.value || !fileDiv.files[0]) return;

  decipherWallet().then((res) => {
    console.log(res);
    if (!res) {
      decodeError.innerHTML = "Something went wrong, try again";
      return;
    }
    if (res.wallets.length > 0) {
      walletsDiv.style.display = "block";
      walletsDiv.innerHTML = `<h2>Wallets</h2>`;
      walletsDiv.innerHTML += `
          <div class="wallet-row">\n
            <div>Coin</div>\n
            <div>Wallet ID</div>\n
            <div>Derivation Path</div>\n
            <div>Mnemonic</div>\n
          </div>`;

      res.wallets.forEach((element) => {
        walletsDiv.innerHTML += `
        <div class="wallet-row">\n
        <div>${element.coin}</div>\n
        <div>${element.walletId}</div>\n
        <div>${element.derivationPath}</div>\n
        <div>${element.mnemonic}</div>\n
        </div>
        `;
      });
    }
  });
}

formElement.addEventListener("submit", handleSubmit, false);
fileDiv.addEventListener("change", loadFile);
passDiv.addEventListener("change", () => {
  passError.innerHTML = "";
});
// submitButton.addEventListener("click", handleSubmit, false);
