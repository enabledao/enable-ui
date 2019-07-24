import React from "react";
import { Margin, Padding } from "../../../../../../styles/utils";
import AvatarFadilla from "../../../../../../images/avatar/fadilla.jpg";
import AvatarAria from "../../../../../../images/avatar/aria.jpg";
import AvatarPutri from "../../../../../../images/avatar/putri.jpg";
import AvatarElvina from "../../../../../../images/avatar/elvina.jpg";
import AvatarBrahma from "../../../../../../images/avatar/brahma.jpg";
import AvatarGaurav from "../../../../../../images/avatar/gaurav.jpg";
import AvatarChristopher from "../../../../../../images/avatar/christopher.jpg";
import AvatarAndi from "../../../../../../images/avatar/andi.jpg";
import { TestimonialAvatar, TestimonialContent } from "./styled";

export interface TestimonialLinkedinState {
  expanded: number;
}

const listTestimonial = [
  {
    name: "Fadilla Tourizqua Zain",
    position: "Vice President of Marketing at Amartha",
    image: AvatarFadilla,
    desc:
      "Working with Widya was a privilege. She was an instrumental part of Amartha’s success in talent assessment, acquisition and development, and all aspects of human resources for early stage company. As one of the original employees at Amartha, she touches nearly all aspects of Amartha’s people and culture . Widya built high caliber department from the ground up, including teams to support recruiting (both field and HQ), performance management, and workplace services. She brought an A-team characters to the table whom other employees look up to. Widya is a witty, practical and influential HR leader who deals effectively with change and ambiguous situations. She is a quick study and has great self insight. She applies learnings from her prior experiences, and is very client centered -- definitely will be an asset to any company. "
  },
  {
    name: "Aria Widyanto",
    position:
      "Board Member & Chief Risk and Sustainability Officer - Driving Financial Inclusion through Technology",
    image: AvatarAria,
    desc:
      "It's been a great time working with Widya Imanesti. In her capacity as a lead in people & culture division, she demonstrated strong leadership and enthusiasm in building the company's core team and helped building values for the company. While working for a newly established startup has higher risk of uncertainties, she demonstrated strong ability to adapt to the dynamic environment and helped us, the founding team, to form a great workplace where people are not only excel in their fields but also passionate about what they wish to accomplish with our company : a nation without poverty. "
  },
  {
    name: "Putri Nandi Pinta Agusria",
    position: "Marketing Strategy at XL Axiata",
    image: AvatarPutri,
    desc:
      "I work with Widya when she was my HR manager at berniaga, Widya has true compassion for his colleagues and co-workers. During the acquisition at Berniaga, Widya exercised every measure to ensure that employee's were successful in the management of their career transition also sastified with the result that company give to staff. Widya has an approachable and supportive attitude characteristics of great value in human resources and would be an asset to any organization. "
  },
  {
    name: "Elvina Komala",
    position: "Marketing Manager at Mudahmy",
    image: AvatarElvina,
    desc:
      "Widya is a young HR manager who cares deeply for people and takes seriously her responsibility to advocate all members of the team. She creates a market leading people strategy, a strategic HR leader, and expert tactician. Her skills to build an effective communication and partnership were of tremendous value. She is a pleasure to work with and an asset to any team."
  },
  {
    name: "Brahma Adhiyasa",
    position: "Finance and Accounting Manager at Snapcart",
    image: AvatarBrahma,
    desc:
      "Widya has a good attitude, can motivate the team and has lot of creative ideas to make work atmosphere become fun and fresh. She also has excellent knowledge in Labor Laws which I believe can accelerate her career development."
  },
  {
    name: "Gaurav Bhasin",
    position: "CEO Mudah.my",
    image: AvatarGaurav,
    desc:
      "I have had the pleasure to know Widya since 2014. She worked with me as Human Capital Development Manager at 701Search (Berniaga.com) in Jakarta, Indonesia, where i was Chief Operating Officer in South East Asia region. My first encounter with Widya was when i initially interviewed her for Human Capital Development Manager role. One of the task that was assigned to her was building a company culture. She had a big responsibility and impac to the company. Throughout her time in this position, Widya consistenly showed great performance. I would like to highlight a major event Widya had to handle. During the company's acquisition in 2015, we had to lay off most of the employeee were successdul in the management of their company. She exercised every measure to ensure the employees were successful in the management of their career transition and satiesfied with the result and reward the company gave to staff. She kept two-way communication during the process and listened to what employess got to say about the acquisition. She even ent through the employee database to gain more information about their status, family background and circumstances to mitigate the negative impact of teh acquisition on  their life. She immediately informed the management if incident might come up ot there was a risk arose during the process. She was the bridge between employees and uper management. She took every factor that might affect our personnel into consideration and went extra miles to make sure the whole acquisition process goes smoothly. In my observation as her direct superior, the most engaging character of Widya is her remarkable interpersonal skill. As a Human Capital Development Manager, she was required to communicate and build good relationship with all staff. Widya was the first person who held the role sice the company was established back in 2009. While Widya was relatively a new member of our close, tight-knitted organization, she quickly established herself as a go-to person whenever our staff find any difficulities or issues at work, whether it's with their superior or their personal life and she immediatelly resolved the problem. The combination of her technical skill and interpersonal skill make her a well-rounded HR person. She was always able to create a collaborative work atmosphere where employess were able to achieve high perfermance."
  },
  {
    name: "Christopher Deane",
    position:
      "Corporate Director Global Technology at Freudenberg Household Products",
    image: AvatarChristopher,
    desc:
      "I first worked with Widya in 2011, when Freudenberg Household Product (German Privately held 9B USD company) acquired the company (TIA) that Widya was working for. She was head of HR for Indonesia and I worked closely with her in the transition phase of the project where i was the General Manager of Asia, responsible for operations and acquisition proces. Many changes were required for the management team and hourly workforce as they transitioned from a small enterpreneur company to the working culture of a global large company. I found Widya flexible, inquisitive and willing to do what it took to make changes successful. She was such a strong asset that we promoted her to SE Asia Regional HR Manager - giving her direct HR responsibility for the Malaysia operations as well, She is a well aware of cultural differences that can occur between countries and did a ery good job of making senior management aware of differences and coming up with solutions to insure success."
  },
  {
    name: "Andi Taufan Garuda Putra",
    position: "CEO Amartha",
    image: AvatarAndi,
    desc:
      "i first worked with Widya in 2016 at Amartha Mikro Fintek (a P2P lending pioneer for unbanked society) in Jakarta, Indonesia. She was Head of People Management and one of the founding members. I worked closely with her during transition phase from microlending to P2P lending business model wheere I was the Chief Executive Officer, her immediate supervisor and direct report. As one of the founding members in management team, she lead the HR team to support our business expansion throughout indonesia as well as establish internal system and procedure within the company. She not onlu had to make sure that the HR team were able to catch up with out company's growth but also initiate the organizational structure and culture with very limited resource in her team and minuimum supervision. I was impressed by her ability to manage the whole process from her end. Within the first 3 months into her roles, she was able to grow our team and fulfill the aggresive projected headcount. She immediately revised the salary structure in accordance to labot law, set up HRIS and database, created Standard Operating Procedure and was willing to do everything within her expertise to enable the company to scale up: from an early-staged startup to a well-known fintect company in Indonesia. Her distinctive approacheble personality and appreciable prople skill were such significant quality that make her an outstanding HR. Combined with her strategic planning skill, those were the characteristics that convinced me to hire her away from her previous employer in the first place. She brought to all of her activities energy, enthusiasm and comitment. These qualities are expected in any successful HR leader of an entrepreneurial organization, and in this regard, Widya fits in well. Widya was an indispensable asset to Amartha that it was such big regret when she had to move overseas."
  }
];

class TestimonialLinkedin extends React.Component<
  {},
  TestimonialLinkedinState
> {
  constructor(props: {}) {
    super(props);
    this.state = { expanded: 0 };
  }

  render() {
    return (
      <React.Fragment>
        {listTestimonial.map((list, index) => (
          <Margin key={index} top={24}>
            <React.Fragment>
              <TestimonialContent>
                <TestimonialAvatar>
                  <img src={list.image} alt="Avatar - User" />
                </TestimonialAvatar>
                <Padding left={56}>
                  <h6>{list.name}</h6>
                  <small>
                    <i>{list.position}</i>
                  </small>
                  <Margin top={16}>
                    <p>{list.desc}</p>
                  </Margin>
                </Padding>
              </TestimonialContent>
            </React.Fragment>
          </Margin>
        ))}
      </React.Fragment>
    );
  }
}

export default TestimonialLinkedin;
