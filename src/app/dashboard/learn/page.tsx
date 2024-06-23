import Navbar from '@/components/DashboardNavbar/Navbar'
import Layout from '@/components/QuizMode/Layout'
import QuizMode from '@/components/QuizMode/QuizMode'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="fixed top-0 w-full z-50">
                <Navbar />
            </div>
            <Layout />

        </div>
    )
}

export default page