import {input} from "./utils/read.js"
import { createTask,deleteTask,editTask,searchTask,showTask,showTaskDeafault,showTaskDescTime
 } from "./utils/functions.js"


export function menu() {console.log(
    `
    ===TODO SYSTEM===
    1. create a new task
    2. show all tasks order by time from new
    3. show all tasks order by time from old
    4. show task by id 
    5. search task by name
    6. edit a task 
    7. delete a task 
    
    0. exit `)
}

let flag = true
while (flag){
    menu()
    let choice = input("\nplease choose from menu: ")
    switch(choice){
        case "1":
            let name  = input("please enter a name of this task: ")
            let info = input("enter information of this task: ")
            let status = input("enter status: ")
            createTask(name, info, status)
            break
        
        case "2":
            showTaskDeafault()
            break

        case "3":
            showTaskDescTime()
            break

        case "4":
            let id = input("please enter your task id: ")
            showTask(id)
            break

        case "5":
            let taskName = input("enter a task name: ")
            searchTask(taskName)
            break
        
        case "6":
            let editId = input("please enter task id: ")
            let key = input("enter the key you want to edit: ")
            let val  = input("enter a new val of this key: ")
            editTask(editId,key,val)
            break

        
        case "7":
            let delId = input("enter your task id do you want to delete: ")
            deleteTask(delId)
            break

        case "0":
            console.log("good bye");
            flag = false
            break

        default:
            console.log("\n invalid input try again!");
            
                    
    }
}
