import React from "react"
interface Prop{
    title:string,
    callback: (params: string) => void
}

export default function Test(props:Prop){
    console.log(props.title)
    return <div>
        <button onClick={() => props.callback('我见过龙')}>派发事件</button>
    </div>
    
}