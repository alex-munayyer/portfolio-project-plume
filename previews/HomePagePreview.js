const HomePagePreview = ({ entry }) => {
    const sectionSixHeadline = entry.getIn(['data', 'sectionSixHeadline']);
    const sectionSixDescription = entry.getIn(['data', 'sectionSixDescription']);
    const sectionSixImage = entry.getIn(['data', 'sectionSixImage']);

    return (
        <div>
            <section className="section-6">
                <div className="textbox-globe">
                    <h2 className="title-globe">{sectionSixHeadline}</h2>
                    <p className="text-globe">{sectionSixDescription}</p>
                </div>
                <div className="imagebox-globe">
                    <img className="image-globe" src={sectionSixImage} alt="" />
                </div>
            </section>
        </div>
    );
}