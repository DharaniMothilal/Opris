const ProcessCount = () =>{
    const steps = [
        {title:'Gathering Requirements',content:'First, we collect your needs and compare them with the current crypto market. After that, we suggest the best approach to start your OTC crypto exchange.'},
        {title:'Planning',content:'Based on your business needs, our experts will create a detailed plan for building your OTC crypto exchange.'},
        {title:'Designing',content:'Once you and our design team approve the plan, we move forward with creating the design for your OTC exchange.'},
        {title:'Development',content:'In this phase, we build the entire cryptocurrency exchange, customizing it to meet your specific requirements.'},
        {title:'Testing',content:'After development, our team will thoroughly test the platform to ensure everything is working as expected. If there are any issues, we will fix them right away.'},
        {title:'Deployment',content:'Finally, our development team will launch your fully functional OTC crypto exchange on the server, according to your specifications.'},
    ];
    return(
        <section className="process-blk">
            <div className="container"> 
                <h6>OTC Crypto Exchange Development <br/>
                Process</h6>
               <div className="row">
                  {steps.map((step,index) => (
                    <div className="prc-item" key={index}> 
                       <span className="counter"></span>
                       <strong>{step.title}</strong>
                       <p>{step.content}</p>
                    </div>
                  ))}
               </div>
            </div>
        </section>
    )
}
export default ProcessCount;