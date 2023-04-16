import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1 style={{ color: "#000", fontSize: "2.2rem" }}>
        قناة مسجد الموسوي الكبير
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="assets/images/img-9.jpg"
              text="مسجد الموسوي الكبير مسجد الموسوي الكبير مسجد الموسوي الكبير"
              label="مسجد الموسوي 1"
              path="/services"
            />
            <CardItem
              src="assets/images/img-2.jpg"
              text="مسجد الموسوي الكبير مسجد الموسوي الكبير مسجد الموسوي الكبير"
              label="مسجد الموسوي 2"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="assets/images/img-3.jpg"
              text="مسجد الموسوي الكبير"
              label="مسجد الموسوي 3"
              path="/services"
            />
            <CardItem
              src="assets/images/img-4.jpg"
              text="مسجد الموسوي الكبير"
              label="مسجد الموسوي 4"
              path="/services"
            />
            <CardItem
              src="assets/images/img-8.jpg"
              text="مسجد الموسوي الكبير"
              label="مسجد الموسوي 5"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
