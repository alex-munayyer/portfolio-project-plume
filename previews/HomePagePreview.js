import React from 'react'

/*const HomePagePreview = ({ entry }) => {
    const titleTag = entry.getIn(['data', 'titleTag']);
    const metaDescription = entry.getIn(['data', 'metaDescription']);
    const ogTitle = entry.getIn(['data', 'ogTitle']);
    const ogDescription = entry.getIn(['data', 'ogDescription']);
    const ogImage = entry.getIn(['data', 'ogImage']);
    const twitterTitle = entry.getIn(['data', 'twitterTitle']);
    const twitterDescription = entry.getIn(['data', 'twitterDescription']);
    const twitterImage = entry.getIn(['data', 'twitterImage']);
    const sectionOneDescription = entry.getIn(['data', 'sectionOneDescription']);
    const sectionSixHeadline = entry.getIn(['data', 'sectionSixHeadline']);
    const sectionSixDescription = entry.getIn(['data', 'sectionSixDescription']);
    const sectionSixImage = entry.getIn(['data', 'sectionSixImage']);

    return (
        <div>
        </div>
    )
}*/

export default class HomePagePreview extends React.Component {
    render() {
        const { entry, fieldsMetaData } = this.props;
        //const author = fieldsMetaData.getIn(['authors', data.author]);

        return <section className="section-6">
            <div className="textbox-globe">
                <h2 className="title-globe">{entry.getIn(['data', 'sectionSixHeadline'])}</h2>
                <p className="text-globe">{entry.getIn(['data', 'sectionSixDescription'])}</p>
            </div>
            <div className="imagebox-globe">
                <img className="image-globe" src={entry.getIn(['data', 'sectionSixImage'])} alt="" />
            </div>
        </section>
    }
}