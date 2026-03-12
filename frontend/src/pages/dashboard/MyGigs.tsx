import GigCard from "../../components/dashboard/GigCard";

export default function MyGigs() {
  return (
    <div>

      <h1 className="text-2xl font-bold text-white mb-6">
        My Gigs
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <GigCard />
        <GigCard />
        <GigCard />

      </div>

    </div>
  );
}