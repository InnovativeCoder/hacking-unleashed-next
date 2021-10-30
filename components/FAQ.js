import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function FAQ() {
    const items=[
        {
            uuid: 1,
            heading: "Is this book for beginners?",
            content: "Yes, it is. The book starts from basics of Kali Linux (An Opertaing System which hosts most of the tools used for hacking) and goes into the deeper concepts."
        },
        {
            uuid: 2,
            heading: "Is there a paperback version?",
            // content: "Paperback version will be out by March 2021, but it will much costlier than the ebook, as it would have the production cost as well as shipping included."
            content: "Currently we are thinking on this. So no time soon."
        },
        {
            uuid: 3,
            heading: "Does this book covers mobile hacking?",
            content: "Yes, it does."
        },
        {
            uuid: 4,
            heading: "Does this book covers WiFi hacking?",
            content: "Yes, it does."
        },
        {
            uuid: 5,
            heading: "What kind of jobs can I apply after completing the book?",
            content: "After getting dirty with what you have learnt, you can apply for - Penetration Tester, Forensic Investigator, Defensive Security(DS), Malware Analyst, Reverse Engineer, "
        },
    ]
    return (
        <div className="my-10 mx-10 lg:max-w-2xl lg:m-auto" style={{ marginBottom:"10px"}}>
            <h1 className="text-lg text-center pb-10 uppercase">Frequently Asked Questions (FAQs) </h1>
            <Accordion allowZeroExpanded>
                {items.map((item) => (
                    <AccordionItem key={item.uuid}>
                        <AccordionItemHeading style={{borderRadius: "5px",background: "transparent", border:`2px solid white`}} className="mb-2 ">    
                            <AccordionItemButton style={{background: "transparent", color: "white",}}>
                                {item.heading}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            {item.content}
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}
