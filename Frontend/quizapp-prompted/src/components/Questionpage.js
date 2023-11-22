import * as React from "react";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";
import Timebar from "./Timebar";
import Chat from "./chat"; 

const Questionpage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isChat, setIsChat] = useState(false);
  const [isButtonVis, setIsButtonVis] = useState(true);

  const handleChat = event =>{
    setIsChat(true);
    setIsButtonVis(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const isContinueDisabled = !selectedOption;

  return (
    <div className="h-screen w-screen divide-y divide-solid">
      <div className="h-4/5 flex">
        <div className="w-2/3 px-4">
          <div className="box-border p-4 text-lg text-blue-texts py-10">
            In a certain coding system FLOWER is written as SEXOMF, how will you code GARDEN?
          </div>
          <div className="flex flex-col h-screen p-4 space-y-7">
            <Button
              className={`border border-blue-texts w-32 text-black p-4 rounded-lg ${
                selectedOption === "OEERBH"
                  ? "bg-hover-color text-white"
                  : "hover:bg-hover-color hover:text-white"
              }`}
              onClick={() => handleOptionClick("OEERBH")}
            >
              OEERBH
            </Button>
            <Button
              className={`border border-blue-texts w-32 text-black p-4 rounded-lg ${
                selectedOption === "OFESBH" ? "bg-hover-color text-white" : "hover:bg-hover-color hover:text-white"
              }`}
              onClick={() => handleOptionClick("OFESBH")}
            >
              OFESBH
            </Button>
            <Button
              className={`border border-blue-texts w-32 text-black p-4 rounded-lg ${
                selectedOption === "OEESBG" ? "bg-hover-color text-white" : "hover:bg-hover-color hover:text-white"
              }`}
              onClick={() => handleOptionClick("OEESBG")}
            >
              OEESBG
            </Button>
            <Button
              className={`border border-blue-texts w-32 text-black p-4 rounded-lg ${
                selectedOption === "OEERBG" ? "bg-hover-color text-white" : "hover:bg-hover-color hover:text-white"
              }`}
              onClick={() => handleOptionClick("OEERBG")}
            >
              OEERBG
            </Button>
          </div>
        </div>
        <div className="w-1/3 bg-blue-50">
          <div className="h-10 bg-blue-texts w-fill flex justify-center text-white">
            AI Assistance
          </div>
          <div className="p-5"></div>
          <div className="flex justify-center">
            {isButtonVis &&(
               <Button onClick={handleChat} className="flex justify-center border border-blue-texts w-32 text-white bg-greys p-4 rounded-lg hover:bg-hover-color hover:text-white">GET HELP</Button>
            )}
         
          {isChat && (
            <div className="bg-blue-50 p-4" style={{ whiteSpace: 'break-spaces' }}>
            <Chat text="Pattern established by FLOWER:
F -> S, L -> E, O -> X, W -> O, E -> M, R -> F
So, using this pattern, GARDEN would be coded as:
G -> O, A -> F, R -> E, D -> S, E -> B, N -> H
Therefore, GARDEN would be coded as OFESBH in this coding system" /> 
          </div>
          )}
          </div>
          
        </div>
      </div>
      <div className="h-1/5 px-12">
        <div className="h-5"></div>
        <div className="text-blue-texts">qn no</div>
        <Timebar />
        <div className="flex justify-center">
          <div className="text-blue-texts">
            Time remaining:
            <Timer />
            <div className="flex justify-normal items-center h-20">
              <Button
                className={`text-white bg-blue-texts rounded-full p-4 w-32 justify-items-end ${
                  isContinueDisabled ? "bg-gray-400 cursor-not-allowed" : ""
                }`}
                onClick={() => {
                  if (!isContinueDisabled) {
                    navigate("/question/id");
                  }
                }}
                disabled={isContinueDisabled}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionpage;
