import { useState, useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

export default function PopularMenu() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <section>
      <SectionTitle heading={"From Our Menu"} subHeading={"Check it Out"} />
      <div>
        {menu.map((item) => (
          <MenuItem item={item} key={item._id} />
        ))}
      </div>
    </section>
  );
}
