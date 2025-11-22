import { useState } from "react"
const Accordian = () => {
  const [activeIndex ,setActiveIndex] = useState(null)
  const accordionData = [
  {
    id: 1,
    title: "Accordion Item #1",
    content: "This is the first item's accordion content. It can contain text, HTML, or other components."
  },
  {
    id: 2,
    title: "Accordion Item #2",
    content: "This is the second item's accordion content. You can expand or collapse this section independently."
  },
  {
    id: 3,
    title: "Accordion Item #3",
    content: "This is the third item's accordion content. Accordions help organize content in collapsible sections."
  }
];
const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
}
  return (
    <div>
        {accordionData.map((item , index) => (
            <div key={item.id} className="border-b w-full h-full">
                <button
                  className="w-full text-left p-4 bg-gray-200 hover:bg-gray-300 focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                </button>
                {activeIndex === index  && (
                  <div className="p-4 bg-white">
                    {item.content}
                  </div>
                )}
            </div>
        ))}
    </div>
  )
}

export default Accordian