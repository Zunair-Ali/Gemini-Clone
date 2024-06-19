// eslint-disable-next-line no-unused-vars
import  { React,useContext } from "react";
import "./Main.css";
// import side
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult
        ?<>
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I Help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>List some power words to use on my resume that show teamwork.</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>
              What are the best parks in location: Barcelona? Provide a
              description of each one and why it is worth visiting.{" "}
            </p>
            <img src={assets.bulb_icon} alt="" />
        </div>
          <div className="card">
            <p>
              Can you find me some hotels in the Recoleta area of Buenos Aires
              and suggest things to see while there?
            </p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Generate vibrant & playful image with lots of detail</p>
            <img src={assets.code_icon} alt="" />
        </div>
        </div>
        </>
        :<div className="result">
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading
            ?<div className="loader">
              <hr />
              <hr />
              <hr />
            </div>
            :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
          </div>
        </div>
        }
      
        
        
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt Here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <p className="bottom-info">
          Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;