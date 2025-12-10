import {db}  from "../data/db.js"
import { nanoid } from 'nanoid'

export function createTask(name, info, status) {
    const status_list = ["new", "in progress", "done"]
    if (!(status_list.includes(status))) {
        throw new Error("this status not valid! ")
    }
    else {
        let task = { id: nanoid(1), name: name, date: new Date(), info: info, status: status }
        db.push(task)
        console.log(task);
        
    }
}


export function editTask(id, field, newText) {
    let edit = db.find(task => task.id == id)
    edit[field] = newText
}

export function showTask(id) {
    if (db.length <= 0) {
        console.log("have not any task!");
    }
    else {
        let task = db.filter(task => task.id = id)
        console.log(task);
        
    }
    
}


export function deleteTask(id) {
    let idx = db.findIndex(id)
    db.splice(idx, 1)
}


export function showTaskDeafault(){
    let sort = db.sort((a,b)=>{
        return a.now - b.now
    })
    if (sort.length == 0){
        console.log("have not task");
    }
    else{
    console.log(sort);
}}


export function showTaskDescTime(){
    let sort = db.sort((a,b) =>{
        return b.now - a.now
    })
    if (sort.length == 0){
        console.log("have not task");
    }
    else{
    console.log(sort);
}}






export function searchTask(name){
    let task = db.filter(task => task.name == name)
    console.log(task);
    
}

// createTask("asdf","adf","new") 

