import React from 'react';
import HeroSection from '@/components/landing/HeroSection';
import TrustBar from '@/components/landing/TrustBar';
import BrandStory from '@/components/landing/BrandStory';
import ProductShowcase from '@/components/landing/ProductShowcase';
import ProjectsGallery from '@/components/landing/ProjectsGallery';
import WorkflowSteps from '@/components/landing/WorkflowSteps';
import QuotationForm from '@/components/landing/QuotationForm';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BrandStory />
      <ProductShowcase />
      <ProjectsGallery />
      <WorkflowSteps />
      <QuotationForm />
    </>
  );
}
