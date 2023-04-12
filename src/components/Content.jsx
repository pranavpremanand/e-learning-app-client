import React from "react";

const Content = () => {
  const coursesData = [
    {
      img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-learning-courses-video-thumbnail-design-template-82c91d8095ff7dbf169e005747060413_screen.jpg?ts=1634993528",
      creator: "Marques Brownlee",
    },
    {
      img: "https://i.ytimg.com/vi/I5WO8nD1AGY/maxresdefault.jpg",
      creator: "Jacob Collier",
    },
    {
      img: "https://www.smartpassiveincome.com/wp-content/uploads/2020/04/How-to-Create-an-Online-Course.png",
      creator: "Andy J. Pizzo",
    },
    {
      img: "https://cdn.elearningindustry.com/wp-content/uploads/2020/02/what-to-check-before-an-online-course-purchase.png",
      creator: "Ohn Mar Win",
    },
    {
      img: "https://www.academyofmine.com/assets/uploads/2014/05/online-course-marketing-strategy.jpg",
      creator: "Cat Coquillette",
    },
  ];
  return (
    <>
      <div className="pt-7">
        <h1 className="capitalize mb-5 text-3xl md:text-4xl text-center font-bold">
          Explore inspiring online courses
        </h1>
        <div className="gap-3 pb-5 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {coursesData.map((data) => {
            return (
              <div className="p-3 hover:scale-105 cursor-pointer bg-gray-100 rounded-md">
                <img
                  src={data.img}
                  className="mb-3 w-full object-cover h-40"
                  alt=""
                />
                <div className="flex justify-between text-gray-600">
                  <small>7600 Students</small>
                  <small>1h 13m</small>
                </div>
                <div className="relative h-24">
                  <p className="font-semibold text-teal-950 absolute top-1">
                    YouTube Success: Script, Shoot & Edit with MKBHD
                  </p>
                  <small className="absolute bottom-1 text-gray-600">
                    {data.creator}
                  </small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Content;
