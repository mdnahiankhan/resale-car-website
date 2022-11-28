import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminloading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://resale-website-server-ten.vercel.app/sellers/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsAdmin(data.isAdmin);
                    setIsAdminloading(false);
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading];
}

export default useAdmin;