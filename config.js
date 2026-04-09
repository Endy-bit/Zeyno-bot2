import { watchFile } from 'fs'
import { fileURLToPath, pathToFileURL } from 'url'
import chalk from 'chalk'
import fs from 'fs'
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))

/*⭑⭒━━━✦❘༻☾⋆⁺₊✧ 𝓿𝓪𝓻𝓮𝓫𝓸𝓽 ✧₊⁺⋆☽༺❘✦━━━⭒⭑*/

global.prefisso = '!'
global.sam = ['393501989497',]
global.owner = [
  ['393501989497', 'Endy', true],
  ['447393088288', 'ksav', true],
  ['212693877842', 'medalis', true],
  ['84908983590', 'luxe/nane', true],
  ['573008626736', 'estreia/stellina', true],
  ['393926427789', 'knor', true],
  ['393206032199', 'punisher', true],
  ['212612624296', 'zak', true],
  ['447346909408', 'blast', true],

]
global.mods = ['xxxxxxxxxx', 'xxxxxxxxxx', 'xxxxxxxxxx']
global.prems = ['xxxxxxxxxx', 'xxxxxxxxxx', 'xxxxxxxxxx']

/*⭑⭒━━━✦❘༻🩸 INFO BOT 🕊️༺❘✦━━━⭒⭑*/

global.nomepack = '𝚭𝚵𝚼𝚴𝚰 𝚩𝚰𝚮'
global.nomebot = '𝚭𝚵𝚼𝚴𝚰 𝚩𝚰𝚮'
global.wm = '𝚭𝚵𝚼𝚴𝚰 𝚩𝚰𝚮'
global.autore = '€₦Ð¥'
global.dev = '€₦Ð¥'
global.testobot = `Ҩҽվղօ ҍօէ`
global.versione = pkg.version
global.errore = '⚠️ *Errore disponibile!* Usa il comando `!segnala <errore>` per avvisare lo sviluppatore.'

/*⭑⭒━━━✦❘༻� LINK 🌐༺❘✦━━━⭒⭑*/

global.repobot = 'https://github.com/Endy-bit/Zeyno-bot2'
global.gruppo = 'https://chat.whatsapp.com/HS7xDyqiL7hEorFZQ2qCiw?mode=gi_t'
global.canale = ''
global.insta = ''

/*⭑⭒━━━✦❘🗝️ API KEYS 🌍༺❘✦━━━⭒⭑*/

// Le keys con scritto "varebot" vanno cambiate con keys valide
// Nel README.md ci sono i vari link per ottenere le keys

global.APIKeys = {
    spotifyclientid: 'varebot',
    spotifysecret: 'varebot',
    browserless: 'varebot',
    tmdb: 'varebot',
    ocrspace: 'jjjsheu',
    assemblyai: 'varebot',
    google: 'varebot',
    googleCX: 'varebot',
    genius: 'varebot',
    removebg: 'varebot',
    openrouter: 'varebot',
    sightengine_user: 'varebot',
    sightengine_secret: 'varebot',
    lastfm: 'varebot',
}

/*⭑⭒━━━✦❘༻🪷 SISTEMA XP/EURO 💸༺❘✦━━━⭒⭑*/

global.multiplier = 1

/*⭑⭒━━━✦❘༻📦 RELOAD 📦༺❘✦━━━⭒⭑*/

let filePath = fileURLToPath(import.meta.url)
let fileUrl = pathToFileURL(filePath).href

const reloadConfig = async () => {
  console.log(chalk.bgHex('#3b0d95')(chalk.white.bold("File: 'config.js' Aggiornato")))
  try {
    await import(`${fileUrl}?update=${Date.now()}`)
  } catch (e) {
    console.error('[ERRORE] Errore nel reload di config.js:', e)
  }
}

watchFile(filePath, reloadConfig)