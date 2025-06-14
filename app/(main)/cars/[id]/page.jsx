import { getCarById } from "@/actions/car-listing";
import { CarDetails } from "./_components/car-details";
import { notFound, redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server"; 

export async function generateMetadata({ params }) {
  const { id } = params;
  const result = await getCarById(id);

  if (!result.success) {
    return {
      title: "Car Not Found | Vehiql",
      description: "The requested car could not be found",
    };
  }

  const car = result.data;

  return {
    title: `${car.year} ${car.make} ${car.model} | VehiGo`,
    description: car.description.substring(0, 160),
    openGraph: {
      images: car.images?.[0] ? [car.images[0]] : [],
    },
  };
}

export default async function CarDetailsPage({ params }) {
  const user = await currentUser(); 

  if (!user) {
    redirect("/sign-in");
  }

  const { id } = params;
  const result = await getCarById(id);

  if (!result.success) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <CarDetails car={result.data} testDriveInfo={result.data.testDriveInfo} />
    </div>
  );
}

