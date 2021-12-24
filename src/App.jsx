import React, { useState } from "react";
import ToDoLists from "./ToDoList";


const App = () =>{
    const [inputList,updateList] = useState("read java");
    const [items, setItems] = useState([]);

    const itemEvent =(event)=>{
       updateList(event.target.value);
    };

    const listOfItem = ()=>{
        setItems((oldItems)=>{
            return [...oldItems,inputList];
        });
        updateList(" ");
    }

    const deleteItems = (id)=>{
        console.log("delted");

        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index !==id;
            });
        });
    };

    return(
        <>
            <div className="main-div">
                <div className="center-div">
                    <br/>
                    <h1>ToDo List</h1>
                    <br/>
                    <input type = "text" placeholder="Add a Items" value ={inputList} onChange={itemEvent}></input>
                    <button onClick={listOfItem}>+</button>

                    <ol>
                        {/* <li>{inputList}</li> */}
                        {items.map((itemval,index)=>{
                          return <ToDoLists 
                          text ={itemval} 
                          key = {index} 
                          id = {index}
                          onSelect = {deleteItems}
                          />
                        })}
                    </ol>
                </div>
            </div>
        </>
    )

}
export default App;