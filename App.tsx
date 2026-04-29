//react没有全局组件和局部组件的概念
import Card from "./components/Card"
import Test from "./components/Test"
function App() {

  const fn = (params:string) => {
    console.log('子组件触发了 父组件的事件',params)
  }

  return (
    <>
      <Card></Card>
      <button onClick={()=>window.onShow()}>确认</button>
      <Test callback={fn} title={'测试'}></Test>
    </>
  )
}

export default App
