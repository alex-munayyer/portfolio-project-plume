//import Head from 'next/head'

const HomePagePreview = ({ entry }) => {
    /*const titleTag = entry.getIn(['data', 'titleTag']);
    const metaDescription = entry.getIn(['data', 'metaDescription']);
    const ogTitle = entry.getIn(['data', 'ogTitle']);
    const ogDescription = entry.getIn(['data', 'ogDescription']);
    const ogImage = entry.getIn(['data', 'ogImage']);
    const twitterTitle = entry.getIn(['data', 'twitterTitle']);
    const twitterDescription = entry.getIn(['data', 'twitterDescription']);
    const twitterImage = entry.getIn(['data', 'twitterImage']);*/
    //const sectionOneDescription = entry.getIn(['data', 'sectionOneDescription']);
    const sectionSixHeadline = entry.getIn(['data', 'sectionSixHeadline']);
    const sectionSixDescription = entry.getIn(['data', 'sectionSixDescription']);
    const sectionSixImage = entry.getIn(['data', 'sectionSixImage']);

    return (
        <section className="section-6">
            <div className="textbox-globe">
                <h2 className="title-globe">{sectionSixHeadline}</h2>
                <p className="text-globe">{sectionSixDescription}</p>
            </div>
            <div className="imagebox-globe">
                <img className="image-globe" src={sectionSixImage} alt="" />
            </div>
        </section>
    )
}