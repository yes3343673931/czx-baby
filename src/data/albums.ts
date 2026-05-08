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
    description: "Chen Zhuoxuan's release.",
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
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t11_1", title: "That's Right", duration: "03:15" },
    ]
  },
  {
    id: "a12",
    title: "听说你",
    releaseYear: "2023",
    coverImage: album12,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t12_1", title: "听说你", duration: "04:02" },
    ]
  },
  {
    id: "a13",
    title: "慢慢",
    releaseYear: "2023",
    coverImage: album13,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t13_1", title: "慢慢", duration: "03:45" },
    ]
  },
  {
    id: "a14",
    title: "我怀念的那个夏天",
    releaseYear: "2023",
    coverImage: album14,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t14_1", title: "我怀念的那个夏天", duration: "04:10" },
    ]
  },
  {
    id: "a15",
    title: "感应",
    releaseYear: "2023",
    coverImage: album15,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t15_1", title: "感应", duration: "03:33" },
    ]
  },
  {
    id: "a16",
    title: "流沙",
    releaseYear: "2023",
    coverImage: album16,
    description: "Chen Zhuoxuan's release.",
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
  }
];
