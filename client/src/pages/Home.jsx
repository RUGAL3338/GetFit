import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { ContainerScroll } from '../components/hero3d';
import { easeIn, motion } from 'framer-motion';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  const image = <img
  src="/background.png"
  alt="nopain"
  height={720}
  width={1400}
  className="mx-auto rounded-2xl object-fill  h-full object-left-top"
  draggable={false}
/>
  return (
    <div>
      <ContainerScroll
							titleComponent={
								<>
									<motion.h1
										initial={{opacity: 0, y: "-8rem"}}
										animate={{
											opacity: 1,
											y: 0,
											transition: {
												duration: 0.8,
												delay: 0.4,
												ease: easeIn,
											},
										}}
										exit={{
											opacity: 0,
											y: "-20px",
											transition: {
												duration: 0.6,
												delay: 1,
												ease: "easeOut",
											},
										}}
										className="text-4xl font-semibold dark:text-white text-slate-700"
									>
										Unleash Your powers <br />
										<span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
											Getfit is All you need
										</span>
									</motion.h1>
								</>
							}>
                <img
                  src="/Background.png"
                  alt="nopain"
                  height={720}
                  width={1400}
                  className="mx-auto rounded-2xl object-fill  h-full object-left-top"
                  draggable={false}
                />
              </ContainerScroll>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to GetFit</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
          Here you'll find a variety of articles about diffifent fitness topics such as Nutrition for Fitness, Functional Fitness, and Flexibility & Mobility created by the community of fitness that you can join by being a coach.
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>
      
      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
