"use client";
import React, { useEffect, useState } from "react"; // Import useEffect and useState
import { useRouter } from "next/navigation"; // Import useRouter for route handling
import Header from "./common/Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Team from "./Team";
import Process from "./Process";
import Counter from "./Counter";
import Contact from "./Contact";
import Loading from "./Loading"; // Import your Loading component
import SocialIcons from "./socialicons";
import Popup from "./Popup";

export default function page() {
  const [loading, setLoading] = useState(false); // State to manage loading
  const router = useRouter(); // Initialize router

  useEffect(() => {
    // Show loading when the component mounts or when navigating
    setLoading(true);

    const handleComplete = () => {
      // Hide loading after some time, simulating data fetching or route change
      setLoading(false);
    };

    // Simulating loading duration
    const timer = setTimeout(handleComplete, 5000); // Adjust timeout as needed

    return () => clearTimeout(timer); // Cleanup timer
  }, [router.asPath]); // Re-run effect when the path changes

  return (
    <>
      {loading ? ( // Conditional rendering for loading
        <Loading />
      ) : (
        <>
          <Header />
          <SocialIcons/>
          <Section1 />
          <Section2 className="mb-[-100px]"/>
          <Popup/>
          <Team />
          <Process />
          <Counter />
          <Contact />
        </>
      )}
    </>
  );
}
