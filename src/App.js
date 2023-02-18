import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Draggable } from "react-drag-reorder";
import { DashboardLayoutComponent } from "@syncfusion/ej2-react-layouts";
import * as React from "react";
import GridLayout from "react-grid-layout";

function App() {
  const [table1, setTable1] = useState([
    {
      name: "Biryani",
      url: "https://thumbs.dreamstime.com/b/chicken-biryani-traditional-indian-rice-dish-served-clay-pot-top-view-image-one-meal-108805407.jpg",
      shape: "square",
      imgShape: "Square",
      i: "a",
      x: 0,
      y: 0,
      w: 1,
      h: 1,
    },
    {
      name: "Gulab Jamun",
      url: "https://media.istockphoto.com/id/521803129/photo/gulab-jamun-11.jpg?s=612x612&w=0&k=20&c=wyJaXY7Uu0hMBCXkcTDRaujSKN6Rp9roJeKDvF6CfHI=",
      shape: "square",
      imgShape: "gulab-jamun",
      i: "b",
      x: 1,
      y: 0,
      w: 3,
      h: 1,
    },
    {
      name: "Chole Bhature",
      url: "https://thumbs.dreamstime.com/b/chole-bhature-spicy-chick-peas-curry-also-known-as-channa-masala-traditional-north-indian-main-course-recipe-usually-223997628.jpg",
      shape: "square",
      imgShape: "chole-bhature",
      i: "c",
      x: 0,
      y: 2,
      w: 1,
      h: 2,
    },
    {
      name: "Rajma Chawal",
      url: "https://st2.depositphotos.com/5653638/11491/i/950/depositphotos_114911038-stock-photo-cooked-red-kidney-beans-curry.jpg",
      shape: "square",
      imgShape: "rajma-chawal",
      i: "d",
      x: 4,
      y: 0,
      w: 1,
      h: 2,
    },
    {
      name: "Rabri",
      url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/10/rabri-rabdi.jpg",
      shape: "square",
      imgShape: "rabri",
      i: "e",
      x: 1,
      y: 2,
      w: 2,
      h: 2,
    },
    {
      name: "Butter Naan",
      url: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=",
      shape: "square",
      imgShape: "butter-naan",
      i: "f",
      x: 3,
      y: 2,
      w: 3,
      h: 2,
    },
    {
      name: "Paneer Masala",
      url: "https://media.istockphoto.com/id/486066908/photo/indian-style-cottage-cheese-vegetarian-curry-dish-kadai-paneer.jpg?s=612x612&w=0&k=20&c=TTeo5oox6H9Y8crCYvk13THcPqaWk6D-Ix1ZsOjwKIk=",
      shape: "square",
      imgShape: "Square",
      i: "g",
      x: 0,
      y: 2,
      w: 1,
      h: 1,
    },
    {
      name: "Pav Bhaji",
      url: "https://media.istockphoto.com/id/1327433011/photo/pav-bhaji-indian-street-food-bharuch-gujarat-india.jpg?b=1&s=170667a&w=0&k=20&c=t0OQME9NSOPCw2uR1DijS-RHAUAZqVrI0lytdYXT55Y=",
      shape: "square",
      imgShape: "Square",
      i: "h",
      x: 0,
      y: 3,
      w: 1,
      h: 1,
    },
  ]);
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 1 },
    { i: "b", x: 1, y: 0, w: 3, h: 1, minW: 2, maxW: 4 },
    { i: "c", x: 3, y: 0, w: 1, h: 2 },
    { i: "d", x: 0, y: 2, w: 1, h: 2 },
    { i: "e", x: 4, y: 2, w: 1, h: 2 },
    { i: "f", x: 4, y: 2, w: 1, h: 2 },
  ];
  const [table2, setTable2] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [expand, setExpand] = useState(null);
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("Show Menu");

  const dragStarted = (index, type) => {
    setCurrentIndex([index, type]);

    console.log(`Item no ${index} Drag has been started`);
  };

  const draggingOver = (e) => {
    e.preventDefault();
    console.log("Dragging Over Now");
  };

  const dragDropped1 = (e) => {
    e.preventDefault();
    if (currentIndex !== null && currentIndex[1] == "table1") {
      const itemToAdd = table1[currentIndex[0]];
      setTable2([...table2, itemToAdd]);
      setTable1([...table1.filter((_, i) => i !== currentIndex[0])]);
      setCurrentIndex(null);
    }
    console.log("Droped here");
  };

  const dragDropped2 = (e, dropIndex) => {
    e.preventDefault();
    console.log("New drag called!: ", dropIndex);
    if (currentIndex != null && currentIndex[1] == "table2") {
      let temp = [...table2];
      let t = temp[currentIndex[0]];
      temp[currentIndex[0]] = temp[dropIndex];
      temp[dropIndex] = t;
      setTable2(temp);
    }
  };

  console.log(table2);

  const handleClick = (index) => {
    const itemToAdd = table2[index];
    console.log("clicked");
    if (index != null) {
      setTable2([...table2.filter((_, i) => i !== index)]);
      setTable1([...table1, itemToAdd]);
    }
  };

  return (
    <div className="App">
      <div
        className="display"
        droppable
        onDragOver={draggingOver}
        onDrop={dragDropped1}
      >
        <div className="header">Display Selected items here!!</div>
        <div className="overview">See, How your selected items look like!!</div>
        <div className="imgitems">
          <div className="display-section">
            <GridLayout
              className="layout"
              layout={layout}
              cols={4}
              rowHeight={155}
              width={700}
            >
              {table2.map((item, index) => {
                return (
                  <div
                    className={item.shape}
                    // draggable
                    // onDragOver={(e) => dragging(e, index)}
                    onDragStart={() => dragStarted(index, "table2")}
                    onDrop={(e) => dragDropped2(e, index)}
                    key={item.i}
                    data-grid={{ x: item.x, y: item.y, w: item.w, h: item.h }}
                  >
                    <div className="close" onClick={() => handleClick(index)}>
                      <button
                        // onClick={() => {
                        //   console.log("clicked!!");
                        //   handleClick(index);
                        // }}
                        className="button"
                        aria-label="Close alert"
                        type="button"
                      >
                        &times;
                      </button>
                    </div>
                    <center>
                      <img
                        alt="items"
                        src={item.url}
                        className={item.imgShape}
                      />
                    </center>
                    <div className="title">{item.name}</div>
                  </div>
                );
              })}
            </GridLayout>
          </div>
        </div>
      </div>
      <button
        className="show-button"
        onClick={() => {
          setShow(!show);
          setContent("Hide Menu");
        }}
      >
        {show ? "Hide Menu" : "Show Menu"}
      </button>
      {show && (
        <>
          {
            <div className="section" data-aos="fade-down">
              <div className="section_div">
                {/* <div className="menu">Menu</div> */}

                {table1.map((item, index) => {
                  return (
                    <section
                      className="item"
                      draggable
                      onDragStart={() => dragStarted(index, "table1")}
                      data-aos="fade-down"
                    >
                      {item.name}
                    </section>
                  );
                })}
              </div>
            </div>
          }
        </>
      )}
    </div>
  );
}

export default App;
