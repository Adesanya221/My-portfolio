import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Adesanya Oluwafisayomi Ignatius</title>
      </Head>
      <section>
        <h2>Projects</h2>
        <ProjectCard
          title="Maize Leaf Disease Detection Model Using AI"
          description="An AI-driven system for detecting diseases in maize leaves, utilizing computer vision and deep learning for agricultural health monitoring."
          link="https://github.com/Adesanya221/Maize-Leaf-disease-detection-model-using-AI"
        />
        {/* Add more ProjectCard components for additional projects */}
      </section>
    </>
  );
}
