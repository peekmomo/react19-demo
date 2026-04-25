
import './App.css'
import { useState, useTransition } from 'react'
import { Input, List, Flex } from 'antd'

interface Item {
    id: number,
    name: string,
    address: string
}
function App() {
    const [list, setList] = useState<Item[]>([])
    const [inputValue, setinputvalue] = useState('')
    const [isPending,startTransition]=useTransition()
    const handleChangeItem = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setinputvalue(value)
         fetch(`/api/list?keyWord=${value}`).then(res => res.json()).then(data => {
         const res = data?.list ?? [];
         // 使用过渡 useTransition
         startTransition(() => {
            setList([...res])
         })
        
      })
    }
    return (
        <>
            <Flex>
                <Input placeholder="请输入内容" value={inputValue} onChange={handleChangeItem} />
            </Flex>
            {isPending && <div>loading...</div>}
            <List
                size="small"
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={list}
                renderItem={(item) => <List.Item><List.Item.Meta
                    title={item.name}
                    description={item.address}
                /></List.Item>}
            />
        </>
    )
}

export default App




