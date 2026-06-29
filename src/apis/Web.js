import web2kea from "../assets/webs/web2kea.webp";
import webcosting from "../assets/webs/webcosting.webp";
import webtacobell from "../assets/webs/webtacobell.webp";
import webnation from "../assets/webs/webnation.webp";
import webtodo from "../assets/webs/webtodo.webp";

import responsive2kea from "../assets/webs/2kearesponsive.webp";
import responsivecosting from "../assets/webs/costingresponsive.webp";
import responsivetacobell from "../assets/webs/tacobellresponsive.webp";
import responsivetodo from "../assets/webs/todoresponsive.webp";

export const AllWeb = [
  {
    id: 1,
    name: "2Kea-Studio",
    kind: "Funiture Shop",
    team: "Team Project",
    info: `프론트엔드 부트캠프에서 진행한 파이널 프로젝트가 있습니다. 프로젝트는 미니 e커머스를 제작하는 내용이었고 팀장으로써 프로젝트를 진행하였습니다. 주로 레퍼러스탐색, 디자인, 퍼블리싱, 배포, 의견 조율, 기획서 작성 등 이었습니다. 디자인은 피그마에서 진행하였고 메인페이지를 제외한 모든 페이지는 제가 디자인 작업을 진행하였습니다. 또 팀장으로써 팀원분들의 소통에 집중하고 작업이 원활이 진행될 수 있게 역할을 분담하여 진행되도록 하였습니다. 주어진 책임이 많아 힘들고 버겁기도 하였지만, 팀원분들에게 들었던 “가장 고생하고 감사했습니다.”라는 말이 뿌듯하고 더욱 열심히 할 수 있게된 계기가 되었습니다.`,
    img: web2kea,
    responsiveimg: responsive2kea,
    link: "https://2-kea-studio.vercel.app/",
  },
  {
    id: 2,
    name: "costing",
    kind: "Glasses Shop",
    team: "Solo Project",
    info: "평소 패션에 관심이 많았으며, 세련되면서도 독보적인 디자인을 만들어내는 젠틀몬스터를 좋아했습니다. 특히 트렌드를이끄는 창의적인 디자인에 매력을 느꼈고, 나도 그러한 디자인을 경험 해보고 싶었습니다. 이러한 계기로 COSTING 웹 프로젝트를 제작하며 배너, 상품 이미지, 모델 이미지 등은 미드저니와 같은 생성형 AI 도구를 적극적으로 활용하였습니다. 그러한 과정을 통해 AI 기반 이미지 생성 및 활용 능력을 키울 수 있었습니다.",
    img: webcosting,
    responsiveimg: responsivecosting,
    link: "https://costing-dusky.vercel.app/",
  },
  {
    id: 3,
    name: "TacoBell",
    kind: "Taco Shop",
    team: "Solo Project",
    info: "20,30세대에서 SNS와 여행 문화의 발달로 멕시코 음식이 전 세계적으로 알려졌고, 타코는 가장 대중적인 멕시코 음식으로 자리 잡았습니다. 관심도가 높아지고 있는 시점에서 타코 브랜드 중 가장 대중적인 타코벨 브랜드의 홈페이지를 리뉴얼 하고자 했습니다. 기존에 타코벨 홈페이지는 디자인을 찾아볼 수 없었고, 유지보수가 되고있지 않는 모습이었습니다. 기존의 홈페이지의 느낌을 살려야 한다는 생각에 더 나은 디자인이 나오는게 쉽지 않았습니다. 그래서 기존의 틀을 깨고 밝은 인상의 홈페이지로 리뉴얼 하게 되었습니다.",
    img: webtacobell,
    responsiveimg: responsivetacobell,
    link: "https://tacobell-lime.vercel.app/",
  },
  {
    id: 4,
    name: "국가유산청",
    kind: "Funiture Shop",
    team: "Solo Project",
    info: "dd",
    img: webnation,
    responsiveimg: responsivetacobell,
    link: "",
  },
  {
    id: 5,
    name: "ToDo",
    kind: "ToDo List",
    team: "Team Project",
    info: "프론트엔드 부트캠프에서 진행한 두번째 프로젝트 입니다. HTML, CSS, JAVASCRIPT를 통해 TodoList를 제작하는 프로젝트 였습니다. 디자인, 퍼블리싱을 담당해 진행하였습니다. 우측상단에 현재 시간을 보여줌으로써 사용자의 시선이 머무를 수 있게 하였습니다.",
    img: webtodo,
    responsiveimg: responsivetodo,
    link: "https://duturi.github.io/flowdash/",
  },
];
