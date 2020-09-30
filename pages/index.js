import Hero from "components/Layout/Hero";
import Layout from "components/Layout/Layout";

export default function Index() {
  return (
    <Layout>
      <Hero />
      <section
        className="p-4 sm:px-32 px-4 py-12 pb-48"
        style={{ backgroundColor: "var(--background-color)",}}
      >
        <h1 className="header sm:ml-10">Contact</h1>
        <div className="flex flex-wrap text-center md:text-left">
          <div className="md:w-1/2 py-4 md:px-10 mb-4 md:mb-0">
            <h3 className="text-2xl mb-3 text-white font-heading">
              Any Type Of Query & Discussion
            </h3>
            <p className="text-gray-500 leading-relaxed">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <button className="button outline sm:mt-16">Get in touch</button>
          </div>
          <div className="md:w-1/2 py-4 md:px-10 mb-4 md:mb-0">
            <h3 className="text-2xl mb-3 text-white font-heading">
              You can't use up creativity, the more you use, more you have in
              your significant mind.
            </h3>

            <div className="flex sm:w-32">
                <div className="flex items-center mx-auto">
                    <p className="text-5xl text-orange-500 ">2+</p>
                    <p className="relative leading-normal text-gray-600 text-xs mx-2" style={{bottom: "-10px"}}>
                        Years of experience
                    </p>
                </div>
                <div className="flex items-center mx-auto">
                    <p className="text-5xl text-orange-500 ">15</p>
                    <p className="relative leading-normal text-gray-600 text-xs mx-2" style={{bottom: "-10px"}}>
                        Satsfied Clients.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 -mt-48 sm:px-32 px-4 text-center overflow-hidden z-50">
        <div className="flex flex-col sm:flex-row mx-10">
          <div className="card md:w-1/3 p-8 sm:mr-8 mb-4">
            <h3 className="text-xl font-heading text-white">Design</h3>
            <p className="mt-4 text-white leading-relaxed">
            My layouts will work on any device, big or small.
            </p>
          </div>

          <div className="card md:w-1/3 p-8 sm:mr-8 mb-4">
            <h3 className="text-xl text-white font-headin">Code</h3>
            <p className="mt-4 text-white leading-relaxed">
            Fast load times and lag free interaction, my highest priority.
            </p>
          </div>

          <div className="card md:w-1/3 p-8 mb-4">
            <h3 className="text-xl font-headingt text-white">Deploy</h3>
            <p className="mt-4 text-white leading-relaxed">
             Ship your project with scalablity in mind.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}