import er1 from "../assets/images/er1.jpg";
import yw1 from "../assets/images/yw1.jpg";
import wrd1 from "../assets/images/wrd1.jpg";
import hx1 from "../assets/images/hx1.jpg";
import jyd1 from "../assets/images/jyd1.jpg";
import hyt1 from "../assets/images/hyt1.jpg";
import kk from "../assets/images/kk.jpg";
import biue from "../assets/images/biue.jpg";
import llk from "../assets/images/llk.jpg";
import album11 from "../assets/images/t.jpg";
import album12 from "../assets/images/tsn.jpg";
import album13 from "../assets/images/bule5.jpg";
import album14 from "../assets/images/whndngxt.jpg";
import album15 from "../assets/images/gy.jpg";
import album16 from "../assets/images/ls.jpg";
import album17 from "../assets/images/msk.jpg";
import zyf1 from "../assets/images/zyf.jpg";
import hdxt1 from "../assets/images/hdxt.jpg";

export interface Track {
  id: string;
  title: string;
  duration: string;
}

export interface Album {
  id: string;
  title: string;
  releaseYear: string;
  coverImage: string;
  description: string;
  tracks: Track[];
  artist?: string;
  language?: string;
  label?: string;
  type?: string;
  audioUrl?: string;
  lyrics?: { time: number; text: string }[];
}

export const ALBUMS: Album[] = [
  {
    id: "a1",
    title: "而已",
    releaseYear: "2023",
    coverImage: er1,
    artist: "陈卓璇",
    language: "国语",
    label: "好乐无荒",
    type: "Single",
    audioUrl: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3", // Demo snippet
    lyrics: [
      { time: 0, text: "而已 - 陈卓璇" },
      { time: 2, text: "词Lyricist：陈卓璇" },
      { time: 4, text: "曲Composer：陈卓璇" },
      { time: 6, text: "制作人Producer：陈卓璇" },
      { time: 8, text: "编曲Arranger：张星@耳肆山白/胡仕泽@耳肆山白" },
      { time: 10, text: "监制Executive Producer：陶诗/刘昊霖" },
      { time: 12, text: "配唱制作人Vocal Producer：陈卓璇" },
      { time: 14, text: "和声编写Backing Vocal Design：陈卓璇" },
      { time: 16, text: "和声Backing Vocal：陈卓璇" },
      { time: 18, text: "人声录音师Vocal Recording Engineer：徐天鸿" },
      { time: 20, text: "人声编辑Vocal Editing：陈卓璇/谭笑聪" },
      { time: 22, text: "混音师Mixing Engineer：袁中仁" },
      { time: 24, text: "母带后期混音师Mastering Engineer：袁中仁" },
      { time: 26, text: "视觉设计Visual Design：KSV/邓宗黔" },
      { time: 28, text: "策划总监Planning Director：左三好" },
      { time: 30, text: "营销推广Marketing Promoter：祝鑫" },
      { time: 32, text: "发行文案Publishing Copywriter：李婷薇/赵大白" },
      { time: 34, text: "制作统筹Production Coordination：蔡一凡" },
      { time: 36, text: "人声录音棚Vocal Recording Studio：Studio２１A" },
      { time: 38, text: "混音棚Mixing Studio：好乐无荒混音棚 (长沙)" },
      { time: 40, text: "制作公司Production Company：好乐无荒" },
      { time: 42, text: "出品公司Presented by：好乐无荒" },
      { time: 44, text: "OP/SP：好乐无荒" },
      { time: 46, text: "（著作权权利保留，未经许可，不得使用）" },
      { time: 50, text: "要听海吹风铃" },
      { time: 53, text: "要看光在靠近" },
      { time: 56, text: "要陪爱人很多浪漫日子" },
      { time: 59, text: "少说放弃" },
      { time: 62, text: "爱会拎起行李" },
      { time: 65, text: "推着心去旅行" },
      { time: 68, text: "别让防备情绪太过算计" },
      { time: 71, text: "错过风景" },
      { time: 74, text: "听懂也总结了好多道理" },
      { time: 77, text: "也无法控制该往哪里去" },
      { time: 80, text: "寻不到答案而已" },
      { time: 83, text: "路过熟悉的困难而已" },
      { time: 86, text: "坚信的动摇了而已" },
      { time: 89, text: "再翻涌一次而已" },
      { time: 92, text: "不过偶尔没力气" },
      { time: 95, text: "不过又听谁说不可以" },
      { time: 98, text: "不过又困住自己" },
      { time: 101, text: "其实困住自己的 是自己" },
      { time: 105, text: "别再屏着呼吸" },
      { time: 108, text: "牵着风等雨停" },
      { time: 111, text: "城市的阴影都会被云层" },
      { time: 114, text: "一一搬运" },
      { time: 117, text: "听懂也总结了好多道理" },
      { time: 120, text: "也无法控制该往哪里去" },
      { time: 123, text: "寻不到答案而已" },
      { time: 126, text: "路过熟悉的困难而已" },
      { time: 129, text: "坚信的动摇了而已" },
      { time: 132, text: "再翻涌一次而已" },
      { time: 135, text: "不过偶尔没力气" },
      { time: 138, text: "不过又听谁说不可以" },
      { time: 141, text: "不过又困住自己" },
      { time: 144, text: "其实困住自己的 是自己" },
      { time: 148, text: "等新鲜空气没过废墟" },
      { time: 151, text: "接住造物赐予的悲喜" },
      { time: 154, text: "做容纳犹豫的画笔" },
      { time: 157, text: "作仅此一次的超验主义" },
      { time: 161, text: "寻不到答案而已" },
      { time: 164, text: "路过熟悉的困难而已" },
      { time: 167, text: "坚信的动摇了而已" },
      { time: 170, text: "再翻涌一次而已" },
      { time: 173, text: "不过偶尔没力气" },
      { time: 176, text: "不过又听谁说不可以" },
      { time: 179, text: "不过又困住自己" },
      { time: 182, text: "其实困住自己的 是自己" }
    ],
    description: `风掠过风铃\n海在等光靠近\n记忆路过人心\n往事历历不停\n我们带着爱意奔赴\n又在防备里\n与风景擦肩\n再无数次倏尔远逝的失焦中\n我们终于也遗失了彼此\n答案寻了一整程\n却还是会在原地停顿\n笃定的方向微微偏了偏\n偶尔想放弃\n也不过是旅途里的一次休整\n我们接纳命运的赠予\n用包容脆弱的眼\n看一场只属于你的\n人间风景\n\n好乐无荒旗下艺人陈卓璇原创单曲《而已》上线，以细腻的旋律包裹情绪起伏，把奔赴、困顿与释然都融在一句举重若轻的“而已”中。不必执着于无解的答案，不必纠结于短暂的动摇，人生这趟旅程，本就是在与自我的对话里，渐渐懂得释怀所有“不过尔尔”的过往。`,
    tracks: [
      { id: "t1_1", title: "而已", duration: "03:45" },
    ]
  },
  {
    id: "a2",
    title: "愿忘",
    releaseYear: "2023",
    coverImage: yw1,
    artist: "陈卓璇",
    language: "国语",
    label: "好乐无荒",
    type: "Single",
    description: `当故事告一段落\n\n有许多词可以表达豁然\n\n比如一别两宽比如海阔天空\n\n就好像有无数人希冀着远方\n\n那些未曾谋面的境遇和故事的开篇\n\n但总有人在离别中失去了去远方的理由\n\n被困在了回忆里闪回的镜头\n\n在难忘与遗忘之间\n\n失去了选择的权利\n\n所以当爱意别离用尽最后的力气是希望对方先忘掉\n\n像是再等一个更容易放弃的契机\n\n耗尽自己的勇气和回忆\n\n才在本就无人再来的空镜中迟迟转身\n\n愿你忘记\n\n我们的开始\n\n愿我忘记\n\n彼此的离别\n\n愿你我终于在天各一方里得到安放\n\n忘记那些曾许的以后\n\n值此万山绝响\n\n万籁俱寂\n\n我听见月光照彻山林簌簌飘落成雪\n\n那是曾许的白发\n\n在未竟的故事里率先开出的\n\n结局\n\n好乐无荒旗下艺人陈卓璇缱绻单曲《愿忘》上线。这是一首借用诗词语境写就的离别，在爱与遗憾的母题里采撷一株隔世的芳草，遥相对望在萋萋人间，那年曾见的少年鸿影随时间往复终究成了年轮里的波折，像是摊开掌心波动的纹理，那曾是你以离开在我掌纹中停顿的悲伤。\n\n愿我们真的都忘记，那些短短的相遇和久久的离别。\n\n若是有人再问，短暂的陪伴究竟是恩赐还是惩罚？\n\n愿我们都沉默不语，在心里侧目那一段再不复返的年华，因为那是我最宝贵的恩罚。`,
    tracks: [
      { id: "t2_1", title: "愿忘", duration: "04:05" },
    ]
  },
  {
    id: "a3",
    title: "无人岛",
    releaseYear: "2023",
    coverImage: wrd1,
    artist: "陈卓璇",
    language: "国语",
    label: "好乐无荒",
    type: "Single",
    description: `曾以为\n\n有你的岛\n\n是永恒的归宿\n\n咸甜的风\n\n原来不止来自于海\n\n原来眼眶\n\n也曾是\n\n停留过眼泪的汪洋\n\n可潮汐来袭\n\n冲散了转瞬的曾经\n\n不愿醒来\n\n怕面对与梦相反\n\n没有你的世界\n\n宁愿沉溺谎言\n\n在你的废墟定居\n\n我也守着回忆不肯走\n\n好乐无荒旗下艺人陈卓璇全新单曲《无人岛》，唱尽离别后的执念与不舍。从满心笃定的相守，到猝不及防的散场，我们总在失去后，贪恋余温，困在回忆里，把一个人的孤岛，变成自己走不出的围城。`,
    tracks: [
      { id: "t3_1", title: "无人岛", duration: "03:50" },
    ]
  },
  {
    id: "a4",
    title: "化雪",
    releaseYear: "2023",
    coverImage: hx1,
    artist: "陈卓璇 / 刘宇",
    language: "国语",
    label: "好乐无荒",
    type: "Single",
    description: `前世未竟的爱情\n\n在诀别时化为一滴来世相认的泪\n\n岁月流转\n\n朝夕更替凝结为悬在空中的云海只为等到前世那人重逢\n\n即便落入人间\n\n不断被寒风凛冽撕碎\n\n即便在坠落中\n\n不断失去身形也要去奔赴那宿命里的相爱\n\n即便结局注定要归于消融\n\n即便见面之后又是诀别\n\n好乐无荒旗下艺人陈卓璇古风单曲《化雪》全新上线，邀请刘宇共赴一场跨越岁月s的凄美重逢，陈卓璇如雪般冷艳的声线配合刘宇冰透婉转的音色，将一场宿命般的落雪演绎出隔世相见的笃定与痴绝。\n\n即便结局注定要归于消融，即便见面之后又是诀别，而爱如落雪，永不消减，成云成雨成泪，成为故事。`,
    tracks: [
      { id: "t4_1", title: "化雪", duration: "04:15" },
    ]
  },
  {
    id: "a5",
    title: "记忆点",
    releaseYear: "2023",
    coverImage: jyd1,
    artist: "陈卓璇",
    language: "国语",
    label: "好乐无荒",
    type: "Single",
    description: `如果说\n\n时间是一场漫长的旅行\n\n那什么\n\n是我们相爱的刻度\n\n从陌生到熟悉\n\n从熟悉到相爱却又分开\n\n哪一刻\n\n是我们记忆的锚点\n\n是争吵或沉默\n\n是沉默再默契暗示离开\n\n以为最先忘记的是你的样子\n\n结果却是你的缺点\n\n我们的故事过去很久\n\n你仍在回忆里\n\n胜过所有人\n\n甚至你自己\n\n好乐无荒旗下艺人陈卓璇全新单曲《记忆点》，若相爱是回忆里的章节，这首歌则暗藏着一份有关于爱人出戏后的怅然，尽管所有对白剧情故事线都已落幕，爱或不爱都已杀青，回忆依旧在陈卓璇隐隐作痛的声线里徐徐展开，或许爱到最后就是一场回忆里的远望，而《记忆点》正是这场故事落幕前存档的伏笔，它藏着所有再也回不去也无法再复制的曾经。`,
    tracks: [
      { id: "t5_1", title: "记忆点", duration: "03:30" },
    ]
  },
  {
    id: "a6",
    title: "海与天之间",
    releaseYear: "2023",
    coverImage: hyt1,
    artist: "陈卓璇",
    language: "国语",
    label: "Simple Music by 鲸鱼向海",
    type: "Single",
    description: `海与天之间，看似遥不可及的距离，\n\n平行在世界尽头处，当纵身一跃的时刻，\n\n如果，我们恰好「相爱」，是否，就真的可以相见？\n\n陈卓璇 岁末全新作品《海与天之间》\n\n这次，她想唱出每个人心中觉醒而不可动摇的“相信”，\n\n是啊，多少所谓不可能的不合适的不应该的隔阂与限制，\n\n就像，海与天之间，似近，却是永不曾交汇的茫茫无尽，\n\n可是，总还有人相信着，爱，去爱，才是最重要的意义，\n\n所以，无论多难，我们还是要奋不顾身地靠近，对吗？\n\n【我忍住不眨眼\n\n怕说再见再不见\n\n用七秒的时间\n\n把你雕刻进鳞片\n\n然后一跃 海天之间 \n\n我将全织满 我的想念】\n\n天那边是海，海这边是爱。\n\n海与天之间，看似遥不可及，却因爱交汇、相连。\n\n陈卓璇的《海与天之间》，是一首关乎“距离”和“差异”的情歌。\n\n很多时候，爱的开始是没有理由的，爱到恍惚、爱到奋不顾身、爱到后知后觉。\n\n直至要更进一步时，才察觉其中的困惑、苦楚和艰难。\n\n会动摇吗，会怀疑吗，会放弃吗，会……无能为力吗？\n\n在《海与天之间》，陈卓璇以歌声化身为“鱼”，以第一人称视角讲述着“鱼”与“蝴蝶”之间所寓意着不可思议，跨越距离与身份的爱恋——歌词模糊了“鱼”的本体，细节却处处透露出线索，“同样有翅膀却无法翱翔”、“用七秒的时间/把你雕刻进鳞片”……悄然融入了“我与你”相似却注定不同的诸多细节，这一次，我们愈发感同身受地体会到，陈卓璇用歌声诠释情感的动人魅力：\n\n“也许当初爱得太恍惚，才忘了往前游”，歌曲开头一语双关，道出爱澎湃的开始，也引出爱未知的未来。钢琴沉静响起，如海面散开的波光粼粼，吉他悠然拨动，似天空掠过的风起云动。卓璇的声音清澈，安静，背后却有着强大张力正在凝聚，从第一句充满故事感的讲述开始，就将听者带入到强烈画面感之中\n\n直至“我水平的目光，要如何将你仰望”，甜蜜与悲伤并进，时刻如影随形的细腻而复杂情绪，在她的歌声里娓娓道来，层层递进，唱出了强烈却仿佛没有结局的爱情里，那些期待、忐忑、坚定、无畏、隐忍……那是太多情绪交织而来，“情不知何起”的过去，却依然在此刻倾诉着无尽蔓延、织满海天之间的思念，更是试图眺望着要如何相见的未来，因为，她还相信着的，我们同样相信。\n\n《海与天之间》，在泛娱乐而碎片化时代里，一首返璞归真，散发着曾经卡带与CD气息的纯粹情歌，听见陈卓璇唱出这样的情歌，诠释这样的情感，很珍贵。\n\n海与天之间的故事，会是怎样的结局？歌声里的一切依然未完待续，卓璇也没有给出明确答案，但是，她和我们都很坚定，哪怕结局未知，一定在某一刻，爱，会将那些看似“不可能”的空间距离隔阂，都弥合。\n\n所以，无论多难，我们还是要奋不顾身地靠近，对吗？\n\n海与天之间，听见陈卓璇，我们默默给出了爱的回答。\n\n【我再不敢去见\n\n你来过的那片天\n\n怕眼泪成海啸\n\n伤及无辜的今天\n\n如若相见 难免相欠\n\n你又怎样 怀念】`,
    tracks: [
      { id: "t6_1", title: "海与天之间", duration: "04:00" },
    ]
  },
  {
    id: "a7",
    title: "转身走向你",
    releaseYear: "2023",
    coverImage: kk,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t7_1", title: "转身走向你", duration: "03:48" },
    ]
  },
  {
    id: "a8",
    title: "深海之息(Mareasía)",
    releaseYear: "2023",
    coverImage: biue,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t8_1", title: "深海之息(Mareasía)", duration: "04:22" },
    ]
  },
  {
    id: "a18",
    title: "不降落飞行指南",
    releaseYear: "2024",
    coverImage: llk,
    description: "Chen Zhuoxuan's first personal physical album.",
    tracks: [
      { id: "t18_1", title: "不降落飞行指南", duration: "03:55" },
    ]
  },
  {
    id: "a11",
    title: "That's Right",
    releaseYear: "2023",
    coverImage: album11,
    artist: "陈卓璇",
    language: "国语",
    label: "好乐无荒",
    type: "Single",
    description: `如果将时间\n\n分为 过去现在和未来\n\n我曾遗憾\n\n无法参与你的过去\n\n也无意侵扰你\n\n此刻的现在\n\n却惟独想存在于\n\n有你在的未来\n\n回忆写过一封致你的信\n\n落款是想起亲爱的你时\n\n轻轻的叹息\n\n那些预想的美好\n\n总希望与你有关\n\n让时间成为告白\n\n告诉你我的爱\n\n只增不减 不停不息\n\n好乐无荒旗下艺人陈卓璇单曲《That’s Right》温情上线，陈卓璇的声线一直蕴藏着她独有的深情与决绝、宣泄与克制的多重情绪的铺叠，所以在她演唱情歌时从未单一地将一种语气和心情贯穿到底，而是杂糅着坚实与脆弱、温存与冷静的种种情愫成为更为立体的表达。正如这首歌中她所选择的方式，将这首歌如此丰沛地唱进听者的心底。`,
    tracks: [
      { id: "t11_1", title: "That's Right", duration: "03:15" },
    ]
  },
  {
    id: "a12",
    title: "听说你",
    releaseYear: "2023",
    coverImage: album12,
    artist: "陈卓璇",
    language: "国语",
    label: "酷狗文化",
    type: "Single",
    description: `“是否再绚烂的星河 天亮都要失色”\n\n故事里那些“求而不得” 的刺痛、“你却要走”的我还在意，陈卓璇翻唱的《听说你》用细腻的嗓音诉说着一段失落遗憾的爱情故事`,
    tracks: [
      { id: "t12_1", title: "听说你", duration: "04:02" },
    ]
  },
  {
    id: "a13",
    title: "慢慢",
    releaseYear: "2023",
    coverImage: album13,
    artist: "陈卓璇",
    language: "国语",
    type: "Single",
    description: `【光影回响OST金曲巡礼】\n\n邀请新生代实力歌手 陈卓璇 倾情献唱女声版《慢慢》。\n\n「当孤独的野兽遇见温柔的回声…」\n\n心跳与吉他的琴弦同频共振，那些未曾说出口的遗憾与守望，终将在时光中沉淀成「慢慢靠近」的勇气。`,
    tracks: [
      { id: "t13_1", title: "慢慢", duration: "03:45" },
    ]
  },
  {
    id: "a14",
    title: "我怀念的那个夏天",
    releaseYear: "2023",
    coverImage: album14,
    artist: "陈卓璇",
    language: "国语",
    label: "星河森林",
    type: "Single",
    description: `日落和晚霞的交互，海浪和礁石的碰触，是一场短暂的惊艳。也许时间太快来不及再见，我们最后的纪念停留在了那个夏天。\n\n陈卓璇带来全新单曲《我怀念的那个夏天》，是否能够勾起你记忆里那个特别的夏天？`,
    tracks: [
      { id: "t14_1", title: "我怀念的那个夏天", duration: "04:10" },
    ]
  },
  {
    id: "a15",
    title: "感应",
    releaseYear: "2023",
    coverImage: album15,
    artist: "陈卓璇",
    language: "国语",
    label: "TME影音+/星星燎原工作室",
    type: "Single",
    description: `《感应》由“TME影音+/星星燎原工作室”出品，陈聆子作词，徐林作曲，洪川编曲制作，摩登兄弟刘宇宁原唱，陈卓璇全新演绎。\n\n歌曲在《千古玦尘》开播两周年之际推出，编曲简约大气，突出演唱者的声线和唱功。从相遇到相知，从掌心握紧到银河远行，爱情里的梦幻、甜美、青涩、浪漫在这旋律和演唱中一一展现。良辰美景，愿与你随行。这一次，请彼此感应，聆听陈卓璇的内心诉说。`,
    tracks: [
      { id: "t15_1", title: "感应", duration: "03:33" },
    ]
  },
  {
    id: "a16",
    title: "流沙",
    releaseYear: "2023",
    coverImage: album16,
    artist: "陈卓璇",
    language: "国语",
    label: "制作家",
    type: "Single",
    description: `腾讯音乐娱乐特别企划「返场」之「华语金曲：10 20 30」‖\n\n \n\n经典重绎升级\n\n再启时代之音\n\n \n\n过去的一年中，我们随着歌者重返岁月的回廊，在歌声中回忆曾经的时光。而崭新的一年里，「返场」之「华语金曲：10 20 30」特别企划第二季全新升级，以更多元化、更跨越代际的歌手从不同角度演绎经典，以更有侧重、更有共鸣的歌曲赋予听众质感一流的音乐体验。这次，无论是封存在遥远记忆里的经典金曲以新生代的视角再现，还是颇具个人特色的时代歌手与情怀老歌的碰撞融合，有关「返场」的一切都悉数呈现。10年、20年、30年，即使岁月更迭，但过往的那些回忆，音乐都帮你记得。\n\n \n\nPart 1 新世代——变革\n\n经典绽放新生，变革一触即发。经典和新世代看似是两个时代，但内核却是一脉相承。「新世代」用音乐重温当年的流金岁月，以新生代歌手的角度体会曾经的时代记忆。使旧旋律延展出多元的风格，这样，更多年轻人能感同身受用习惯的方式了解经典，不仅让经典焕发新生命，也让新生代音乐人和更多元的风格被更多人看见。\n\nEP 07 硬糖少女303陈卓璇《流沙》\n\n《流沙》是由娃娃作词，陶喆作曲并演唱，该作品收录在陶喆1997年发行的《陶喆同名专辑》里，歌曲用轻柔的旋律，把一段纠结的感情以诉说的形式表达出来，作为一个时代的标杆，用极具超前的风格锁住了听众的耳朵，用流沙来比喻爱情的形态，越靠近便越深陷其中，无法自拔，便不必再去挣扎，随心而动，在不同的状态里，体会爱情的真谛，陶喆用独特的风格和全新的概念，将每个人内心里最真实想法用音乐的形式说了出来，\n\n硬糖少女303陈卓璇重新演绎《流沙》这首经典作品，用轻柔细腻的嗓音诠释出歌曲的另一种味道，让整首歌多了一丝温馨的感觉，再一次使听众深陷如美妙经典的旋律里。不同于男声版的是，陈卓璇用萌动的少女口吻，来表达出来这个时代对于爱情纠结的别样滋味，轻轻拨动每个人的心弦，空灵的声音勾起往日的画面在眼前浮现，目光深陷在回忆的流沙里，思念已久的那个人，从未远去。`,
    tracks: [
      { id: "t16_1", title: "流沙", duration: "04:20" },
    ]
  },
  {
    id: "a17",
    title: "莫斯科没有眼泪",
    releaseYear: "2023",
    coverImage: album17,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t17_1", title: "莫斯科没有眼泪", duration: "04:08" },
    ]
  },
  {
    id: "a19",
    title: "昨夜风今宵月",
    releaseYear: "2023",
    coverImage: zyf1,
    artist: "陈卓璇",
    language: "国语",
    label: "星汉马文化",
    type: "Single",
    description: `我不爱无聊人间，只偏爱你眉眼。”\n\n爱意藏于诗行，心事付与月光。陈卓璇翻唱的《昨夜风今宵月》，以细腻的嗓音，将这份甜蜜又略带怅惘的爱恋娓娓道来。`,
    tracks: [
      { id: "t19_1", title: "昨夜风今宵月", duration: "03:52" },
    ]
  },
  {
    id: "a20",
    title: "回到夏天 (feat.王赫野)",
    releaseYear: "2023",
    coverImage: hdxt1,
    artist: "陈卓璇",
    language: "国语",
    label: "北京听见时代娱乐传媒有限公司",
    type: "Single",
    description: `关于夏天，每个人都有一份珍藏的记忆。\n\n是蝉鸣响彻天空的合唱，\n\n是海风卷起浪花吹来的咸咸气息，\n\n是凉席印着交错的睡痕，\n\n是西瓜瓤沾满嘴角的糖霜。\n\n是单车后座被风鼓起的白衬衫，\n\n是课桌下传递着秘密的小纸条，\n\n是手机镜头里始终没对焦的笑脸，\n\n是走廊里逐渐拉长的身影。\n\n当知了停止振翅，当星辰偷偷换岗，\n\n承载梦想又充满遗憾的夏天快要结束。\n\n我们一生里会经历无数个盛夏，\n\n关于青春，与你羁绊的夏天，\n\n不会再来。\n\n陈卓璇 全新单曲《回到夏天》\n\n“找回”当年那个“无所不能”的自己，\n\n“回到”有所爱之人在身旁的每一天。\n\n《回到夏天》改编自同名热门单曲，由听见时代制作发行，原曲创作人田默忱坐镇操刀，旋律延续悦耳基因，编曲加入海浪等元素增添夏日颗粒感，陈卓璇与音乐好友王赫野的默契合作扩容了共鸣画面，让歌曲能匹配每一份在夏日发生的往事，驻守这个季节遗留下来的心事。`,
    tracks: [
      { id: "t20_1", title: "回到夏天", duration: "03:40" },
    ]
  }
];
