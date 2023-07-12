import { useState } from "react";

const Section = ({ title, description ,isvisible,setIsVisible}) => {
  
  return (
    <>
      <div className="border border-black m-2 p-3">
        <h1 className="font-bold text-2xl">{title}</h1>
        <button
          className="cursor-pointer underline"
          onClick={() => {
            isvisible ? setIsVisible(null) : setIsVisible(title);
          }}
        >
          {isvisible ? <span>hide</span> : <span>show</span>}
        </button>
        {isvisible && <p className="">{description}:""</p>}
      </div>
    </>
  );
};
const Instamart = () => {
    const [visibleSection,SetVisibleSection]=useState(null)

  return (
    <>
      <h1 className="font-bold text-3xl p-2 m-2">Instamart</h1>
      <Section
        title={"unit 1"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
        isvisible={visibleSection==="unit 1"}
        setIsVisible={(key)=>SetVisibleSection(key)}
      />
      <Section
        title={"unit 2"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
        isvisible={visibleSection==="unit 2"}
        setIsVisible={(key)=>SetVisibleSection(key)}
      />
        <Section
        title={"unit 3"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
        isvisible={visibleSection==="unit 3"}
        setIsVisible={(key)=>SetVisibleSection(key)}

      />
    </>
  );
};
export default Instamart;
