import React from 'react'
import { useState } from 'react'
import './QuziStyle.css'
import './QuziMedia.css'

const  QuziComp = () => {

    var QuestionBank=[
        {
            Question:"What does the abbreviation HTML stand for?",
            Answers:[
                {Answer: "HyperText Markup Language ", isCorrect:true},
                {Answer: "HighText Markup language ", isCorrect:false},
                {Answer: "HyperText Markdown Language ", isCorrect:false},
                {Answer: "None of the above ", isCorrect:false}
            ]
        },
        {
            Question:"What is the smallest header in HTML by default?",
            Answers:[
                {Answer: " h1", isCorrect:false},
                {Answer: "h3 ", isCorrect:false},
                {Answer: "h6 ", isCorrect:true},
                {Answer: "h4 ", isCorrect:false}
            ]
        },
        {
            Question:"Which of the following tags doesn’t require a closing tag?",
            Answers:[
                {Answer: "<br> ", isCorrect:false},
                {Answer: "<hr> ", isCorrect:false},
                {Answer: "Both A and B ", isCorrect:true},
                {Answer: "<p> ", isCorrect:false}
            ]
        },
        {
            Question:"Colors are defined in HTML using ?",
            Answers:[
                {Answer: "RGB Values ", isCorrect:false},
                {Answer: "HEX Values ", isCorrect:false},
                {Answer: "RGBA Values ", isCorrect:false},
                {Answer: "All of the above ", isCorrect:true}
            ]
        },
        {
            Question:"Which of the following is the correct syntax for using the HTML style attribute?",
            Answers:[
                {Answer: "<tagname style = 'property:value;'> ", isCorrect:true},
                {Answer: " <tagname style ='property;'>", isCorrect:false},
                {Answer: "<tagname style > ", isCorrect:false},
                {Answer: "None of the above ", isCorrect:false}
            ]
        },
        {
            Question:"CSS stands for _________",
            Answers:[
                {Answer: " Color and style sheets", isCorrect:false},
                {Answer: " Cascading style sheet", isCorrect:true},
                {Answer: "Cascade style sheets ", isCorrect:false},
                {Answer: "Cascade sheets for style ", isCorrect:false}
            ]
        },
        {
            Question:"The CSS property used to draw a line around the elements outside the border?",
            Answers:[
                {Answer: " line", isCorrect:false},
                {Answer: "border", isCorrect:false},
                {Answer: "padding ", isCorrect:false},
                {Answer: "outline ", isCorrect:true}
            ]
        },
        {
            Question:"The CSS property used to specify the transparency of an element is___________",
            Answers:[
                {Answer: "visibility ", isCorrect:false},
                {Answer: " filter", isCorrect:false},
                {Answer: " opacity", isCorrect:true},
                {Answer: "overlay ", isCorrect:false}
            ]
        },
        {
            Question:"The CSS property used to make the rounded borders, or rounded corners around an element is________",
            Answers:[
                {Answer: " border-radius", isCorrect:true},
                {Answer: " border-collapse", isCorrect:false},
                {Answer: "border-spacing ", isCorrect:false},
                {Answer: "None ", isCorrect:false}
            ]
        },
        {
            Question:"Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?",
            Answers:[
                {Answer: "all {background-color : yellow;} ", isCorrect:false},
                {Answer: " p {background-color : #yellow;}", isCorrect:false},
                {Answer: " p {background-color : yellow;}", isCorrect:true},
                {Answer: "all p{background-color : #yellow;} ", isCorrect:false}
            ]
        },
        {
            Question:"Which of the following CSS property is used to set the background image of an element?",
            Answers:[
                {Answer: " background-color", isCorrect:false},
                {Answer: "background-image ", isCorrect:true},
                {Answer: "background-attachment ", isCorrect:false},
                {Answer: "None ", isCorrect:false}
            ]
        },
        {
            Question:"Can be redeclare a variable that is declared with var keyword?",
            Answers:[
                {Answer: "Yes ", isCorrect:true},
                {Answer: "No ", isCorrect:false}
                // {Answer: " ", isCorrect:false},
                // {Answer: " ", isCorrect:false}
            ]
        },
        {
            Question:" How many keywords are there in JavaScript to declare variables or constants?",
            Answers:[
                {Answer: "1 ", isCorrect:false},
                {Answer: "2 ", isCorrect:false},
                {Answer: "3 ", isCorrect:true},
                {Answer: "4 ", isCorrect:false}
            ]
        },
        {
            Question:"Which is the correct JavaScript statement to print the addition of two numbers 10 and 20 in a paragraph whose id is 'result'?",
            Answers:[
                {Answer: " getElementById(`result`).innerHTML = 10+20;", isCorrect:true},
                {Answer: "getElementById(`result`).innerHTML = '10+20'; ", isCorrect:false},
                {Answer: "getElementById(`#result`).innerHTML = 10+20; ", isCorrect:false},
                {Answer: "All of the above ", isCorrect:false}
            ]
        },{
            Question:" Which JavaScript method is used to access an HTML element by id?",
            Answers:[
                {Answer: "getElementById() ", isCorrect:false},
                {Answer: "getElement(id) ", isCorrect:false},
                {Answer: " getElementById(id)", isCorrect:true},
                {Answer: "elementById(id) ", isCorrect:false}
            ]
        },
        {
            Question:"In JavaScript, single line comment begins with ___.",
            Answers:[
                {Answer: "# ", isCorrect:false},
                {Answer: "/* ", isCorrect:false},
                {Answer: "$ ", isCorrect:false},
                {Answer: "// ", isCorrect:true}
            ]
        },
        {
            Question:"What is the correct JavaScript syntax to write 'Hello World' ? " ,
            Answers:[
                {Answer: "system.out.println('Hello World') ", isCorrect:false},
                {Answer: "println ('Hello World') ", isCorrect:false},
                {Answer: "document.write('Hello World') ", isCorrect:true},
                {Answer: "response.write('Hello World') ", isCorrect:false}
            ]
        },
        {
            Question:"What is the output of the following JavaScript code ?<script> var name = 'Alex' +  ' ' + 'Alvin'; document.getElementById('demo').innerHTML = name;     </script>",
            Answers:[
                {Answer: " Alex Alvin", isCorrect:true},
                {Answer: " AlexAlvin", isCorrect:false},
                {Answer: " TypeError", isCorrect:false},
                {Answer: " ValueError", isCorrect:false}
            ]
        },
        {
            Question:"in JavaScript, Window.prompt() method return True or False value",
            Answers:[
                {Answer: "True", isCorrect:false},
                {Answer: "False ", isCorrect:true}
                // {Answer: " ", isCorrect:false},
                // {Answer: " ", isCorrect:false}
            ]
        },
        {
            Question:"15. <script language='JavaScript'>function x(){ document.write(2+5+'^8'); }",
            Answers:[
                {Answer: "25^8 ", isCorrect:false},
                {Answer: "Error ", isCorrect:false},
                {Answer: "7 ", isCorrect:false},
                {Answer: "7^8 ", isCorrect:true}
            ]
        }
    ]

    //UseState hooks

    const[currentQuestion,setCurrentQuestion] = useState(0)
    const [score,setScore] = useState(0)
    const [showScore,setShowScore] = useState(false)


    const handleAnswerResponse=(isCorrect)=>{
        if(isCorrect){
            setScore(score+1)
        }
        const nextQuestion= currentQuestion+1
        if(nextQuestion<QuestionBank.length){
            setCurrentQuestion(nextQuestion)
        }else{
            setShowScore(true)
        }
    }

    const resetQuzi=()=>{
        setCurrentQuestion(0)
        setScore(0)
        setShowScore(false)
    }
    
    console.log(QuestionBank)
  return (
    <div className='app'>
         {showScore ? (
            <div className='score-section'>
                You have scored {score} out of {QuestionBank.length}
                <>
                <button type='submit' onClick={resetQuzi}>play agian</button>
                </>
            </div>
         )
         :(
           <>
            <div className='question-section'>
                <div className='question-count'>
                    <span>{currentQuestion+1}</span>/{QuestionBank.length}
                </div>
                <div className='question-text'>
                    {QuestionBank[currentQuestion].Question}
                </div>
            </div>
            <div className='answer-section'>
                {QuestionBank[currentQuestion].Answers.map((answer,index) =>
                (
                    <button onClick={() => handleAnswerResponse(answer.isCorrect)} key={index}>{answer.Answer}</button>
                ))}
            </div>
           </>
         )}
    </div>
  )
}

export default QuziComp