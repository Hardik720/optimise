import trendingup from "../assets/img/trending-up.svg";
import placement from "../assets/img/placement-record.svg";
import "../assets/css/successstories.css";
import Revolutionary from "./SuccessStories/Revolutionary";
import Companies from "./Companycarousel/Companies";
import "../assets/css/learnersuccess.css";
import Ssyoutube from "./SuccessStories/Ssyoutube";
import usercheck from "../assets/img/user-check.svg";

import placementrecord from "../assets/img/placement-record.svg";
import industrypartners from "../assets/img/industry-partners.svg";
import Textls from "./learnersuccess/Textls";
import Imagels from "./learnersuccess/Imagels";
import Lssuccessstories from "./learnersuccess/Lssucessstories";
import Solutionframework from "./Viredbusiness/Solutionframework";
import Fastrackleft from "./SuccessStories/Fastrackleft";
import Fastrackright from "./SuccessStories/Fastrackright";
import Sstestimonialcards from "./SuccessStories/Sstestimonialcards";
const ssyoutubedata = [
  {
    ssyoutubetext1: "Minu Raphael",
    ssyoutubetext2:
      "Integrated Program in Data Science, Machine Learning, and Artificial Intelligence",
    ssyoutubetex3:
      "I liked the Hero Vired curriculum and the fact that the program is in collaboration with MIT Open Learning. The faculty support is amazing.",
    ssyoutubeurl:
      '<iframe width="672" height="550" src="https://www.youtube.com/embed/tt0MnHeDchg" title="From teaching to pursuing a career in AI & Data | Minu Raphael | Hero Vired" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    ssyoutubetext1: "Raj Mamarde",
    ssyoutubetext2:
      "Integrated Program in Data Science, Machine Learning, and Artificial Intelligence",
    ssyoutubetex3:
      "The faculty has experience in the field, which has helped me understand the industry perspective and how to approach different problem statements.",
    ssyoutubeurl:
      '<iframe width="672" height="550" src="https://www.youtube.com/embed/tt0MnHeDchg" title="From teaching to pursuing a career in AI & Data | Minu Raphael | Hero Vired" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    ssyoutubetext1: "Mahima Maheshwai",
    ssyoutubetext2: "Integrated Program in Finance & Fintech",
    ssyoutubetex3:
      "The focus is not just on the academic and theory part, but also on how to prepare for and crack the interviews, helping meet individual career goals.",
    ssyoutubeurl:
      '<iframe width="672" height="550" src="https://www.youtube.com/embed/tt0MnHeDchg" title="From teaching to pursuing a career in AI & Data | Minu Raphael | Hero Vired" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
];
const learnersucessdata = [
  {
    lsimg: trendingup,
    lsvalue: "9.9 LPA",
    lstext: "Avg. Salary",
  },
  {
    lsimg: usercheck,
    lsvalue: "1.5 Cr",
    lstext: "Highest Package Offered",
  },
  {
    lsimg: placementrecord,
    lsvalue: "100%",
    lstext: "Placement Record",
  },
  {
    lsimg: industrypartners,
    lsvalue: "55+",
    lstext: "Industry Partners",
  },
];
const solutionframeworkdata = [
  {
    solimg:
      "https://staging.herovired.com/wp-content/uploads/2022/11/Icon1_Career-Coaching1.png",
    soltext1: "1:1 Career Coaching",
    soltext2:
      "Our career coaches will identify the best-suited career opportunities for you. They will also create an individual development path, evaluate your resume and create a career path.",
  },
  {
    solimg:
      "https://staging.herovired.com/wp-content/uploads/2022/11/Icon2_Mock-Interview.png",
    soltext1: "Mock Interviews",
    soltext2:
      "Industry experts will conduct mock interviews (planned and just in time) and help you understand the interview process of different organizations.",
  },
  {
    solimg:
      "https://staging.herovired.com/wp-content/uploads/2022/11/Icon3_Career-workshops.png",
    soltext1: "Career Workshops",
    soltext2:
      "Industry experts from different domains will conduct personalized and interactive sessions to give you the career skills that matter.",
  },
  {
    solimg:
      "https://staging.herovired.com/wp-content/uploads/2022/11/Icon4_Networking-sessions.png",
    soltext1: "Networking Sessions",
    soltext2:
      "Hero Vired’s dynamic and engaging community provides many opportunities to pursue personal, social and professional connections.",
  },
  {
    solimg: "https://staging.herovired.com/wp-content/uploads/2022/12/SF4.svg",
    soltext1: "Third-Party Tests",
    soltext2:
      "Employability tests would be conducted periodically to analyze learners’ industry readiness.",
  },
  {
    solimg:
      "https://staging.herovired.com/wp-content/uploads/2022/11/Icon6_Hackathon.png",
    soltext1: "Hackathons",
    soltext2:
      "Hackathons will help you put your coding skills to work. Solve interesting business problems and real-world challenges.",
  },
];
const revdata = [
  {
    revimg: trendingup,
    revtext1: "69.3%",
    revtext2: "Avg. Hike",
  },
  {
    revimg: placement,
    revtext1: "1.5 Cr",
    revtext2: "Highest Salary",
  },
];
const sstestimonialdata = [
  {
    learnerimage:
      "https://staging.herovired.com/wp-content/uploads/2022/12/Mask-Group-2-1.webp",
    compimg:
      "https://staging.herovired.com/wp-content/uploads/2022/12/Lenden.png",
    learnerhike: "37%",
    learnername: "Kaustabh Tandel",
    learnertitle: "Back-end Developer",
    learnermsg:
      "I usually write my code along with the mentor and clear my doubts immediately. This helps me in learning a programming language in a matter of months with minimal effort.",
  },
  {
    learnerimage:
      "https://staging.herovired.com/wp-content/uploads/2022/12/Learner-1.png",
    compimg:
      "https://staging.herovired.com/wp-content/uploads/2022/07/Group-670@3x.webp",
    learnerhike: "36%",
    learnername: "Hritwij Shrivastava",
    learnertitle: "ML Developer",
    learnermsg:
      "From live projects to coaching sessions, Hero Vired helped me at every stage. I became extremely confident in ML after successfully completing the MIT assignments.",
  },
  {
    learnerimage:
      "https://staging.herovired.com/wp-content/uploads/2022/09/raj-shekhar.webp",
    compimg:
      "https://staging.herovired.com/wp-content/uploads/2022/07/Group-670@3x.webp",
    learnerhike: "50%",
    learnername: "Raj Sekhar",
    learnertitle: "Investigation Specialist",
    learnermsg:
      "I really appreciate the way how the team is proactive with their follow-ups. While there are many EdTech platforms in India, they all are missing the personal touch that the team at Hero Vired team provides.",
  },
  {
    learnerimage:
      "https://staging.herovired.com/wp-content/uploads/2022/07/Shashwat-1.webp",
    compimg:
      "https://staging.herovired.com/wp-content/uploads/2022/07/Group-674@3x.webp",
    learnerhike: "50%",
    learnername: "Shashwat Pal",
    learnertitle: "Risk Analyst",
    learnermsg:
      "Hero Vired has played a pivotal part in the development of my career trajectory. I come from an engineering background so making a move to the Finance field was not the easiest. The faculty made sure that this transition was smooth.",
  },
  {
    learnerimage:
      "https://staging.herovired.com/wp-content/uploads/2022/07/Shashwat-1.webp",
    compimg:
      "https://staging.herovired.com/wp-content/uploads/2022/07/Group-674@3x.webp",
    learnerhike: "50%",
    learnername: "Shashwat Pal",
    learnertitle: "Risk Analyst",
    learnermsg:
      "Hero Vired has played a pivotal part in the development of my career trajectory. I come from an engineering background so making a move to the Finance field was not the easiest. The faculty made sure that this transition was smooth.",
  },
  {
    learnerimage:
      "https://staging.herovired.com/wp-content/uploads/2022/07/Shashwat-1.webp",
    compimg:
      "https://staging.herovired.com/wp-content/uploads/2022/07/Group-674@3x.webp",
    learnerhike: "50%",
    learnername: "Shashwat Pal",
    learnertitle: "Risk Analyst",
    learnermsg:
      "Hero Vired has played a pivotal part in the development of my career trajectory. I come from an engineering background so making a move to the Finance field was not the easiest. The faculty made sure that this transition was smooth.",
  },
  {
    learnerimage:
      "https://staging.herovired.com/wp-content/uploads/2022/07/Shashwat-1.webp",
    compimg:
      "https://staging.herovired.com/wp-content/uploads/2022/07/Group-674@3x.webp",
    learnerhike: "50%",
    learnername: "Shashwat Pal",
    learnertitle: "Risk Analyst",
    learnermsg:
      "Hero Vired has played a pivotal part in the development of my career trajectory. I come from an engineering background so making a move to the Finance field was not the easiest. The faculty made sure that this transition was smooth.",
  },
  {
    learnerimage:
      "https://staging.herovired.com/wp-content/uploads/2022/07/Shashwat-1.webp",
    compimg:
      "https://staging.herovired.com/wp-content/uploads/2022/07/Group-674@3x.webp",
    learnerhike: "50%",
    learnername: "Shashwat Pal",
    learnertitle: "Risk Analyst",
    learnermsg:
      "Hero Vired has played a pivotal part in the development of my career trajectory. I come from an engineering background so making a move to the Finance field was not the easiest. The faculty made sure that this transition was smooth.",
  },
];
function Successstores() {
  return (
    <>
      <div class="ss-outermost-revolutionary">
        <div class="ss-revolutionary">
          <div class="ss-revolutionary-col1 red-blue-dot">
            <h1 class="ss-revolutionary-col1-row1">
              <span id="span-2655-947" class="ct-span">
                Learn. <br />
                Grow.
                <br />
                Suceeed.
                <br />
                Transform.
              </span>
            </h1>
          </div>

          <div id="red-dot" class="ct-div-block"></div>
          {/* right-side*/}
          <div className="ss-revolutionary-col2" id="blue-dot2">
            <div className="col2-box-size ">
              <div className=" swiper-scroll">
                <div className="box-cards">
                  <div className="col2-card1">
                    <div className="col2-card-head">
                      <div className="col2-card-head-left">
                        <img src="/static/media/hikeup.5efe8987a15dc47de0119001b7fc11b2.svg" />
                        <span className="col2-card-head-left-text">
                          37% Hike
                        </span>
                      </div>
                      <div className="col2-card-head-right">
                        <img src="https://herovired.com/wp-content/uploads/2022/12/Lenden.png" />
                      </div>
                    </div>
                    <div className="col2-cards-body">
                      <span>
                        I really like the hands-on style of training that Hero
                        Vired uses to teach.
                      </span>
                    </div>
                    <div className="col2-cards-footer">
                      <div className="col2-cards-footer-img">
                        <img src="https://herovired.com/wp-content/uploads/2022/12/Mask-Group-2-1.webp" />
                      </div>
                      <div className="col2-cards-footer-text">
                        <span className="footer-text1">Kaustabh Tandel</span>
                        <span className="footer-text2">Back-end Developer</span>
                      </div>
                    </div>
                  </div>

                  <div className="col2-card1">
                    <div className="col2-card-head">
                      <div className="col2-card-head-left">
                        <img src="/static/media/hikeup.5efe8987a15dc47de0119001b7fc11b2.svg" />
                        <span className="col2-card-head-left-text">
                          40% Hike
                        </span>
                      </div>
                      <div className="col2-card-head-right">
                        <img src="https://herovired.com/wp-content/uploads/2022/12/Infinite-Computer-Solutions-e1675157812188.png" />
                      </div>
                    </div>
                    <div className="col2-cards-body">
                      <span>
                        It was truly transformational for me to have enrolled
                        with Hero Vired.
                      </span>
                    </div>
                    <div className="col2-cards-footer">
                      <div className="col2-cards-footer-img">
                        <img src="https://herovired.com/wp-content/uploads/2022/12/Learner-1.webp" />
                      </div>
                      <div className="col2-cards-footer-text">
                        <span className="footer-text1">
                          Hritwij Shrivastava
                        </span>
                        <span className="footer-text2">ML Developer</span>
                      </div>
                    </div>
                  </div>

                  <div className="col2-card1">
                    <div className="col2-card-head">
                      <div className="col2-card-head-left">
                        <img src="/static/media/hikeup.5efe8987a15dc47de0119001b7fc11b2.svg" />
                        <span className="col2-card-head-left-text">
                          40% Hike
                        </span>
                      </div>
                      <div className="col2-card-head-right">
                        <img src="https://herovired.com/wp-content/uploads/2022/10/Debtwire.png" />
                      </div>
                    </div>
                    <div className="col2-cards-body">
                      <span>
                        What I got out of the program has beat my expectations
                        by leaps.
                      </span>
                    </div>
                    <div className="col2-cards-footer">
                      <div className="col2-cards-footer-img">
                        <img src="https://herovired.com/wp-content/uploads/2022/07/mrinal-1.webp" />
                      </div>
                      <div className="col2-cards-footer-text">
                        <span className="footer-text1">Mrinal Waghela</span>
                        <span className="footer-text2">
                          Credit Data Analyst
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Companies
        bgrndcolor="white"
        text1="LEARNER SUCCESS"
        text2="Success Stories at"
        text3="Our learners work at some of the leading organizations in the world"
      ></Companies>
      <div class="ss-outermost-testimonials">
        <div class="ss-testimonials">
          <p id="first-text-learner-success">TESTIMONIALS</p>
          <p id="second-text-learner-success">
            Hear straight from our learners
          </p>
          <p id="third-text-learner-success">
            Hear from our learners as they share their learning experiences and
            find out how they unlocked their dream careers with us
          </p>
        </div>
      </div>
      <div class="faculty-swiper">
        <div className="youtube-box-size">
          <div class="ss-youtube">
            {/* {
                    ssyoutubedata.map(i => <Ssyoutube 
                        ssyoutubetext1={i.ssyoutubetext1}
                        ssyoutubetext2={i.ssyoutubetext2}
                        ssyoutubetext3={i.ssyoutubetext3}
                        ssyoutubeurl={i.ssyoutubeurl}>
                    </Ssyoutube>)
                } */}
            <div class="ss-youtube-col1">
              <p class="ss-youtube-col1-text1">Minu Raphael</p>
              <p class="ss-youtube-col1-text2">
                Integrated Program in Data Science, Machine Learning, and
                Artificial Intelligence
              </p>
              <p class="ss-youtube-col1-text3">
                I liked the Hero Vired curriculum and the fact that the program
                is in collaboration with MIT Open Learning. The faculty support
                is amazing.
              </p>
            </div>
            <div class="ss-youtube-col2">
              <iframe
                class="ss-youtube-col2-video"
                height="550"
                src="https://www.youtube.com/embed/tt0MnHeDchg"
                title="From teaching to pursuing a career in AI & Data | Minu Raphael | Hero Vired"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="ss-youtube">
            {/* {
                  ssyoutubedata.map(i => <Ssyoutube 
                      ssyoutubetext1={i.ssyoutubetext1}
                      ssyoutubetext2={i.ssyoutubetext2}
                      ssyoutubetext3={i.ssyoutubetext3}
                      ssyoutubeurl={i.ssyoutubeurl}>
                  </Ssyoutube>)
              } */}
            <div class="ss-youtube-col1">
              <p class="ss-youtube-col1-text1">Minu Raphael</p>
              <p class="ss-youtube-col1-text2">
                Integrated Program in Data Science, Machine Learning, and
                Artificial Intelligence
              </p>
              <p class="ss-youtube-col1-text3">
                I liked the Hero Vired curriculum and the fact that the program
                is in collaboration with MIT Open Learning. The faculty support
                is amazing.
              </p>
            </div>
            <div class="ss-youtube-col2">
              <iframe
                class="ss-youtube-col2-video"
                height="550"
                src="https://www.youtube.com/embed/tt0MnHeDchg"
                title="From teaching to pursuing a career in AI & Data | Minu Raphael | Hero Vired"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div id="learner-success" style={{ backgroundColor: "#333333" }}>
        <div id="inner-learner-success" style={{ backgroundColor: "#333333" }}>
          <p id="first-text-learner-success" style={{ color: "white" }}>
            PLACEMENT STATS
          </p>
          <p id="second-text-learner-success" style={{ color: "white" }}>
            Our achievements at a glance
          </p>
          <p id="third-text-learner-success"></p>
          <div class="container" id="container-learner-success">
            <div class="row" id="container-row">
              {learnersucessdata.map((i) => (
                <Lssuccessstories
                  textcolor="white"
                  lsimg={i.lsimg}
                  lsvalue={i.lsvalue}
                  lstext={i.lstext}
                ></Lssuccessstories>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div class="ss-outermost-fastrack">
        <div class="ss-fastrack">
          <p id="first-text-learner-success">LEARNER'S JOURNEY</p>
          <p id="second-text-learner-success">Fastrack your career with us</p>
          <p id="third-text-learner-success">
            Hear straight from the people who have had the chance to experience
            our programs first-hand, in their own words.
          </p>
          <div class="ss-fastrack-start">
            <Fastrackleft
              fslefttext1="Personalized career services"
              fslefttext2="Each learner will work with an assigned career specialist from the learner success team to support their career development and build their brand."
              fslefturl="https://staging.herovired.com/wp-content/uploads/2022/11/Icon1_Career-Services-1.png"
            ></Fastrackleft>
            <Fastrackright
              fsrighttext1="Industry Engagement"
              fsrighttext2="Learners will have the opportunity to interact with domain experts from across industries through regular faculty lectures, industry sessions and networking opportunities."
              fsrighturl="https://staging.herovired.com/wp-content/uploads/2022/11/Icon8_Industry-engagement.png"
            ></Fastrackright>
            <Fastrackleft
              fslefttext1="GAP Analysis Test"
              fslefttext2="Employability tests would be conducted periodically to analyze learners’ industry readiness.
                    "
              fslefturl="https://staging.herovired.com/wp-content/uploads/2022/11/Icon9_GAP-analysis-test.png"
            ></Fastrackleft>
            <Fastrackright
              fsrighttext1="Capstone Project
                    "
              fsrighttext2="All learners will work on multiple domain-focused real-world projects that will be spread out for each program with expert mentoring and guidance sessions."
              fsrighturl="https://staging.herovired.com/wp-content/uploads/2022/11/Icon10_Capstone-project.png"
            ></Fastrackright>
            <Fastrackleft
              fslefttext1="Placement Assistance"
              fslefttext2="Learners will get access to multiple growth-oriented career opportunities through our placement assistance services."
              fslefturl="https://staging.herovired.com/wp-content/uploads/2022/11/Icon11_Placement-Assistance.png"
            ></Fastrackleft>
          </div>
        </div>
      </div>
      <div class="outermost-vb-industry-report">
        <div class="vb-industry-report">
          <p class="vb-industry-report-text1">READINESS ACTIVITY</p>
          <p class="vb-industry-report-text2">360° placement readiness</p>
          <p class="vb-industry-report-text3">
            We provide a range of opportunities and services to support your
            career development through our careers and employability service. We
            provide a range of opportunities and services to support your career
            development through our careers and employability service
          </p>
          <div
            class="vb-solution-framework-row4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,minmax(200px,1fr))",
              gridColumnGap: "20px",
              gridRowGap: "20px",
            }}
          >
            {solutionframeworkdata.map((i) => (
              <Solutionframework
                solimg={i.solimg}
                soltext1={i.soltext1}
                soltext2={i.soltext2}
              ></Solutionframework>
            ))}
          </div>
        </div>
      </div>
      <div class="ss-outermost-testimonial">
        <div class="ss-testimonial">
          <p id="first-text-learner-success">ALL TESTIMONIALS</p>
          <p id="second-text-learner-success">Hear straight from our alumni</p>
          <p id="third-text-learner-success">
            All our programs have a focus on current industry relevance and
            future-ready curriculum, coupled with the academic rigor needed to
            help you build long-term and high-growth careers.
          </p>
          <div class="ss-testimonial-row4-block">
            {sstestimonialdata.map((i) => (
              <Sstestimonialcards
                learnerimage={i.learnerimage}
                compimg={i.compimg}
                learnerhike={i.learnerhike}
                learnername={i.learnername}
                learnertitle={i.learnertitle}
                learnermsg={i.learnermsg}
              ></Sstestimonialcards>
            ))}
          </div>
        </div>
      </div>
      <div class="ss-outermost-lastsection">
        <div class="ss-lastsection">
          <div class="ss-lastsection-col1">
            <img
              class="ss-lastsection-col1-img"
              src="https://staging.herovired.com/wp-content/uploads/2022/09/course-cards.png"
            ></img>
          </div>
          <div class="ss-lastsection-col2">
            <p class="ss-lastsection-col2-text1">EXPLORE PROGRAMS</p>
            <p class="ss-lastsection-col2-text2">
              Your story could be next. Come join the league
            </p>
            <p class="ss-lastsection-col2-text3">
              Hear straight from the people who have had the chance to
              experience our programs first-hand, in their own words.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Successstores;
