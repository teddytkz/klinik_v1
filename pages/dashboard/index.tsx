import type { NextPage } from 'next'
import { useEffect } from 'react'

const Index: NextPage = () => {
    useEffect(() => {
        console.log('nice')
    }, [])
    return (
        <div>

        </div>
    )
}

export default Index