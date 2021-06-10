/////////////////////////////////////////////////////////////////////////////////////////////////////
const gameMaxNum = 93;

const gameNameArray = ["한국밈 피하기",	"죄송합니다",	"배",	"타지리",	"코",	"수박게임",	"하스스톤",	"김성근",	"게",	"더 킹 오브 파이터즈",	"춘희",	"뭉탱이",	"곰팡이",	"케인",	"닥터유",	"보시",	"한화 이글스",	"점프킹",	"파일조",	"바이오쇼크 인피니트",	"클라이드앤",	"김경호",	"김국진",	"지석진",	"밀하우스",	"견훤",	"분홍살인마",	"노인",	"장염",	"사쿠란보",	"딥웹",	"게이",	"리카르도",	"DMCA",	"유희낙락",	"여장",	"은평구",	"조커",	"서울대",	"명지대",	"광운대",	"포트리스",	"재수",	"상근",	"기저귀",	"근육",	"미남",	"노량진",	"캡틴아메리카",	"수능",	"아동복",	"피노키오",	"일본",	"중고나라",	"트게더",	"느타리",	"김희철",	"44번 버스",	"동인천",	"샌드백",	"한스밴드",	"닭도리탕",	"닭볶음탕",	"김치찌개",	"잼민이",	"코주부",	"태조왕건",	"떡국",	"월미도",	"솔리드",	"한강",	"쏘울",	"벤츠 E클래스",	"사기",	"아프리카TV",	"트위치",	"유튜브",	"세스코",	"스타킹",	"돈통",	"알까기",	"끄투",	"캐치마인드",	"블루마리",	"크리스",	"야시로",	"이오리",	"릴",	"낚시",	"유스핀미",	"바퀴벌레",	"장풍",	"록맨",	"천사소녀 네티",	"그 남자! 그 여자!"]



const gameValueArray = [48000,	16700,	2390000,	3530,	18500000,	52800,	132300,	15300,	495000,	44600,	15500,	5790,	211000,	382000,	53600,	14800,	626000,	1880,	2020000,	1890,	24100,	90100,	109000,	169000,	1140,	11800,	20,	303000,	348000,	61300,	5080,	269000,	7780,	1160,	700,	11100,	145000,	185000,	565000,	211000,	127000,	31200,	156000,	63000,	192000,	233000,	151000,	245000,	47700,	397000,	68600,	67700,	1250000,	3010000,	111000,	127000,	209000,	18000,	55900,	53700,	12900,	158000,	465000,	504000,	178000,	15800,	48100,	72220,	211000,	168000,	2930000,	65300,	486000,	147000,	2550000,	1410000,	28790000,	162000,	214000,	5240,	5360,	167000,	39000,	1490,	2550000,	3320,	730,	586000,	382000,	50,	291000,	42000,	5970,	12300,	16100,]



const gameImageArray = ["kane/Koreanmeme.png",	"kane/sorry.png",	"kane/pear.png",	"kane/tajiri.png",	"kane/ko.png",	"kane/watermelon.png",	"kane/hearthstone.png",	"kane/kimseonggeun.png",	"kane/crab.png",	"kane/king.png",	"kane/chunhee.png",	"kane/mungtaengyi.png",	"kane/mold.png",	"kane/kane.png",	"kane/dryou.png",	"kane/boshy.png",	"kane/hanwha.png",	"kane/jumpking.png",	"kane/filezo.png",	"kane/bioshock.png",	"kane/clriden.png",	"kane/kimgyeongho.png",	"kane/kimgookjin.png",	"kane/jisukjin.png",	"kane/milhouse.png",	"kane/gyeonhwon.png",	"kane/pinkkiller.png",	"kane/noin.png",	"kane/enteritis.png",	"kane/sakuranbo.png",	"kane/deepweb.png",	"kane/gay.png",	"kane/ricardo.png",	"kane/dmca.png",	"kane/funandjoy.png",	"kane/woman.png",	"kane/eunpyeonggu.png",	"kane/joker.png",	"kane/seouluniversity.png",	"kane/myongjiuniversity.png",	"kane/kwangwoonuniversity.png",	"kane/fortress.png",	"kane/jaesu.png",	"kane/sanggeun.png",	"kane/diaper.png",	"kane/muscle.png",	"kane/beauty.png",	"kane/noryangjin.png",	"kane/captiain.png",	"kane/sat.png",	"kane/petticoat.png",	"kane/pinocchio.png",	"kane/japan.png",	"kane/joonggonara.png",	"kane/tgd.png",	"kane/oystermushroom.png",	"kane/heechul.png",	"kane/44bus.png",	"kane/dongincheon.png",	"kane/sandbag.png",	"kane/hansband.png",	"kane/doritang.png",	"kane/doritang.png",	"kane/kimchistew.png",	"kane/jaemmin.png",	"kane/kojubu.png",	"kane/taejo.png",	"kane/ricecakesoup.png",	"kane/wolmido.png",	"kane/solid.png",	"kane/hangang.png",	"kane/soul.png",	"kane/benz.png",	"kane/scam.png",	"kane/afreecatv.png",	"kane/twitch.png",	"kane/youtube.png",	"kane/cesco.png",	"kane/stocking.png",	"kane/dontong.png",	"kane/alkagi.png",	"kane/kkutu.png",	"kane/catchmind.png",	"kane/maryrian.png",	"kane/chris.png",	"kane/yashiro.png",	"kane/iori.png",	"kane/lil.png",	"kane/fishing.png",	"kane/youspinme.png",	"kane/cockroach.png",	"kane/longwind.png",	"kane/rockman.png",	"kane/netty.png",	"kane/themanthewoman.png"]




const gameUnit = "명";

const overlookRange = 0.1;
//////////////////////////////////////////////////////////////////////////////////////////////////////
