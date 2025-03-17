import { useState } from "react"

const Accordian = () =>{
    const[openIndex,setOpenIndex] = useState(0);
    const faqData = [
        {
            question:'How does OTC crypto trading work?',
            answer:'OTC crypto trading platforms enable fast and simple crypto transactions directly between a buyer and a seller.'
        }
        ,{
            question:'How is an OTC exchange platform different from a normal exchange?',
            answer:'OTC crypto trading platforms enable fast and simple crypto transactions directly between a buyer and a seller.'
        }
        ,{
            question:'How much does it cost to build a crypto OTC trading platform?',
            answer:'OTC crypto trading platforms enable fast and simple crypto transactions directly between a buyer and a seller.'
        }
        ,{
            question:'Which is the best OTC Crypto Exchange Development Company ?',
            answer:'OTC crypto trading platforms enable fast and simple crypto transactions directly between a buyer and a seller.'
        }
    ];
    const toggleFaq = (index) =>{
        setOpenIndex(openIndex === index ? null : index);
    }
    return(
        <section className="faq-blk">
             <div className="container">
                <strong>FAQ</strong>
                <div className="faq-in">
                   {faqData.map((faq,index) => (
                     <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`} onClick={() => toggleFaq(index)}>
                        <strong>{faq.question}</strong>
                        {openIndex === index && <p>{faq.answer}</p>}
                     </div>
                   ))}
                </div>
             </div>
        </section>
    )
}
export default Accordian;