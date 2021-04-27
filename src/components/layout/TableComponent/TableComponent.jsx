import React from "react";

const TableComponent = ({ tr = {} }) => {
  const posts = [
    { id: "1", title: "dori" },
    { id: "2", title: "ordit" }
  ];
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {posts &&
          posts.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.title}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableComponent;

{
  /* <div>
<table>
  <thead>
    <tr>
      <th>Product SUKe</th>
      <th>Units</th>
      <th>Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SUK 1232842</td>
      <td>6504</td>
      <td>$2,3046</td>
    </tr>
    <tr>
      <td>SUK2842</td>
      <td>6507874</td>
      <td>$2,8776</td>
    </tr>
    <tr>
      <td>SUK 12842</td>
      <td>04</td>
      <td>$2046</td>
    </tr>
    <tr>
      <td>SUK 12842</td>
      <td>04</td>
      <td>$2046</td>
    </tr>
  </tbody>
</table>
</div> */
}
