import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Explore & Collaborate 
        <br className="max-md:hidden" />
        <span className="text-center purple_gradient"> AI-Enhanced Prompts</span>
      </h1>

      <p className="desc text-center">
        IdeaForgeis a cutting-edge AI prompting tool crafted for today's world.
        Effortlessly explore, craft, and share imaginative prompts
      </p>

      {/* Feed Component */}
      <Feed />
    </section>
  );
};

export default Home;
