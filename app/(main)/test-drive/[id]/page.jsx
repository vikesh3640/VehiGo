import { getCarById } from "@/actions/car-listing";
import { notFound } from "next/navigation";
import { TestDriveForm } from "./_components/test-drive-form";

// Metadata generation
export async function generateMetadata() {
  return {
    title: `Book Test Drive | Vehiql`,
    description: `Schedule a test drive in few seconds`,
  };
}

// Page component
export default async function TestDrivePage(props) {
  const { id } = await props.params;

  const result = await getCarById(id);

  if (!result.success) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-6xl mb-6 gradient-title">Book a Test Drive</h1>
      <TestDriveForm
        car={result.data}
        testDriveInfo={result.data.testDriveInfo}
      />
    </div>
  );
}
