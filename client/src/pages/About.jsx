export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About GetFit APP
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to GETFIT! Our app personalizes workout plans to fit your goals and schedule, whether you're a beginner or a seasoned athlete. Discover a variety of routines – HIIT, strength training, yoga, and more – to keep your workouts fresh and fun.
            </p>

            <p>
            Track your progress and see yourself getting stronger with every rep.  Learn proper form to maximize results and avoid injury.  Join a supportive community for extra motivation and encouragement.
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
