const handler = async (m, { conn }) => {
  const jid = m.chat

  await conn.sendMessage(
    jid,
    {
      text: `〖 🌸 〗 \`Benvenuto in ZeynoBot!\``,
      title: '',
      footer: ``,
      cards: [
        {
          image: { url: 'media/menu/db7688e89d86203c635962787ffe5055.jpeg' },
          title: `\`by Endy Aka zeyno\``,
          body: `〖 💫 〗 *Esplora tutte le funzionalità*\n〖 🚀 〗 *Bot sempre aggiornato*\n〖 🌑 〗 *Miglior bot di zozzap*`,
          footer: '𝚭𝚵𝚼𝚴𝚰 𝚩𝚰𝚮',
          buttons: [
            {
              name: 'cta_url',
              buttonParamsJson: JSON.stringify({
                display_text: 'Repo - ZeynoBot',
                url: 'https://github.com/Endy-bit/Zeyno-bot2'
              })
            }
          ]
        }
      ]
    },
  { quoted: m }
  )
}

handler.command = ['repositorio', 'repo', 'source', 'sourcecode', 'script']
handler.tags = ['main']
handler.help = ['repo']
export default handler