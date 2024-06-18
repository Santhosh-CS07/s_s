"use client";
import Navbar from '@/components/DashboardNavbar/Navbar'
import Getsupport from '@/components/GetSupport/GetSupport'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="fixed top-0 w-full z-50">
                <Navbar />
            </div>
            {/* choose options personal or profestional */}
            <Getsupport />
        </div>
    )
}

export default page