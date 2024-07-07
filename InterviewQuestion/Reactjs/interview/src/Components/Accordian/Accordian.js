// import React, { useState } from "react";

// const Accordian = ({ item }) => {
//   const [expandHeader, setExpandHeader] = useState(false);
//   console.log(item, "iiii");
//   return (
//     <div onClick={() => setExpandHeader(!expandHeader)}>
//       <h1>Accordian</h1>
//       {expandHeader && (
//         <div
//           style={{
//             border: "1px solid red",
//             width: "600px",
//             height: "20px",
//             background: "gray",
//             borderRadius: "6px",
//             padding: "12px",
//             marginBottom: "0",
//           }}
//         >
//           How are doing
//         </div>
//       )}
//     </div>
//   );
// };

// const AccordianMain = () => {
//   const [accordians, setAccordians] = useState([
//     {
//       id: "1",
//       header: "Accordian 1",
//       content: "How are you doing 1",
//       expandHeader: false,
//     },
//     {
//       id: "2",
//       header: "Accordian 2",
//       content: "How are you doing 2",
//       expandHeader: false,
//     },
//     {
//       id: "3",
//       header: "Accordian 3",
//       content: "How are you doing 3",
//       expandHeader: false,
//     },
//   ]);
//   return (
//     <div>
//       {accordians?.map((item) => (
//         <Accordian
//           key={item?.id}
//           header={item?.header}
//           content={item?.content}
//           expandHeader={item?.expandHeader}
//         />
//       ))}
//     </div>
//   );
// };

// export default AccordianMain;

import React, { useState } from "react";

const Accordian = ({ item, onClick }) => {
  console.log(item, "iiii");

  return (
    <div onClick={onClick}>
      <h1>{item.header}</h1>
      {item.expandHeader && (
        <div
          style={{
            border: "1px solid red",
            width: "600px",
            height: "20px",
            background: "gray",
            borderRadius: "6px",
            padding: "12px",
            marginBottom: "0",
          }}
        >
          {item.content}
        </div>
      )}
    </div>
  );
};

const AccordianMain = () => {
  const [accordians, setAccordians] = useState([
    {
      id: "1",
      header: "Accordian 1",
      content: "How are you doing 1",
      expandHeader: false,
    },
    {
      id: "2",
      header: "Accordian 2",
      content: "How are you doing 2",
      expandHeader: false,
    },
    {
      id: "3",
      header: "Accordian 3",
      content: "How are you doing 3",
      expandHeader: false,
    },
  ]);

  const handleAccordianClick = (index) => {
    setAccordians((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, expandHeader: !item.expandHeader }
          : { ...item, expandHeader: false }
      )
    );
  };

  return (
    <div>
      {accordians.map((item, index) => (
        <Accordian
          key={item.id}
          item={item}
          onClick={() => handleAccordianClick(index)}
        />
      ))}
    </div>
  );
};

export default AccordianMain;
