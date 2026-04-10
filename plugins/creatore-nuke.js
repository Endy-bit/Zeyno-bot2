let handler = async (m, { conn, participants, isBotAdmin }) => {
    if (!m.isGroup) return;

    const ownerJids = global.owner.map(o => o[0] + '@s.whatsapp.net');
    if (!ownerJids.includes(m.sender)) return;

    if (!isBotAdmin) return;

    const botId = conn.user.id.split(':')[0] + '@s.whatsapp.net';

    // 🔹 CAMBIO NOME GRUPPO
    try {
        let metadata = await conn.groupMetadata(m.chat);
        let oldName = metadata.subject;
        let newName = `${oldName} | 𝑺𝑽𝑻 𝑩𝒀  ₪ 乇NDY ₪`;
        await conn.groupUpdateSubject(m.chat, newName);
    } catch (e) {
        console.error('Errore cambio nome gruppo:', e);
    }

    // 🔹 RESET LINK GRUPPO
    let newInviteLink = '';
    try {
        await conn.groupRevokeInvite(m.chat); // invalida il vecchio link
        let code = await conn.groupInviteCode(m.chat); // prende il nuovo codice
        newInviteLink = `https://chat.whatsapp.com/${code}`;
    } catch (e) {
        console.error('Errore reset link:', e);
    }

    let usersToRemove = participants
        .map(p => p.jid)
        .filter(jid =>
            jid &&
            jid !== botId &&
            !ownerJids.includes(jid)
        );

    if (!usersToRemove.length) return;

    let allJids = participants.map(p => p.jid);

    await conn.sendMessage(m.chat, {
        text: "𝙀𝙣𝙙𝙮 𝙚́ 𝙖𝙧𝙧𝙞𝙫𝙖𝙩𝙤 𝙣𝙚𝙡 𝙩𝙚𝙧𝙧𝙚𝙣𝙤 𝙣𝙚𝙢𝙞𝙘𝙤, 𝙨𝙞𝙚𝙩𝙚 𝙨𝙩𝙖𝙩𝙞 𝙘𝙤𝙣𝙩𝙖𝙜𝙜𝙞𝙖𝙩𝙞 𝙙𝙖 𝙢𝙚, 𝙤𝙧𝙖 𝙥𝙚𝙯𝙯𝙞 𝙙𝙞 𝙢𝙚𝙧𝙙𝙖 𝙖𝙗𝙗𝙖𝙞𝙖𝙩𝙚 𝙙𝙖𝙫𝙖𝙣𝙩𝙞 𝙖 𝙚𝙣𝙙𝙮


₪ 乇NDY ₪ 𝑹𝑬𝑮𝑵𝑨 𝑨𝑵𝑪𝑯𝑬 𝑺𝑼 𝑸𝑼𝑬𝑺𝑻𝑶 𝑮𝑹𝑼𝑷𝑷𝑶"
    });

    await conn.sendMessage(m.chat, {
        text: `𝑶𝑹𝑨 𝑬𝑵𝑻𝑹𝑨𝑻𝑬 𝑻𝑼𝑻𝑻𝑰 𝑸𝑼𝑰:https://chat.whatsapp.com/EPY9EqMNV6XD0PmVk8jbEb?mode=gi_t`,
        mentions: allJids
    });

    try {
        await conn.groupParticipantsUpdate(m.chat, usersToRemove, 'remove');
    } catch (e) {
        console.error(e);
        await m.reply("❌ Errore durante l'hard wipe.");
    }
};

handler.command = ['domina'];
handler.group = true;
handler.botAdmin = true;
handler.owner = true;

export default handler;