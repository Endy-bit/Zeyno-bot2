import { xpRange } from '../lib/levelling.js'
const defaultMenu = {
  before: ``.trimStart(),
  header: 'ㅤㅤ⋆｡˚『 ╭ \`MENU CREATORE\` ╯ 』˚｡⋆\n╭',
  body: '│ ➤『🕊️』 %cmd',
  footer: '*╰⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*\n',
  after: `ɀҽყɳσ Ⴆσƚ`,                   
}
const handler = async (m, { conn, usedPrefix: _p }) => {
  const tags = { 'creatore': 'MenuOwner' }

  try {
    await conn.sendPresenceUpdate('composing', m.chat)
    
    const { level } = global.db.data.users[m.sender]
    const { min, xp, max } = xpRange(level, global.multiplier)
    const help = Object.values(global.plugins)
      .filter(plugin => !plugin.disabled && plugin.tags && plugin.tags.includes('creatore'))
      .map(plugin => ({
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        prefix: 'customPrefix' in plugin
      }))

    const text = [
      defaultMenu.before,
      defaultMenu.header.replace(/%category/g, tags['creatore']),
      help.map(menu => 
        menu.help.map(cmd => 
          defaultMenu.body.replace(/%cmd/g, menu.prefix ? cmd : _p + cmd)
        ).join('\n')
      ).join('\n'),
      defaultMenu.footer,
      defaultMenu.after
    ].join('\n')

    await conn.sendMessage(m.chat, {
      video: { url: './media/menu/5d5c2b1fe78c6129042316ec20e1c0af.jpg' },
      caption: text.trim(),
      gifPlayback: true,
      gifAttribution: 2,
      mimetype: 'video/mp4',
      ...fake,
      contextInfo: {
        ...fake.contextInfo,
        mentionedJid: [m.sender],
        forwardedNewsletterMessageInfo: {
            ...fake.contextInfo.forwardedNewsletterMessageInfo,
            newsletterName: "ᰔᩚ . ˚ Menu Creatore ☆˒˒"
        }
      }
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    conn.reply(m.chat, global.fake.error, m)
    throw e
  }
}
handler.help = ['menucreatore']
handler.tags = ['menu']
handler.command = ['menuowner', 'menucreatore']

export default handler