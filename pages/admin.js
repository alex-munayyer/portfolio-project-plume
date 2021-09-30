import { useEffect } from 'react'
import HomePagePreview from '../pages/index'

const Admin = () => {
    useEffect(() => {
        ; (async () => {
            const CMS = (await import('netlify-cms-app')).default
            CMS.init()
            // hook our preview up to the cms
            CMS.registerPreviewTemplate('Home Page Content', HomePagePreview);
            /*CMS.registerPreviewStyle("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
            CMS.registerPreviewStyle("https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css");
            CMS.registerPreviewStyle("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/css/bootstrap-datepicker.css");
            CMS.registerPreviewStyle("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
            CMS.registerPreviewStyle("css/styles.css");
            CMS.registerPreviewStyle("css/responsive-styles.css");*/
        })()
    }, [])

    return <div />
}

export default Admin