import Category from "@/containers/home-page/Category";
import Features from "@/containers/home-page/Features";
import HeroHeader from "@/containers/home-page/HeroHeader";
import ImageSlider from "@/containers/home-page/ImageSlider";
import Status from "@/containers/home-page/Status";
import Video from "@/containers/home-page/Video";

export default function Home() {
  return (
    <>

      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroHeader />
        <Status />
        <Features />
        <ImageSlider />
        <Category />
        <Video />
      </main>
    </>
  );
}
