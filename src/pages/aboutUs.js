import React from "react";
import StatsSection from "../components/stats";
import aboutUsImage from "../assets/images/group-workspace.jpg";

const AboutUs = () => {
  return (
    <div>
      <section class="">
        <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
              <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                About Us
              </h2>
              <p class="mt-4 text-gray-500 text-lg">
                With deep expertise in Cybersecurity for Startups, AI-driven
                systems, and enterprise GRC frameworks, our mission is to
                deliver practical, scalable, and secure solutions that align
                with your business goals. We help businesses safeguard their
                digital assets, meet regulatory requirements, and build cyber
                resilience. Whether you're a startup scaling rapidly or an
                enterprise managing regulatory risk, we provide the clarity,
                confidence, and control to secure your business.
              </p>
            </div>
            <div class="mt-12 md:mt-0">
              <img
                src={aboutUsImage}
                alt="About Us Image"
                class="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      <StatsSection />
    </div>
  );
};

export default AboutUs;
