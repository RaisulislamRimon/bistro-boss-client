import "./Featured.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

export const Featured = () => {
  // Get the current date and time
  const date = new Date();

  // Format the date using the Intl.DateTimeFormat API
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Display the formatted date
  // console.log(formattedDate); // Output: Today's date (e.g., "September 15, 2024")
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle heading="featured item" subHeading="check it out" />
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-40">
        <div>
          <img src={featuredImg} alt="featuredImg" className="rounded-lg" />
        </div>
        <div className="md:ml-10">
          {/* <p>20 October, 2024</p> */}
          <p>{formattedDate}</p>
          <p className="uppercase">Where can i get some?</p>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            adipisci dolor voluptates nulla quidem in eligendi omnis nam sint
            tenetur molestias autem, porro eos incidunt. Dolorem reiciendis
            repellat ut consequuntur.
          </h3>
          <button className="btn btn-outline border-0 border-b-4 bg-slate-500 text-white mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};
