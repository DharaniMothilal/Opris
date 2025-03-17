const ExchangePlatform = () => {
    const exData = [
        {
            icon: `${process.env.PUBLIC_URL}/images/e-icon1.svg`,
            title: '360-Degree Support',
            desc: 'We offer full support at every step, from design and development to deployment and marketing, to ensure your OTC crypto exchange succeeds.'
        },
        {
            icon: `${process.env.PUBLIC_URL}/images/e-icon2.svg`,
            title: 'Whitelabel Platform',
            desc: 'We offer full support at every step, from design and development to deployment and marketing, to ensure your OTC crypto exchange succeeds.'
        },
        {
            icon: `${process.env.PUBLIC_URL}/images/e-icon3.png`,
            title: 'Scalable Growth',
            desc: 'No matter your budget or the features you want, we can scale the platform to meet your needs.'
        },
        {
            icon: `${process.env.PUBLIC_URL}/images/e-icon4.svg`,
            title: 'Multiplatform',
            desc: 'Your users can access your OTC crypto exchange platform from different devices with various operating systems.'
        },
    ];
    return (
        <section className="exchange-blk">
            <div className="container">
                <div className="exchange-title">
                    <strong>Why should you use Opris to create an OTC Exchange platform?</strong>
                    <p>We provide a complete and professional package to build your <br/>
                        OTC cryptocurrency exchange platform</p>
                </div>
                <div className="row">
                    {exData.map((e, index) => (
                        <div key={index} className="ex-item">
                           <div className="ex-top">
                              <div className="ex-icon">
                                  <img src={e.icon} alt={e.title}/>
                                </div>
                                <b>{e.title}</b>
                            </div>
                            <p>{e.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default ExchangePlatform;