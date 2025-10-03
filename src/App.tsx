import Header from "./components/Header";
import Banner from "./components/Banner";
import Tabs from "./components/Tabs";
import InfoRow from "./components/InfoRow";
import Leaderboard from "./components/Leaderboard";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <div className="flex justify-center bg-gray-50 min-h-screen">
      <div className="w-full max-w-3xl p-4 pb-20">
        <Header />
        <Banner />
        <Tabs />
        <InfoRow />
        <Leaderboard />
        <BottomNav />
      </div>
    </div>
  );
}