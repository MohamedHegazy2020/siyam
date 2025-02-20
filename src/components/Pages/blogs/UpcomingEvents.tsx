import { Link } from 'react-router-dom';
import styles from '../../../utils/styles';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import blogs from '../../../constants/blogs.json';
import { useRef, useState } from 'react';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
const UpcomingEvents = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subTitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'restart pause restart pause',
      },
    });

    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      }
    );
    tl.fromTo(
      subTitleRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      }
    );

  
  }, []);

  return (
    <>
      <section ref={containerRef} className={styles.padding}>
        <div className="text-center flex flex-col gap-4 my-4">
          <h3 className="font-bebas text-2xl md:text-4xl" ref={titleRef}>
            upcoming events
          </h3>
          <p ref={subTitleRef} className="text-sm md:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore delectus similique sapiente facilis,
            assumenda amet nemo odio veniam necessitatibus, odit atque? Fugiat et at sit. Iste nihil molestias
            voluptatum quam?
          </p>
        </div>
        <TabsSection />
      </section>
    </>
  );
};

const TabsSection = () => {
  const tabContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

const filteredBlogs = blogs.reduce<Record<string, typeof blogs>>((acc, blog) => {
  const { date } = blog;
  if (!acc[date]) {
    acc[date] = [];
  }
  acc[date].push(blog);
  return acc;
}, {});
  
  const [filters] = useState<string[]>(Object.keys(filteredBlogs));
  const [currFilter, setCurrFilter] = useState<string>(Object.keys(filteredBlogs)[0]);  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: tabContainerRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'restart pause  pause',
      },
    });

    const contentCards = Array.from(contentRef.current?.children || []);
    contentCards.forEach((card) => {
      tl.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );
    });
  }, [currFilter]);

  return (
    <div className="">
      <div ref={tabContainerRef} role="tablist" className="max-w-md mx-auto tabs tabs-boxed">
        {filters.map((filter) => (
          <Link
            key={filter}
            role="tab"
            to="#"
            className={`tab ${currFilter === filter ? 'tab-active' : ''}`}
            onClick={() => setCurrFilter(filter)}
          >
            {filter}
          </Link>
        ))}
      </div>

      <div className="content grid grid-cols-1 md:grid-cols-3  gap-4 mt-4" ref={contentRef}>
        {blogs.filter((blog) => blog.date === currFilter).map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
};

const BlogCard = ({ title, description, date, image, location }: { title: string; description: string; date: string; image: string; location: string }) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={image} className="w-full" alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <div className="flex gap-2 justify-center items-center">
            <Icon className=" text-primary" icon="svg-spinners:clock" width="24" height="24" /> <span>{date}</span>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <Icon className=" text-primary" icon="proicons:location" width="24" height="24" />
            <span>{location}</span>
          </div>
        </div>
        <h2 className="card-title font-bebas">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default UpcomingEvents;
