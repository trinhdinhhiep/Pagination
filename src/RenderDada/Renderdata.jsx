import React from "react";

const Renderdata = (props) => {
  const { currentPage, itemsPerPage } = props.data;
  console.log(currentPage, itemsPerPage);
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  // const renderData = (currentData) => {
  //   return (
  //     <ul>
  //       {currentData.map((item) => (
  //         <li key={item.id}>{item.title}</li>
  //       ))}
  //     </ul>
  //   );
  // };
  return <div>{/* {renderData(currentItems)} */}</div>;
};

export default Renderdata;
