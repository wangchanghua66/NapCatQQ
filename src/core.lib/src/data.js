(function(_0x3d59ec,_0x3ed073){const _0x49ffc8=_0x3147,_0xff8478=_0x3d59ec();while(!![]){try{const _0x302823=-parseInt(_0x49ffc8(0xd6))/0x1*(-parseInt(_0x49ffc8(0xd1))/0x2)+parseInt(_0x49ffc8(0xcb))/0x3*(-parseInt(_0x49ffc8(0xdd))/0x4)+-parseInt(_0x49ffc8(0xdc))/0x5+-parseInt(_0x49ffc8(0xde))/0x6+parseInt(_0x49ffc8(0xd8))/0x7*(-parseInt(_0x49ffc8(0xdf))/0x8)+parseInt(_0x49ffc8(0xd4))/0x9+parseInt(_0x49ffc8(0xca))/0xa*(parseInt(_0x49ffc8(0xd7))/0xb);if(_0x302823===_0x3ed073)break;else _0xff8478['push'](_0xff8478['shift']());}catch(_0x4af7bf){_0xff8478['push'](_0xff8478['shift']());}}}(_0x1921,0x3c510));import{isNumeric}from'@/common/utils/helper';import{NTQQGroupApi}from'@/core/apis';export const Credentials={'Skey':'','CreatTime':0x0,'PskeyData':new Map(),'PskeyTime':new Map()};export const WebGroupData={'GroupData':new Map(),'GroupTime':new Map()};export const selfInfo={'uid':'','uin':'','nick':'','online':!![]};export const groups=new Map();export function deleteGroup(_0x4759b6){const _0x901d1b=_0x3147;groups[_0x901d1b(0xc9)](_0x4759b6),groupMembers[_0x901d1b(0xc9)](_0x4759b6);}export const groupMembers=new Map();export const friends=new Map();export const friendRequests={};export const groupNotifies={};export const napCatError={'ffmpegError':'','httpServerError':'','wsServerError':'','otherError':'NapCat未能正常启动，请检查日志查看错误'};export async function getFriend(_0x47b838){const _0x5bafba=_0x3147,_0xccd218={'Bpyuv':function(_0x471b12,_0x1e032d){return _0x471b12(_0x1e032d);}};_0x47b838=_0x47b838[_0x5bafba(0xcd)]();if(_0xccd218['Bpyuv'](isNumeric,_0x47b838)){const _0xf929ee=Array[_0x5bafba(0xd0)](friends[_0x5bafba(0xd3)]());return _0xf929ee[_0x5bafba(0xce)](_0x4002f8=>_0x4002f8[_0x5bafba(0xda)]===_0x47b838);}else return friends['get'](_0x47b838);}export async function getGroup(_0x49e00e){const _0x27844a=_0x3147;let _0x25aefc=groups['get'](_0x49e00e[_0x27844a(0xcd)]());if(!_0x25aefc)try{const _0x2ddf18=await NTQQGroupApi[_0x27844a(0xcc)]();_0x2ddf18['length']&&_0x2ddf18['forEach'](_0x81cbad=>{groups['set'](_0x81cbad['groupCode'],_0x81cbad);});}catch(_0x384c9f){return undefined;}return _0x25aefc=groups['get'](_0x49e00e[_0x27844a(0xcd)]()),_0x25aefc;}export async function getGroupMember(_0x73953d,_0x345f2b){const _0x47f4d6=_0x3147,_0x18b599={'zNPXS':function(_0x59f911,_0x5dd9bb){return _0x59f911(_0x5dd9bb);},'pJasP':function(_0x2c3a18){return _0x2c3a18();}};_0x73953d=_0x73953d[_0x47f4d6(0xcd)](),_0x345f2b=_0x345f2b['toString']();let _0x2d8dea=groupMembers['get'](_0x73953d);if(!_0x2d8dea)try{_0x2d8dea=await NTQQGroupApi[_0x47f4d6(0xdb)](_0x73953d),groupMembers[_0x47f4d6(0xd5)](_0x73953d,_0x2d8dea);}catch(_0x3d8540){return null;}const _0x5bd497=()=>{const _0x4b2f43=_0x47f4d6;let _0x5e4c89=undefined;return _0x18b599[_0x4b2f43(0xd2)](isNumeric,_0x345f2b)?_0x5e4c89=Array[_0x4b2f43(0xd0)](_0x2d8dea[_0x4b2f43(0xd3)]())['find'](_0x5af490=>_0x5af490[_0x4b2f43(0xda)]===_0x345f2b):_0x5e4c89=_0x2d8dea[_0x4b2f43(0xd9)](_0x345f2b),_0x5e4c89;};let _0x5daed6=_0x18b599['pJasP'](_0x5bd497);return!_0x5daed6&&(_0x2d8dea=await NTQQGroupApi[_0x47f4d6(0xdb)](_0x73953d),_0x5daed6=_0x18b599[_0x47f4d6(0xcf)](_0x5bd497)),_0x5daed6;}export const uid2UinMap={};function _0x3147(_0xfdd785,_0x23fd64){const _0x19215a=_0x1921();return _0x3147=function(_0x314752,_0x433251){_0x314752=_0x314752-0xc9;let _0x5cdaae=_0x19215a[_0x314752];return _0x5cdaae;},_0x3147(_0xfdd785,_0x23fd64);}export function getUidByUin(_0x4bcc9c){for(const _0x5f1a90 in uid2UinMap){if(uid2UinMap[_0x5f1a90]===_0x4bcc9c)return _0x5f1a90;}}export const tempGroupCodeMap={};export const stat={'packet_received':0x0,'packet_sent':0x0,'message_received':0x0,'message_sent':0x0,'last_message_time':0x0,'disconnect_times':0x0,'lost_times':0x0,'packet_lost':0x0};function _0x1921(){const _0x18f478=['8weWJxs','zNPXS','values','4258818IWnhAn','set','92413PnXTtT','44warNKt','4578cwzPbK','get','uin','getGroupMembers','57275YTJGEh','140wNwqIN','1429092dUmBPm','4856lbRDUb','delete','512830LGLNEj','13227WuAOlF','getGroups','toString','find','pJasP','from'];_0x1921=function(){return _0x18f478;};return _0x1921();}