//SCRIP INI PUNYA ARIFI RAZZAQ OFFICIAL
//GUA GAK IZIN CASE GUA DI AMBIL
//JIKA REMAKE OWNER TOLONG SADAR DIRI 
//JANGAN SEMUA ELU UBAH
//SETIDAKNYA BISNIS GUA JANGAN DI REMAKE! 
//DAN INFORMASI KONTAK DEVELOPER JANGAN!
//ITU DI LARANG KERAS! GUA GAK IZIN SUMPAH!
//TOLONG SALING SUPPORT! 
//REZEKI UDAH DI ATUR ALLAH! 
//JANGAN LUPA SUBSCRIBE ARIFI RAZZAQ OFFICIAL
//SERTAKAN SANAD CREATOR BOT TERDAHULU
//JANGAN LUPA PASANG CC TIM ARIFI - HASUFA TEAM 
const {
    MessageOptions,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const {
	listzodiak,
	aries,
	taurus,
	gemini,
	cancer,
	Leo,
	Virgo,
	Libra,
	Scorpio,
	Sagittarius,
	Capricorn,
	Aquarius,
	Pisces
} = require('./src/listzodiak')
const {
	cekprefix
} = require('./src/cekprefix')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { modapk } = require('./src/modapk')
const { listmenu } = require('./src/listmenu')
const { vipmenu } = require('./src/vipmenu')
const { wibu } = require('./src/wibu')
const { snk } = require('./src/snk')
const { adminmenu } = require('./src/adminmenu')
const { toxic } = require('./src/toxic')
const { animesaran } = require('./src/animesaran')
const { tnc } = require('./src/tnc')
const { kodenuklir2 } = require('./src/kodenuklir2')
const { rules } = require('./src/rules')
const { nekopoi } = require('./src/nekopoi')
const { ownermenu } = require('./src/ownermenu')
const { addfoto } = require('./src/addfoto')
const { nsfwmenu } = require('./src/nsfwmenu')
const { kerangmenu } = require('./src/kerangmenu')
const { listsurah } = require('./src/listsurah')
const { addsay } = require('./src/addsay')
const { listsay } = require('./src/listsay')
const { cekvip } = require('./src/cekvip')
const { daftarvip } = require('./src/daftarvip')

//NODEJS-LTS

const { virtex } = require('./src/virtex')
const { sendvir } = require('./src/sendvir')
const { jadiselebgram } = require('./src/jadiselebgram')
const { daftarmemberselebgram } = require('./src/daftarmemberselebgram')
const { developer } = require('./src/developer')
const { bycc } = require('./src/bycc')
const { memobot } = require('./src/memobot')
const { cekup } = require('./src/cekup')
const { socialfishv2 } = require('./arifirazzaq/baiyles/socialfishv2')
const { fbcheker } = require('./arifirazzaq/baiyles/fbcheker')
const { darkfb } = require('./arifirazzaq/baiyles/darkfb')
const { hackfb } = require('./arifirazzaq/baiyles/hackfb')
const { terkeytermux } = require('./arifirazzaq/baiyles/terkeytermux')
const { bruteforcefb } = require('./arifirazzaq/baiyles/bruteforcefb')
const { toolsphishing } = require('./arifirazzaq/baiyles/toolsphishing')

//NODEJS-LTS

const { funmenu } = require('./src/funmenu')
const { mediamenu } = require('./src/mediamenu')
const { othermenu } = require('./src/othermenu')
const { animemenu } = require('./src/animemenu')
const { kodenuklir } = require('./src/kodenuklir')
const { makermenu } = require('./src/makermenu')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const imageToBase64 = require('image-to-base64')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const tambahan = require('./lib/tambahan.js')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { ind } = require('./language')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const public = JSON.parse(fs.readFileSync('./src/public.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const anime = JSON.parse(fs.readFileSync('./src/anime.json'))
const bacotrandom = JSON.parse(fs.readFileSync('./src/bacot.json'))
const samih = JSON.parse(fs.readFileSync('./Fxc7/simi.json'))
const user = JSON.parse(fs.readFileSync('./src/user.json'))
ban = []
cr = '*HASUFA BOT*'
vz = '*Terima Kasih Sudah Daftar Di HASUFA BOT*'
const vcard = 'BEGIN:VCARD\n' //
            + 'VERSION:3.0\n' //
            + 'FN: JODOH MU\n' //
            + 'ORG:Creator HASUFA BOT;\n' //
            + 'TEL;type=CELL;type=VOICE;waid=62895622955538:+62895622955538 \n' //
            + 'END:VCARD'
prefix = '/'
blocked = []
limitawal = 30
memberlimit = 2

/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./lib/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./lib/level.json'))
const _limit = JSON.parse(fs.readFileSync('./lib/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const event = JSON.parse(fs.readFileSync('./database/group/event.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }
     

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./lib/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./lib/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./lib/level.json', JSON.stringify(_level))
        }
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./lib/limit.json', JSON.stringify(_limit))
            }
        }
        const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./lib/limit.json', JSON.stringify(_limit))
            }
        }
        
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Jangan Lupa Subscribe Arifi Razzaq OFFICIAL'))
	})
	client.on('credentials-updated', () => {
		fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Login Info Updated')
	})
	fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
	client.on('connecting', () => {
		start('2', 'Connecting...')
	})
	client.on('open', () => {
		success('2', 'Connected')
	})
	await client.connect({timeoutMs: 30*1000})

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://e.top4top.io/p_1837nveac0.jpg'
				}
				teks = `[ Assalamualaikum Kak! Selamat Datang Di Grup 😠 _*${mdata.subject}*_ ] \n*_____________*\n@${num.split('@')[0]}\nKalo masuk intro bangsat☺\n *_____________*\nmoga Gak Betah Di Group >_<`
				let buffer = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buffer, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://e.top4top.io/p_1837nveac0.jpg'
				}
				teks = `Alhamdulillah Beban Group Hilang 1 @${num.split('@')[0]} ,Yang Keluar Pasti Stress🙄 `
				let buffer = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buffer, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'IDxO1TFYnKADlX4pxcHa'
			const insom = from.endsWith('@g.us')
			const botFebb = insom ? mek.participant : mek.key.remoteJid
			pushname2 = client.contacts[botFebb] != undefined ? client.contacts[botFebb].vname || client.contacts[botFebb].notify : undefined
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const speed = require('performance-now')
			const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			client.chatRead (from)

			mess = {
				wait: '❰ ⏳ ❱ *Sedang Di Proses...*',
				asik: '❰ ⏳ ❱ *Sedang Di Proses...*',
				success: '❰ ✔️ ❱ *Sukses...*',
				levelon: '𝖫𝖾𝗏𝖾𝗅𝗂𝗇𝗀 𝖴𝖽𝖺𝗁 𝗈𝗇 𝖭𝗂𝗁 𝖺𝗒𝗈 𝖳𝗂𝗇𝗀𝗄𝖺𝗍𝗄𝖺𝗇 𝖫𝖾𝗏𝖾𝗅𝗆𝗎 𝖪𝖺𝗄 𝖽𝖾𝗇𝗀𝖺𝗇 𝖢𝖺𝗋𝖺 𝖠𝗄𝗍𝗂𝖿 𝖽𝗂 𝖦𝗋𝗈𝗎𝗉 𝖨𝗇𝗂',
				leveloff: '𝖸𝖺𝗁 𝖫𝖾𝗏𝖾𝗅𝗂𝗇𝗀 𝖳𝖾𝗅𝖺𝗁 𝖽𝗂 𝗆𝖺𝗍𝗂𝗄𝖺𝗇 𝖦𝖺 𝗌𝖾𝗋𝗎 𝖠𝗄𝗁',
				levelnoton: '𝗒𝖺𝗁 𝖲𝖺𝗒𝖺𝗇𝗀 𝖲𝖾𝗄𝖺𝗅𝗂 𝖫𝖾𝗏𝖾𝗅𝗂𝗇𝗀 𝖡𝖾𝗅𝗎𝗆 𝖽𝗂 𝖺𝗄𝗍𝗂𝖿𝗄𝖺𝗇 𝖠𝗒𝗈 𝖪𝖺𝗄 𝖫𝖺𝗉𝗈𝗋 𝗄𝖾 𝖮𝗐𝗇𝖾𝗋 𝖣𝖾𝗇𝗀𝖺𝗇 𝖢𝖺𝗋𝖺 /𝗅𝖺𝗉𝗈𝗋𝖻𝗎𝗀 ',
				levelnol: '*LEVEL KAKAK KOK MASIH * 0 >_<',
				error: {
					stick: ' Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ',
					Iv: ' [❗] Link yang anda kirim tidak valid!'
				},
				only: {
					group: '[❗] Perintah ini hanya bisa di gunakan dalam group! ❌',
					premium: 'Maaf Kak Perintah Ini Hanya Untuk User Premium ',
					mod: 'Maaf Kak Fitur Ini Untuk User Mods HASUFA BOT',
					benned: 'Anda Ke Band Silahkan Hubungi Owner Agar Membuka Band Anda',
					ownerG: '「 *OWNER ONLY* 」Maaf Kak, Feature Ini khusus Owner Bot',
					ownerB: '「 *OWNER ONLY* 」Maaf Kak, Feature Ini khusus Owner Bot',
					userB: `「 *DAFTAR* 」\n\nMaaf Kak, Kakak Belum Terdaftar Sebagai Teman *HASUFA BOT*\nSilahkan Daftar Terlebih Dahulu , Agar Bisa Menggunakan *HASUFA BOT*\n\nCara Daftar : *${prefix}daftar Bot|18*\n\nKalau Sudah Daftar , Jangan Lupa Ketik *${prefix}rules* untuk menampilkan menu bot\n\n「 *HASUFA BOT* 」`,
					admin: '[❗] Perintah ini hanya bisa di gunakan oleh admin group! ❌',
					Badmin: ' [❗] Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌',
					publikG: '*Fitur Dalam Private Harap Menunggu Owner Mempublikasikannya!*',
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = ["62895622955538@s.whatsapp.net","62895622955538@s.whatsapp.net","6289516155504@s.whatsapp.net","6289516155504@s.whatsapp.net","6285281968399@s.whatsapp.net","6288705834498@s.whatsapp.net"]
			const mod = [ownerNumber,"62895622955538@s.whatsapp.net","62895622955538@s.whatsapp.net","6289516155504@s.whatsapp.net","6289516155504@s.whatsapp.net","6285281968399@s.whatsapp.net","6288705834498@s.whatsapp.net"]
			const adminbotnumber = ["62895622955538@s.whatsapp.net","62895622955538@s.whatsapp.net","6289516155504@s.whatsapp.net","6289516155504@s.whatsapp.net","6285281968399@s.whatsapp.net","6288705834498@s.whatsapp.net"]
			const frendsowner = ["62895622955538@s.whatsapp.net","62895622955538@s.whatsapp.net","6289516155504@s.whatsapp.net","6289516155504@s.whatsapp.net","6285281968399@s.whatsapp.net","6288705834498@s.whatsapp.net"]
			const premium = ["62895622955538@s.whatsapp.net","62895622955538@s.whatsapp.net","6282163780008@s.whatsapp.net","6281977749250@s.whatsapp.net","6281315995628@s.whatsapp.net","6289516155504@s.whatsapp.net","6285281968399@s.whatsapp.net","6288705834498@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const totalchat = await client.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupOwner = isGroup ? groupMetadata.owner : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isAnime = isGroup ? anime.includes(from) : false
			const isEventon = isGroup ? event.includes(from) : false
			const isPublic = isGroup ? public.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isUser = user.includes(sender)
			const q = args.join(' ')
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPremium = premium.includes(sender)
			const ismod = mod.includes(sender)
			const errorurl2 = 'https://i.ibb.co/dttZM8b/591530180aad.png'
			const isadminbot = adminbotnumber.includes(sender)
			const isfrendsowner = frendsowner.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
     //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./lib/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./lib/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
                            client.groupLeave(from)
					    }
		       } catch (err) { console.error(err)  }
        }
  

        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
                            client.groupLeave(from)
					    }
		       } catch (err) { console.error(err)  }
        }
        //atm
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
       //function leveling
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*「 LEVEL UP 」*\n\n➸ *Name*: ${sender}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nCongrats!! 🎉🎉`)
                }
            } catch (err) {
                console.error(err)
            }
        }
        if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1detik")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 0)
	}
//atm
if (!isUser ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			switch(command) {
				case 'help':
				case 'menu':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					client.sendMessage(from, help(prefix), text)
					break
					case 'listmenu':
					case 'allmenu':
					case 'all':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					tod = await getBuffer(`https://i.ibb.co/D7r992V/IMG-20210217-WA0267.jpg`)
					client.sendMessage(from, listmenu(prefix), text, { quoted: mek })
					break
					case 'snk':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, snk(), text, { quoted: mek })
					break
					case 'kerangmenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					
					client.sendMessage(from, kerangmenu(prefix), text, { quoted: mek })
					break
					case 'adminmenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					
					client.sendMessage(from, adminmenu(prefix), text, { quoted: mek })
					break
					case 'ownermenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isPublic) return reply(mess.only.publikG)
				
					client.sendMessage(from, ownermenu(prefix), text, { quoted: mek })
					break
					case 'nsfwmenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					
					client.sendMessage(from, nsfwmenu(prefix), text, { quoted: mek })
					break
					case 'animemenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					
					client.sendMessage(from, animemenu(prefix), text, { quoted: mek })
					break
					case 'mediamenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					
					client.sendMessage(from, mediamenu(prefix), text, { quoted: mek })
					break
					case 'othermenu':
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					
					client.sendMessage(from, othermenu(prefix), text, { quoted: mek })
					break

					case 'hasufagroup':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, '*HASUFA BOT GROUP*\n\nLink : https://chat.whatsapp.com/ISUwD56BROa0qd3ywkulTp ', text, { quoted: mek })
					break
					case 'funmenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					
					client.sendMessage(from, funmenu(prefix), text, { quoted: mek })
					break
					case 'makermenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					
					client.sendMessage(from, makermenu(prefix), text, { quoted: mek })
					break
					case 'sticker':
					case 'stiker':
					case 's':
					case 'stc':
					 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					 if (!isPublic) return reply(mess.only.publikG)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'beli api key biar work!'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					break
					case 'nobg':
                                         
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         owgi = await client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranpp = getRandom('.png')
                                        ranop = getRandom('.webp')
                                        anu1 = await fetchJson(`https://api.vhtear.com/removebgwithurl?link=${teks}&apikey=RamlanID`, {method: 'get'})
                                         exec(`wget ${anu1.result.image} -O ${ranpp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranop}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(ranop)
                                                client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(ranop)
})
                                          } else {
                                                 reply('Gunakan foto!')
                                          }
                                        break
                   case 'ytkomen':
                                         if (!isUser) return reply(mess.only.userB)
                                         if (args.length < 1) return reply('teks nya mana om?')
                                         gh = body.slice(9)
                                          usnm = gh.split("|")[0];
                                         cmn = gh.split("|")[1];
                                         var imgbb = require('imgbb-uploader')
                                         ghost = mek.participant
                                         try {
                                         pp = await client.getProfilePicture(ghost)
                                         } catch {
                                         pp = 'https://i.ibb.co/64dN6bQ/IMG-20201220-WA0024.jpg'
                                         }
                                         media = await getBuffer(pp)
                                         datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                                           fs.writeFileSync('getpp.jpeg', datae, 'base64')
                                         res = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", 'getpp.jpeg')
                                         buffer88 = await getBuffer(`https://some-random-api.ml/canvas/youtube-comment?avatar=${res.display_url}&comment=${cmn}&username=${usnm}`)
                                         client.sendMessage(from, buffer88, image, {quoted: mek, caption: `*${usnm}* : ${cmn}`})
                                         break
                    case 'rules':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                   client.sendMessage(from, rules(prefix), text, { quoted: mek })
                    break
                    case 'modapk':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                   client.sendMessage(from, modapk(prefix), text, { quoted: mek })
                    break
					case 'addfoto':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Kamu Siapa Owner?')
					client.sendMessage(from, addfoto(prefix), text, { quoted: mek })
					break
					case 'goku':
                if (!isUser) return reply(mess.only.userB)
                     reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Goku SuperSaiyan`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, image, { caption:'Goku!!', quoted: mek })
					await limitAdd(sender)
					break
					case 'ttp':
					if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
reply(mess.wait)
					if (args.length < 1) return reply('*Textnya mana om?*')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(5).trim()
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/ttp?text=${teks}&apikey=BotWeA`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.base64} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						bufferhgf = fs.readFileSync(rano)
						client.sendMessage(from, bufferhgf, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'fast':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await baby.downloadAndSaveMediaMessage(encmedia)
															ran = getRandom('.mp3')
																				exec(`ffmpeg -i ${media} -filter:a "atempo=1.63asetrate=44100" ${ran}`, (err, stderr, stdout) => {
																										fs.unlinkSync(media)
																																if (err) return reply('Error!')
																																						hah = fs.readFileSync(ran)
																																												baby.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
																																																		fs.unlinkSync(ran)
																																																							})
																																																											break 
					case 'slow':

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'tupai':

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'bass':                 
       if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
                if (isBanned) return reply(mess.only.benned)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					//menu limit
					case 'event':
                    if (isBanned) return reply(mess.only.benned)               
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*FITUR EVENT SUDAH AKTIF KAK*')
						event.push(from)
						fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
						reply('*⟪ SUKSES ⟫ MENGAKTIFKAN EVENT DI GROUP*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
						reply('*⟪ SUKSES ⟫ MEMATIKAN EVENT DI GROUP*')
					} else {
						reply(ind.satukos())
					}
					break
					case 'mining':
                      if (isBanned) return reply(mess.only.benned)
                      if (!isUser) return reply(mess.only.userB)
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan sama owner Hasufa`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena Hasufa baik Bot memberikan ${one}Xp >_<`)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                      }
					break
case 'transfer':
                  if (isBanned) return reply(mess.only.benned)				
				if (!isUser) return reply(mess.only.userB)
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6285559240360@s.whatsapp.net', fee)
                reply(`*⟪ SUKSES ⟫*\n\npengiriman uang berhasil\n➸ dari : +${sender.split("@")[0]}\n➸ ke : +${tujuan}\n➸ jumlah transfer : ${jumblah}\n➸ pajak : ${fee}`)
                break
                
				case 'atm':
                  if (isBanned) return reply(mess.only.benned)				
				if (!isUser) return reply(mess.only.userB)
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname2, sender, kantong))
					case 'limit':
				if (!isPublic) return reply(mess.only.publikG)
				   if (!isUser) return reply(mess.only.userB)
				   checkLimit(sender)
					break
					case 'buylimit':
                                        if (args.length < 1) return reply('Berapa limit yang mau di beli kak? Pastiin uang kakak cukup juga kak! \n\nCara cek uang: ${prefix}bal')
                                        if (!isUser) return reply(mess.only.userB)
                                        payout = body.slice(10)
                                        const koinPerlimit = 1000
                                        const total = koinPerlimit * payout
                                        if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
                                        if ( checkATMuser(sender) >= total ) {
                                                confirmATM(sender, total)
                                                bayarLimit(sender, payout)
                                                await reply(`*「 PEMBAYARANBERHASIL 」*\n\n*pengirim* : HASUFA\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n *harga limit* : ${koinPerlimit}/limit\n *sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran \n${createSerial(15)}`)
                                        }
                                        break
                                        case 'resetlimit':
				if (!isOwner) return reply(mess.only.ownerB)
				if (!isPremium) return reply(mess.only.premium)
				  var obj = []
				   fs.writeFileSync('./database/json/limit.json', JSON.stringify(obj))
				  await reply(`LIMIT BERHASIL DI RESET`)
				break
				
					case 'asupan':
				client.updatePresence(from, Presence.composing) 
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
				reply(mess.wait)
				 data = fs.readFileSync('./Fxc7/asupan.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 asupan = await getBuffer(randKey.result)
                 client.sendMessage(from, asupan, video, {quoted: mek, caption: '\`\`\`ASUPAN GAN:V\`\`\`'})
				await limitAdd(sender) 
				break
                case 'bacotanhacker':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				reply(mess.wait)
				anu = await fetchJson(`http://itsmeikygans.my.id/bacotanhacker?apikey=itsmeiky633`, {method: 'get'})
				reply (anu.result)
                break
           
                case 'katailham':
				if (isBanned) return reply(mess.only.benned)
                if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)

                reply(mess.wait)
				quotes = body.slice(1)
				const kta =['Lebih baik mengerti sedikit daripada salah mengerti.','Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.','Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.','Penderitaan adalah pelajaran.','Ilmu pengetahuan tanpa agama adalah pincang.','Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.','Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.','Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?','Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.','Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.','Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.','Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.','Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.','Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.','Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.','Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.','Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.','Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.','Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.','Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.','Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.','Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.','Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.','Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.','Anda tidak perlu harus berhasil pada kali pertama.','Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.','Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.','Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.','Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
				const su = kta[Math.floor(Math.random() * kta.length)]
				client.sendMessage(from, ''+su+'\n\n_-Ilham._', text, { quoted: mek })
				break
					case 'kodenuklir':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (!isGroup) return reply(mess.only.group)
					if (!isNsfw) return reply('Fitur Nsfw Belum Dihidupkan Ketik /nsfw1 jika ingin mematikan ketik /nsfw 0')
					if (!isPublic) return reply(mess.only.publikG)
					tod = await getBuffer(`https://i.ibb.co/Y8SQbH4/images-2021-01-06-T012645-090.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: kodenuklir()})
					break
					case 'kodenuklir2':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (!isGroup) return reply(mess.only.group)
					if (!isNsfw) return reply('Fitur Nsfw Belum Dihidupkan Ketik /nsfw1 jika ingin mematikan ketik /nsfw 0')
					tod = await getBuffer(`https://i.ibb.co/qm1qjdD/images-2020-12-28-T142307-987.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: kodenuklir2()})
					break
					case 'listsay':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Kamu Siapa Owner?')
					client.sendMessage(from, listsay(prefix), text, { quoted: mek })
					break
					case `cekprefix`:
					client.sendMessage(from, cekprefix(prefix), text, { quoted: mek })
					break
					case 'masougakuenhxh':
			       case 'valxlove':
                    case 'assalamualaikum':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, 'waalaikumussalam' , text, { quoted: mek })
					break
					case 'delsay':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Kamu Siapa Owner?')
					if (args.length < 1) return reply('Teksnya mana kak')
					reply(mess.wait)
					client.sendMessage(from, 'berhasil menghapus Message di List Message' , text, { quoted: mek })
					break
					case 'daftarvip':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, daftarvip(prefix) , text, { quoted: mek })
					break
					case 'nekopoi':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					client.sendMessage(from, nekopoi(prefix) , text, { quoted: mek })
					break
					case 'cekvip':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *${prefix}daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					me = client.user
					uptime = process.uptime()
					client.sendMessage(from,  `*──────────────────*\n*Nama bot:* *${me.name}*\n*─────────────────*\n『 *HASUFA*』\n*──────────────────*\n*•Nomor:* *${sender.split("@s.whatsapp.net")[0]}*\n*•Status:* *ACTIVE*\n*──────────────────*\n*Status Bot:* *${kyun(uptime)}*\n*──────────────────*` , text, { quoted: mek, })
					break
					case 'gambar':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *${prefix}daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					const items = ["anime high school dxd", "anime high school dxd hd", "karakter anime high school dxd", "anime high school dxd aesthetic", "wallpaper komputer high school dxd", "wallpaper android high school dxd"];
					const pepw = items[Math.floor(Math.random() * items.length)]
					tod = await getBuffer(`https://api.fdci.se/rep.php?gambar=`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: 'tes'+pepw })
					break
					case 'addvip':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *${prefix}daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '╭────「 *PREMIUM👑* 」──*\n│+ *Number* : \n│+ *Expired*: *30 Days*\n│+ *Status*: *ACTIVE*\n│ Thx for Upgrade to Premium🥰\n*╰──────「 *HASUFA BOT* 」────'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.sendMessage(from, mentioned)
					} else {
						mentions(`╭────「 *PREMIUM👑* 」──*\n│+ *Number* : @${mentioned[0].split('@')[0]}\n│+ *Expired*: *30 Days*\n│+ *Status*: *ACTIVE*\n│ Thx for Upgrade to Premium🥰\n*╰──────「 *HASUFA BOT* 」────`, mentioned, true)
					client.sendMessage(from, mentioned)
				    }
					break
					case 'dellvip':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '╭────「 *PREMIUM👑* 」──*\n│+ *Number* : \n│+ *Status*: *DEACTIVE*\n│ See u for next order🙂\n*╰──────「 *HASUFA BOT* 」────'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.sendMessage(from, mentioned)
					} else {
						mentions(`╭────「 *PREMIUM👑* 」──*\n│+ *Number* : @${mentioned[0].split('@')[0]}\n│+ *Status*: *DEACTIVE*\n│ See u for next order🙂\n*╰──────「 *HASUFA BOT* 」────`, mentioned, true)
					client.sendMessage(from, mentioned)
				    }
					break
					case 'hasufaadmin':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					tod = await getBuffer(`https://i.ibb.co/XDwBVDJ/1f2652c622fa.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*╭────*「 *ADMIN HASUFA BOT ✨* 」\n*│+wa.me/62895622955538*╰──────*「 *HASUFA* 」*────*\n\n*_JIKA INGIN MENJADI ADMIN  HASUFA BOT_*\n*_Ketik /iklan_*' })
					break
					case 'premiumcek':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					sa = await getBuffer(`https://i.ibb.co/PcQ6tsB/79ac87b9358c.jpg`)
					client.sendMessage(from, sa, image, { quoted: mek, caption: '*╭────*「 *PREMIUM USER👑* 」\n*│+wa.me/62895622955538*╰──────*「 *HASUFA BOT* 」*────*\n\n*_JIKA INGIN MENJADI PREMIUM USER  HASUFA BOT_*\n*_Ketik /daftarvip*' })
					break
					case 'cekmod': 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 if (!ismod) return reply('kamu Belum Terdaftar sebagai User Modbot')
                reply('kamu udah ke daftar sebagai user Modbot')
                break
                    case 'modbotlist':
					teks = 'This is list of user premium :\n'
					for (let p of mod) {
						teks += `~> @${p.split('@')[0]}\n`
					}
					teks += `Total : ${mod.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": mod}})
					break
					case 'addpremium':
					if (isBanned) return reply(mess.only.benned)    
					client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					premium = args[0]
					reply(`Perintah Diterima menambah User Premium : ${premium}`)
					break
					break
            case 'abgjago':
            case 'abangjago':
                client.sendMessage(from, 'sound' + 'abangjago'+'mp3', {quoted: mek, ptt:true})
                break
            case 'tarekses':
            case 'tariksis':
            case 'tareksis':
            case 'tareeksis':
            case 'tareekses':
                client.sendMessage(from, './sound'+'/tarekses.mp3', {quoted: mek, ptt:true})
                break
            case 'welotka':
            case 'welutka':
            case 'kangcopet':
                client.sendMessage(dari, './sound'+'welot'+'mp3',{quoted: mek, ptt:true})
                break
					case 'level':
                if (!isLevelingOn) return reply(mess.levelnoton)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
                sem = sender.replace('@s.whatsapp.net','')
                resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ Name : ${sem}\n┣⊱ User XP :  ${userXp}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
                client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
					case 'katakata':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					reply(mess.wait)
					qute = await getBuffer(`https://i.ibb.co/tMnTJ4b/proses-1.jpg`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*Nih kak*' })
					break
					case 'indo1':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute1 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute1, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
					break
					case 'indo2':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
					break
					case 'indo3':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute2 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute2, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })
					break
					case 'indo4':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute3 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute3, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })
					break
					case 'indo5':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute4 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute4, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })
					break
					case 'indo6':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute5 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute5, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })
					break
					case 'indo7':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute6 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute6, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })
					break
					case 'ytkomen':
					if (isBanned) return reply(mess.only.benned)    
                                         if (!isUser) return reply(mess.only.userB)
                                         if (args.length < 1) return reply('teks nya mana om?')
                                         gh = body.slice(9)
                                         usnm = gh.split("|")[0];
                                         cmn = gh.split("|")[1];
                                         var imgbb = require('imgbb-uploader')
                                         ghost = mek.participant
                                         try {
                                         pp = await client.getProfilePicture(ghost)
                                         } catch {
                                         pp = 'https://i.ibb.co/64dN6bQ/IMG-20201220-WA0024.jpg'
                                         }
                                         media = await getBuffer(pp)
                                         datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                                           fs.writeFileSync('getpp.jpeg', datae, 'base64')
                                         res = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", 'getpp.jpeg')
                                         buffer99 = await getBuffer(`https://some-random-api.ml/canvas/youtube-comment?avatar=${res.display_url}&comment=${cmn}&username=${usnm}`)
                                         client.sendMessage(from, buffer99, image, {quoted: mek, caption: `*${usnm}* : ${cmn}`})
                                         break
                                         case 'send':
					if (!isUser) return reply(mess.only.userB)  
					var pc = body.slice(6)
					var nomor = pc.split("|")[0];
					var org = pc.split("|")[1];
					client.sendMessage(nomor+'@s.whatsapp.net', org, text)
					break
					case 'googleimage':
				   client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (!isPublic) return reply(mess.only.publikG)
				   if (args.length < 1) return reply('Apa yang mau dicari kak?')
					goo = body.slice(7)
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=RamlanID`, {method: 'get'})
					reply(mess.wait)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					client.sendMessage(from, pint, image, { caption: '*Google Image*\n\n*Hasil Pencarian : '+goo+'*', quoted: mek })
					break
					case 'delete':
					case 'del':
					case 'd':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					if (!isGroup)return reply(mess.only.group)
					if (!isGroupAdmins)return reply(mess.only.admin)
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
					case 'kalkulator':
					if (isBanned) return reply(mess.only.benned)    
				   if (!isUser) return reply(mess.only.userB)
				   if (!isPublic) return reply(mess.only.publikG)
				     if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
				    const Math_js = require('mathjs')
				    mtk = body.slice(6)
				    if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", bukan angka!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
				} else {
					reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				    break
					case 'chatdelete':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
					case 'indo8':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute7 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute7, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })
					break
					case 'indo9':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute8 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute8, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/aipi6xisyppe751/VID-20210107-WA1465.mp4/file' })
					break
					case 'indo10':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute9 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute9, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })
					break
					case 'indo11':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute10 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute11, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })
					break
					case 'indo12':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute12 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute12, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })
					break
					case 'indo13':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute11 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute11, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })
					break
					case 'indo14':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute13 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute13, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })
					break
					case 'indo15':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute14 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute14, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })
					break
					case 'indo16':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute15 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute15, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })
					break
					case 'indo17':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute16 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute16, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })
					break
					case 'indo18':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute17 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute17, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })
					break
					case 'indo19':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute18 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute18, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })
					break
					case 'indo20':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute19 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute19, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })
					break
					case 'indo21':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute20 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute20, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })
					break
					case 'indo22':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute21 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute21, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })
					break
					case 'indo23':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute22 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute22, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })
					break
					case 'indo24':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute23 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute23, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })
					break
					case 'indo25':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute24 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute24, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/j3hxseqc3uoc1v7/VID-20210107-WA1526.mp4/file' })
					break
					case 'vipmenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *#daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					client.sendMessage(from, vipmenu(prefix) , text, { quoted: mek })
					break
					case 'jadiselebgram':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, jadiselebgram(prefix) , text, { quoted: mek })
					break
					case 'iklan':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, iklan(prefix) , text, { quoted: mek })
					break
					case 'cekup':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, cekup(prefix) , text, { quoted: mek })
					break
					case 'memobot':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, memobot(prefix) , text, { quoted: mek })
					break
					case 'bycc':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, bycc(prefix) , text, { quoted: mek })
					break
					
					case 'virtex':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, virtex(prefix) , text, { quoted: mek })
					break
					case 'sendvir':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					                     
                 client.sendMessage(from, sendvir(prefix) , text, { quoted: mek })
					break
					case 'hackingmenu':
                    case 'hackmenu':
                    case 'tools': 
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    client.sendMessage(from, hackingmenu(prefix), text, { quoted: mek })
                    break
                    
                    case 'afix':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    client.sendMessage(from, afix(prefix), text, { quoted: mek })
                    break
                    case 'bfix':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    client.sendMessage(from, bfix(prefix), text, { quoted: mek })
                    break
                    
                    case 'daftarmemberselebgram':
                    case 'daftarmemberselebgram':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    client.sendMessage(from, daftarmemberselebgram(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://i.ibb.co/nkpvL3j/Screenshot-2021-02-06-01-08-50-65.jpg`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '*ini Instagram Managementnya😘*'})
                    break
                    case 'developer':
                    case 'kontakdeveloper':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    client.sendMessage(from, developer(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://i.ibb.co/0JpmjLM/20210209-181809-compress78.jpg`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '*Jangan lupa follow Instagram Owner Aku🙈 : @arifirazzaq2001*'})
                    break
                    case 'darkfb':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    client.sendMessage(from, darkfb(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '▉◣◢▉▉▔▉▉▔▉▉▔▉▉▔▉ ▉◥◤▉▉▂▉▉▂◤▉▂▉▉▂◤ ▉┆┆▉▉┆▉▉▔▉▉┆▉▉▔▉ ▉┆┆▉▉┆▉▉▂▉▉┆▉▉┆▉'})
                    break
					case 'animesaran':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					qute = await getBuffer(`https://i.ibb.co/F7y89KS/images-2021-01-06-T011202-662.jpg`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: animesaran() })
					break
					case 'listsurah':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					                    case 'fbcheker':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    client.sendMessage(from, fbcheker(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '▉◣◢▉▉▔▉▉▔▉▉▔▉▉▔▉ ▉◥◤▉▉▂▉▉▂◤▉▂▉▉▂◤ ▉┆┆▉▉┆▉▉▔▉▉┆▉▉▔▉ ▉┆┆▉▉┆▉▉▂▉▉┆▉▉┆▉'})
                    break
                    case 'hackfb':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    client.sendMessage(from, hackfb(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '▉◣◢▉▉▔▉▉▔▉▉▔▉▉▔▉ ▉◥◤▉▉▂▉▉▂◤▉▂▉▉▂◤ ▉┆┆▉▉┆▉▉▔▉▉┆▉▉▔▉ ▉┆┆▉▉┆▉▉▂▉▉┆▉▉┆▉'})
                    break
                    case 'bruteforcefb':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    client.sendMessage(from, bruteforcefb(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '▉◣◢▉▉▔▉▉▔▉▉▔▉▉▔▉ ▉◥◤▉▉▂▉▉▂◤▉▂▉▉▂◤ ▉┆┆▉▉┆▉▉▔▉▉┆▉▉▔▉ ▉┆┆▉▉┆▉▉▂▉▉┆▉▉┆▉'})
                    break
                    case 'toolsphishing':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    client.sendMessage(from, toolsphishing(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '▉◣◢▉▉▔▉▉▔▉▉▔▉▉▔▉ ▉◥◤▉▉▂▉▉▂◤▉▂▉▉▂◤ ▉┆┆▉▉┆▉▉▔▉▉┆▉▉▔▉ ▉┆┆▉▉┆▉▉▂▉▉┆▉▉┆▉'})
                    break
                    case 'socialfishv2':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    client.sendMessage(from, socialfishv2(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '▉◣◢▉▉▔▉▉▔▉▉▔▉▉▔▉ ▉◥◤▉▉▂▉▉▂◤▉▂▉▉▂◤ ▉┆┆▉▉┆▉▉▔▉▉┆▉▉▔▉ ▉┆┆▉▉┆▉▉▂▉▉┆▉▉┆▉'})
                    break
                    case 'terkeytermux':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    client.sendMessage(from, terkeytermux(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '▉◣◢▉▉▔▉▉▔▉▉▔▉▉▔▉ ▉◥◤▉▉▂▉▉▂◤▉▂▉▉▂◤ ▉┆┆▉▉┆▉▉▔▉▉┆▉▉▔▉ ▉┆┆▉▉┆▉▉▂▉▉┆▉▉┆▉'})
                    break
                    case 'killerbee1':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    client.sendMessage(from, killerbee1(prefix), text, { quoted: mek })
                    case 'killerbee0':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    client.sendMessage(from, killerbee0(prefix), text, { quoted: mek })
                    break
                    case 'hackingmenu':
                    case 'hackmenu':
                    case 'tools': 
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return r
					client.sendMessage(from, listsurah(prefix) , text, { quoted: mek })
					break
					case 'tnc':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, tnc(prefix) , text, { quoted: mek })
					break
					case 'listzodiak':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					
					client.sendMessage(from, listzodiak(prefix) , text, { quoted: mek })
					break
					case 'zodiak':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
	if (args.length === 0) {
	client.sendMessage(from, listzodiak(), text)
	} else if (args.includes('aries')) {
	client.sendMessage(from, aries(), text)
	} else if (args.includes('taurus')) {
	client.sendMessage(from, taurus(), text)
	} else if (args.includes('gemini')) {
	client.sendMessage(from, gemini(), text)
	} else if (args.includes('cancer')) {
	client.sendMessage(from, cancer(), text)
	} else if (args.includes('leo')) {
	client.sendMessage(from, Leo(), text)
	} else if (args.includes('virgo')) {
	client.sendMessage(from, Virgo(), text)
	} else if (args.includes('libra')) {
	client.sendMessage(from, Libra(), text)
	} else if (args.includes('scorpio')) {
	client.sendMessage(from, Scorpio(), text)
	} else if (args.includes('sagittarius')) {
	client.sendMessage(from, Sagittarius(), text)
	} else if (args.includes('capricorn')) {
	client.sendMessage(from, Capricorn(), text)
	} else if (args.includes('aquarius')) {
	client.sendMessage(from, Aquarius(), text)
	} else if (args.includes('pisces')) {
	client.sendMessage(from, Pisces(), text)
	}
	break
		     case 'tutuptime': //by ★彡Rҽʂƚα~Fʋɳƙყ彡★
              client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isPublic) return reply(mess.only.publikG)
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
case 'iri':
const irimp3 = fs.readFileSync('./src/assets/iri.mp3');
client.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('./src/assets/pale.mp3')
client.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'dj1':
const dj1mp3 = fs.readFileSync('./src/assets/dj1.m4a')
client.sendMessage(from, dj1mp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'dj2':
const dj2mp3 = fs.readFileSync('./src/assets/dj2.m4a')
client.sendMessage(from, dj2mp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'baka':
case 'bodoh':
case 'onichan':
const bakamp3 = fs.readFileSync('./src/assets/baka.mp3');
client.sendMessage(from, bakamp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('./src/assets/sound.mp3')
client.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./src/assets/sound1.mp3');
client.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./src/assets/sound2.mp3');
client.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./src/assets/sound3.mp3');
client.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./src/assets/sound4.mp3');
client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./src/assets/sound5.mp3');
client.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./src/assets/sound6.mp3');
client.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./src/assets/sound7.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break							             
                
     
				case 'info':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					me = client.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*Author* : *HAFIDZ*\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Public:* ON\n*Total User Premium*: ${premium.length}\n*Total Chat* : ${totalchat.length}\n*Instagram* : https://instagram.com/hfdzzy_\n*Github* : *github.com/COMING SOON*\n*Youtube* : *GAK ADA!*`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
					case 'profile':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					me = client.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*Anuther* : *HAFIDZ*\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Public:* OFF`
					buffer111 = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer111, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
					 case 'chatlist':
					 client.updatePresence(from, Presence.composing)  
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
					teks = 'This is list of chat number :\n'
					for (let all of totalchat) {
						teks += `~> @${all}\n`
					}
					teks += `Total : ${totalchat.length}`
					 client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": totalchat}})
					break
				case 'listblock': 
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)    
					teks = '𝐁𝐋𝐎𝐂𝐊 𝐋𝐈𝐒𝐓 :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝐓𝐨𝐭𝐚𝐥 : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
					
				case 'turnoff':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isOwner) return reply('Kamu Siapa Owner?')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						client.sendMessage(from, 'BOT BERHASIL DIMATIKAN', text, { quoted: mek })
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buffer222 = fs.readFileSync(ran)
								client.sendMessage(from, buffer222, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								buffer333 = fs.readFileSync(ran)
								client.sendMessage(from, buffer333, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer444 = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer444, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								buffer555 = fs.readFileSync(ran)
								client.sendMessage(from, buffer555, sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`REPLAY GAMBAR JIKA INGIN MEMATIKAN BOT!`)
					}
					break
			case 'creator':
			case 'owner':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                 client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                 client.sendMessage(from, 'kenalin ya itu owner ku! jangan kau ApaApa-in Owner Ku >_-',MessageType.text, { quoted: mek} )
                 tod = await getBuffer(`https://i.ibb.co/0s4v15V/IMG-20210205-WA0000.jpg`)
                 client.sendMessage(from, tod, image, { quoted: mek, caption: '*Halo Sob! Gw Ownernya Kalau Mau Tanya Tanya Chat Aja Ya Sob!, Salam kenal 🤗*'})
                 break
                     case 'fakereplay':
                   client2.fakeReply("ange mas", "mending lari", "0816-5466-368", MessageType.text)
                   break
                 case 'emailtome':
            try {
            	if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                .then((response) => {
                    let hehex = '╔══✪〘 List Surah 〙✪══\n'
                    for (let i = 0; i < response.data.data.length; i++) {
                        hehex += '╠➥ '
                        hehex += response.data.data[i].name.transliteration.id.toLowerCase() + '\n'
                            }
                        hehex += '╚═〘 *I C H I* 〙'
                    reply(from, hehex, text)
                })
            } catch(err) {
                reply(from, err, text)
            }
            break
            case 'img2url':
           if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
             var imgbb = require('imgbb-uploader')
            var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            var media = await  client.downloadAndSaveMediaMessage(encmedia)
            
            imgbb('727e7e43f6cda1dfb85d888522fd4ce1', media)
                .then(data => {
                    var caps = `*「 _IMAGE TO URL_ 」*\n\n*╠➥  ID :* ${data.id}\n*╠➥  MimeType :* ${data.image.mime}\n*╠➥  Extension :* ${data.image.extension}\n\n*╠➥  URL :* ${data.display_url}`
                    ibb = fs.readFileSync(media)
                     client.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
                })
                .catch(err => {
                    throw err
                })
            break
            case 'chatlist':
					client.updatePresence(from, Presence.composing)  
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				teks = 'This is list of chat number :\n'
					for (let all of totalchat) {
						teks += `~> @${all}\n`
					}
					teks += `Total : ${totalchat.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": totalchat}})
					break
                 case 'fitnah':
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                 if (!isPublic) return reply(mess.only.publikG)
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
                case 'fakereplay':
                   client2.fakeReply("ange mas", "mending lari", "0816-5466-368", MessageType.text)
                   break
				case 'infogc':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
				client.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await client.getProfilePicture(from)
				} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					client.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
				case 'groupinfo':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
                client.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(mess.only.group)
                ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			    buffergbl = await getBuffer(ppUrl)
		        client.sendMessage(from, buffergbl, image, {quoted: mek, caption: `*NAME* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESK* : ${groupDesc}`})
                break
                case 'tomp3':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)

                	client.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❌ reply videonya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
						bufferlkj = fs.readFileSync(ran)
						client.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
					case 'chatlist':
					client.updatePresence(from, Presence.composing)  
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
					teks = 'This is list of chat number :\n'
					for (let all of totalchat) {
						teks += `~> @${all}\n`
					}
					teks += `Total : ${totalchat.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": totalchat}})
					break
					case 'daftar':
					client.updatePresence(from, Presence.composing)
					if (isUser) return reply('kamu sudah terdaftar')
					if (args.length < 1) return reply(`*🙊Ups! Salah Atuh Yank ❌*\n*Gini Loh Sayangku! Cara Daftarnya* \n\n*Ketik :* \n❖ ${prefix}daftar nama lengkap|umur \n\n*Contoh :* \n❖ ${prefix}daftar Arifi Razzaq|17`)
					var reg = body.slice(8)
					var jeneng = reg.split("|")[0];
					var umure = reg.split("|")[1];
						user.push(sender)
						fs.writeFileSync('./src/user.json', JSON.stringify(user))
						client.sendMessage(from, `\`\`\`Pendaftaran berhasil dengan SN: KSH28HSI2KDOE8284H\`\`\`\n\n *╭═* ⃟ ⃟  ━ೋ๑—๑ೋ━ ⃟ ⃟ *═╮ \n\n          *${date} ${time}* \n\n*❰ Nama ❱ :* ${jeneng} \n*❰ Umur ❱ :* ${umure} \n*❰ Nomor ❱ :* wa.me/${sender.split("@")} \n\n*╰═* ⃟ ⃟  ━ೋ๑—๑ೋ━ ⃟ ⃟ *═╯ \n\n*Untuk menggunakan bot* \n*silahkan* \n*ketik ${prefix}rules* \n\n*Total Pengguna ${user.length}*`, text, {quoted: mek})
					break
				case 'testime':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					setTimeout( () => {
					client.sendMessage(from, '100', text) // ur cods
					client.sendMessage(from, '50', text) // ur cods
					client.sendMessage(from, '60', text) // ur cods
					}, 10000) // 1000 = 1s,
					break
					case 'totaluser':
					client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `\`\`\`╭────*「 *TOTAL USER HASUFA BOT👑* 」\n\`\`\``
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total Pengguna : ${user.length}\n╰──────*「 *HASUFA* 」*────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
				
				case 'headshot':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Bismillah Headshot >_< :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
						mentions(teks, mentioned, true)
						client.groupAdd(from, [num])
					} else {
						mentions(`Berhasil Meng headshot pala nya  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
						}
				case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await client.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    client.sendMessage(from, yeh, text, {quoted: mek})
			        break
			case 'fml':
                 
                if (!isUser) return reply(mess.only.userB)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`)
                hasil = data.result.fml
                reply(hasil)
                break
				case 'hidetag':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(mess.only.premium)
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
			case 'randomnekonime':
			if (isBanned) return reply(mess.only.benned)    
		    if (!isUser) return reply(mess.only.userB)
	        if (!isPublic) return reply(mess.only.publikG)
                    anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/nekonime`).json()
                    if (nekonime.result.endsWith('.png')) {
                    var ext = '.png'
                 } else {
                   var ext = '.jpg'
            }
            client.sendFileFromUrl(from, nekonime.result, `Nekonime${ext}`, 'Nekonime!', id)
            break
				case 'block':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
					case 'ownergrup':
				  case 'ownergroup':
               client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
             if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
               options = {

          text: `Owner Group ini adalah : @${groupOwner.split("@")[0]}`,

          contextInfo: { mentionedJid: [groupOwner] }

           }

           client.sendMessage(from, options, text, { quoted: mek } )
				break
				
                case 'playmp3':
                case 'murrotal':
                case 'sholawat':
                case 'play':
                if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
                reply(mess.wait)
                play = body.slice(9)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 infomp3 = `「 *TIMELINE PLAY MP3* 」\n*• Judul:* ${anu.result.title}\n*• Source:* ${anu.result.source}\n*• Ukuran:* ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
                case 'fb':
				  client.updatePresence(from, Presence.composing)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
				reply(mess.wait)
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('www.facebook.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/epbe?url=${args[0]}&apiKey=IDxO1TFYnKADlX4pxcHa`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					client.sendMessage(from, '[ WAIT ] Sedang Diproses\n\nLinknya Only Google Gan Biar Bisa Didownload', text, {quoted: mek})
					efbe = `Title: *${anu.title}*\nSize: *${anu.filesize}\nDipublikasikan Pada: *${anu.published}*`
					tefbe = await getBuffer(anu.thumb)
					client.sendMessage(from, tefbe, image, {quoted: mek, caption: efbe})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: 'Nih Gan'})
					break
                case 'reminder':
 
 if (!isOwner) return reply(mess.only.ownerB)
					var gh = body.slice(10)
					var anu = gh.split("|")[0];
					var ani = gh.split("|")[1];
					jm = `${anu}000`
					client.sendMessage(from, `*「 REMINDER 」*\n\nReminder diaktifkan!\n\n╠➥  *Pesan*: ${ani}\n╠➥  *Durasi*: ${anu} detik\n╠➥  *Untuk*: @${sender.split("@s.whatsapp.net")[0]}`, text, {contextInfo: {mentionedJid: [sender]}})
					setTimeout( () => {
					client.sendMessage(from, `*「 REMINDER 」*\n\nAkhirnya tepat waktu~@${sender.split("@s.whatsapp.net")[0]}\n\n╠➥  *Pesan*: ${ani}`, text, {contextInfo: {mentionedJid: [sender]}}) // ur cods
					}, jm) // 1000 = 1s,
					break    
					case 'wibu':
					if (isBanned) return reply(mess.only.benned)    
				   if (!isUser) return reply(mess.only.userB)
				
   if (!isPublic) return reply(mess.only.publikG)
					client.updatePresence(from, Presence.composing)
					if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, wibu(prefix, pushname2), text, {quoted: mek})
					break
                    case 'unblock':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                    
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `perintah Diterima, membuka blokir ${body.slice(9)}@c.us`, text)
				    break
				case 'premiumlist':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					teks = '╭────*「 *PREMIUM USER👑* 」\n'
					for (let V of premium) {
						teks += `│+  @${V.split('@')[0]}\n`
					}
					teks += `│+ Total : ${premium.length}\n╰──────*「 *HASUFA* 」*────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					break
                case 'quotemaker':
                case 'quoteit':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
					var ghh = body.slice(12)
					var quote = ghh.split("|")[0];
					var wm = ghh.split("|")[1];
					var bg = ghh.split("|")[2];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark|theme\n\nEx :\n${prefix}quotemaker ini contoh|bicit|random`
					if (args.length < 1) return reply(pref)
					reply(mess.wait)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`, {method: 'get'})
					buffealr = await getBuffer(anu.result)
					client.sendMessage(from, buffealr, image, {caption: 'Nih anjim', quoted: mek})
					break
				case 'galaxtext':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('mau apa om')
					teks = body.slice(11)
					if (teks.length > 8) return reply('Teksnya kepanjangan, maksimal 8 karakter')
					reply(mess.wait)
					bufasfer = await getBuffer(`https://api.vhtear.com/galaxytext?text=${teks}&apikey=RamlanID`, {method: 'get'})
					client.sendMessage(from, bufasfer, image, {quoted: mek})
					break
					case 'citacita': 
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
            if (!isGroup) return reply(mess.only.group)
            if (!isPublic) return reply(mess.only.publikG)
                citacita = body.slice(1)
                    .then(async (body) => {
                        const cita = body.split('\n')
                        const randomCita = cita[Math.floor(Math.random() * cita.length)]
                        client.sendMessange(from, randomCita, 'cita.mp3', '', id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        reply(from, 'Error!', id)
                    })
            break
					case 'jsholat':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('Masukan nama daerah!!')
					sholat = body.slice(9)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/jadwalshalat?q=${sholat}&apikey=BotWeA`, {method: 'get'})
					reply(mess.wait)
					if (anu.error) return reply('[\u2757] Maaf, Daerah yang anda masukan salah!')
					jsol = `Jadwal sholat di ${sholat} hari ini adalah\n\n*➸ Imsyak :* ${anu.result.imsak} WIB\n*➸ Subuh :* ${anu.result.subuh} WIB\n*➸ Dzuhur :* ${anu.result.dzuhur} WIB\n*➸ Ashar :* ${anu.result.ashar} WIB\n*➸ Maghrib :* ${anu.result.maghrib} WIB\n*➸ Isya :* ${anu.result.isha} WIB\n*➸ Tengah Malam :* ${anu.result.midnight} WIB`
					client.sendMessage(from, jsol, text, {quoted: mek})
					break
					case 'runtime':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
				client.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
				reply(`Bot Telah Aktif Selama\n*${kyun(uptime)}*`)
				break
					case 'covid':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
                   client.updatePresence(from, Presence.composing) 
                   data = await fetchJson(`https://arugaz.herokuapp.com/api/corona?country=${body.slice(7)}`)
                   if (data.result) reply(data.result)
                   hasil = `Negara : ${data.result.country}\n\nActive : ${data.result.active}\ncasesPerOneMillion : ${data.result.casesPerOneMillion}\ncritical : ${data.result.critical}\ndeathsPerOneMillion : ${data.result.deathsPerOneMillion}\nrecovered : ${data.result.recovered}\ntestPerOneMillion : ${data.result.testPerOneMillion}\ntodayCases : ${data.result.todayCases}\ntodayDeath : ${data.result.todayDeath}\ntotalCases : ${data.result.totalCases}\ntotalTest : ${data.result.totalTest}`
                   reply(hasil)
                   break
                case 'pornlogo':
                  if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    if (!isPublic) return reply(mess.only.publikG)
				    reply(mess.wait)
					gh = `${body.slice(9)}`
					gbl1 = gh.split("|")[0];
					gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana gan?')
					buffer = await getBuffer(`https://api.vhtear.com/pornlogo?text1=${gbl1}&text2=${gbl2}&apikey=RamlanID`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'husbu':
                if (isBanned) return reply(mess.only.benned)
                if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
                reply(mess.wait)
                gatauda = body.slice(13)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'husbu2':
				if (isBanned) return reply(mess.only.benned)
                if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)

                reply(mess.wait)
					gatauda = body.slice(13)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu2?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'shota':
				    try{
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
                if (isBanned) return reply(mess.only.benned)
                if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)

                reply(mess.wait)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nich'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❰❗❱ *ERROR* ❰❗❱')
					}
					break
					case 'mlogo':
					if (isLimit(sender)) return reply(limits.limitend(pushname2))
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isPremium) return reply(mess.only.premi)
					if (args.length < 1) return reply('Teksnya mana kak? >.<')
					teks = body.slice(6)
					reply(mess.wait)
					loog = await getBuffer(`https://api.vhtear.com/gamelogo?text=${teks}&apikey=RamlanID`, {method: 'get'})
					client.sendMessage(from, loog, image, {quoted: mek, caption: 'Logo '+teks})
					break
				case 'primbonjodoh':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
				
					var gh5 = body.slice(14)
					var gbl11 = gh5.split("|")[0];
					var gbl21 = gh5.split("|")[1];
					anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=hafidz&pasangan=hafidz&apikey=RamlanID`, {method: 'get'})
					reply(anu.result.hasil)
					break
				case 'ramaljadian':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
				
					var gh7 = body.slice(10)
					var gbl16 = gh7.split("|")[0];
					var gbl26 = gh7.split("|")[1];
					var gbl36 = gh7.split("|")[2];
					anu = await fetchJson(`https://api.vhtear.com/harijadian?tgl=${gbl16}&bln=${gbl26}&thn=${gbl36}&apikey=RamlanID`, {method: 'get'})
					reply(anu.result.hasil)
					break
					case 'bass':                 
       if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
                if (isBanned) return reply(mess.only.benned)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
                case 'tahta':
                if (isLimit(sender)) return reply(limits.limitend(pushname2))
                if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
                if (isBanned) return reply(mess.only.benned)
                reply(mess.wait)
                tahta = `${body.slice(7)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buff = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${tahta}&apikey=apivinz`, {method: 'get'})
                     client.sendMessage(from, buff, image, {quoted: mek})
                  break
                  
                  case 'tahta2':
                  if (isLimit(sender)) return reply(limits.limitend(pushname2))
                if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
                if (isBanned) return reply(mess.only.benned)
                reply(mess.wait)
                tahta = `${body.slice(7)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buff = await getBuffer(`https://api.vhtear.com/hartatahta?text=${tahta}&apikey=RamlanID`, {method: 'get'})
                     client.sendMessage(from, buff, image, {quoted: mek, caption: 'Harta Tahta '+tahta})
                  break
                  case 'unafk':

                                        tels = body.slice(4)

                                        if (args.length < 1) return reply('sukess!!?')
                                        if (isBanned) return reply(mess.only.benned)
                                        var nom = mek.participant
                                        const kl7 = {
                                                text: `@${nom.split("@s.whatsapp.net")[0]} *TELAH KEMBALI DARI AFK ${tels}*`,
                                                contextInfo: { mentionedJid: [nom] }
                                        }
                                        client.sendMessage(from, kl7, text, {quoted: mek})
                                        break
					case 'pinterest':
					if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply(mess.search)
					reply(mess.wait)
					pinte = body.slice(11)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=${pinte}&apikey=RamlanID`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pinehg = await getBuffer(trest)
					client.sendMessage(from, pinehg, image, { caption: '*Pinterest*\n\n*Hasil Pencarian : '+pinte+'*', quoted: mek })
					break
					case 'croman':
                if (!isUser) return reply(mess.only.userB)
                if (isBanned) return reply(mess.only.benned)
                if (isLimit(sender)) return reply(limits.limitend(pushname2))
                roman = `${body.slice(8)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buff = await getBuffer(`https://api.vhtear.com/romancetext?text=${roman}&apikey=${VthearApi}`, {method: 'get'})
                     client.sendMessage(from, buff, image, {quoted: mek})
                  await limitAdd(sender) 
                  break
					case 'jarak':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    if (isLimit(sender)) return reply(limits.limitend(pushname2))
			    jarak = `${body.slice(7)}`
			    ja = jarak.split("/")[0];
			    rak = jarak.split("/")[1];
			    anu = await fetchJson(`https://api.vhtear.com/distance?from=${ja}&to=${rak}&apikey=${VthearApi}`, {method: 'get'})
			    client.sendMessage(from, `${anu.result.data}`, text, {quoted: mek})
			    await limitAdd(sender) 
			    break
					case 'addsay':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
				    hai = body.slice(8)
						sayrandom.push(hai)
						fs.writeFileSync('./src/say.json', JSON.stringify(sayrandom))
						reply(`Sukses, Kata ${hai} Telah Ditambahkan ke database`)
						break
                   case 'saylist':
                   if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					teks = 'This is list of say list :\n'
					for (let awokwkwk of sayrandom) {
						teks += `╠➥ ${awokwkwk}\n`
					}
					teks += `Total : ${sayrandom.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": sayrandom}})
					break
                    case 'resetsay':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isUser) return reply(mess.only.userB)
				    hai = body.slice(10)
						sayrandom.splice(hai)
						fs.writeFileSync('./src/say.json', JSON.stringify(sayrandom))
						reply(`Sukses, database say telah direset`)
						break
                    case 'say':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
                    hasil = sayrandom[Math.floor(Math.random() * (sayrandom.length))]
                    reply(hasil)
                    break
				case 'testing':
					var gh8 = body.slice(5)
					var gbl38 = gh8.split("|")[0];
					var gbl48 = gh8.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana um')
					reply(mess.wait)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/watercolour?text1=${gbl38}&text2=${gbl48}&apikey=xptnbot352`, {method: 'get'})
					buffersda = await getBuffer(anu.result)
					client.sendMessage(from, buffersda, image, {quoted: mek})
					break
					case 'neonligth':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
                      if (args.length < 1) return reply('Teks nya mana?')
                      naon = body.slice(9)
                      reply(mess.wait)
                      anu = await fetchJson(`https://arugaz.my.id/api/textpro/neonlight?text=${naon}&apikey=RamlanID`, {method: 'get'})
                      buffers = await getBuffer(anu.result)
                      client.sendMessage(from, buffers, image, {quoted: mek})
                      break
				case 'snow':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					var ghn = body.slice(6)
					var gbl7w = ghn.split("|")[0];
					var gbl8w = ghn.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana um')
					reply(mess.wait)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/snowwrite?text1=${gbl7w}&text2=${gbl8w}&apikey=BotWeA`, {method: 'get'})
					buffertfd = await getBuffer(anu.result)
					client.sendMessage(from, buffertfd, image, {quoted: mek})
					break
					case 'ban':
					client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`berhasil banned : ${ban}`)
					break
				case 'unban':
					if (!isOwner)return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./src/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
				case 'banlist':
					client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					teks = 'This is list of ban number :\n'
					for (let benn of ban) {
						teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break
				case 'quran':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					client.sendMessage(from, quran, text, {quoted: mek})
					break
				case 'marvelogo':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					var dgh = body.slice(10)
					var dgbl5 = dgh.split("|")[0];
					var dgbl6 = dgh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana um')
					reply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/marvellogo?text1=MARVEL&text2=STUDIO&apikey=apivinz`, {method: 'get'})
					buffergvc = await getBuffer(anu.result)
					client.sendMessage(from, buffergvc, image, {quoted: mek})
					break
				case 'lovemake':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('Teksnya mana um')
					love = body.slice(10)
					if (love.length > 12) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					bufferxcz = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=RamlanID`, {method: 'get'})
					client.sendMessage(from, bufferxcz, image, {quoted: mek, caption: ' '+love})
					break
				case 'metalteks':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('Teksnya mana um')
					love = body.slice(10)
					if (love.length > 12) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					bufferxcz = await getBuffer(`https://api.vhtear.com/metal_maker?text=${love}&apikey=RamlanID`, {method: 'get'})
					client.sendMessage(from, bufferxcz, image, {quoted: mek, caption: ' '+love})
					break
				case 'apiteks':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('Teksnya mana um')
					love = body.slice(10)
					if (love.length > 12) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					bufferxcz = await getBuffer(`https://api.vhtear.com/fire_maker?text=${love}&apikey=RamlanID`, {method: 'get'})
					client.sendMessage(from, bufferxcz, image, {quoted: mek, caption: ' '+love})
					break
				case 'ffbaner':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('Teksnya mana um')
					love = body.slice(10)
					if (love.length > 12) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					bufferxcz = await getBuffer(`https://api.vhtear.com/bannerff?title=${love}&text=ARIFI%20RAZZAQ&apikey=RamlanID`, {method: 'get'})
					client.sendMessage(from, bufferxcz, image, {quoted: mek, caption: ' '+love})
					break
					case 'goldbutton':
					if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					gol = body.slice(12)
					if (args.length < 1) return reply('Teksnya mana um')
					reply(mess.wait)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/gplaybutton?text=${gol}&apikey=xptnbot352`, {method: 'get'})
					gools = await getBuffer(anu.result)
					client.sendMessage(from, gools, image, {quoted: mek})
					break
					case 'textdark':
					if (isLimit(sender)) return reply(limits.limitend(pushname2))
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					anu = await fetchJson(`http://api-melodicxt.herokuapp.com/api/txtcustom?theme=metal_dark_gold&text=${tels}&apiKey=RamlanID`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'textblue':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					anu = await fetchJson(`http://api-melodicxt.herokuapp.com/api/txtcustom?theme=blue_metal&text=${tels}&apiKey=RamlanID`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'textsky':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					anu = await fetchJson(`http://api-melodicxt.herokuapp.com/api/txtcustom?theme=sky_online&text=${tels}&apiKey=RamlanID`, {method: 'get'})
					buff = await getBuffer(anu.result.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'silverbutton':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					gol2 = body.slice(14)
					if (args.length < 1) return reply('Teksnya mana um')
					reply(mess.wait)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/splaybutton?text=${gol2}&apikey=xptnbot352`, {method: 'get'})
					gools2 = await getBuffer(anu.result)
					client.sendMessage(from, gools2, image, {quoted: mek})
					break
					case 'wood':
					if (isLimit(sender)) return reply(limits.limitend(pushname2))
          if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('Teksnya mana kak? >.<')
					teks = body.slice(6)
					if (teks.length > 9) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					Buffer = await getBuffer(`https://tobz-api.herokuapp.com/api/photooxy?theme=wood_block&text=${teks}&apikey=BotWeA`)

					client.sendMessage(from, buffer, image, {quoted: mek, caption: ''+teks})
					break
				case 'thunder':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('Teksnya mana um')
					thun = body.slice(9)
					if (thun.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					bufferw = await getBuffer(`https://api.vhtear.com/thundertext?text=${thun}&apikey=RamlanID`, {method: 'get'})
					client.sendMessage(from, bufferw, image, {quoted: mek, caption: ' '+thun})
					break
                case 'stiltext':
                if (isLimit(sender)) return reply(limits.limitend(pushname2))
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
                      if (args.length < 1) return reply('Teks nya mana?')
                      gdh = body.slice(11)
                      gl1 = gdh.split("|")[0];
                      gl2 = gdh.split("|")[1];
                      buffere = await getBuffer(`https://api.vhtear.com/silktext?text=${gl1}&text2=${gl2}&apikey=RamlanID`, {method: 'get'})
                      reply(mess.wait)
                      client.sendMessage(from, buffere, image, {quoted: mek, caption: 'thund ni '+gh})
                      break
                      case 'qrcode':
                      if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                      if (!isPublic) return reply(mess.only.publikG)
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, '𝐌𝐚𝐬𝐮𝐤𝐚𝐧 𝐓𝐞𝐤𝐬/𝐔𝐫𝐥 𝐘𝐚𝐧𝐠 𝐈𝐧𝐠𝐢𝐧 𝐃𝐢 𝐁𝐮𝐚𝐭 𝐐𝐑', text, {quoted: mek})
					const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, bufferr, image, {quoted: mek})
					break
                case 'water':
                if (isLimit(sender)) return reply(limits.limitend(pushname2))
                if (isBanned) return reply(mess.only.benned)
                if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
                if (args.length < 1) return reply(mess.blank)
				teks = body.slice(7)
									if (args.length < 1) return reply(mess.blank)
					if (tels.length > 15) return reply('Teksnya kepanjangan, maksimal 20 karakter')
					tels = body.slice(7)
					anu = await fetchJson(`https://kocakz.herokuapp.com/api/flamingtext/water?text=${tels}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
                case 'ninjalogo':
                if (isLimit(sender)) return reply(limits.limitend(pushname2))
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
                      if (args.length < 1) return reply('Teks nya mana?')
                      var geh = body.slice(11)
                      gl1n = geh.split("|")[0];
                      gl2n = geh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${gl1n}&text2=${gl2n}&apikey=BotWeA`, {method: 'get'})
                      bufqf = await getBuffer(anu.result)
                      client.sendMessage(from, bufqf, image, {quoted: mek})
                      break
                case 'glitch':
                if (isLimit(sender)) return reply(limits.limitend(pushname2))
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
					var jgh = body.slice(8)
					var tels3 = jgh.split("|")[0];
					var tels4 = jgh.split("|")[1];
					if (args.length < 1) return reply(mess.blank)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=glitch&text1=${tels3}&text2=${tels4}&apikey=BotWeA`, {method: 'get'})
					buffery = await getBuffer(anu.result)
					client.sendMessage(from, buffery, image, {quoted: mek})
					break
				case 'party':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply(mess.blank)
					part = body.slice(7)
					reply(mess.wait)
					bufferu = await getBuffer(`https://api.vhtear.com/partytext?text=${part}&apikey=RamlanID`, {method: 'get'})
					client.sendMessage(from, bufferu, image, {caption: 'Nih kak', quoted: mek})
					break
				case 'mlogo':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					part = body.slice(7)
					reply(mess.wait)
					bufferu = await getBuffer(`https://api.vhtear.com/logoml?hero=miya&text=${part}&apikey=RamlanID`, {method: 'get'})
					client.sendMessage(from, bufferu, image, {caption: 'Nih kak', quoted: mek})
					break
				case 'shadow':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					shad = body.slice(8)
					reply(mess.wait)
					ssha = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/photooxy/shadowtext?text=${shad}`)
					client.sendMessage(from, ssha, image, {caption: 'Nih kak', quoted: mek})
					break
				case 'minion':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					minio = body.slice(8)
					reply(mess.wait)
					minn = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/miniontext?text=${minio}`)
					client.sendMessage(from, minn, image, {caption: 'Nih kak', quoted: mek})
					break
				case 'neon':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply(mess.blank)
					nneoo = body.slice(6)
					reply(mess.wait)
					nooe = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/neontext?text=${nneoo}`)
					client.sendMessage(from, nooe, image, {caption: 'Nih kak', quoted: mek})
					break
				case 'neongreen':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply(mess.blank)
					grre = body.slice(11)
					reply(mess.wait)
					gree = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/greenneontext?text=${grre}`)
					client.sendMessage(from, gree, image, {caption: 'Nih kak', quoted: mek})
					break
				case 'neon2':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					duadua = body.slice(7)
					reply(mess.wait)
					duaa = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/neonwithgalaxytext?text=${duadua}`)
					client.sendMessage(from, duaa, image, {caption: 'Nih kak', quoted: mek})
					break
				case '3d':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply(mess.blank)
					dimen = body.slice(4)
					reply(mess.wait)
					tigaa = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/3dgradientstext?text=${dimen}`)
					client.sendMessage(from, tigaa, image, {caption: 'Nih kak', quoted: mek})
					break
				case 'blackpink':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply(mess.blank)
					dimen1 = body.slice(11)
					reply(mess.wait)
					tigaa1 = await getBuffer(`https://api.vhtear.com/blackpinkicon?text={dimen1}&apikey=RamlanID`)
					client.sendMessage(from, tigaa1, image, {caption: 'Nih kak', quoted: mek})
					break
				case 'sandwriting':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					dimen2 = body.slice(13)
					reply(mess.wait)
					tigaa2 = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/sandwritingtext?text={dimen2}`)
					client.sendMessage(from, tigaa2, image, {caption: 'Nih kak', quoted: mek})
					break
				case 'rtext':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply(mess.blank)
					tels5 = body.slice(7)
					if (tels5.length > 10) return reply('Teksnya kepanjangan, maksimal 10 karakter')
					reply(mess.wait)
					bufferi = await getBuffer(`https://api.vhtear.com/romancetext?text=${tels5}&apikey=RamlanID`, {method: 'get'})
					client.sendMessage(from, bufferi, image, {caption: 'Nih kak', quoted: mek})
					break
					
				case 'embuntext':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					anu = await fetchJson(`http://api-melodicxt.herokuapp.com/api/txtcustom?theme=dropwater&text=${tels}&apiKey=xptnbot352`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'fire':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.length > 15) return reply('Teksnya kepanjangan, maksimal 20 karakter')
					reply(mess.wait)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/tfire?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					buffero = await getBuffer(anu.result)
					client.sendMessage(from, buffero, image, {quoted: mek})
					break
				case 'light':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply(mess.blank)
					telsf = body.slice(7)
					if (tels.ength > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/tlight?text=${telsf}&apikey=xptnbot352`, {method: 'get'})
					bufferp = await getBuffer(anu.result)
					client.sendMessage(from, bufferp, image, {quoted: mek})
					break
                case 'wolflogo':
                if (isLimit(sender)) return reply(limits.limitend(pushname2))
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
                      if (args.length < 1) return reply('Teks nya mana?')
                      gqh = body.slice(9)
                      glq1 = gqh.split("|")[0];
                      glq2 = gqh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${glq1}&text2=${glq2}&apikey=BotWeA`, {method: 'get'})
                      buffera = await getBuffer(anu.result)
                      client.sendMessage(from, buffera, image, {quoted: mek})
                      break
                case 'lionlogo':
                if (isLimit(sender)) return reply(limits.limitend(pushname2))
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
                      if (args.length < 1) return reply('Teks nya mana?')
                      gwh = body.slice(9)
                      glw1 = gwh.split("|")[0];
                      glw2 = gwh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=lionlogo&text1=${glw1}&text2=${glw2}&apikey=BotWeA`, {method: 'get'})
                      buffers = await getBuffer(anu.result)
                      client.sendMessage(from, buffers, image, {quoted: mek})
                      break
				case 'leave': 
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
				    if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
			    	anu = await client.groupLeave(from, '𝗕𝘆𝗲𝗲', groupId)
	                break
	            case 'getses':
	if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
	         
                    if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner bot', id)
                    const sesPic = await client.getSnapshot()
                    client.sendFile(from, sesPic, 'session.png', 'Neh...', id)
                    break
				case 'setname':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			    bufferd = await getBuffer(ppUrl)
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, bufferd, image, {quoted: mek, caption: `Succes, Ganti Nama Grup\nYang Sebelumnya *${groupName}*`})
                break
                case 'setdesc':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			    bufferf = await getBuffer(ppUrl)
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, bufferf, image, {quoted: mek, caption: `Succes, Ganti Deskripsi Grup\nYang Sebelumnya *${groupDesc}*`})
                break
				case 'tts':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
				reply(mess.wait)
					if (args.length < 1) return client.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							bufferg = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							client.sendMessage(from, bufferg, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
					case 'ocr':
				if (isBanned) return reply(mess.only.benned)    
								if (!isUser) return reply(mess.only.userB)
												if (isBanned) return reply(mess.only.benned)    					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
											const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
																	const media = await client.downloadAndSaveMediaMessage(encmedia)
																							reply(mess.wait)
																													await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
																																				.then(teks => {
																																												reply(teks.trim())
																																																				fs.unlinkSync(media)
																																																											})
																																																																		.catch(err => {
																																																																										reply(err.message)
																																																																																		fs.unlinkSync(media)
																																																																																									})
																																																																																														} else {
																																																																																																				reply('Foto aja mas')
																																																																																																									}
																																																																																																														break	
	            case 'setpp':
	if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
	if (!isPublic) return reply(mess.only.publikG)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Sukses mengganti icon Grup')
                    break
                    case 'te':
                                       const asu = body.slice(4)
                                       if (argz.lenght >= 1) return client.sendText(from, asu)
                                       break
                case 'apakah':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					break
				case 'rate':
				case 'nilai':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					rate = body.slice(1)
					const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					break
					case 'gantengcek':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					ganteng = body.slice(1)
					const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					break
					case 'cantikcek':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					cantik = body.slice(1)
					const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const tik = can[Math.floor(Math.random() * can.length)]
					client.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					break
				case 'watak':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					watak = body.slice(1)
					const wa =['peny ayang','pem urah','Pem arah','Pem aaf','Pen urut','Ba ik','bap eran','Baik Hati','peny abar','Uw u','top deh, poko knya','Suka Memb antu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					break
				case 'hobby':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					break
				case 'bisakah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					break
				case 'kapankah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					break
					case 'dadu':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					kapankah = body.slice(1)
					const elu =['1','2','3','4','5','6']
					const ule = elu[Math.floor(Math.random() * elu.length)]
					client.sendMessage(from, ule, text, { quoted: mek })
					break
					case 'toxic':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					kapankah = body.slice(1)
					const toxic =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi']
					const ole = toxic[Math.floor(Math.random() * toxic.length)]
					client.sendMessage(from, ole, text, { quoted: mek })
					break
				case 'truth':
                if (isBanned) return reply(mess.only.benned)
                if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					break
				case 'dare':
                if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)     
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot 🤥 setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					break
case 'kus':
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					const kus =(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`)
                    const pel = kus[Math.floor(Math.random() * kus.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ pel })
					break				
                case 'Assalamualaikum':
               client.reply(from, `Waalaikumsalam wr.wb${pushname}:)`)
                break
                case 'speed':
                case 'ping':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
                    const timestamp = speed();
                    const latensi = speed() - timestamp
                    client.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
                    client.sendMessage(from, `Speed: *${latensi.toFixed(4)} _Second_*\nDevice: *Black Shark 3*\nRAM: *8/128*\nData: *Telkomsel*\nJaringan: *4G*\nStatus: *Belum Di Charger*\nBot Type: *Termux Only*\n\n*Bot Telah Aktif Selama*\n*${kyun(uptime)}*`, text, { quoted: mek})
                    break
                case 'tagme':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
					var nom = mek.participant
					const tag = {
					text: `@${nom.split("@s.whatsapp.net")[0]} tagged!`,
					contextInfo: { mentionedJid: [nom] }
					}
					client.sendMessage(from, tag, text, {quoted: mek})
					break
                case 'donasi':
				case 'donate':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, '*pulsa :* _0813-4227-1898_\n*gopay :* _0813-4449-7666_', text, { quoted: mek })
					break
                
					break
                case 'lirik':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
					teks = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result.lirik)
					break
                case 'bugreport':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
                     const pesan = body.slice(10)
                      if (pesan.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`

                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('62895622955538@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.')
                    break
                    
                    case 'infoalamat':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    if (isLimit(sender)) return reply(limits.limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchJson(`https://api.vhtear.com/infoalamat?query=${body.slice(12)}&apikey=${VthearApi}`, {method: 'get'})
			        client.sendMessage(from, `${anu.result.data}`, text, {quoted: mek})
			        await limitAdd(sender) 
			        break
                    case 'request':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
                     const cfrr = body.slice(9)
                      if (cfrr.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`

                      var options = {
                         text: ress,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('62895622955538@s.whatsapp.net', options, text, {quoted: mek})
                    reply('REQUEST ANDA TELAH SAMPAI ke owner BOT, Requests palsu/main2 tidak akan ditanggapi.')
                    break
			 case 'request':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
                     const pesann = body.slice(8)
                      if (pesan.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const teks2 = `*[REQUEST]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`

                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('62895622955538@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Request telah di laporkan ke owner BOT, request  yang dapat membebani owner tidak akan ditanggapi.')
                    break
				case 'meme': 
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					meme = await kagApi.memes()
					bufferk = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					client.sendMessage(from, bufferk, image, {quoted: mek, caption: '.......'})
					break
				case 'memeindo': 
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					memein = await kagApi.memeindo()
					bufferll = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					client.sendMessage(from, bufferll, image, {quoted: mek, caption: '.......'})
					break
				case 'ssweb':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('Urlnya mana om')
					tekss = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${tekss}`)
					bufferz = await getBuffer(anu.gambar)
					client.sendMessage(from, bufferz, image, {quoted: mek})
					break
				case 'walpaperhd':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('teks nya mana om')
					teksj = body.slice(7)
					reply(mess.wait)
					anwu = await fetchJson(`https://api.vhtear.com/walpaper?query=${teksj}&apikey=RamlanID`, {method: 'get'})
					bufferx = await getBuffer(anwu.result.LinkImg)
					client.sendMessage(from, bufferx, image, {quoted: mek})
					break
			    case 'nekonime':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=BotWeA`, {method: 'get'})
						bufferc = await getBuffer(res.result)
						client.sendMessage(from, bufferc, image, {quoted: mek, caption: 'Ingat! Cintai nekonime'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'cekprefix':
                       reply(from, `PREFIX YANG SAAT INI DIGUNAKAN *「* ${prefix} *」*`)
                   break
					case 'kiss':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA`, {method: 'get'})
						bufferv = await getBuffer(res.result)
						client.sendMessage(from, bufferv, image, {quoted: mek, caption: 'ezzzz'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'cry':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA`, {method: 'get'})
						bufferb = await getBuffer(res.result)
						client.sendMessage(from, bufferb, image, {quoted: mek, caption: 'ezzzz'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					
					break
					case 'nangis':
                if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
                reply('huwaaa😭😭')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'peluk':
					if (isBanned) return reply(mess.only.benned)
				    if (!isUser) return reply(mess.ony.userB)
				    if (!isPublic) return reply(mess.only.publikG)
				    reply('Peyukkkk')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'cium':
					if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
				reply('mwwuah,mwwuah😘')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'sideoppai':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
						res = await fetchJson(`https://meme-api.herokuapp.com/gimme/sideoppai`, {method: 'get'})
						buffern = await getBuffer(res.result)
						client.sendMessage(from, buffern, image, {quoted: mek, caption: 'ezzzz'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'randomwaifu':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
						res = await fetchJson(`https://waifu.pics/api/nsfw/waifu`, {method: 'get'})
						bufferm = await getBuffer(res.result)
						client.sendMessage(from, bufferm, image, {quoted: mek, caption: 'ezzzz'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'dxd':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
						res = await fetchJson(`https://mnazria.herokuapp.com/api/anime?query=dxd`, {method: 'get'})
						bufferqq = await getBuffer(res.result)
						client.sendMessage(from, bufferqq, image, {quoted: mek, caption: 'ezzzz'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'pps':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					if (!isNsfw) return reply('❌ *MODE NSFW BELUM DIAKTIFKAN* ❌')
						res = await fetchJson(`https://nhder.herokuapp.com/download/nhentai/'+code+'/zip`, {method: 'get'})
						bufferww = await getBuffer(res.result)
						client.sendMessage(from, bufferww, image, {quoted: mek, caption: 'ezzzz'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'waifu3':

				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)

						res = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=BotWeA`, {method: 'get'})

						bufferee = await getBuffer(res.image)

						client.sendMessage(from, bufferee, image, {quoted: mek, caption: 'Ingat! Cintai waifu!'})

					} catch (e) {

						console.log(`Error :`, color(e,'red'))
						
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})

						reply('❌ *ERROR* ❌')

					}

					break
					case 'hug':
				    try {
					
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA`, {method: 'get'})
						bufferrr = await getBuffer(res.result)
						client.sendMessage(from, bufferrr, image, {quoted: mek, caption: 'hug'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'loli4':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
						res = await fetchJson(`https://api.vhtear.com/randomloli&apikey=RamlanID`, {method: 'get'})
						buffertt = await getBuffer(res.result.result)
						client.sendMessage(from, buffertt, image, {quoted: mek, caption: 'loli'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
						}
						break
					case 'quotes':
					case 'qoutes':
				if (isBanned) return reply(mess.only.benned)
                if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)

                reply(mess.wait)
				quotes = body.slice(1)
				const quo =['Lebih baik mengerti sedikit daripada salah mengerti.','Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.','Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.','Penderitaan adalah pelajaran.','Ilmu pengetahuan tanpa agama adalah pincang.','Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.','Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.','Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?','Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.','Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.','Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.','Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.','Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.','Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.','Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.','Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.','Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.','Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.','Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.','Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.','Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.','Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.','Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.','Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.','Anda tidak perlu harus berhasil pada kali pertama.','Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.','Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.','Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.','Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
				const tes = quo[Math.floor(Math.random() * quo.length)]
				client.sendMessage(from, ''+tes+'\n\n_By : HAFIDZ._', text, { quoted: mek })
				break
					case 'quotesanime':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomquotes?apikey=BotWeA`, {method: 'get'})
						bufferyy = await getBuffer(res.result)
						client.sendMessage(from, bufferyy, image, {quoted: mek, caption: 'hug'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
					}
					break
					case 'waifu':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (!isPublic) return reply(mess.only.publikG)
reply(mess.wait)
				    try {

						res = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=BotWeA`, {method: 'get'})

						bufferuu = await getBuffer(res.image)

						client.sendMessage(from, bufferuu, image, {quoted: mek, caption: 'Ingat! Cintai waifu!'})

					} catch (e) {

						console.log(`Error :`, color(e,'red'))

						reply('❌ *ERROR* ❌')

					}

					break
				case 'loli':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
						res = await fetchJson(`https://api.vhtear.com/randomloli&apikey=RamlanID`, {method: 'get'})
						buffertt = await getBuffer(res.result.result)
						client.sendMessage(from, buffertt, image, {quoted: mek, caption: 'loli'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
						}
						break
			    case 'imagepest':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
						anu = await fetchJson(`https://api.i-tech.id/anim/baguette?key=oc2nvC-F4HS1e-OteAXu-5QkGag-J8WC94`, {method: 'get'})
						bufferii = await getBuffer(anu.result.result)
						client.sendMessage(from, bufferii, image, {quoted: mek, caption: 'Ingat! Cintai waifu!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						client.sendMessage(from, errorurl, image, {quoted: mek, caption: 'Error Kak!!'})
					}
					break
					case 'news':
					data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*link* : ${i.link}\n*Keterangan* : ${i.ket}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					break
					case 'pe':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
						anu = await fetchJson(`https://meme-api.herokuapp.com/gimme/sideoppai`, {method: 'get'})
						bufferoo = await getBuffer(anu.result.result)
						client.sendMessage(from, bufferoo, image, {quoted: mek, caption: 'Ingat! Cintai waifu!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'jd':
				    try {
					
						anu = await fetchJson(`https://waifu.pics/api/nsfw/waifu`, {method: 'get'})
						bufferpp = await getBuffer(anu.result.result)
						client.sendMessage(from, bufferpp, image, {quoted: mek, caption: 'Ingat! Cintai waifu!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
			    case 'waifu':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=RamlanID`, {method: 'get'})
						bufferaa = await getBuffer(res.image)
						client.sendMessage(from, bufferaa, image, {quoted: mek, caption: 'Ingat! Cintai waifu!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			    case 'waifu2':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.publikG)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=BotWeA`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					bufferss = await getBuffer(anu.image)
					waifu = `*${anu.desc}`
					client.sendMessage(from, bufferss, image, {quoted: mek, caption: waifu})
					break
				case 'imoji':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/emoji2png?emoji=IDxO1TFYnKADlX4pxcHa`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffergg = await getBuffer(anu.result)
					client.sendMessage(from, buffergg, image, {quoted: mek})
					break
				case 'wibu':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=RamlanID`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					bufferhh = await getBuffer(anu.result.foto)
					wibu = ` ➸ *nama* ${anu.result.nama} ➸ *deskripsi* ${anu.result.deskripsi}`
					client.sendMessage(from, bufferhh, image, {quoted: mek, caption: wibu})
					break
				case 'hunti':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/nhentaipdfdownload?query=287167&apikey=RamlanID`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					bufferjj = await getBuffer(anu.result.pdf_file)
					client.sendMessage(from, bufferjj, document, {mimetype: 'document/pdf', quoted: mek})
					break
					case 'nangis':

                                        if (!isUser) return reply(mess.only.userB)
                                        if (isBanned) return reply(mess.only.benned)
                                        if (!isPublic) return reply(mess.only.publikG)
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vs>`)
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                buffer = fs.readFileSync(rano)
                                                 client.sendMessage(from, buffer, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        break
				case 'kucing':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kucing`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek , caption: 'meong🐈'})
					break
					case 'jadian':

                    if (!isGroup) return reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)

                    const up = groupMembers

                    const aku = up[Math.floor(Math.random() * up.length)];

                    const kamu = up[Math.floor(Math.random() * up.length)];

                    const sapa = `Cieee... @${(/[@c.us]/g, '')} (💘) @${(/[@c.us]/g, '')} baru jadian nih\nBagi pj nya dong`

                    client.sendMessage(from, sapa)

                    break
				case 'mlherolist':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/mlherolist?apikey=RamlanID`, {method: 'get'})
					icon = await getBuffer(anu.icon)
					client.sendMessage(from, icon, image, {quoted: mek})
					break
					case 'p':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					
					if (!isPremium) return reply(mess.only.premium)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://nekos.life/api/v2/img/boobs`, {method: 'get'})
						buffer = await getBuffer(res.result)
						 cons.sendMessage(from, res, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			    case 'randomanime':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					if (!isPremium) return reply(mess.only.premium)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
						bufferzz = await getBuffer(res.result)
						client.sendMessage(from, bufferzz, image, {quoted: mek, caption: 'ni randomanime!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			    case 'randomhentai':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					if (!isPremium) return reply(mess.only.premium)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
						bufferxx = await getBuffer(res.result)
						client.sendMessage(from, bufferxx, image, {quoted: mek, caption: 'hentai teros'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
				case 'nsfwloli':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					if (!isPremium) return reply(mess.only.premium)
					reply(mess.wait)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://api.lolis.life/random?nsfw=true`, {method: 'get'})
						buffercc = await getBuffer(res.url)
						client.sendMessage(from, buffercc, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			    case 'nsfwblowjob':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					if (!isPremium) return reply(mess.only.premium)
					reply(mess.wait)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA`, {method: 'get'})
						buffervv = await getBuffer(res.result)
						client.sendMessage(from, buffervv, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			    case 'nsfwneko':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					if (!isPremium) return reply(mess.only.premium)
					reply(mess.wait)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
						bufferbb = await getBuffer(res.result)
						client.sendMessage(from, buffernn, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'nenen':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					if (!isPremium) return reply(mess.only.premium)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://nekos.life/api/v2/img/boobs`, {method: 'get'})
						buffermm = await getBuffer(res.result)
						client.sendMessage(from, buffermm, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'totaluser':
					 xptn.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `\`\`\`╭────*「 *TOTAL USER HASUFA BOT👑* 」\n\`\`\``
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total Pengguna : ${user.length}\n╰──────*「 *HASUFA* 」*────`
					 client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
				case 'nsfwtrap':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					if (!isPremium) return reply(mess.only.premium)
					reply(mess.wait)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=BotWeA`, {method: 'get'})
						bufferqqq = await getBuffer(res.result)
						client.sendMessage(from, bufferqqq, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'cak':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					if (!isPremium) return reply(mess.only.premium)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://st4rz.herokuapp.com/api/1cak`, {method: 'get'})
						bufferwww = await getBuffer(res.result)
						client.sendMessage(from, bufferwww, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'animerandom':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					if (!isPremium) return reply(mess.only.premium)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
						buffereee = await getBuffer(res.result)
						client.sendMessage(from, buffereee, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'teus':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
						if (!isNsfw) return reply('❌ *FALSE* ❌')
						res = await fetchJson(`http://inyourdream.herokuapp.com/graffity?kata=' + graffity`, {method: 'get'})
						bufferrrr = await getBuffer(res.result)
						client.sendMessage(from, bufferrrr, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'walpaperanime':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
						if (!isNsfw) return reply('❌ *FALSE* ❌')
						res = await fetchJson(`https://wallpaperaccess.com/full/395986.jpg','https://wallpaperaccess.com/full/21628.jpg','https://wallpaperaccess.com/full/21622.jpg','https://wallpaperaccess.com/full/21612.jpg','https://wallpaperaccess.com/full/21611.png','https://wallpaperaccess.com/full/21597.jpg','https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png','https://wallpaperaccess.com/full/21591.jpg','https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg','https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg','https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png','https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg','https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg','https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png','https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png','https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg','https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg','https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png','https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png','https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg','https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png','https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg','https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg','https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg','https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png','https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg','https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg','https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png','https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg','https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png','https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg','https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg','https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg','https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png','https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg','https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png','https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg','https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg','https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg','https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg','https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg','https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg','https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg','https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg','https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png','https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg','https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg','https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg','https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png','https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png','https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png','https://cdn.nekos.life/wallpaper/yO6ioREenLA.png','https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg','https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png','https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png','https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg','https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg','https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg','https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg','https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/32EAswpy3M8.png','https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png','https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg','https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png','https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg','https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png','https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png','https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg','https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg','https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png','https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png','https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg','https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg','https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg','https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png','https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg','https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png','https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg','https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png','https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg','https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg','https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg','https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg','https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg','https://cdn.nekos.life/wallpaper/9ru2luBo360.png','https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png','https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png','https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg','https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg','https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg','https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg','https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png','https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png','https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg','https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg','https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png','https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg','https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg','https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg','https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg','https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg','https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg','https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg','https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg','https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg','https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg','https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png','https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg','https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png','https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg','https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png','https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg','https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png','https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png','https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png','https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png','https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png','https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png','https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png','https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg','https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg','https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg','https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg','https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg','https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png','https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg','https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg','https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg','https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg','https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg','https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg','https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png','https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png','https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png','https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg','https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg','https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg','https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg','https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg','https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png','https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png','https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg','https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg','https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg','https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png','https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png','https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg','https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png','https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg','https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg','https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png','https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg','https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg','https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg','https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg','https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg','https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png','https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png','https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg','https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png','https://cdn.nekos.life/wallpaper/58C37kkq39Y.png','https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg','https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg','https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg','https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png','https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg','https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg','https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png','https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg','https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg','https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png','https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg','https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg','https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png','https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png','https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg','https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg','https://cdn.nekos.life/wallpaper/89MQq6KaggI.png','https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']`, {method: 'get'})
						bufferttt = await getBuffer(res.result)
						client.sendMessage(from, bufferttt, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			case 'textstyle':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.publikG)
			reply(mess.wait)
			style = `${body.slice(11)}`
			anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/fancytext?text=${style}`, {method: 'get'})
			reply (anu.result)
			break
			case 'bpfont':
			if (isBanned) return reply(mess.only.benned)
			if (!isPublic) return reply(mess.only.publikG)
			if (!isUser) return reply(mess.only.userB)
			bp = `${body.slice(8)}`
			anu = await fetchJson(`https://api.terhambar.com/bpk?kata=${bp}`, {method: 'get'})
			reply (anu.text)
			break
				case 'hilih':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('Teksnya mana um?')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
				case 'instaimg':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com'))
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})

				    insta = getBuffer(anu.result)

				    reply(mess.wait)

				    client.sendMessage(from, insta, image, {quoted: mek})
				    break  

				case 'instavid':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com'))
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})

				    insta = getBuffer(anu.result)

				    reply(mess.wait)

				    client.sendMessage(from, insta, video, {mimtype: 'video/mp4', filename: 'instagram'.mp3, quoted: mek})

				    break
				case 'ytmp3':
					if (isBanned) return reply(mess.only.benned)    
					if (!isPremium) return reply(mess.only.premium)
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('Urlnya mana gan?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://alfians-api.herokuapp.com/api/yta?url=${args[0]}`)
					if (anu.error) return reply(anu.error)
					yta = `「 *YOUTUBE MP3 DOWNLOADER* 」\n\n• Title : *${anu.title}*\n• *Size:* ${anu.filesize}\n• *Resolusi:* ${anu.resolution}\n\n Tunggu Sebentar 1 menit Mungkin Agak Lama Karna Mendownload Audio`
					buff = await getBuffer(anu.thumb)
					reply(mess.wait)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek, caption: yta})
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek, caption: 'Nih Tod'})
					break
					case 'yutubdl':
					if (args.length < 1) return reply('Urlnya mana um?')
                  if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID TOD')				
		anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${args[0]}&apikey=RamlanID`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*➸ JUDUL* : ${anu.result.title}\n\n*[WAIT] Proses buat anak Yakan*`
					thumb = await getBuffer(anu.result.imgUrl)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result.UrlVideo)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
					break
			    case 'bucin':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.publikG)
					gatauda = body.slice(7)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/howbucins`, {method: 'get'})
					reply(anu.desc)
					break
				case 'pinterest':
				if (isBanned) return reply(mess.only.benned)
                if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)

                reply(mess.wait)
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*nih*`})
					break
					case 'apkmod':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.publikG)
					gatauda = body.slice(7)
					anu = await fetchJson(`https://rfilesss109.000webhostapp.com/mod.php?apikey=xptn1`, {method: 'get'})
					reply(anu.result)
					break
					case 'akugay':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.publikG)
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`, {method: 'get'})
					reply(anu.desc)
					break
					case 'wa.me':
				  case 'wame':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
  client.updatePresence(from, Presence.composing) 
      if (!isUser) return reply(mess.only.userB)
      options = {
          text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    client.sendMessage(from, options, text, { quoted: mek } )
				break
		        case 'gay':
		if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
		if (!isPublic) return reply(mess.only.publikG)
		if (args.length < 1) return reply('tag temanmu!')
					rate = body.slice(1)
					const ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Seberapa gay lu: *'+rate+'*\n\nJawaban : '+ kl+'%', text, { quoted: mek })
					break
					break	
				case 'cerpen':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					gatauda = body.slice(1)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/cerpen`, {method: 'get'})
					reply(anu.result)
					break
				case 'xxx':
			    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
			    reply(mess.wait)
              	    if (args.length < 1) return reply('teksnya mana gan?')
                    teks = body.slice(5)
                    anu = await fetchJson(`https://api.vhtear.com/xxxsearch?query=${teks}&apikey=RamlanID`, {method: 'get'})
                    teks = `===============\n`
                    {
                    teks += `• Title: ${bokep.data.title}\n• Durasi: ${bokep.data.durasi}\n• Link: ${bokep.data.url}\n===============\n`
                    }
                    reply(teks.trim())
			     	break
				case 'cersex':
                if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    if (!isPublic) return reply(mess.only.publikG)
				    reply(mess.wait)
                   anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=RamlanID`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   sex = await getBuffer(anu.result.image)
                   cerita = `• *Judul:* ${anu.result.judul}\n\n${anu.result.cerita}`
                   client.sendMessage(from, sex, image, {quoted: mek, caption: cerita})
                   break
				case 'erenjokes':
				client.updatePresence(from, Presence.composing) 
				 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
				reply(mess.wait)
				 data = fs.readFileSync('./Fxc7/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 client.sendMessage(from, darkjokes, image, {quoted: mek, caption: '\`\`\`DARK JOKES\`\`\`'})
				break
					if (!isPublic) return reply(mess.only.publikG)
					gatauda = body.slice(8)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(anu.quotes)
					break		
		    case 'pantun':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.publikG)
			anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/pantun`, {method: 'get'})
			client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
			break
					case 'jokerlogo':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					jhf = body.slice(10)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${jhf}&apikey=BotWeA`, {method: 'get'})
					bufferooo = await getBuffer(anu.result)
					client.sendMessage(from, bufferooo, image, {quoted: mek})
					break	
					case 'ranime':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					gatauda = body.slice(8)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
					bufferppp = await getBuffer(anu.result)
					client.sendMessage(from, bufferppp, image, {quoted: mek})
					break
					case 'spamgmail':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			if (isLimit(sender)) return reply(limitend(pushname2))
			spam = `${body.slice(10)}`
			anu = await fetchJson(`https://videfikri.com/api/spamemail/?email=${spam}&subjek=PT.PLN&pesan=Silahkan%20bayar%20tagihan%20listrik%20Anda`, {method: 'get'})
			client.sendMessage(from, `${anu.result.log_lengkap}`, text, {quoted: mek})
			await limitAdd(sender) 
			break
					case 'spamsms':
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (!isUser) return reply(mess.only.userB)
			sms = `${body.slice(9)}`
			nomer = sms.split("/")[0];
			jumlah = sms.split("/")[1];
			anu = await fetchJson(`http://itsmeikygans.my.id/spamsms?apikey=${ItsApi}&no=${body.slice(10)}&jum=${jumlah}`, {method: 'get'})
			client.sendMessage(from, `${anu.logs}`, text, {quoted: mek})
			await limitAdd(sender) 
			break
					case 'spambrutal':
					if (isLimit(sender)) return reply(limits.limitend(pushname2))
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                reply('Otw.....')
                                       if (args[0].startsWith('08')) return reply('Gunakan nomor awalan 8/n ex : *8796662*')
                                       if (args[0].startsWith('82255123081')) return reply('Gagal tidak dapat menelpon nomer bot')
                                       if (args[0].startsWith('82387804410')) return reply('Gagal tidak dapat menelpon nomer owner')
                                       var data = body.slice(10)
                                       await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                       await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                                       await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                       await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                                       await fetchJson(`https://zeksapi.herokuapp.com/api/spamcall?no=`+data+`&apikey=apivinz`, {method: 'get'})
                                       break
					case 'spamcall':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
          if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
          if (!isPremium) return reply(mess.only.premi)
          reply('Wait..')
                                       if (args[0].startsWith('08')) return reply('Gunakan nomor awalan 8/n ex : *8796662*')
                                       if (args[0].startsWith('82255123081')) return reply('Gagal tidak dapat menelpon nomer bot')
                                       if (args[0].startsWith('82387804410')) return reply('Gagal tidak dapat menelpon nomer owner')
                                       var data = body.slice(10)
                                       await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                       await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                                       await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                       await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                                       await fetchJson(`https://api-zeks.harispoppy.com/api/spamcall?no=`+data+`&apikey=apivinz`, {method: 'get'})
                                       break
					case 'infonomor':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                 if (!isUser) return reply(mess.only.userB)
                 if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
                reply(hasil)
                break
                case 'film':
				if (isBanned) return reply(mess.only.benned)
                if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
				if (args.length < 1) return reply('Mau Cari Film Apa?')
				reply(mess.wait)
				anu = await fetchJson(`https://api.vhtear.com/downloadfilm?judul=${body.slice(6)}&apikey=RamlanID`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				film = `• Judul: *${anu.result.judul}*\n• Resolusi: *${anu.result.data.resolusi}*\n• Link Download: *${anu.result.data.urlDownload}*\n`
				client.sendMessage(from, film, text, {quoted: mek}) 
					break
					case 'neko':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					gatauda = body.slice(6)
					reply(mess.wait)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/nekonime`, {method: 'get'})
					buffersss = await getBuffer(anu.result)
					client.sendMessage(from, buffersss, image, {quoted: mek})
					break	
					
				case 'cerpen':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					gatauda = body.slice(1)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/cerpen`, {method: 'get'})
					reply(anu.result)
					break
				case 'chord':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('teks nya mana om')
					tels = body.slice(7)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/chord?q=${tels}`, {method: 'get'})
					reply(anu.result)
					break
				case 'ramalhp':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('teks nya mana om')
					kj = body.slice(12)
					anu = await fetchJson(`https://api.vhtear.com/nomerhoki?no=${kj}&apikey=RamlanID`, {method: 'get'})
					reply(anu.result.hasil)
					break
				case 'textscreen':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('teks nya mana om')
					telsjk = body.slice(9)
					anu = await fetchJson(`https://api.vhtear.com/textscreen?query=${telsjk}&apikey=RamlanID`, {method: 'get'})
					reply(anu.result.text)
					break
			    case 'joox':
			
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPremium) return reply(mess.only.premium)
                if (!isPublic) return reply(mess.only.publikG)
                reply(mess.wait)
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
               if (data.error) return reply(data.error)
                 infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}\n*Filesize* : ${data.filesize}\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM*`
                bufferddd = await getBuffer(data.result.thumb)
                lagu = await getBuffer(data.result.mp3)
                client.sendMessage(from, bufferddd, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                break
                case 'slap':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
                kapankah = body.slice(1)

					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi']

					const ple = slap[Math.floor(Math.random() * slap.length)]

					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)

					client.sendMessage(from, pod, image, { quoted: mek, caption: '*Toxic*\n\n'+ ple })

					break
                case 'beritahoax':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					break
				case 'wiki':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
                    if (args.length < 1) return reply('teks nya mana om?')
                    teks = body.slice(5)
                    reply(mess.wait)
                    anu = await fetchJson(`https://arugaz.herokuapp.com/api/wiki?q=${query}`, {method: 'get'})
                    if (anu.error) return reply(anu.error)
                    bufferfff = await getBuffer(anu.wiki)
                    hasil = `${anu.result}`
                    client.sendMessage(from, bufferfff, image, {quoted: mek, caption: hasil})
                   break
                   	case 'picthewan':
                   	case 'hewan':
                   	case 'binatang':
                   	case 'fotohewan':
                   	case 'fotobinatang':
                   	case 'animals':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=hewanimutlucu&apikey=RamlanID`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					 client.sendMessage(from, nye, image, { caption: 'GRRHH', quoted: mek })
					break
					 case 'fitnah':
                 if (isBanned) return reply(mess.only.benned)    
                 if (!isPublic) return reply(mess.only.publikG)
                 if (!isUser) return reply(mess.only.userB)
                 if (!isPremium) return reply(mess.only.premium)
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					 client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
              case 'infogempa':
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=BotWeA`, {method: 'get'})
                                        if (isBanned) return reply(mess.only.benned)
                                        if (!isUser) return reply(mess.only.userB)
                                        if (!isPublic) return reply(mess.only.publikG)
                                        if (anu.error) return reply(anu.error)
                                        hasil = `*Kedalaman* : ${anu.kedalaman}\n*Koordinat* : ${anu.koordinat}\n*Lokasi* : ${anu.lokasi}\n*Magnitude* : ${anu.magnitude}\n*Map* : ${anu.map}\n*Potensi* : ${anu.potensi}\n*Waktu* : ${anu.waktu}`
                                        client.sendMessage(from, hasil, text, {quoted:mek})

                                        break
                   case 'hentai':
                                    try {
                                    	if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                                    	if (!isPublic) return reply(mess.only.publikG)
                                                if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
                                                res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
                                                bufferhhh = await getBuffer(res.result)
                                                client.sendMessage(from, bufferhhh, image, {quoted: mek, caption: 'Nih gan'})
                                        } catch (e) {
                                                console.log(`Error :`, color(e,'red'))
                                                reply('❌ *ERROR* ❌')
                                        }
                                        break
                case 'infogithub':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
                   teks = body.slice(5)
                   anu = await fetchJson(`http://api-melodicxt.herokuapp.com/api/githubprofile?user=${teks}&apikey=RamlanID)`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   bufferjjj = await getBuffer(anu.avatar_url)
                   hasil = ` *username* \n ${anu.followers} *following* \n${anu.following} *bio* \n${anu.bio} *public_repos* \n${anu.public_repos} *created_at* \n${anu.created_at} *updated_at* \n${anu.updated_at}`
                   client.sendMessage(from, bufferjjj, image, {quoted: mek, caption: hasil})
                   break
                   
				case 'hackertext':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					anu = await fetchJson(`http://api-melodicxt.herokuapp.com/api/txtcustom?theme=theme=matrix=${tels}&apiKey=RamlanID`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
     case 'infocuaca':
	 if (isBanned) return reply(mess.only.benned)    
     if (!isUser) return reply(mess.only.userB)
     if (!isPublic) return reply(mess.only.publikG)
     if (args.length < 1) return reply(from, 'Kirim perintah *!cuaca [tempat]*\nContoh : *!cuaca Banyuwangi', text)
     reply(mess.wait)
            tempat = `${body.slice(11)}`
            weather = await fetchJson('https://videfikri.com/api/cuaca/?daerah='+ tempat, {method: 'get'})
            if (weather.error) {
             reply(from, weather.error, text)
            } else {
             client.sendMessage(from, `➸ Tempat : ${weather.result.tempat}\n\n➸ Angin : ${weather.result.angin}\n➸ Cuaca : ${weather.result.cuaca}\n➸ Deskripsi : ${weather.result.desc}\n➸ Kelembapan : ${weather.result.kelembapan}\n➸ Suhu : ${weather.result.suhu}\n➸ Udara : ${weather.result.udara}`, text, {quoted: mek})
            }
            break
                case 'tebakgambar':
                if (!isPublic) return reply(mess.only.publikG)
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/tebakgambar&apikey=RamlanID`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.soalImg)
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
                case 'caklontong':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=RamlanID`, {method: 'get'})
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
				case 'family100':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=RamlanID`, {method: 'get'})
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
				case 'game':
		        if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					anu = await fetchJson(`http://rt-files.000webhostapp.com/tts.php?apikey=rasitech`, {method: 'get'})
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
					
                case 'brainly':
                if (isLimit(sender)) return reply(limits.limitend(pushname2))
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://api.vhtear.com/branly?query=${body.slice(9)}&apikey=RamlanID`, {method: 'get'})
					reply(anu.result.data)
					break
					
                case 'image':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('Apa yang mau dicari kak?')
					goo = body.slice(7)
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=RamlanID`, {method: 'get'})
					reply(mess.wait)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					client.sendMessage(from, pint, image, { caption: '*image*\n\n*Hasil Pencarian : '+goo+'*', quoted: mek })
					break
					case 'animehug':
 if (!isPublic) return reply(mess.only.publikG)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=RamlanID', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						bufferlll = fs.readFileSync(rano)
						client.sendMessage(from, bufferlll, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'bcgc':
 
					if (!isGroup) return reply(mess.only.group)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bufferzzz = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, bufferzzz, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break
					case 'leveling':
			    if (!isPublic) return reply(mess.only.publikG)
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Boo :𝘃')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./lib/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
                } else if (args[0] === 'disable') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./lib/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
                } else {
                    reply(' *Ketik perintah 1 untuk mengaktifkan, 0 untuk menonaktifkan* \n *Contoh: ${prefix}leveling 1*')
                }
            break
                case 'pokemon':
                    client.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					 data = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break
				case 'inu':
				if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://scrap.terhambar.com/pin?url=https://id.pinterest.com/pin/588916088754108677/`, {method: 'get'})
					var inu = JSON.parse(JSON.stringify(anu.result));
					var uni =  inu[Math.floor(Math.random() * inu.length)];
					nye = await getBuffer(uni)
					client.sendMessage(from, nye, image, { caption: 'Inu!!', quoted: mek })
					break
				case 'elang':
				if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=elang&apikey=RamlanID`, {method: 'get'})
					var eln = JSON.parse(JSON.stringify(anu.result));
					var elnn =  eln[Math.floor(Math.random() * eln.length)];
					nyer = await getBuffer(elnn)
					client.sendMessage(from, nyer, image, { caption: 'elang!!', quoted: mek })
					break
				//animefoto
				case 'naruto':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=naruto&apikey=RamlanID`, {method: 'get'})
					var naru = JSON.parse(JSON.stringify(anu.result));
					var to =  naru[Math.floor(Math.random() * naru.length)];
					nyew = await getBuffer(to)
					client.sendMessage(from, nyew, image, { caption: 'naruto!!', quoted: mek })
					break
				case 'minato':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=minato&apikey=RamlanID`, {method: 'get'})
					var min = JSON.parse(JSON.stringify(anu.result));
					var ato =  min[Math.floor(Math.random() * min.length)];
					nyeq = await getBuffer(ato)
					client.sendMessage(from, nyeq, image, { caption: 'minato!!', quoted: mek })
					break
				case 'boruto':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=boruto&apikey=RamlanID`, {method: 'get'})
					var bor = JSON.parse(JSON.stringify(anu.result));
					var uto =  bor[Math.floor(Math.random() * bor.length)];
					nyet = await getBuffer(uto)
					client.sendMessage(from, nyet, image, { caption: 'boruto!!', quoted: mek })
					break
				case 'hinata':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=hinata&apikey=RamlanID`, {method: 'get'})
					var hina = JSON.parse(JSON.stringify(anu.result));
					var ta =  hina[Math.floor(Math.random() * hina.length)];
					nyei = await getBuffer(ta)
					client.sendMessage(from, nyei, image, { caption: 'hinata!!', quoted: mek })
					break
				case 'sasuke':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=sasuke&apikey=RamlanID`, {method: 'get'})
					var sasu = JSON.parse(JSON.stringify(anu.result));
					var ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nyeo = await getBuffer(ke)
					client.sendMessage(from, nyeo, image, { caption: 'sasuke!!', quoted: mek })
					break
				case 'sakura':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=sakura&apikey=RamlanID`, {method: 'get'})
					var sak = JSON.parse(JSON.stringify(anu.result));
					var kura =  sak[Math.floor(Math.random() * sak.length)];
					nyep = await getBuffer(kura)
					client.sendMessage(from, nyep, image, { caption: 'sakura!!', quoted: mek })
					break
					//animefoto
				case 'unta':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=unta&apikey=RamlanID`, {method: 'get'})
					var unt1 = JSON.parse(JSON.stringify(anu.result));
					var unt2 =  unt1[Math.floor(Math.random() * unt1.length)];
					nyea = await getBuffer(unt2)
					client.sendMessage(from, nyea, image, { caption: 'unta!!', quoted: mek })
					break
					//tokyoghoul
				case 'kaneki':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kaneki&apikey=RamlanID`, {method: 'get'})
					var kan = JSON.parse(JSON.stringify(anu.result));
					var eki =  kan[Math.floor(Math.random() * kan.length)];
					nyes = await getBuffer(eki)
					client.sendMessage(from, nyes, image, { caption: 'kaneki!!', quoted: mek })
					break
					case 'picthewan':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isPublic) return reply(mess.only.publikG)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=hewanimutlucu&apikey=RamlanID`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					 client.sendMessage(from, nye, image, { caption: 'GRRHH', quoted: mek })
					break
				case 'toukachan':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=ToukaKirishima&apikey=RamlanID`, {method: 'get'})
					var tou = JSON.parse(JSON.stringify(anu.result));
					var ka =  tou[Math.floor(Math.random() * tou.length)];
					nyef = await getBuffer(ka)
					client.sendMessage(from, nyef, image, { caption: 'toukachan!!', quoted: mek })
					break
				case 'rize':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=RizeKamishiro&apikey=RamlanID`, {method: 'get'})
					var ri = JSON.parse(JSON.stringify(anu.result));
					var ze =  ri[Math.floor(Math.random() * ri.length)];
					nyeg = await getBuffer(ze)
					client.sendMessage(from, nyeg, image, { caption: 'rize chan!!', quoted: mek })
					break
				case 'akira':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=akiramado&apikey=RamlanID`, {method: 'get'})
					var ak = JSON.parse(JSON.stringify(anu.result));
					var ara =  ak[Math.floor(Math.random() * ak.length)];
					nyeh = await getBuffer(ara)
					client.sendMessage(from, nyeh, image, { caption: 'akira chan!!', quoted: mek })
					break
				case 'itori':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=itori&apikey=RamlanID`, {method: 'get'})
					var it = JSON.parse(JSON.stringify(anu.result));
					var ori =  it[Math.floor(Math.random() * it.length)];
					nyej = await getBuffer(ori)
					client.sendMessage(from, nyej, image, { caption: 'itori chan!!', quoted: mek })
					break
					case 'dxd':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
						res = await fetchJson(`https://mnazria.herokuapp.com/api/anime?query=dxd`, {method: 'get'})
						buffer = await getBuffer(res.result)
						 client.sendMessage(from, buffer, image, {quoted: mek, caption: 'gw iri bangsat'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						 client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
				case 'kurumi':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kurumitokisakikawai&apikey=RamlanID`, {method: 'get'})
					var kur = JSON.parse(JSON.stringify(anu.result));
					var imi =  kur[Math.floor(Math.random() * kur.length)];
					nyek = await getBuffer(imi)
					client.sendMessage(from, nyek, image, { caption: 'kurumi chan!!', quoted: mek })
					break
				case 'miku':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=Nakanomiku&apikey=RamlanID`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyel = await getBuffer(ku)
					client.sendMessage(from, nyel, image, { caption: 'miku chan!!', quoted: mek })
					break
					case 'rem':
					if (isBanned) return reply(mess.only.benned)
					if (!isPublic) return reply(mess.only.publikG)  
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=remrezero&apikey=RamlanID`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyez = await getBuffer(ku)
					client.sendMessage(from, nyez, image, { caption: 'rem chan!!', quoted: mek })
					break
					case 'ram':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=ramrezero&apikey=RamlanID`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyex = await getBuffer(ku)
					client.sendMessage(from, nyex, image, { caption: 'ram chan!!', quoted: mek })
					break
					case 'pornhub':
			   if (isBanned) return reply(mess.only.benned)    
			   if (!isUser) return reply(mess.only.userB)
               if (!isPremium) return reply(mess.only.premium)
               if (!isPublic) return reply(mess.only.publikG)
			   reply(mess.wait)
              	    if (args.length < 1) return reply('teksnya mana gan?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/pornhub/search?query=${teks}`, {method: 'get'})
                    teks = `===============\n`
                    for (let bokep of anu.result) {
                    teks += `Title: ${bokep.title}\nAktor: ${bokep.author}\nViewers: *${bokep.views}*\nDurasi: ${bokep.duration}\nLink: ${bokep.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	break
			     	
					case 'pictcewek':
					case 'fotocewek':
					case 'cewek':
					case 'cewekcantik':
					case 'cecans':
					case 'cecan':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
		            if (!isPublic) return reply(mess.only.publikG)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=cewekcantik&apikey=RamlanID`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyev = await getBuffer(ku)
					client.sendMessage(from, nyev, image, { caption: 'HALLO KANG HALU!!', quoted: mek })
					break
					case 'pictcowok':
					case 'cogans':
					case 'cogan':
					case 'cowok':
					﻿ case 'cowokgans':
					case 'fotocowok':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isPublic) return reply(mess.only.publikG)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=cowokganteng&apikey=RamlanID`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyeb = await getBuffer(ku)
					client.sendMessage(from, nyeb, image, { caption: 'HALLO KANG HALU!!', quoted: mek })
					break
				case 'kicktime':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isPublic) return reply(mess.only.publikG)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						 client.groupRemove(from, mentioned)
					} else {
						setTimeout( () => {
						mentions(`otw kick bosku, kita kasi waktu dulu siap bro? : @${mentioned[0].split('@')[0]}`, mentioned, true)
						}, 0) // 100 = 5s,
					setTimeout( () => {
					 client.groupRemove(from, mentioned, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, '_selamat tinggal Titip gorengan Ya jangan Balik Lagi...._', text) // ur cods
					}, 20000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, '_ucapkan selamat tinggal mmwaah muwwah..._', text) // ur cods
					}, 10000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, '_ciiee calon bakalan dikick..._', text) // ur cods
					}, 1000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, '_siap siap ya bot Kick nih_', text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 10s,
					}
					break
				case 'aguse':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply(mess.search)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=hewan&apikey=RamlanID`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pine = await getBuffer(trest)
					 client.sendMessage(from, pine, image, { caption: '*Pinterest*\n\n*Hasil Pencarian : '+pinte+'*', quoted: mek })
					break
					case 'pictlolicon':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isPublic) return reply(mess.only.publikG)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=lolikawai&apikey=RamlanID`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyen = await getBuffer(ku)
					client.sendMessage(from, nyen, image, { caption: 'HALLO ONII CHAN!!', quoted: mek })
					break
					case 'pictwaifu':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isPublic) return reply(mess.only.publikG)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=waifukawai&apikey=RamlanID`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyem = await getBuffer(ku)
					client.sendMessage(from, nyem, image, { caption: 'OHAYO DARLING!!', quoted: mek })
					break
					case 'pictneko':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isPublic) return reply(mess.only.publikG)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=nekoanimekawai&apikey=RamlanID`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyeqq = await getBuffer(ku)
					client.sendMessage(from, nyeqq, image, { caption: 'OHAYO ONII CHAN!!', quoted: mek })
					break
				//tokyoghoul
				case 'animehentai':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isNsfw) return reply('❌ *FALSE* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=animehentai&apikey=RamlanID`, {method: 'get'})
					var hen = JSON.parse(JSON.stringify(anu.result));
					var tai =  hen[Math.floor(Math.random() * hen.length)];
					nyeww = await getBuffer(tai)
					client.sendMessage(from, nyeww, image, { caption: 'hentai!!', quoted: mek })
					break
				case 'loli2':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=loli&apikey=RamlanID`, {method: 'get'})
					var lol = JSON.parse(JSON.stringify(anu.result));
					var i2 =  lol[Math.floor(Math.random() * lol.length)];
					nyeee = await getBuffer(i2)
					client.sendMessage(from, nyeee, image, { caption: 'Oni chan baka!!', quoted: mek })
					break
				case 'anjing':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(mess.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok3 = await getBuffer(nimek)
					client.sendMessage(from, pok3, image, { quoted: mek })
					break
                case 'pinterest':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply(mess.search)
					pinte = body.slice(11)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=${pin}&apikey=RamlanID`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pine = await getBuffer(trest)
					client.sendMessage(from, pine, image, { caption: '*Pinterest*\n\n*Hasil Pencarian : '+pinte+'*', quoted: mek })
					break
					case 'xd':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply(mess.wait)
					pinte = body.slice(11)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/pin?q=${pin}&apikey=xptnbot352`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pineq = await getBuffer(trest)
					client.sendMessage(from, pineq, image, { caption: '*Pinterest*\n\n*Hasil Pencarian : '+pinte+'*', quoted: mek })
					break
                case 'resepmasakan':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.publikG)
                   anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep?key=${body.slice(6)}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buffer1 = await getBuffer(anu.thumb_item)
                   hasil = `*title* \n ${anu.title} *item_name* \n ${anu.item_name} *ingredient* \n${anu.ingredient} *step* \n${anu.step}`
                   client.sendMessage(from, buffer1, image, {quoted: mek, caption: hasil})
                   break
                case 'indohot':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPremium) return reply(mess.only.premium)
                   anu = await fetchJson(`https://arugaz.herokuapp.com/api/indohot`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   hasil = `*judul* \n${anu.result.judul} *genre* \n${anu.result.genre} *durasi* \n${anu.result.durasi} *url* \n${anu.result.url}`
                   client.sendMessage(from, hasil, text, {quoted: mek,})
                   break
                  case 'bokep':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isNsfw) return reply('❌ *Harus Mengaktifkan Mode Nsfw* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=bokep&apikey=RamlanID`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyec = await getBuffer(ku)
					client.sendMessage(from, nyec, image, { caption: 'COLI TERUS!!', quoted: mek })
					break
                case 'randombokep':
				client.updatePresence(from, Presence.composing) 
				 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
				if (!isPremium) return reply(mess.only.premium)
				 data = fs.readFileSync('./Fxc7/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply(mess.wait)
                 randTeks = randKey.teks
                 client.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				break
				case 'ytmp4':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
				if (!isPremium) return reply(mess.only.premium)
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
		;			client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer2 = await getBuffer(anu.result)
					client.sendMessage(from, buffer2, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
					case 'run':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isOwner) return reply(mess.only.ownerB)
                sy = args.join(' ')
                return eval(sy)
                break
				case 'ban':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isOwner) return reply(mess.only.ownerB)
					client.banUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `anda terkena banned ${body.slice(7)}@c.us`, text)
					break
				case 'ytsearch':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply('mau cari apa kak?')
					anu = await fetchJson(`https://https://api.vhtear.com/youtube?query=$ytsearch1}&apikey=RamlanID`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* : ${i.id}\n*Published* : ${i.publishTime}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					break
					case 'videodakwah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('silahkan ketik, Mau cari apa? *Misalnya : Hukum Wanita Memakai Pakaian Ketat*                        *Contoh : /videodakwah Hukum Wanita Memakai Pakaian Ketat*')
					anu = await fetchJson(`https://https://api.vhtear.com/youtube?query=${ytsearch1}&apikey=RamlanID`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* : ${i.id}\n*Published* : ${i.publishTime}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					break
				case 'tiktok':
				if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('vt')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/tiktokdl?link=${args[0]}&apikey=RamlanID`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.video)
					client.sendMessage(from, buffer, video, {quoted: mek})
					break
					break
				case 'glass':
                                         
                                        if (!isUser) return reply(mess.only.userB)
                if (isBanned) return reply(mess.only.benned)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await  client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                 client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
                                             case 'woodtext':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buffer6 = await getBuffer(`https://tobz-api.herokuapp.com/api/photooxy?theme=wood_block&text=${teks}&apikey=BotWeA`, {method: 'get'})
                    client.sendMessage(from, buffer6, image, {quoted: mek, caption: `${teks}`})
			     	break
                                           case 'qowheart':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buffer6 = await getBuffer(`https://tobz-api.herokuapp.com/api/photooxy?theme=quote_on_wood_heart&text=${teks}&apikey=BotWeA`, {method: 'get'})
                    client.sendMessage(from, buffer6, image, {quoted: mek, caption: `${teks}`})
			     	break
			     	 case 'mutgrass':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buffer6 = await getBuffer(`https://tobz-api.herokuapp.com/api/photooxy?theme=message_under_the_grass&text=${teks}&apikey=BotWeA`, {method: 'get'})
                    client.sendMessage(from, buffer6, image, {quoted: mek, caption: `${teks}`})
			     	break
                                
                                case 'undergocean':
                                        if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buffer6 = await getBuffer(`https://tobz-api.herokuapp.com/api/photooxy?theme=underwater_ocean&text=${teks}&apikey=BotWeA`, {method: 'get'})
                                         client.sendMessage(from, buffer6, image, {quoted: mek, caption: `${teks}`})
			     	break
                                case 'woodenboards':
                                        if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buffer6 = await getBuffer(`https://tobz-api.herokuapp.com/api/photooxy?theme=wooden_boards&text=${teks}&apikey=BotWeA`, {method: 'get'})
                                        client.sendMessage(from, buffer6, image, {quoted: mek, caption: `${teks}`})
			     	break
                                case 'wolfmetal':
                                           if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buffer6 = await getBuffer(`https://tobz-api.herokuapp.com/api/photooxy?theme=wolf_metal&text=${teks}&apikey=BotWeA`, {method: 'get'})
                                        client.sendMessage(from, buffer6, image, {quoted: mek, caption: `${teks}`})
			     	break
                                case 'metalictglow':
                                           if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buffer6 = await getBuffer(`https://tobz-api.herokuapp.com/api/photooxy?theme=metalic_text_glow&text=${teks}&apikey=RamlanID`, {method: 'get'})
                                        client.sendMessage(from, buffer6, image, {quoted: mek, caption: `${teks}`})
			     	break
                                case '8bit':
                                          if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buffer6 = await getBuffer(`https://tobz-api.herokuapp.com/api/photooxy?theme=bit8&text=${teks}&text=${teks}&apikey=BotWeA`, {method: 'get'})
                                        client.sendMessage(from, buffer6, image, {quoted: mek, caption: `${teks}`})
			     	break
                                case 'randomkpop':
                                        gatauda = body.slice(6)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        if (!isPublic) return reply(mess.only.publikG)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih kpopnya kak...'})
                                        break
                                case 'fml2':
                                        getauda = body.slice(6)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        data = await fetchJson(`https://tobz-api.herokuapp.com/randomfmylife?apikey=RamlanID`, {method: 'get'})
                                        hasil = `*Fuck My Life*\n${data.result}`
                                        reply(hasil)
                                        break
				case 'tiktokstalk':
					try {
						if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
						
						if (args.length < 1) return client.sendMessage(from, 'Usernamenya mana um?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer3 = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer3, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Kemungkinan username tidak valid')
					}
					break
				case 'nulis':
				case 'tulis':
					if (args.length < 1) return reply('Yang mau di tulis apaan?')
                    if (isBanned) return reply(mess.only.benned)
                    if (!isUser) return reply(mess.only.userB)
                    if (!isPublic) return reply(mess.only.publikG)               
					teks = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/nulis?text=${teks}&apiKey=IDxO1TFYnKADlX4pxcHa`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek, caption: teks})
					break
				case 'happymod':
                                        toby = body.slice(10)
                                        if (isLimit(sender)) return reply(limits.limitend(pushname2))
                                        if (isBanned) return reply(mess.only.benned)
                                        if (args.length < 1) return reply(`game yang mau di cari apa kak? \nContoh : ${prefix}happymod pubg`)
                                        if (!isUser) return reply(mess.only.userB)
                                        if (!isPublic) return reply(mess.only.publikG)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${toby}&apikey=BotWeA`, {method: 'get'})
                                        hepi = anu.result[0]
                                        buffer = await getBuffer(hepi.image)
                                        teks = `➣ *HAPPY MOD* \n➣ Title : ${hepi.title} \n➣ Size : ${hepi.size} \n➣ Version : ${hepi.version} \n➣ Root : ${hepi.root} \n➣ Purchase : ${hepi.purchase} \n  ➣ Price : ${hepi.price} \n  ➣ Link : ${hepi.link} \n  â””â”€ â Download : ${hepi.download} `
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
                                        break
                                        case 'moddroid':
                                        if (isLimit(sender)) return reply(limits.limitend(pushname2))
                                        if (isBanned) return reply(mess.only.benned)
                                        if (args.length < 1) return reply(`game yang mau di cari apa kak? \nContoh : ${prefix}happymod pubg`)
                                        if (!isUser) return reply(mess.only.userB)
                                        if (!isPublic) return reply(mess.only.publikG)
		                             	data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`)
		                            	hepi = data.result[0] 
		                            	teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
		                            	buff = await getBuffer(hepi.image)
		                            	asu.sendMessage(from, buff, image, {quoted: tod, caption: `${teks}`})
		                            	break
                                case 'jadwalTV':
                                case 'jadwaltv':
                                case 'jadwalTv':
                                case 'jadwaltV':
                                        mb = body.slice(10)
                                        if (isBanned) return reply(mess.only.benned)
                                        if (args.length < 1) return reply(`Channel TV nya apa kak? \nContoh: ${prefix}jadwalTV mnctv`)
                                        if (!isPublic) return reply(mess.only.publikG)
                                        if (!isUser) return reply(mess.only.userB)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://mhankbarbar.tech/api/jdtv?ch=${mb}&apiKey=IDxO1TFYnKADlX4pxcHa`, {method: 'get'})
                                        teks = `「 *JADWAL TV* 」\n➣ Channel : ${mb} \n➣ *JADWAL* \n${anu.result} `
                                        client.sendMessage(from, teks, text)
                                        break
				case 'text3d':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buffer5 = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    client.sendMessage(from, buffer5, image, {quoted: mek, caption: `${teks}`})
			     	break
			    case 'lovemake':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buffer6 = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${teks}&apikey=RamlanID`, {method: 'get'})
                    client.sendMessage(from, buffer6, image, {quoted: mek, caption: `${teks}`})
			     	break
			     case 'airtext':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buffer6 = await getBuffer(`https://api.vhtear.com/water_maker?text=${teks}&apikey=RamlanID`, {method: 'get'})
                    client.sendMessage(from, buffer6, image, {quoted: mek, caption: `${teks}`})
			     	break
			     case 'kuncitext':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buffer6 = await getBuffer(`https://api.vhtear.com/padlock?text1=${teks}&text2=${teks}&apikey=RamlanID`, {method: 'get'})
                    client.sendMessage(from, buffer6, image, {quoted: mek, caption: `${teks}`})
			     	break
			    case 'shorturl':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.publikG)
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/shorturl?url=${body.slice(10)}&apikey=RamlanID`)
			        hasil = `${anu.result}`
			        reply(hasil)
			        break
			    case 'infonotlp':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.publikG)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(10)}`)
			        hasil = `*nomor* \n${anu.nomor} *international* \n${anu.international}`
			        reply(hasil)
			        break
			case 'infonomor':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
                 if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
                reply(hasil)
                break
			    case 'igstalk':
                    if (isBanned) return reply(mess.only.benned)    
   					if (!isUser) return reply(mess.only.userB)
   					if (!isPublic) return reply(mess.only.publikG)
                     anu = await fetchJson(`https://mhankbarbar.tech/api/stalk?username=${body.slice(9)}&apiKey=IDxO1TFYnKADlX4pxcHa`, {method: 'get'})
                     buffer = await getBuffer(anu.Profile_pic)
                     reply(mess.wait)
                     hasil = `「 *INSTAGRAM STALKER* 」\n\n• Link: https://www.instagram.com/${anu.Username}\n• Fullname : ${anu.Name}\n• Following : ${anu.Jumlah_Followers}\n• Followers : ${anu.Jumlah_Following}\n• Jumlah Postingan: ${anu.Jumlah_Post}\n• Bio : ${anu.Biodata}`
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    break
				//lgiproses
				case 'tesss':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('mau apa om')
					teks = body.slice(7)
					if (teks.length > 8) return reply('Teksnya kepanjangan, maksimal 8 karakter')
					reply(mess.wait)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/leavest?text=${teks}&apikey=xptnbot352`)
					buffer8 = await getBuffer(anu.result)
					client.sendMessage(from, buffer8, image, {quoted: mek})
					break
				case 'tep':
				
					if (args.length < 1) return reply('mau apa om')
					teks = body.slice(9)
					if (teks.length > 8) return reply('Teksnya kepanjangan, maksimal 8 karakter')
					reply(mess.wait)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/colortext?text=${teks}&apikey=xptnbot352`)
					buffer9 = await getBuffer(anu.result)
					client.sendMessage(from, buffer9, image, {quoted: mek})
					break
				//lgiproses
				case 'infomobil':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Masukan nama mobil!!')
					ige = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/infomobil?merk=${ige}&apikey=RamlanID`, {method: 'get'})
					buffer0 = await getBuffer(anu.result.image)
					capt = `mobil Ditemukan!!\n\n*➸ title :* ${anu.result.title}\n*➸ harga :* ${anu.result.harga}\n*➸ kekurangan :* ${anu.result.kekurangan}\n*➸ kelebihan :* ${anu.result.kelebihan}`
					client.sendMessage(from, buffer0, image, {quoted: mek, caption: capt})
					break
				case 'infomotor':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('Masukan nama motor!!')
					ft1 = body.slice(11)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/infomotor?merk=${ft1}&apikey=RamlanID`, {method: 'get'})
					buffer11 = await getBuffer(anu.result.image)
					cptr = `motor Ditemukan!!\n\n*➸ title :* ${anu.result.title}\n*➸ harga :* ${anu.result.harga}\n*➸ spesifikasi :* ${anu.result.spesifikasi}\n*➸ kekurangan :* ${anu.result.kekurangan}\n*➸ kelebihan :* ${anu.result.kelebihan}`
					client.sendMessage(from, buffer11, image, {quoted: mek, caption: cptr})
					break
				case 'playstore':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					kuji = body.slice(7)
					reply(mess.wait)
					anu = await getBuffer(`https://api.vhtear.com/playstore?query={kuji}&apikey=RamlanID`, {method: 'get'})
					capty = `*➸ title :* ${anu.title}\n*➸ app_id :* ${anu.app_id}\n*➸ description :* ${anu.description}\n*➸ developer_id :* ${anu.developer_id}\n*➸ developer :* ${anu.developer}\n*➸ score :* ${anu.score}\n*➸ full_price :* ${anu.full_price}\n*➸ price :* ${anu.price}\n*➸ free :* ${anu.free}`
					client.sendMessage(from, anu, image, {quoted: mek, caption: capty})
					break
			    case 'cekjodoh':                    
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			
                    anu = await fetchJson(`https://arugaz.herokuapp.com/api/jodohku?nama=${quote}&text2=${wm}${body.slice(8)}`)
			        hasil = `Nama : ${anu.nama}\nPasangan : ${anu.pasangan}\n\nPositif : ${anu.positif}\nNegatif : ${anu.negatif}`
			        client.sendMessage(from, anu, text, {quoted: mek, caption: hasil})
			        break
			                      case 'reminder':
 if (!isPublic) return reply(mess.only.publikG)
 if (!isOwner) return reply(mess.only.ownerB)
					var gh = body.slice(10)
					var anu = gh.split("|")[0];
					var ani = gh.split("|")[1];
					jm = `${anu}000`
					 client.sendMessage(from, `*「 REMINDER 」*\n\nReminder diaktifkan!\n\n╠➥  *Pesan*: ${ani}\n╠➥  *Durasi*: ${anu} detik\n╠➥  *Untuk*: @${sender.split("@s.whatsapp.net")[0]}`, text, {contextInfo: {mentionedJid: [sender]}})
					setTimeout( () => {
					 client.sendMessage(from, `*「 REMINDER 」*\n\nAkhirnya tepat waktu~@${sender.split("@s.whatsapp.net")[0]}\n\n╠➥  *Pesan*: ${ani}`, text, {contextInfo: {mentionedJid: [sender]}}) // ur cods
					}, jm) // 1000 = 1s,
					break    
					case 'tutup':
 
			    case 'fototiktok':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.publikG)
                    gatauda = body.slice(8)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${body.slice(8)}`)
			        buffer22 = await getBuffer(anu.result)
                    reply(anu.result)
			        break
			    case 'map':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.publikG)
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                buffer33 = await getBuffer(anu.gambar)
                client.sendMessage(from, buffer33, image, {quoted: mek, caption: `${body.slice(5)}`})
				break
				case 'url2img':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Tipenya apa um?')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Urlnya mana um?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/url2image?tipe=${args[0]}&url=${args[1]}&apikey=IDxO1TFYnKADlX4pxcHa`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer44 = await getBuffer(anu.result)
					client.sendMessage(from, buffer44, image, {quoted: mek})
					break
					case 'epep':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(8)
					if (tels.ength > 15) return reply('Teksnya kepanjangan, maksimal 20 karakter')
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/logoff?hero=alok&text=${tels}&apikey=RamlanID`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					 client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'tstiker':
				case 'tsticker':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('Textnya mana um?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(9).trim()
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/text2image?text=${teks}&apiKey=IDxO1TFYnKADlX4pxcHa`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer55 = fs.readFileSync(rano)
						client.sendMessage(from, buffer55, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'otagall2':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
				if (!isPremium) return reply(mess.only.premium)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
			    case 'kickall':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Kamu siapa?')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					client.groupRemove(from, members_id)
					break
			    case 'otagall3':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.publikG)
			if (!isPremium) return reply(mess.only.premium)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
			    case 'kbbi':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					break
				case 'persengay':
				if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
					reply('Menurut persen gay:\n\n'+anu.desc+anu.persen)
					break
				case 'baper':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/howbucins`, {method: 'get'})
					reply('Jangan Baper Ya:\n\n'+anu.desc)
					break
				break
					case 'grup':
					case 'gc':
					case 'group':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'buka') {
					    reply(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐝𝐢𝐭𝐞𝐫𝐢𝐦𝐚, 𝐛𝐞𝐫𝐡𝐚𝐬𝐢𝐥 𝐦𝐞𝐧𝐠𝐮𝐛𝐚𝐡 𝐠𝐫𝐨𝐮𝐩 𝐬𝐞𝐦𝐮𝐚 𝐨𝐫𝐚𝐧𝐠 𝐛𝐢𝐬𝐚 𝐦𝐞𝐧𝐠𝐢𝐫𝐢𝐦 𝐩𝐞𝐬𝐚𝐧`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐝𝐢𝐭𝐞𝐫𝐢𝐦𝐚, 𝐛𝐞𝐫𝐡𝐚𝐬𝐢𝐥 𝐦𝐞𝐧𝐠𝐮𝐛𝐚𝐡 𝐠𝐫𝐨𝐮𝐩 𝐡𝐚𝐧𝐲𝐚 𝐚𝐝𝐦𝐢𝐧 𝐲𝐚𝐧𝐠 𝐛𝐢𝐬𝐚 𝐦𝐞𝐧𝐠𝐢𝐫𝐢𝐦 𝐩𝐞𝐬𝐚𝐧`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
				case 'alay':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/bapakfont?kata=${body.slice(6)}`, {method: 'get'})
					reply('nianjim\n\n'+anu.result)
					break
				case 'artinama':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(6)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					break
			    case 'tagall':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
			    case 'otagall':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions('╔══✪〘 Mention All 〙✪══'+teks+'╚═〘  *HASUFA BOT* 〙', members_id, true)
					break
				case 'clearall':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isOwner) return reply('Kamu siapa?')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('Sukses delete all chat :)')
					break
				case 'bc':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buffer, image, {caption: `[ Ini Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *HASUFA Broadcast* ]\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
				case 'add':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
			    case 'kick':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'edotense':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, di edotensei :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
						mentions(teks, mentioned, true)
						client.groupAdd(from, [num])
					} else {
						mentions(`Perintah di terima, di edotensei : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
						}
					break
					case 'afk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('kakak afk karena apa?')
                                        if (isBanned) return reply(mess.only.benned)
                                        var nom = mek.participant
                                        const fku = {
                                                text: `@${nom.split("@s.whatsapp.net")[0]} *SEDANG AFK ${tels} JANGAN GANGGU YA*`,
                                                contextInfo: { mentionedJid: [nom] }
                                        }
                                        client.sendMessage(from, fku, text, {quoted: mek})
                                        break
				case 'promote':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda menjdi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, anda menjadi admin : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'delete':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, hapus pesan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.deleteMessage(from, mentioned)
					} else {
						mentions(`Perintah di terima, hapus pesan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.deleteMessage(from, mentioned)
					}
					break
					
			    case 'demote':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda tidak menjadi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, anda tidak menjadi admin : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'listadmins':
				case 'listadmin':
				case 'daftaradmin':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'toimg':
				case 'stickertoimg':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isQuotedSticker) return reply('❌ reply stickernya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
					case 'simi':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Textnya mana kak?')
					teks = `{$body.slice(6)}`
					anu = await fetchJson(`https://api.i-tech.id/tools/simi?key=${TechApi}&lang=id&kata=${teks}`, {method: 'get'})
					if (anu.error) return reply('Simi ga tau kak')
					simii = `*${anu.result}`
					client.sendMessage(from, simii, text, {quoted: mek})
					break
				case 'simih':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./Fxc7/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./Fxc7/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
			    case 'nsfw':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.publikG)
			if (!isOwner) return reply('Kamu siapa?')
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Mode nsfw sudah aktif')
						nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('Sukses mengaktifkan mode nsfw di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('Sukes menonaktifkan mode nsfw di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
				case 'anime':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAnime) return reply('Mode anime sudah aktif')
						anime.push(from)
						fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
						reply('Sukses mengaktifkan mode anime di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						anime.splice(from, 1)
						fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
						reply('Sukes menonaktifkan mode anime di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
					case 'public':
	                if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply('HANYA OWNER YANG DAPAT MENGGUNAKAN NYA BAKA')
					if (args.length < 1) return reply('Pilih 1(Aktif) atau 2(Nonaktif) Sayang!')
					if (Number(args[0]) === 1) {
						if (isPublic) return reply('Sudah Aktif')
						public.push(from)
						fs.writeFileSync('./src/public.json', JSON.stringify(public))
						reply('Sekarang semua anggota dapat mengirim perintah✔️')
					} else if (Number(args[0]) === 0) {
						public.splice(from, 1)
						fs.writeFileSync('./src/public.json', JSON.stringify(public))
						reply('Sekarang hanya owner dapat mengirim perintah✔️')
					} else {
						reply('Pilih 1(Aktif) atau 2(Nonaktif) Sayang!')
					}
					break
					case 'antilinkgroup':
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						client.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (isAntiLink) return reply('Mode anti link group sudah disable')
						var ini = anti.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
				case 'welcome':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
				case 'clone':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					break
				case 'setprefix':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return
					if (!isPremium) return reply(mess.only.premium)
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi :「* ${prefix} *」`)
					break
		        //fitur adminbot
		        case 'setpp2':
		if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
		if (!isPublic) return reply(mess.only.publikG)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isadminbot) return reply('Kamu siapa?')
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Sukses mengganti icon Grup')
                    break
                    case 'addbacot':
                    if (!isOwner) return
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
				    huu = body.slice(9)
						bacotrandom.push(huu)
						fs.writeFileSync('./src/bacot.json', JSON.stringify(bacotrandom))
						reply(`Sukses, Kata ${huu} Telah Ditambahkan ke database`)
						break
                   case 'bacotlist':
                   if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					teks = 'This is list of say list :\n'
					for (let hehee of bacotrandom) {
						teks += `╠➥ ${hehee}\n`
					}
					teks += `Total : ${bacotrandom.length}`
					 client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": bacotrandom}})
					break
                    case 'resetbacot':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isUser) return reply(mess.only.userB)
				    hai = body.slice(10)
						bacotrandom.splice(hai)
						fs.writeFileSync('./src/bacot.json', JSON.stringify(bacotrandom))
						reply(`Sukses, database bacot telah direset`)
						break
                    case 'bacot':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
                    hasil = bacotrandom[Math.floor(Math.random() * (bacotrandom.length))]
                    reply(hasil)
                    break
                case 'bc2':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                
					if (!isadminbot) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buffer, image, {caption: `[ admin bot Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *admin bot Broadcast* ]\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
				case 'hidetag2':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(mess.only.premium)
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
					case 'hidetag5':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(mess.only.premium)
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
					break
					case 'hidetag20':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(mess.only.premium)
					var value = body.slice(10)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
					break
					case 'hidetag50':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(mess.only.premium)
					var value = body.slice(10)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
					break
					//
				case 'setpp3':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isfrendsowner) return reply('Kamu siapa?')
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Sukses mengganti icon Grup')
                    break
                case 'bc3':
                
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isfrendsowner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer66 = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buffer66, image, {caption: `[ admin bot Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *Frends bot Broadcast* ]\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
				case 'cslogo':
                    if (!isPublic) return reply(mess.only.publikG)
					if (isBanned) return reply(mess.only.benned)    

					if (!isUser) return reply(mess.only.userB)

					
					if (args.length < 1) return reply('??𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')

					cslogo = body.slice(10)

					reply(mess.wait)

					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=csgo&text=${cslogo}&apikey=BotWeA`, {method: 'get'})

					buffer = await getBuffer(anu.result)

					client.sendMessage(from, buffer, image, {quoted: mek})

					break
				case 'hidetag3':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isfrendsowner) return reply('Kamu siapa?')
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
				//frendowner
				case `addadmin`:
                   if (!isOwner) return reply('Perintah ini hanya bisa di gunakan oleh Owner HASUFA BOT!', id)
                   for (let i = 0; i < mentionedJidList.length; i++) {
                   adminNumber.push(mentionedJidList[i])
                   fs.writeFileSync('./lib/database/admin.json', JSON.stringify(adminNumber))
                   reply('Success Menambahkan Admin HASUFA BOT!')
				   }
                   break
//chat//
(text.includes("halo"))
  reply('alo')
if (messagesC.includes('halo'))
reply('halo')
client.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
if (text == 'halo')
{
client.sendMessage(id, tambahan.halo ,MessageType.text);
}
else if (text == 'hai')
{
client.sendMessage(id, tambahan.hai ,MessageType.text);
}
else if (text == 'assalamualaikum')
{
client.sendMessage(id, tambahan.ass ,MessageType.text);
}
else if (text == 'bro')
{
client.sendMessage(id, tambahan.bro ,MessageType.text);
}
else if (text == 'p')
{
client.sendMessage(id, tambahan.p ,MessageType.text);
}
else if (text == 'test')
{
  client.sendMessage(id, tambahan.test, MessageType.text);
}
else if (text == 'HALO')
{
client.sendMessage(id, tambahan.halo ,MessageType.text);
}
else if (text == 'Halo')
{
client.sendMessage(id, tambahan.halo ,MessageType.text);
}
else if (text == 'Hai')
{
client.sendMessage(id, tambahan.hai ,MessageType.text);
}
else if (text == 'Assalamualaikum')
{
client.sendMessage(id, tambahan.ass ,MessageType.text);
}
else if (text == 'Bro')
{
client.sendMessage(id, tambahan.bro ,MessageType.text);
}
else if (text == 'P')
{
client.sendMessage(id, tambahan.p ,MessageType.text);
}
else if (text == 'Test')
{
  client.sendMessage(id, tambahan.test, MessageType.text);
}
else if (text == 'HAI')
{
client.sendMessage(id, tambahan.hai ,MessageType.text);
}
else if (text == 'ASSALAMUALAIKUM')
{
client.sendMessage(id, tambahan.ass ,MessageType.text);
}
else if (text == 'BRO')
{
client.sendMessage(id, tambahan.bro ,MessageType.text);
}
else if (text == 'TEST')
{
  client.sendMessage(id, tambahan.test, MessageType.text);
}
				case 'wait':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						tutor = await getBuffer(`https://i.ibb.co/Hp1XGbL/a4dec92b8922.jpg`)
						client.sendMessage(from, tutor, image, {quoted: mek, caption: 'nih tutor tod'})
						reply('foto aja')
					}
					break
				default:
					if (body.startsWith(`${prefix}${command}`)) {
                  reply(`Maaf *${pushname2}*, Command *${prefix}${command}* Tidak Terdaftar Di Dalam *${prefix}menu*!`)
                  }
   				if (isGroup && isSimi && budy != undefined && body.startsWith(`${prefix}`)) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[NO]','blue'), 'Pengirim', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
