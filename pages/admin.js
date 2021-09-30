import { useEffect } from 'react'
import HomePagePreview from '../pages/index'

const Admin = () => {
    useEffect(() => {
        ; (async () => {
            const CMS = (await import('netlify-cms-app')).default
            CMS.init()
            // hook our preview up to the cms
            CMS.registerPreviewTemplate('Home Page Content', HomePagePreview)
        })()
    }, [])

    return <div />
}

export default Admin