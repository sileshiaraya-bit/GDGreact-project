import {useState} from 'react'
import "./index.css"

export default function MiniCalculator(){
    
    const [display,setDisplay]=useState("0");
    const [operation,setOperation]=useState("");
    const [previousValue,setPreviousValue]=useState("");

    const numberHandler=function(num) {
        display==="0"?setDisplay(num):setDisplay(display+num);
    }
 
    const operationHandler=function (operator) {
        if (display!=="0") {
            setPreviousValue(display);
            setOperation(operator); 
            setDisplay("0");
        }
    }

    const calculate=()=>{
        
            let first=parseFloat(previousValue);
            let second=parseFloat(display);
            let result=0;

            switch (operation) {
                case "+":
                    result=first + second;
                    break;
                case "-":
                    result=first - second;
                    break;
                case "/":
                    if (second === 0) {
                            result="can not divided by zero";
                    } else {
                        result=first / second;
                    };
                    break;
                case "*":
                    result=first * second;
                    break;
            }

            setDisplay(result.toString());
            setOperation("");
            setPreviousValue("");
    
}
    const clearAll=()=>{
        setDisplay("0");
        setOperation("");
        setPreviousValue("");
    }

    return(
            <>
                <div className='bg-gradient-to-br from-sky-400 to-blue-600'>
                    <h1 className='color:red  '>HOMEWORK-2</h1>
                    <h1 className='color:green '>Mini Calculator</h1>
                    <div className="bg-white/30 backdrop-blur-lg text-white border border-white/30 p-6 rounded-2xl shadow-xl w-78 m-auto">
                    <div  className="mb-4 bg-white/30 backdrop-blur-lg text-white text-3xl font-semibold text-right p-4 rounded-xl shadow-inner">{display}</div>
                    <div className='flex justify-between gap-1'>
                        <button className='bg-white/30 backdrop-blur-lg text-right p-4 px-6 rounded-xl mb-4 text-3xl font-semibold text-white shadow-inner' onClick={()=>numberHandler("7")}>7
                        </button>
                        <button className='bg-white/30 backdrop-blur-lg text-right p-4 px-6 rounded-xl mb-4 text-3xl font-semibold text-white shadow-inner'  onClick={()=>numberHandler("8")}>8
                        </button>
                        <button className='bg-white/30 backdrop-blur-lg text-right p-4 px-6 rounded-xl mb-4 text-3xl font-semibold text-white shadow-inner'  onClick={()=>numberHandler("9")}>9
                        </button>
                        <button className='bg-cyan-500 text-white shadow hover:bg-cyan-400 backdrop-blur-lg text-right p-4 px-6 rounded-xl mb-4 text-3xl font-semibold text-white shadow-inner' onClick={()=>operationHandler("+")}>+
                        </button>
                        
                    </div>
                    <div className='flex justify-between gap-1'>
                        <button className='bg-white/30 backdrop-blur-lg text-right p-4 px-6 rounded-xl mb-4 text-3xl font-semibold text-white shadow-inner'  onClick={()=>numberHandler("4")}>4
                        </button>
                        <button className='bg-white/30 backdrop-blur-lg text-right p-4 px-6 rounded-xl mb-4 text-3xl font-semibold text-white shadow-inner' onClick={()=>numberHandler("5")}>5
                        </button>
                        <button className='bg-white/30 backdrop-blur-lg text-right p-4 px-6 rounded-xl mb-4 text-3xl font-semibold text-white shadow-inner' onClick={()=>numberHandler("6")}>6
                        </button>
                        <button className='bg-cyan-500 text-white shadow hover:bg-cyan-400 backdrop-blur-lg text-right p-4 px-6 rounded-xl mb-4 text-3xl font-semibold text-white shadow-inner' onClick={()=>operationHandler("-")}>-
                        </button>
                        
                    </div>
                    <div className='flex justify-between gap-1'>
                        <button className='bg-white/30 backdrop-blur-lg text-right p-4 px-6 rounded-xl mb-4 text-3xl font-semibold text-white shadow-inner' onClick={()=>numberHandler("1")}>1
                        </button>
                        <button className='bg-white/30 backdrop-blur-lg text-right p-4 px-6 rounded-xl mb-4 text-3xl font-semibold text-white shadow-inner' onClick={()=>numberHandler("2")}>2
                        </button>
                        <button className='bg-white/30 backdrop-blur-lg text-right p-4 px-6 rounded-xl mb-4 text-3xl font-semibold text-white shadow-inner' onClick={()=>numberHandler("3")}>3
                        </button>
                        <button className='bg-cyan-500 text-white shadow hover:bg-cyan-400 backdrop-blur-lg text-right p-4 px-6 rounded-xl mb-4 text-3xl font-semibold text-white shadow-inner' onClick={()=>operationHandler("*")}>x
                        </button>
                    </div>
                    <div className='flex justify-between gap-1'>
                        <button className='flex-grow bg-white/30 backdrop-blur-lg text-center p-4 px-6 rounded-xl mb-4 text-3xl font-semibold text-white shadow-inner' onClick={()=>numberHandler("0")}>0
                        </button>
                        <button className='bg-white/30 backdrop-blur-lg text-right p-4 px-6 rounded-xl mb-4 text-3xl font-semibold text-white shadow-inner'  onClick={()=>numberHandler(".")}>.
                        </button>
                        <button className='bg-cyan-500 text-white shadow hover:bg-cyan-400 backdrop-blur-lg text-right p-4 px-6 rounded-xl mb-4 text-3xl font-semibold text-white shadow-inner' onClick={()=>operationHandler("/")}>/
                        </button>
                    </div>
                    <div className='flex justify-center gap-1'>
                        <button className='bg-red-500 text-white shadow hover:bg-red-400 backdrop-blur-lg text-right p-4 px-6 rounded-xl mb-4 text-3xl font-semibold text-white shadow-inner' onClick={()=>clearAll()}>AC
                        </button>
                        
                        <button className='bg-green-500 text-white shadow hover:bg-green-400 backdrop-blur-lg text-right p-4 px-6 rounded-xl mb-4 text-3xl font-semibold text-white shadow-inner' onClick={()=>calculate()}>=
                        </button>
                    </div>
                </div>
                </div>
            </>
    )
}