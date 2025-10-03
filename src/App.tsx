import Header from "./components/Header";
import Banner from "./components/Banner";
import Tabs from "./components/Tabs";
import InfoRow from "./components/InfoRow";
import Leaderboard from "./components/Leaderboard";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <div className="flex justify-center bg-slate-50 min-h-screen">
      <div className="w-full max-w-md relative">
        <div className="p-4 pb-24">
          <Header />
          <Banner />
          <InfoRow />
          <Tabs />
          <Leaderboard />
        </div>
        <BottomNav />
      </div>
    </div>
  );
}
