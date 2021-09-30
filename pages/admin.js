import { useEffect } from 'react'
import homePagePreview from '../pages/index'

const Admin = () => {
    useEffect(() => {
        ; (async () => {
            const CMS = (await import('netlify-cms-app')).default
            CMS.init()
            // hook our preview up to the cms
            CMS.registerPreviewTemplate('Home Page Content', homePagePreview)
        })()
    }, [])

    return <div />
}

export default Admin