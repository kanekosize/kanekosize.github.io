/////////////////////////////////////////////////////////////////////////////////////////////////////
const gameMaxNum = 256;

const gameNameArray = ["한국밈 피하기",	"죄송합니다",	"배",	"타지리",	"코",	"수박게임",	"하스스톤",	"김성근",	"게",	"더 킹 오브 파이터즈",	"춘희",	"뭉탱이",	"곰팡이",	"케인",	"닥터유",	"보시",	"한화 이글스",	"점프킹",	"파일조",	"바이오쇼크 인피니트",	"클라이드앤",	"김경호",	"김국진",	"지석진",	"밀하우스",	"견훤",	"분홍살인마",	"노인",	"장염",	"사쿠란보",	"딥웹",	"게이",	"리카르도",	"DMCA",	"유희낙락",	"여장",	"은평구",	"조커",	"서울대",	"명지대",	"광운대",	"포트리스",	"재수",	"상근",	"기저귀",	"근육",	"미남",	"노량진",	"캡틴아메리카",	"수능",	"아동복",	"피노키오",	"일본",	"중고나라",	"트게더",	"느타리",	"김희철",	"44번 버스",	"동인천",	"샌드백",	"한스밴드",	"닭도리탕",	"닭볶음탕",	"김치찌개",	"ASK",	"코주부",	"태조왕건",	"떡국",	"월미도",	"솔리드",	"한강",	"쏘울",	"벤츠 E클래스",	"사기",	"아프리카TV",	"트위치",	"유튜브",	"세스코",	"스타킹",	"돈통",	"알까기",	"끄투",	"캐치마인드",	"블루마리",	"크리스",	"야시로",	"이오리",	"릴",	"낚시",	"유스핀미",	"바퀴벌레",	"장풍",	"록맨",	"천사소녀 네티",	"그 남자 그 여자",	"이더리움",	"비트코인",	"밀푀유나베",	"간장",	"앱솔루트",	"허리케인",	"한석원",	"프로레슬링",	"SNK",	"크로마키",	"야구",	"법회",	"모에모에큥",	"자",	"잤어",	"택시",	"사이클",	"리듬세상",	"아이고난",	"발 비너스",	"김흥국",	"엿",	"커트앵글",	"짱구",	"동백꽃",	"절세",	"메이플스토리",	"핀볼",	"보글보글",	"로제떡볶이",	"시티팝",	"올드보이",	"아저씨",	"범죄도시",	"수리",	"윤태진",	"김성회",	"마젠타",	"짬타수아",	"모모88",	"렐라",	"도티",	"침착맨",	"김나성",	"김도",	"콜랩",	"미운우리새끼",	"고양이",	"똥",	"코박사",	"코지마",	"코코볼",	"코로나",	"돌하르방",	"공혁준",	"가짜사나이",	"배달의 민족",	"양궁",	"가면라이더",	"다람쥐",	"빅맥",	"동물의 숲",	"먹방",	"돼지갈비",	"볼링",	"아따맘마",	"팝송",	"마술",	"캐서린",	"X-JAPAN",	"시계",	"에반게리온",	"헌터X헌터",	"고양이마리오",	"원피스",	"닌자거북이",	"코코팜",	"코란도",	"장윤정",	"빠삐코",	"랜덤채팅",	"부산",	"용과 같이",	"스카이프",	"이종격투기",	"다음팟",	"축구",	"궁예",	"판도라TV",	"펩시",	"권규호",	"고전게임",	"변화구",	"마피아3",	"모아이",	"문명",	"철권",	"제로투",	"오토바이",	"그랑죠",	"사랑니",	"마루코는 아홉살",	"안녕하살법",	"이사",	"두근두근 문예부",	"겨울",	"곤니찌와",	"항아리 게임",	"개입",	"INFP",	"부당거래",	"세일러문",	"염소",	"가짜뉴스",	"신세계",	"자숙",	"헬테이커",	"러시아",	"트라이",	"코코랩",	"응원가",	"SG워너비",	"투투",	"야다",	"금빛 모자이크",	"빗썸",	"샌드박스",	"녹즙",	"의자",	"콘치즈",	"카카오맵",	"스트리트 파이터",	"발디의 수학교실",	"더 라스트 오브 어스 2",	"언틸 던",	"인스타그램",	"섬란카구라",	"투더문",	"바이오하자드",	"디트로이트 비컴 휴먼",	"워킹 데드",	"리틀 나이트메어",	"컵헤드",	"스타크래프트",	"엠넷",	"리그오브레전드",	"카트라이더",	"섯다",	"장기",	"버거킹",	"롯데리아",	"맥도날드",	"던질까말까",	"무야호",	"멈춰",	"황제",	"백종원",	"일론 머스크",	"김연아",	"피규어",	"삼겹살"]



const gameValueArray = [48000,	16700,	2390000,	3530,	18500000,	52800,	132000,	15300,	495000,	44600,	15500,	5790,	211000,	382000,	53600,	14800,	626000,	1880,	2020000,	1890,	24100,	90100,	109000,	169000,	1140,	11800,	0,	303000,	348000,	61300,	5080,	269000,	7780,	1160,	700,	11100,	145000,	185000,	565000,	211000,	127000,	31200,	156000,	63000,	192000,	233000,	151000,	245000,	47700,	397000,	68600,	67700,	1250000,	3010000,	111000,	127000,	209000,	18000,	55900,	53700,	12900,	158000,	465000,	504000,	42500,	15800,	48100,	72200,	211000,	168000,	2930000,	65300,	486000,	147000,	2550000,	1410000,	28790000,	162000,	214000,	5240,	5360,	167000,	39000,	1490,	2550000,	3320,	730,	586000,	382000,	50,	291000,	42000,	5970,	12300,	16100,	4020000,	18400000,	176000,	454000,	108000,	30400,	32400,	43800,	172000,	34100,	14000000,	1140,	1110,	1690000,	3760,	5900000,	152000,	3360,	2490,	60,	62000,	15700,	1940,	381000,	217000,	23200,	454000,	4670,	16400,	476000,	16300,	58700,	344000,	147000,	248000,	16500,	20600,	31000,	7150,	1390,	3830,	41700,	41500,	2830,	316000,	2880,	450000,	858000,	191000,	5350,	154000,	1740,	27000000,	48200,	204000,	42300,	399000,	77600,	182000,	134000,	58000,	99100,	52300,	298000,	174000,	41300,	84100,	58400,	44700,	880,	758000,	62500,	34500,	2950,	1570000,	10400,	8170,	186000,	389000,	12400,	107000,	6570000,	58400,	29000,	40400,	77600,	3040000,	31600,	12000,	78400,	6060,	32700,	7520,	860,	39000,	103000,	61200,	382000,	697000,	19600,	218000,	16200,	2640,	259000,	14300,	163000,	9630,	4950,	14700,	375000,	30500,	68900,	231000,	37000,	2100000,	37400,	30900,	590000,	170000,	10800,	7720,	473000,	51800,	43300,	440,	4480000,	157000,	74400,	1330000,	92200,	511000,	17200,	3120,	22300,	2760,	3010000,	2480,	13100,	116000,	11700,	123000,	68100,	3810,	239000,	165000,	827000,	391000,	67700,	1810000,	1120000,	1050000,	2360000,	2700,	154000,	87000,	127000,	1420000,	2690000,	176000,	164000,	593000
]



const gameImageArray = ["kane/Koreanmeme.png",	"kane/sorry.png",	"kane/pear.png",	"kane/tajiri.png",	"kane/ko.png",	"kane/watermelon.png",	"kane/hearthstone.png",	"kane/kimseonggeun.png",	"kane/crab.png",	"kane/king.png",	"kane/chunhee.png",	"kane/mungtaengyi.png",	"kane/mold.png",	"kane/kane.png",	"kane/dryou.png",	"kane/boshy.png",	"kane/hanwha.png",	"kane/jumpking.png",	"kane/filezo.png",	"kane/bioshock.png",	"kane/clriden.png",	"kane/kimgyeongho.png",	"kane/kimgookjin.png",	"kane/jisukjin.png",	"kane/milhouse.png",	"kane/gyeonhwon.png",	"kane/pinkkiller.png",	"kane/noin.png",	"kane/enteritis.png",	"kane/sakuranbo.png",	"kane/deepweb.png",	"kane/gay.png",	"kane/ricardo.png",	"kane/dmca.png",	"kane/funandjoy.png",	"kane/woman.png",	"kane/eunpyeonggu.png",	"kane/joker.png",	"kane/seouluniversity.png",	"kane/myongjiuniversity.png",	"kane/kwangwoonuniversity.png",	"kane/fortress.png",	"kane/jaesu.png",	"kane/sanggeun.png",	"kane/diaper.png",	"kane/muscle.png",	"kane/beauty.png",	"kane/noryangjin.png",	"kane/captiain.png",	"kane/sat.png",	"kane/petticoat.png",	"kane/pinocchio.png",	"kane/japan.png",	"kane/joonggonara.png",	"kane/tgd.png",	"kane/oystermushroom.png",	"kane/heechul.png",	"kane/44bus.png",	"kane/dongincheon.png",	"kane/sandbag.png",	"kane/hansband.png",	"kane/doritang.png",	"kane/doritang.png",	"kane/kimchistew.png",	"kane/jaemmin.png",	"kane/kojubu.png",	"kane/taejo.png",	"kane/ricecakesoup.png",	"kane/wolmido.png",	"kane/solid.png",	"kane/hangang.png",	"kane/soul.png",	"kane/benz.png",	"kane/scam.png",	"kane/afreecatv.png",	"kane/twitch.png",	"kane/youtube.png",	"kane/cesco.png",	"kane/stocking.png",	"kane/dontong.png",	"kane/alkagi.png",	"kane/kkutu.png",	"kane/catchmind.png",	"kane/maryrian.png",	"kane/chris.png",	"kane/yashiro.png",	"kane/iori.png",	"kane/lil.png",	"kane/fishing.png",	"kane/youspinme.png",	"kane/cockroach.png",	"kane/longwind.png",	"kane/rockman.png",	"kane/netty.png",	"kane/themanthewoman.png",	"kane/ethereum.png",	"kane/bitcoin.png",	"kane/millefeuillenabe.png",	"kane/soy.png",	"kane/absolut.png",	"kane/hurricane.png",	"kane/hanseokwon.png",	"kane/prowrestling.png",	"kane/snk.png",	"kane/chromakey.png",	"kane/baseball.png",	"kane/beobhoe.png",	"kane/moemoe.png",	"kane/ruler.png",	"kane/slept.png",	"kane/taxi.png",	"kane/cycle.png",	"kane/rhythmheaven.png",	"kane/igonan.png",	"kane/valvenis.png",	"kane/haleykim.png",	"kane/fucked.png",	"kane/kurtangle.png",	"kane/shinnosuke.png",	"kane/camellia.png",	"kane/taxsaving.png",	"kane/maplestory.png",	"kane/pinball.png",	"kane/bubblebobble.png",	"kane/lojetteokbokki.png",	"kane/citypop.png",	"kane/oldboy.png",	"kane/themanfromnowhere.png",	"kane/theoutlaws.png",	"kane/suri.png",	"kane/yoontaejin.png",	"kane/kimseonghye.png",	"kane/magenta.png",	"kane/zzamtiger.png",	"kane/momo88.png",	"kane/rella.png",	"kane/ddotty.png",	"kane/calmdownman.png",	"kane/naseongkim.png",	"kane/kimdoe.png",	"kane/collab.png",	"kane/mylittleoldboy.png",	"kane/cat.png",	"kane/poop.png",	"kane/kodoctor.png",	"kane/cozyma.png",	"kane/kokoball.png",	"kane/covid19.png",	"kane/dolhareubang.png",	"kane/rhdgurwns.png",	"kane/fakeman.png",	"kane/baemin.png",	"kane/archery.png",	"kane/kamenrider.png",	"kane/squirrel.png",	"kane/bigmac.png",	"kane/animalcrossing.png",	"kane/mukbang.png",	"kane/spareribs.png",	"kane/bowling.png",	"kane/atashinchi.png",	"kane/popsong.png",	"kane/magic.png",	"kane/catherine.png",	"kane/xjapan.png",	"kane/clock.png",	"kane/evangelion.png",	"kane/hunterhunter.png",	"kane/catmario.png",	"kane/onepiece.png",	"kane/ninjatrutle.png",	"kane/cocopalm.png",	"kane/korando.png",	"kane/jangyoonjung.png",	"kane/papico.png",	"kane/randomchatting.png",	"kane/busan.png",	"kane/yakuza.png",	"kane/skype.png",	"kane/mixedmartialarts.png",	"kane/daumpot.png",	"kane/football.png",	"kane/gungye.png",	"kane/pandora.png",	"kane/pepsi.png",	"kane/kwonkyuho.png",	"kane/classicgame.png",	"kane/breakingball.png",	"kane/mafia3.png",	"kane/moai.png",	"kane/civilization.png",	"kane/tekken.png",	"kane/zerotwo.png",	"kane/motorcycle.png",	"kane/grazotte.png",	"kane/wisdomtooth.png",	"kane/maruko.png",	"kane/konnichisapporo.png",	"kane/move.png",	"kane/dokidokiliteratureclub.png",	"kane/winter.png",	"kane/hellojapanese.png",	"kane/gettingoverit.png",	"kane/gaeib.png",	"kane/infp.png",	"kane/budanggeolae.png",	"kane/sailormoon.png",	"kane/goat.png",	"kane/fakenews.png",	"kane/ssg.png",	"kane/selfrestraint.png",	"kane/helltaker.png",	"kane/russia.png",	"kane/try.png",	"kane/cocolap.png",	"kane/cheersong.png",	"kane/sgwannabe.png",	"kane/twotwo.png",	"kane/yada.png",	"kane/goldenmosaic.png",	"kane/bitsume.png",	"kane/sandbox.png",	"kane/greenjuice.png",	"kane/chair.png",	"kane/choncheese.png",	"kane/kakaomap.png",	"kane/streetfighter.png",	"kane/baldisbasicsineducationandlearning.png",	"kane/thelastofus.png",	"kane/untildawn.png",	"kane/instagram.png",	"kane/senrankagura.png",	"kane/tothemoon.png",	"kane/biohazard.png",	"kane/detroitbecomehuman.png",	"kane/walkingdead.png",	"kane/littlenightmares.png",	"kane/cuphead.png",	"kane/starcraft.png",	"kane/mnet.png",	"kane/leagueoflegends.png",	"kane/kartrider.png",	"kane/seotda.png",	"kane/janggi.png",	"kane/burgerking.png",	"kane/lotteria.png",	"kane/mcdonald.png",	"kane/tothrowornot.png",	"kane/muyaho.png",	"kane/stop.png",	"kane/emerpor.png",	"kane/baekjongwon.png",	"kane/elonmusk.png",	"kane/kimyeonah.png",	"kane/figure.png",	"kane/porkbelly.png"]




const gameUnit = "명";

//////////////////////////////////////////////////////////////////////////////////////////////////////
