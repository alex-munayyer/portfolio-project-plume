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

        return <article><h2>{entry.getIn(['data', 'titleTag'])}</h2>
        </article>
    }
}