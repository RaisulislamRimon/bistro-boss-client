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
    <section className="mb-12">
      <SectionTitle heading={"From Our Menu"} subHeading={"Check it Out"} />
      <div className="grid md:grid-cols-2 gap-4">
        {menu.map((item) => (
          <MenuItem item={item} key={item._id} />
        ))}
      </div>
    </section>
  );
}
