const _0x4be569=_0x11c2;(function(_0x4e5f6d,_0x175daf){const _0x346ff0=_0x11c2,_0x44dc5b=_0x4e5f6d();while(!![]){try{const _0xb3c6ff=parseInt(_0x346ff0(0x215))/0x1*(parseInt(_0x346ff0(0x1ef))/0x2)+-parseInt(_0x346ff0(0x1f1))/0x3*(parseInt(_0x346ff0(0x1e6))/0x4)+-parseInt(_0x346ff0(0x1e9))/0x5+-parseInt(_0x346ff0(0x1eb))/0x6+-parseInt(_0x346ff0(0x214))/0x7*(parseInt(_0x346ff0(0x1e4))/0x8)+-parseInt(_0x346ff0(0x20a))/0x9+-parseInt(_0x346ff0(0x20e))/0xa*(-parseInt(_0x346ff0(0x1f6))/0xb);if(_0xb3c6ff===_0x175daf)break;else _0x44dc5b['push'](_0x44dc5b['shift']());}catch(_0x5bc654){_0x44dc5b['push'](_0x44dc5b['shift']());}}}(_0x19e9,0x540b2));import{napCatCore}from'@/core';function _0x11c2(_0xe698dc,_0x5807c5){const _0x19e964=_0x19e9();return _0x11c2=function(_0x11c213,_0x726ede){_0x11c213=_0x11c213-0x1e2;let _0xc56a18=_0x19e964[_0x11c213];return _0xc56a18;},_0x11c2(_0xe698dc,_0x5807c5);}import{GroupListener}from'@/core/index';import{uid2UinMap}from'@/core/data';import{logDebug}from'@/common/utils/log';import{randomUUID}from'crypto';const groupMemberTasks=new Map(),groupListener=new GroupListener();function _0x19e9(){const _0x3b5758=['sUocQ','166OlWmgY','addListener','2946CdXHwe','uid','onGroupListUpdate','onLoginSuccess','getGroupIgnoreNotifies','10050073zdJntA','setGroupName','setGroupShutUp','getNextMemberList','ayrNL','getGroupNotifies','forEach','errCode','modifyMemberRole','infos','getGroupService','setMemberShutUp','获取群列表超时','getGroupMembers','kickMember','handleGroupRequest','modifyMemberCardName','set','JrIIF','result','124209ZqAJlx','uoMoS','finish:\x20','createMemberListScene','10SjSxfX','banGroup','fsbNX','operateSysNotify','publishGroupBulletin','getGroupList','1261911BYThZT','7417MOKqeB','errMsg','modifyGroupName','uin','banMember','setMemberRole','type','获取群(','quitGroup','HBqyO','获取群成员列表出错,','16BeOLFR','session','1756gvgcoU','获取群列表完成','seq','1160625NrfNTD','QyEWB','884652aNnPPa','Faoxp','groupCode'];_0x19e9=function(){return _0x3b5758;};return _0x19e9();}groupListener[_0x4be569(0x1f3)]=(_0x627bee,_0x31e034)=>{const _0x9ee9c2=_0x4be569,_0x220a8a={'ayrNL':function(_0x4b8dca,_0x1b0b16,_0x5af05a){return _0x4b8dca(_0x1b0b16,_0x5af05a);}};for(const [_0x29f01c,_0x3d73ec]of groupMemberTasks){_0x220a8a[_0x9ee9c2(0x1fa)](_0x3d73ec,_0x627bee,_0x31e034),groupMemberTasks['delete'](_0x29f01c);}},setTimeout(()=>{const _0x53b22f=_0x4be569;napCatCore[_0x53b22f(0x1f4)](()=>{const _0x18f91f=_0x53b22f;napCatCore[_0x18f91f(0x1f0)](groupListener);});},0x64);export class NTQQGroupApi{static async['getGroups'](_0x4f891e=![]){const _0x1a6694=_0x4be569,_0x178c16={'sUocQ':function(_0x1c16c5,_0x27bd65){return _0x1c16c5(_0x27bd65);},'JrIIF':_0x1a6694(0x202),'HBqyO':function(_0x393691,_0x1878db,_0x3e7577){return _0x393691(_0x1878db,_0x3e7577);},'uoMoS':_0x1a6694(0x1e7),'JnzBs':function(_0x4f1084,_0x548785,_0x2501f4){return _0x4f1084(_0x548785,_0x2501f4);}};let _0x4f5ea8=![];return new Promise((_0x436668,_0x271657)=>{const _0x37a1b2=_0x1a6694;_0x178c16['JnzBs'](setTimeout,()=>{const _0x13e294=_0x11c2;!_0x4f5ea8&&(_0x178c16[_0x13e294(0x1ee)](logDebug,_0x178c16['JrIIF']),_0x178c16[_0x13e294(0x1ee)](_0x271657,_0x178c16[_0x13e294(0x208)]));},0x1388);const _0x5b1415=(_0x4a326f,_0x47ac47)=>{const _0xbfc122=_0x11c2;_0x4f5ea8=!![],_0x178c16[_0xbfc122(0x1e2)](logDebug,_0x178c16[_0xbfc122(0x20b)],_0x47ac47),_0x436668(_0x47ac47);};groupMemberTasks[_0x37a1b2(0x207)](randomUUID(),_0x5b1415),napCatCore[_0x37a1b2(0x1e5)][_0x37a1b2(0x200)]()[_0x37a1b2(0x213)](_0x4f891e)['then']();});}static async[_0x4be569(0x203)](_0x297ae5,_0x539aba=0xbb8){const _0x43e6a1=_0x4be569,_0x43ec90={'Faoxp':'groupMemberList_MainWindow','QyEWB':function(_0x2a9649,_0x287858){return _0x2a9649!==_0x287858;},'fsbNX':function(_0x10595f,_0x2d2187,_0x4eaa2a){return _0x10595f(_0x2d2187,_0x4eaa2a);}},_0x27127a=napCatCore[_0x43e6a1(0x1e5)][_0x43e6a1(0x200)](),_0x41839e=_0x27127a[_0x43e6a1(0x20d)](_0x297ae5,_0x43ec90[_0x43e6a1(0x1ec)]),_0x3e8234=await _0x27127a[_0x43e6a1(0x1f9)](_0x41839e,undefined,_0x539aba);if(_0x43ec90[_0x43e6a1(0x1ea)](_0x3e8234[_0x43e6a1(0x1fd)],0x0))throw _0x43e6a1(0x1e3)+_0x3e8234[_0x43e6a1(0x216)];return _0x43ec90[_0x43e6a1(0x210)](logDebug,_0x43e6a1(0x21c)+_0x297ae5+')成员列表结果:',_0x43e6a1(0x20c)+_0x3e8234[_0x43e6a1(0x209)]['finish']),_0x3e8234['result']['infos'][_0x43e6a1(0x1fc)](_0x5731a2=>{const _0x120226=_0x43e6a1;uid2UinMap[_0x5731a2[_0x120226(0x1f2)]]=_0x5731a2[_0x120226(0x218)];}),_0x3e8234[_0x43e6a1(0x209)][_0x43e6a1(0x1ff)];}static async[_0x4be569(0x1fb)](){}static async[_0x4be569(0x1f5)](){}static async[_0x4be569(0x205)](_0x25b11a,_0x43f37b,_0x45f501){const _0x1f7bbe=_0x4be569;return napCatCore[_0x1f7bbe(0x1e5)]['getGroupService']()[_0x1f7bbe(0x211)](![],{'operateType':_0x43f37b,'targetMsg':{'seq':_0x25b11a[_0x1f7bbe(0x1e8)],'type':_0x25b11a[_0x1f7bbe(0x21b)],'groupCode':_0x25b11a['group'][_0x1f7bbe(0x1ed)],'postscript':_0x45f501||''}});}static async['quitGroup'](_0xeff448){const _0x3b85dd=_0x4be569;return napCatCore[_0x3b85dd(0x1e5)][_0x3b85dd(0x200)]()[_0x3b85dd(0x21d)](_0xeff448);}static async[_0x4be569(0x204)](_0x54df4d,_0x3918a7,_0x4f7140=![],_0x2cc174=''){const _0x4cb876=_0x4be569;return napCatCore['session']['getGroupService']()[_0x4cb876(0x204)](_0x54df4d,_0x3918a7,_0x4f7140,_0x2cc174);}static async[_0x4be569(0x219)](_0x17a1ff,_0x107860){const _0x43eef7=_0x4be569;return napCatCore[_0x43eef7(0x1e5)]['getGroupService']()[_0x43eef7(0x201)](_0x17a1ff,_0x107860);}static async[_0x4be569(0x20f)](_0x42632d,_0x1d1679){const _0x14b921=_0x4be569;return napCatCore[_0x14b921(0x1e5)]['getGroupService']()[_0x14b921(0x1f8)](_0x42632d,_0x1d1679);}static async['setMemberCard'](_0x11dbc6,_0x20d397,_0x59f268){const _0x2c6f2a=_0x4be569;return napCatCore[_0x2c6f2a(0x1e5)]['getGroupService']()[_0x2c6f2a(0x206)](_0x11dbc6,_0x20d397,_0x59f268);}static async[_0x4be569(0x21a)](_0x407b44,_0x757d8e,_0xf8e4d7){const _0x3b30ae=_0x4be569;return napCatCore[_0x3b30ae(0x1e5)][_0x3b30ae(0x200)]()[_0x3b30ae(0x1fe)](_0x407b44,_0x757d8e,_0xf8e4d7);}static async[_0x4be569(0x1f7)](_0xdf173d,_0xd3462e){const _0x2706bf=_0x4be569;return napCatCore[_0x2706bf(0x1e5)][_0x2706bf(0x200)]()[_0x2706bf(0x217)](_0xdf173d,_0xd3462e,![]);}static async['setGroupTitle'](_0x340048,_0x42dce5,_0x40fffa){}static[_0x4be569(0x212)](_0x507b48,_0x53fed5,_0x5476bf){}}