import { useEffect } from 'react'
//import BlogPostPreview from '../previews/BlogPostPreview'

const Admin = () => {
    useEffect(() => {
        ; (async () => {
            const CMS = (await import('netlify-cms-app')).default
            CMS.init()
        })()
    }, [])

    return <div />
}

export default Admin