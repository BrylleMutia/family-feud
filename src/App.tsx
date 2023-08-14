import React, { useState } from "react";
import { items } from "./api/Questions";
import "./App.css";
import { motion } from "framer-motion";
import NopeImg from "./assets/nope.png";

function App() {
   const [questionId, setQuestionId] = useState<number>(0);
   const [answersShown, setAnswersShown] = useState<number[]>([]);
   const [nopeCount, setNopeCount] = useState<number>(0);

   const nextQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      setAnswersShown([]);
      setNopeCount(0);
      setQuestionId((prev) => (prev += 1));
   };

   const handleAnswerShown = (orderId: number) =>
      setAnswersShown((prev) => [...prev, orderId]);

   // In the component create variants of your animation state
   const variants = {
      hide: {
         opacity: [1.01, 0],
      },
      // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
      show: {
         opacity: [0, 1.01],
      },
   };

   const wrongAnswer = () => {
      setNopeCount((prev) => prev + 1);
   };

   return (
      <main>
         <div className="app">
            <div className="header-1-div">
               <h1 className="header-1">Family Feud</h1>
               <p className="pg-1">(Constellation Edition)</p>
            </div>

            <h2 className="header-2">Question</h2>
            <div className="question-box">
               {questionId ? (
                  items.map(
                     (item) =>
                        questionId === item.id && (
                           <h2 key={item.id}>{item.question}</h2>
                        )
                  )
               ) : (
                  <h2>
                     Nagsurvey kami ng 100 tao.. The top answers are on the
                     board.
                  </h2>
               )}
            </div>

            <div className="answers-board">
               {items.map(
                  (item) =>
                     questionId === item.id && (
                        <React.Fragment key={item.id}>
                           <div className="grid-column-1">
                              {item.answers.map((answer) => {
                                 return (
                                    answer.order <=
                                       Math.ceil(item.answers.length / 2) && (
                                       <div
                                          className="answer-item"
                                          key={answer.order}
                                       >
                                          <div>{answer.order}</div>
                                          <motion.div
                                             className="hide-answer"
                                             variants={variants}
                                             animate={
                                                answersShown.includes(
                                                   answer.order
                                                )
                                                   ? "show"
                                                   : "hide"
                                             }
                                             onClick={() =>
                                                handleAnswerShown(answer.order)
                                             }
                                             initial={false}
                                          >
                                             <div>{answer.text}</div>
                                             <div>{answer.points}</div>
                                          </motion.div>
                                       </div>
                                    )
                                 );
                              })}
                           </div>
                           <div className="grid-column-2">
                              {item.answers.map((answer) => {
                                 return (
                                    answer.order >
                                       Math.ceil(item.answers.length / 2) && (
                                       <div
                                          className="answer-item"
                                          key={answer.order}
                                       >
                                          <div>{answer.order}</div>
                                          <motion.div
                                             className="hide-answer"
                                             variants={variants}
                                             animate={
                                                answersShown.includes(
                                                   answer.order
                                                )
                                                   ? "show"
                                                   : "hide"
                                             }
                                             onClick={() =>
                                                handleAnswerShown(answer.order)
                                             }
                                             initial={false}
                                          >
                                             <div>{answer.text}</div>
                                             <div>{answer.points}</div>
                                          </motion.div>
                                       </div>
                                    )
                                 );
                              })}
                           </div>
                        </React.Fragment>
                     )
               )}
            </div>

            <div className="nope-count">
               {[...Array(nopeCount)].map((nope, index) => (
                  <img key={`${nope}-${index}`} src={NopeImg} />
               ))}
            </div>

            <div className="controls">
               <button className="next-question" onClick={nextQuestion}>
                  Next question
               </button>
               <button className="next-question" onClick={wrongAnswer}>
                  X
               </button>
            </div>
         </div>
      </main>
   );
}

export default App;
