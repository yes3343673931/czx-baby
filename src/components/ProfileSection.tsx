import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft } from "lucide-react";
import { IridescentBg } from "./IridescentBg";
import eeImage from "../assets/images/EE.jpg";

interface ProfileSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileSection({ isOpen, onClose }: ProfileSectionProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[200] font-sans bg-white overflow-hidden text-ocean-900"
        >
          <div className="absolute inset-0 pointer-events-none">
            <IridescentBg />
          </div>

          {/* Header */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-white/40 backdrop-blur-md z-[210] flex items-center px-8 md:px-16 border-b border-ocean-900/10">
            <button
              onClick={onClose}
              className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-ocean-900 rounded-full transition-all shadow-sm backdrop-blur-sm group mr-6"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <div className="text-xl font-light tracking-widest text-ocean-900 uppercase">
              Resume
            </div>
          </div>

          {/* Scrolling Content */}
          <div className="absolute inset-0 pt-24 overflow-y-auto overflow-x-hidden">
            <div className="relative z-10 max-w-5xl mx-auto pt-8 pb-24 px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-20">
              {/* Left Column */}
              <div className="w-full md:w-1/3 flex flex-col pt-8 md:sticky md:top-24 md:h-[calc(100vh-8rem)]">
                {/* Name */}
                <div className="text-6xl md:text-[5.5rem] leading-[1.1] font-serif tracking-widest text-ocean-900 mb-8 font-medium">
                  陈 ;)
                  <br />
                  卓璇
                </div>

                {/* Basic Info */}
                <div className="text-[12px] md:text-[13px] leading-relaxed text-ocean-900/70 mb-16 space-y-1 font-light tracking-wide">
                  <p>DOB / 1997.08.13 · 狮子座 / 牛</p>
                  <p>Birth / 中国贵州省贵阳市</p>
                  <p>Metrics / 164cm · 37.1kg</p>
                  <p>Edu / 上海海事大学外国语学院</p>
                  <p>Fandom / 璇风 (五光十色的白)</p>
                </div>

                {/* Role Title */}
                <div className="text-4xl md:text-[2.75rem] leading-[1.15] font-serif text-ocean-900 mb-8 font-medium">
                  Singer /<br />
                  Actor '
                </div>

                {/* Portrait */}
                <div className="mt-auto w-full max-w-[240px] aspect-[3/4] overflow-hidden shadow-xl rounded-sm group">
                  <img
                    src={eeImage}
                    alt="Chen Zhuoxuan"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full md:w-2/3 flex flex-col pt-8 md:pt-12">
                {/* Box 1: Profile */}
                <div className="border-t border-ocean-900/30 pt-6 pb-12 flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="w-full md:w-32 shrink-0">
                    <h3 className="text-xl font-serif text-ocean-900 tracking-wide">
                      Profile
                    </h3>
                  </div>
                  <div className="flex-1 text-[13px] md:text-[14px] text-ocean-900/80 leading-[1.8] font-light text-justify">
                    陈卓璇是中国内地新生代实力派女歌手、演员。以清澈空灵的“人鱼音”和极具氛围感的舞台表现受到关注。音色兼具透明度与情绪张力，擅长抒情、OST及情绪系歌曲。相比传统偶像，她更偏向“实力Vocal”路线，在音乐表达、情绪处理和舞台氛围塑造方面拥有极具辨识度的鲜明个人风格，致力于用歌声传递故事与共鸣。
                  </div>
                </div>

                {/* Box 2: Early Life & Education */}
                <div className="border-t border-ocean-900/30 pt-6 pb-12 flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="w-full md:w-32 shrink-0">
                    <h3 className="text-xl font-serif text-ocean-900 tracking-wide">
                      Early Life
                    </h3>
                  </div>
                  <div className="flex-1 text-[13px] md:text-[14px] text-ocean-900/80 leading-[1.8] font-light space-y-6">
                    <div>
                      <div className="mb-2">
                        <span className="font-semibold text-ocean-900 mr-2">
                          1997年8月13日
                        </span>
                        出生于贵州省贵阳市。
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-ocean-900 mb-1">
                        高中时期 / 贵阳一中
                      </div>
                      <div className="text-ocean-900/80">
                        在校期间获得第12届“蜀彩季节”校园歌手大赛“十佳歌手”称号。
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-start md:items-end mb-1 flex-col md:flex-row gap-1">
                        <span className="font-medium text-ocean-900">
                          上海海事大学外国语学院
                        </span>
                        <span className="text-ocean-900/60 font-mono text-[11px] md:text-xs">
                          2015
                        </span>
                      </div>
                      <div className="text-ocean-900/80">
                        考入英语专业，担任班长，并在开学典礼上作为新生代表发言。
                      </div>
                    </div>
                  </div>
                </div>

                {/* Box 3: Acting & Journey */}
                <div className="border-t border-ocean-900/30 pt-6 pb-12 flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="w-full md:w-32 shrink-0">
                    <h3 className="text-xl font-serif text-ocean-900 tracking-wide">
                      Acting
                    </h3>
                  </div>
                  <div className="flex-1 text-[13px] md:text-[14px] text-ocean-900/80 leading-[1.8] font-light space-y-8">
                    <div>
                      <div className="flex justify-between items-start md:items-end mb-1 flex-col md:flex-row gap-1">
                        <span className="font-medium text-ocean-900 text-[15px] tracking-wide">
                          《云客江湖》
                        </span>
                        <span className="text-ocean-900/80 font-mono text-[11px] md:text-xs">
                          2017 拍摄 / 2019.08 首播
                        </span>
                      </div>
                      <div className="text-ocean-900/80 font-medium text-xs mb-2">
                        惊悚悬疑网络剧
                      </div>
                      <div className="space-y-1">
                        <p>
                          <strong className="font-medium text-ocean-900">
                            角色：
                          </strong>
                          饰演“幽幽”
                        </p>
                        <p>
                          2017年超级女团解散后同年拍摄，是其首部影视剧作品。
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-start md:items-end mb-1 flex-col md:flex-row gap-1">
                        <span className="font-medium text-ocean-900 text-[15px] tracking-wide">
                          《陈情令》
                        </span>
                        <span className="text-ocean-900/80 font-mono text-[11px] md:text-xs">
                          2019.06.27 首播
                        </span>
                      </div>
                      <div className="text-ocean-900/80 font-medium text-xs mb-2">
                        古装仙侠剧
                      </div>
                      <div className="space-y-1">
                        <p>
                          <strong className="font-medium text-ocean-900">
                            角色：
                          </strong>
                          饰演白瞳少女“阿箐”
                        </p>
                        <p>
                          早期重要作品。与肖战、王一博等共同出演，并在剧中与孙伯纶共同演唱义城组人物曲《孤城》，助力其知名度大幅提升。
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-start md:items-end mb-1 flex-col md:flex-row gap-1">
                        <span className="font-medium text-ocean-900 text-[15px] tracking-wide">
                          《海上梦想家》
                        </span>
                        <span className="text-ocean-900/80 font-mono text-[11px] md:text-xs">
                          2024.12.06 播出
                        </span>
                      </div>
                      <div className="text-ocean-900/80 font-medium text-xs mb-2">
                        都市爱情剧
                      </div>
                      <div className="space-y-1">
                        <p>
                          <strong className="font-medium text-ocean-900">
                            角色：
                          </strong>
                          饰演乔冉冉
                        </p>
                        <p>2024年1月开机，讲述海岛创业与爱情故事。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Box 4: Music & Albums */}
                <div className="border-t border-ocean-900/30 pt-6 pb-12 flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="w-full md:w-32 shrink-0">
                    <h3 className="text-xl font-serif text-ocean-900 tracking-wide">
                      Music
                    </h3>
                  </div>
                  <div className="flex-1 text-[13px] md:text-[14px] text-ocean-900/80 leading-[1.8] font-light space-y-8">
                    <div>
                      <div className="flex justify-between items-start md:items-end mb-1 flex-col md:flex-row gap-1">
                        <span className="font-medium text-ocean-900 text-[15px] tracking-wide">
                          《不降落飞行指南》
                        </span>
                        <span className="text-ocean-900/80 font-mono text-[11px] md:text-xs">
                          2023.01.11
                        </span>
                      </div>
                      <p className="text-ocean-900/80 font-medium mb-1">
                        首张迷你数字专辑
                      </p>
                      <p className="space-y-1 text-sm">
                        郑楠担任制作人，包含《飞行天分》《无尽之羽》等5首歌曲，展现音乐创作才华。
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between items-start md:items-end mb-1 flex-col md:flex-row gap-1">
                        <span className="font-medium text-ocean-900 text-[15px] tracking-wide">
                          《转身走向你》
                        </span>
                        <span className="text-ocean-900/80 font-mono text-[11px] md:text-xs">
                          2024.01.11
                        </span>
                      </div>
                      <p className="text-ocean-900/80 font-medium mb-1">
                        数字EP专辑
                      </p>
                      <p className="space-y-1 text-sm">
                        收录《转身走向你》《想哭就笑》《请你》等3首歌曲。同名主打歌融合轻摇滚与古典元素，部分歌曲独立创作。
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between items-start md:items-end mb-1 flex-col md:flex-row gap-1">
                        <span className="font-medium text-ocean-900 text-[15px] tracking-wide">
                          《深海之息 (Mareasía)》
                        </span>
                        <span className="text-ocean-900/80 font-mono text-[11px] md:text-xs">
                          2025.07.05
                        </span>
                      </div>
                      <p className="text-ocean-900/80 font-medium mb-1">
                        原创音乐专辑
                      </p>
                      <p className="space-y-1 text-sm">
                        8首歌曲包揽词曲制作。以深海为概念，展现情感深度与音乐实验性。
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between items-start md:items-end mb-1 flex-col md:flex-row gap-1">
                        <span className="font-medium text-ocean-900 text-[15px] tracking-wide">
                          《昨夜风今宵月》
                        </span>
                        <span className="text-ocean-900/80 font-mono text-[11px] md:text-xs">
                          2025.08.21
                        </span>
                      </div>
                      <p className="text-ocean-900/80 font-medium mb-1">
                        同名专辑
                      </p>
                      <p className="space-y-1 text-sm">
                        华纳音乐与星汉马文化联合出品。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Box 5: Variety */}
                <div className="border-t border-ocean-900/30 pt-6 pb-12 flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="w-full md:w-32 shrink-0">
                    <h3 className="text-xl font-serif text-ocean-900 tracking-wide">
                      Variety
                    </h3>
                  </div>
                  <div className="flex-1 text-[13px] md:text-[14px] text-ocean-900/80 leading-[1.8] font-light">
                    <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-y-4 gap-x-2">
                      <div className="text-ocean-900 font-mono pt-1">2016</div>
                      <div>
                        <strong className="block font-medium text-ocean-900">
                          《超级女声》
                        </strong>
                        获得西安赛区冠军，加入女子组合“超级女团”，最终获全国总决赛第15名。
                      </div>

                      <div className="text-ocean-900 font-mono pt-1">2018</div>
                      <div>
                        <strong className="font-medium text-ocean-900">
                          《快乐大本营》
                        </strong>{" "}
                        娱乐综艺
                      </div>

                      <div className="text-ocean-900 font-mono pt-1">2020</div>
                      <div>
                        <strong className="block font-medium text-ocean-900">
                          《创造营2020》
                        </strong>
                        以选手身份参与，最终以硬糖少女303成员出道。
                        <br />
                        <strong className="block font-medium text-ocean-900 mt-2">
                          《硬糖少女BON-US》
                        </strong>
                        记录成团后合宿生活。
                      </div>

                      <div className="text-ocean-900 font-mono pt-1">2021</div>
                      <div>
                        <strong className="block font-medium text-ocean-900">
                          《天天向上》
                        </strong>
                        分享个人经历与音乐故事。
                      </div>

                      <div className="text-ocean-900 font-mono pt-1">2022</div>
                      <div>
                        <strong className="block font-medium text-ocean-900">
                          《创造营2022》
                        </strong>
                        作为嘉宾或导师参与。
                      </div>

                      <div className="text-ocean-900 font-mono pt-1">2023</div>
                      <div>
                        <strong className="block font-medium text-ocean-900">
                          《朋友请吃饭第一季》
                        </strong>{" "}
                        城市美食探索。
                        <br />
                        <strong className="block font-medium text-ocean-900 mt-2">
                          《甜美女生大赛》
                        </strong>{" "}
                        音乐竞技综艺，担任导师团队成员。
                      </div>

                      <div className="text-ocean-900 font-mono pt-1">2024</div>
                      <div>
                        <strong className="block font-medium text-ocean-900">
                          《跨越时空的旋律-唱着青春的歌》
                        </strong>{" "}
                        参与献礼祖国75周年演出的音乐晚会。
                      </div>

                      <div className="text-ocean-900 font-mono pt-1">2025</div>
                      <div>
                        <strong className="block font-medium text-ocean-900">
                          《音你而来》第二季
                        </strong>{" "}
                        常驻嘉宾，在马来西亚拍摄的旅行音乐唱演真人秀。
                        <br />
                        <strong className="block font-medium text-ocean-900 mt-2">
                          《打歌 2025》
                        </strong>{" "}
                        作为参演嘉宾出席。
                      </div>
                    </div>
                  </div>
                </div>

                {/* Box 6: Features */}
                <div className="border-t border-ocean-900/30 pt-6 pb-24 flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="w-full md:w-32 shrink-0">
                    <h3 className="text-xl font-serif text-ocean-900 tracking-wide">
                      Features
                    </h3>
                  </div>
                  <div className="flex-1 text-[13px] flex flex-col sm:flex-row gap-8 md:gap-12 text-ocean-900/80 leading-[2.2] font-light">
                    <div className="flex-1">
                      <div className="font-medium text-ocean-900 text-sm border-b border-ocean-900/30 pb-1 mb-2 inline-block">
                        演唱与音乐特色:
                      </div>
                      <ul className="space-y-0.5 list-disc list-inside marker:text-ocean-900/80">
                        <li>空灵人鱼音 / 辨识度极高</li>
                        <li>真假音自如转换 / 极稳Live发挥</li>
                        <li>擅长各类抒情及OST氛围感塑造</li>
                        <li>钢琴弹唱技能</li>
                      </ul>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-ocean-900 text-sm border-b border-ocean-900/30 pb-1 mb-2 inline-block">
                        舞台与个人气质:
                      </div>
                      <ul className="space-y-0.5 list-disc list-inside marker:text-ocean-900/80">
                        <li>内敛克制但张力十足的情绪传达</li>
                        <li>“事业批”特质与强劲爆发力</li>
                        <li>英语发音纯正驾驭外语歌曲</li>
                        <li>冷感与脆弱感并存的镜头气质</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
