import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth, useUser } from '../../../hooks'

export function UsersAdmin() {
    const { auth } = useAuth()
    const { loading, users, getUsers } = useUser()

    useEffect(() => {
        if (auth.me?.is_staff) getUsers();
    }, [])

    if (!auth.me?.is_staff) {
        return <Navigate to={'/admin'}></Navigate>
    }
    return (
        <div>
            siuuuu
        </div>
    )
}
